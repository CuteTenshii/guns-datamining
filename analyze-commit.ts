import Anthropic from '@anthropic-ai/sdk';
import { execFileSync } from 'node:child_process';

// Marker used to make posting idempotent — if a comment carrying it already
// exists on the commit, we've analyzed it before and skip.
const MARKER = '<!-- claude-commit-analysis -->';

// The full diff of mined site assets can be enormous (minified JS/wasm). Cap
// what we hand to the model and tell it when we truncated.
const MAX_PATCH_CHARS = 180_000;

// A commit is only analyzed if it touches at least one JS chunk (application
// logic). HTML-only commits (page snapshots) are skipped; when JS did change,
// the whole diff — HTML included — is analyzed.
const JS_FILE = /\.js$/;

const {
  GITHUB_REPOSITORY,
  GITHUB_TOKEN,
  ANTHROPIC_API_KEY,
} = process.env;

function git(...args: string[]): string {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 512 * 1024 * 1024 }).trimEnd();
}

async function gh(path: string, init: RequestInit = {}): Promise<Response> {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      'User-Agent': 'guns-datamining-analyzer',
      ...(init.headers ?? {}),
    },
  });
  if (!res.ok) {
    throw new Error(`GitHub ${init.method ?? 'GET'} ${path} -> ${res.status} ${res.statusText}: ${await res.text()}`);
  }
  return res;
}

async function main() {
  const dryRun = process.env.DRY_RUN === '1';
  console.log(`analyze-commit starting${dryRun ? ' (DRY_RUN)' : ''} for ${GITHUB_REPOSITORY ?? '(unknown repo)'}`);

  if (!dryRun) {
    if (!GITHUB_REPOSITORY || !GITHUB_TOKEN) {
      throw new Error('GITHUB_REPOSITORY and GITHUB_TOKEN must be set');
    }
    if (!ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY must be set');
    }
  }

  const head = git('rev-parse', 'HEAD');
  // BASE_SHA is the tip the fetch workflow started from (the parent of the new
  // commit). Fall back to the first parent of HEAD for local runs.
  let base = process.env.BASE_SHA?.trim() || '';
  if (!base || base === head) {
    try {
      base = git('rev-parse', 'HEAD~1');
    } catch {
      base = '';
    }
  }
  if (!base || base === head) {
    console.log(`No new commit to analyze (base == head == ${head}). Exiting.`);
    return;
  }
  console.log(`Analyzing ${base.slice(0, 12)}..${head.slice(0, 12)}`);

  // Gate: only analyze when JS chunks changed. HTML-only churn (page snapshots)
  // isn't worth a comment. When JS did change, analyze the whole diff below.
  const changedFiles = git('diff', '--name-only', base, head).split('\n').filter(Boolean);
  const jsFiles = changedFiles.filter((f) => JS_FILE.test(f));
  console.log(`Changed files: ${changedFiles.length} total, ${jsFiles.length} JS chunk(s).`);
  if (jsFiles.length === 0) {
    console.log('No JS chunk changes (HTML/asset-only) — skipping analysis.');
    return;
  }
  console.log(`JS files:\n  ${jsFiles.join('\n  ')}`);

  // Idempotency: don't double-comment if a run already analyzed this commit.
  if (!dryRun) {
    console.log('Checking for an existing analysis comment...');
    const existing = (await (await gh(`/repos/${GITHUB_REPOSITORY}/commits/${head}/comments?per_page=100`)).json()) as Array<{ body?: string }>;
    if (existing.some((c) => c.body?.includes(MARKER))) {
      console.log(`Commit ${head} already has an analysis comment. Exiting.`);
      return;
    }
    console.log(`No existing analysis comment (${existing.length} comment(s) on commit).`);
  }

  const meta = git('log', '-1', '--format=%H%n%an <%ae>%n%cI%n%s%n%b', head);
  // Analyze the full diff (HTML + JS + assets) now that the JS gate has passed.
  const stat = git('diff', '--stat', base, head);
  const nameStatus = git('diff', '--name-status', base, head);
  let patch = git('diff', base, head);

  let truncated = false;
  const fullPatchLen = patch.length;
  if (patch.length > MAX_PATCH_CHARS) {
    patch = patch.slice(0, MAX_PATCH_CHARS);
    truncated = true;
  }
  console.log(`Diff: ${fullPatchLen} chars${truncated ? ` (truncated to ${MAX_PATCH_CHARS})` : ''}.`);

  if (!nameStatus) {
    console.log('Empty diff — nothing to analyze. Exiting.');
    return;
  }

  const prompt = `You are a senior reverse-engineer reviewing an automated snapshot diff. This repository periodically scrapes the public website **guns.lol** (a bio/link page service) — its HTML pages, Next.js JS chunks, CSS, and static assets — and commits whatever changed. This commit changed at least one JS chunk, so it's worth a look; the diff below includes everything that changed (HTML included), not just the JS. Your job is to read it and explain, deeply, what actually changed on the site — with the client-side JavaScript as the primary focus.

Focus on meaning, not mechanics. The reader wants to know what the site's operators shipped or altered, inferred from the diff.

Commit metadata:
${meta}

Change summary (diff --stat):
${stat}

Files changed (name-status):
${nameStatus}

Unified diff${truncated ? ` (TRUNCATED to first ${MAX_PATCH_CHARS} characters)` : ''}:
\`\`\`diff
${patch}
\`\`\`

Write a GitHub-flavored-markdown analysis with these sections:

- **TL;DR** — one or two sentences: the single most important thing that changed.
- **What changed** — grouped, concrete bullets. Distinguish real product/behavior changes from noise (hashed asset filename churn, reordered attributes, whitespace, build-id bumps). Call out new/removed pages, routes, feature flags, UI copy, API endpoints or hosts, config values, and third-party integrations.
- **Notable findings** — anything interesting to someone tracking this site: new features being staged, endpoints or parameters, tracking/analytics changes, security- or privacy-relevant changes, leaked internal names.
- **Assessment** — is this a meaningful change or just churn? Anything worth watching next?

Be specific and cite the concrete tokens/strings/paths you saw. If most of the diff is minified/hashed churn with no discernible meaning, say so plainly rather than inventing significance. Keep it tight — skip filler.`;

  const client = new Anthropic();

  if (dryRun) {
    console.log(prompt);
    console.error(`\n[dry-run] base=${base} head=${head} prompt=${prompt.length} chars, patch truncated=${truncated}`);
    return;
  }

  let analysis = '';
  console.log(`Requesting analysis from claude-opus-4-8 (prompt ${prompt.length} chars)...`);
  const startedAt = Date.now();
  const stream = client.messages.stream({
    model: 'claude-opus-4-8',
    max_tokens: 16000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'high' },
    messages: [{ role: 'user', content: prompt }],
  });

  const message = await stream.finalMessage();
  for (const block of message.content) {
    if (block.type === 'text') analysis += block.text;
  }
  analysis = analysis.trim();

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);
  console.log(
    `Model responded in ${elapsed}s (stop_reason: ${message.stop_reason}, ` +
      `in: ${message.usage.input_tokens} out: ${message.usage.output_tokens} tokens, ` +
      `${analysis.length} chars of analysis).`,
  );

  if (!analysis) {
    console.log(`Model returned no text (stop_reason: ${message.stop_reason}). Exiting.`);
    return;
  }

  const body = `${MARKER}\n## 🔍 Commit analysis\n\n${analysis}\n\n<sub>Generated by Claude (\`claude-opus-4-8\`) · [analyze-commit.ts](../blob/master/analyze-commit.ts)</sub>`;

  console.log('Posting analysis comment...');
  const posted = (await (await gh(`/repos/${GITHUB_REPOSITORY}/commits/${head}/comments`, {
    method: 'POST',
    body: JSON.stringify({ body }),
  })).json()) as { html_url?: string };

  console.log(`Posted analysis comment on ${head}: ${posted.html_url ?? '(url unavailable)'}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
