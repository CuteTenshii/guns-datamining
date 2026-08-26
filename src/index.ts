import * as cheerio from 'cheerio';
import { rm } from 'node:fs/promises';
import beautify from 'js-beautify';
import { OUTPUT_DIR, outputPath, saveFile } from './output';
import { PROFILE_PATH, saveProfileSchema } from './profile-schema';
import {
  DASHBOARD_PATHS,
  isCrawlableDashboardPath,
  isDashboardPath,
  redactAccountDom,
  redactAccountHtml,
} from './dashboard';

const ASSETS_HOST = 'assets.guns.lol';
const BASE_URL = 'https://guns.lol';
// Next.js disables React streaming for bots and renders the complete document (so all <head> metadata is in <head>, not
// flushed late at the end of <body>). Use a Googlebot UA for everything to get that stable, non-streamed HTML.
const USER_AGENT =
  'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

// Keep only genuine text-flow tags inline; let button/svg/img/etc. break onto their own lines so chains like
// `</svg><span>…</button><button>…` are readable.
const HTML_BEAUTIFY_OPTIONS: Parameters<typeof beautify.html>[1] = {
  indent_size: 2,
  wrap_line_length: 120,
  inline: [
    'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em',
    'i', 'kbd', 'mark', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'small', 'span',
    'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr',
  ],
};

// The access token the dashboard needs, as the cookie value alone. Unset, the dashboard is skipped.
const SESSION_COOKIE_NAME = '__guns_access_v1';
const SESSION_TOKEN = process.env.GUNS_SESSION?.trim() || null;

let clearance: string | null = null;

// Only dashboard requests carry the token. On a public page it comes back rendered for the account -- /login and
// /register embed the whole account document -- and nothing outside the dashboard is redacted.
function makeHeaders(signedIn = false): Record<string, string> {
  const cookies: string[] = [];
  if (clearance) cookies.push(`guns_clearance=${clearance}`);
  if (signedIn && SESSION_TOKEN) cookies.push(`${SESSION_COOKIE_NAME}=${SESSION_TOKEN}`);

  return {
    'User-Agent': USER_AGENT,
    ...(cookies.length > 0 ? { Cookie: cookies.join('; ') } : {}),
  };
}

function stripBuildHash(pathname: string): string {
  return pathname.replace(/[.\-][0-9a-f]{16}(\.[a-z]+)$/i, '$1');
}

async function saveBeautified(url: string, content: string, isCSS: boolean, savedAs?: string) {
  const formatted = isCSS
    ? beautify.css(content, { indent_size: 2 })
    : beautify.js(content, { indent_size: 2, space_in_empty_paren: true });
  const pathname = savedAs ?? stripBuildHash(decodeURIComponent(new URL(url).pathname));
  await saveFile(outputPath(pathname), formatted);
}

async function fetchWithRetry(url: string, options?: RequestInit): Promise<Response> {
  while (true) {
    const res = await fetch(url, options);
    if (res.status < 500) return res;
    console.error(`Got ${res.status} from ${url}, retrying in 5s...`);
    await new Promise(r => setTimeout(r, 5000));
  }
}

async function fetchText(url: string): Promise<string> {
  const res = await fetchWithRetry(url, { headers: makeHeaders() });
  if (res.ok) {
    console.log(`Fetched ${url}`);
    return res.text();
  }
  if (res.status === 401) return process.exit(1);

  console.error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  return '';
}

async function fetchAsset(url: string) {
  const res = await fetchWithRetry(url, { headers: makeHeaders() });
  if (!res.ok) {
    if (res.status === 401) return process.exit(1);

    console.error(`Failed to fetch asset from ${url}: ${res.status} ${res.statusText}`);
    return;
  }
  const filePath = outputPath('assets', decodeURIComponent(new URL(url).pathname));
  await saveFile(filePath, Buffer.from(await res.arrayBuffer()));
  console.log(`Saved asset: ${filePath}`);
}

async function processAssetUrls(urls: Iterable<string>, seen: Set<string>) {
  for (const url of urls) {
    if (seen.has(url)) continue;
    seen.add(url);
    await fetchAsset(url);
  }
}

function extractAssetUrlsFromText(text: string): string[] {
  const urls = new Set<string>();
  for (const match of text.matchAll(/https?:\/\/assets\.guns\.lol[^\s"'`<>)\\]+/g)) {
    if (!isConcreteAssetUrl(match[0])) continue;
    try {
      urls.add(normalizeAssetUrl(new URL(match[0]).toString()));
    } catch {}
  }
  return [...urls];
}

// The guns.lol PoW/Turnstile bootstrap embeds a per-request nonce, token, and timestamp (plus a random hydration id),
// which would make every saved page diff on each run. Redact just those values while keeping the script structure.
function redactVolatileTokens($: cheerio.CheerioAPI) {
  $('script:not([src])').each((_, el) => {
    let text = $(el).text();
    // PoW/Turnstile bootstrap: per-request nonce, token, timestamp, hydration id.
    if (text.includes('_gs_sets')) {
      text = text
        .replace(/(_n:\s*')[^']*/g, '$1REDACTED')
        .replace(/(o09:\s*')[^']*/g, '$1REDACTED')
        .replace(/(_2xa:\s*')[^']*/g, '$1REDACTED')
        .replace(/(_org_ts:\s*\\?")\d+/g, '$1REDACTED')
        .replace(/("id":\s*")_gpp_[a-z0-9]+/gi, '$1_gpp_REDACTED');
    }
    // RSC flight data serializes the same view count that changes constantly.
    if (text.includes('page_views')) {
      text = text.replace(/(page_views\\?":\s*)\d+/g, '$1REDACTED');
    }
    // RSC also embeds the server-side PoW challenge (`_gpp_ch`) with per-request token/timestamp under obfuscated
    // (`_c14f`-style) inner keys; redact the whole object so we don't depend on the inner key names.
    if (text.includes('_gpp_ch')) {
      text = text.replace(/(_gpp_ch\\?":\s*)\{[^}]*\}/g, '$1{REDACTED}');
    }
    // Global live counters (total views/users/uploads/premium) change every request.
    if (text.includes('statsData')) {
      text = text.replace(/(statsData\\?":\s*)\{[^}]*\}/g, '$1{REDACTED}');
    }
    $(el).text(text);
  });
  $('.cf-turnstile[data-cdata]').attr('data-cdata', 'REDACTED');

  // Cloudflare shuffles the order of its injected @font-face rules each request; sort them in place so the block is
  // deterministic.
  $('style').each((_, el) => {
    const css = $(el).text();
    if (!css.includes('/cf-fonts/')) return;
    const blocks = css.match(/@font-face\s*\{[^}]*\}/g);
    if (!blocks || blocks.length < 2) return;
    const sorted = [...blocks].sort();
    let i = 0;
    $(el).text(css.replace(/@font-face\s*\{[^}]*\}/g, () => sorted[i++]));
  });

  // Cloudflare email obfuscation re-randomizes its hex every request. Decode it back to the real address, which removes
  // both the churn and the obfuscation.
  $('a[href*="/cdn-cgi/l/email-protection#"]').each((_, el) => {
    const hex = ($(el).attr('href') ?? '').split('#')[1];
    if (hex) $(el).attr('href', `mailto:${decodeCfEmail(hex)}`);
  });
  $('.__cf_email__').each((_, el) => {
    const hex = $(el).attr('data-cfemail');
    if (hex) $(el).removeAttr('data-cfemail').text(decodeCfEmail(hex));
  });

  // Profile view counter (`<eye icon> 75,578` before the "Profile Views" tooltip) changes constantly; redact the number
  // so only structural page changes show up.
  $('span').each((_, el) => {
    if ($(el).text().trim() !== 'Profile Views') return;
    $(el).prev().contents().each((_, node) => {
      if (node.type === 'text' && /\d/.test(node.data ?? '')) {
        node.data = (node.data ?? '').replace(/[\d,]+/g, 'REDACTED');
      }
    });
  });

  // Homepage live stat counters render as `<count><!-- -->+` (Users/Uploads/Subscribers). Redact the number in that
  // exact shape so the rounded counters don't churn.
  $('*').contents().each((_, node) => {
    if (node.type !== 'text' || !/^\s*[\d,]+\s*$/.test(node.data ?? '')) return;
    const comment = node.next;
    const plus = comment?.next;
    if (comment?.type === 'comment' && plus?.type === 'text' && (plus.data ?? '').trimStart().startsWith('+')) {
      node.data = (node.data ?? '').replace(/[\d,]+/, 'REDACTED');
    }
  });
}

// Cloudflare email obfuscation: first hex byte is an XOR key for the rest.
function decodeCfEmail(hex: string): string {
  const key = parseInt(hex.slice(0, 2), 16);
  let email = '';
  for (let i = 2; i < hex.length; i += 2) {
    email += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ key);
  }
  return email;
}

// Sitemap locs are locale-prefixed (e.g. `/en/pricing`), but we only ever scrape the bare default-locale path, so strip
// the locale segment before deduping.
function stripLocalePrefix(pathname: string): string {
  return pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
}

// Checked before the scrape rather than at the first dashboard page, so a stale token costs one request, not a run.
async function assertSessionValid() {
  const url = `${BASE_URL}/api/ping`;
  const res = await fetchWithRetry(url, { method: 'POST', headers: makeHeaders(true) });
  if (res.ok) return;

  console.error(`GUNS_SESSION rejected: ${url} -> ${res.status} ${res.statusText}. Refresh it.`);
  return process.exit(1);
}

async function fetchSitemapPaths(): Promise<string[]> {
  const xml = await fetchText(`${BASE_URL}/sitemap.xml`);
  if (!xml) return [];

  const paths = new Set<string>();
  const $ = cheerio.load(xml, { xmlMode: true });
  $('url > loc').each((_, el) => {
    const loc = $(el).text().trim();
    if (!loc) return;
    try {
      paths.add(stripLocalePrefix(new URL(loc).pathname));
    } catch {}
  });
  return [...paths];
}

// Returns the dashboard paths the page links to, empty when there are none or the fetch failed.
async function processPage(path: string, seen: Set<string>): Promise<string[]> {
  const isDashboard = isDashboardPath(path);
  const res = await fetchWithRetry(`${BASE_URL}${path}`, {
    headers: makeHeaders(isDashboard),
    // A refused session redirects to /login; following it would save that under the dashboard's name.
    ...(isDashboard ? { redirect: 'manual' as const } : {}),
  });

  if (isDashboard && res.status >= 300 && res.status < 400) {
    const location = res.headers.get('location') ?? '(no location)';
    console.error(`Session refused: ${path} redirected to ${location}. Refresh GUNS_SESSION.`);
    return process.exit(1);
  }

  if (!res.ok) {
    if (res.status === 401) return process.exit(1);

    console.error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
    return [];
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  // Strip Cloudflare-injected scripts (email obfuscation + challenge-platform/rocket loader).
  $('script[src*="/cdn-cgi/"]').remove();
  $('script:not([src])').each((_, el) => {
    if (/__CF\$cv\$params|\/cdn-cgi\/challenge-platform\//.test($(el).text())) $(el).remove();
  });

  redactVolatileTokens($);
  if (isDashboard) redactAccountDom($);

  const pageName = path === '/' ? 'index' : path.slice(1).replace(/\//g, '-');
  // Untouched response too: redactVolatileTokens has already blanked values the scrub needs to find.
  const serialized = isDashboard ? redactAccountHtml($.html(), html) : $.html();
  await saveFile(outputPath('pages', `${pageName}.html`), beautify.html(serialized, HTML_BEAUTIFY_OPTIONS));

  // Uses the untouched response; redactVolatileTokens leaves `$` unparseable as JSON.
  if (path === PROFILE_PATH) await saveProfileSchema(html, `${BASE_URL}${path}`);

  const scriptUrls: string[] = [];
  $('script[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (src) scriptUrls.push(new URL(src, BASE_URL).toString());
  });

  for (const url of scriptUrls) {
    if (seen.has(url)) continue;
    seen.add(url);
    const content = await fetchText(url);
    await saveBeautified(url, content, false);
    await processAssetUrls(extractAssetUrlsFromText(content), seen);

    if (new URL(url).pathname.includes('/chunks/webpack')) {
      for (const { url: discoveredUrl, path } of parseWebpackManifest(content)) {
        if (seen.has(discoveredUrl)) continue;
        seen.add(discoveredUrl);
        const discoveredContent = await fetchText(discoveredUrl);
        await saveBeautified(discoveredUrl, discoveredContent, discoveredUrl.endsWith('.css'), path);
        await processAssetUrls(extractAssetUrlsFromText(discoveredContent), seen);
      }
    }
  }

  const cssUrls: string[] = [];
  $('link[rel="stylesheet"][href]').each((_, el) => {
    const href = $(el).attr('href');
    if (href) cssUrls.push(new URL(href, BASE_URL).toString());
  });

  let cssIndex = 0;
  for (const url of cssUrls) {
    if (seen.has(url)) continue;
    seen.add(url);
    const cssPath = `/_next/static/css/${pageName}-${cssIndex++}.css`;
    const cssContent = await fetchText(url);
    await saveBeautified(url, cssContent, true, cssPath);
    await processAssetUrls(extractAssetUrlsFromText(cssContent), seen);
  }

  await processAssetUrls(extractAssetUrls($, html), seen);

  return extractDashboardPaths($);
}

async function main() {
  const clearanceRes = await fetch(BASE_URL, {
    headers: { 'User-Agent': USER_AGENT },
    redirect: 'manual',
  });
  if (clearanceRes.status === 307) {
    clearance = clearanceRes.headers.get('set-cookie')?.match(/guns_clearance=([^;]+)/)?.[1] ?? null;
  }

  // Before the wipe: a stale token would otherwise delete the previous snapshot and leave nothing in its place.
  if (SESSION_TOKEN) await assertSessionValid();

  await rm(OUTPUT_DIR, { recursive: true, force: true });

  const seen = new Set<string>();
  // Auth/utility flows aren't in the public sitemap, so they stay hardcoded. The sitemap is layered on top (rather than
  // replacing this list) so a temporary fetch failure or shape change there can't silently drop pages from the scrape.
  const hardcodedPaths = [
    '/', '/$', '/pricing', '/leaderboard', '/login', '/register', '/reset', '/terms', '/privacy',
    '/terms/copyright', '/sent', '/logout', '/verify/a', '/reset/a', '/password/success', '/recovery',
    '/recovery/start', '/recovery/finalize', '/recovery/cancel', '/compare', '/compare/linktree',
    '/compare/carrd', '/compare/beacons', '/gift/a'
  ];
  const paths = [...new Set([...hardcodedPaths, ...(await fetchSitemapPaths())])];

  // Known routes plus whatever the pages link to; the public header carries /account and /account/redeem.
  const dashboardQueue = [...DASHBOARD_PATHS, ...paths.filter(isDashboardPath)];

  for (const path of paths.filter(path => !isDashboardPath(path))) {
    dashboardQueue.push(...(await processPage(path, seen)));
  }

  if (!SESSION_TOKEN) {
    console.log(`GUNS_SESSION is not set; skipping the ${new Set(dashboardQueue).size} dashboard pages.`);
    return;
  }

  const visited = new Set<string>();
  while (dashboardQueue.length > 0) {
    const path = dashboardQueue.shift()!;
    if (visited.has(path)) continue;
    visited.add(path);

    dashboardQueue.push(...(await processPage(path, seen)));
  }
}

function parseWebpackManifest(content: string): Array<{ url: string; path: string }> {
  const entries = new Map<string, string>();
  const base = `${BASE_URL}/_next/`;

  for (const match of content.matchAll(/"(static\/chunks\/[\w.-]+\.js)"/g)) {
    const url = base + match[1];
    entries.set(url, stripBuildHash(`/_next/${match[1]}`));
  }

  const numberedMatch = content.match(
    /"static\/chunks\/"\s*\+\s*\(\(\{([\s\S]+?)\}\)\[\w+\]\s*\|\|\s*\w+\)\s*\+\s*"\."\s*\+\s*\(\{([\s\S]+?)\}\)\[\w+\]\s*\+\s*"\.js"/,
  );
  if (numberedMatch) {
    const nameMap = parseJsObject(numberedMatch[1]);
    const hashMap = parseJsObject(numberedMatch[2]);
    for (const [id, hash] of Object.entries(hashMap)) {
      const name = nameMap[id] ?? id;
      entries.set(`${base}static/chunks/${name}.${hash}.js`, `/_next/static/chunks/${name}.js`);
    }
  }

  const cssMatch = content.match(
    /miniCssF\s*=\s*\w+\s*=>\s*"static\/css\/"\s*\+\s*\(\{([\s\S]+?)\}\)\[\w+\]\s*\+\s*"\.css"/,
  );
  if (cssMatch) {
    for (const [id, hash] of Object.entries(parseJsObject(cssMatch[1]))) {
      entries.set(`${base}static/css/${hash}.css`, `/_next/static/css/${id}.css`);
    }
  }

  return [...entries.entries()].map(([url, path]) => ({ url, path }));
}

function parseJsObject(content: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const match of content.matchAll(/(\d+):\s*"([^"]+)"/g)) {
    result[match[1]] = match[2];
  }
  return result;
}

function extractAssetUrls($: cheerio.CheerioAPI, html: string): string[] {
  const urls = new Set<string>();

  const addIfAsset = (raw: string | undefined) => {
    if (!raw) return;
    try {
      const url = new URL(raw, BASE_URL);
      if (url.hostname === ASSETS_HOST) urls.add(normalizeAssetUrl(url.toString()));
    } catch {}
  };

  $('[src]').each((_, el) => addIfAsset($(el).attr('src')));
  $('[href]').each((_, el) => addIfAsset($(el).attr('href')));
  $('[srcset]').each((_, el) => {
    $(el).attr('srcset')?.split(',').forEach(entry => addIfAsset(entry.trim().split(/\s+/)[0]));
  });
  $('[style]').each((_, el) => {
    const style = $(el).attr('style') || '';
    for (const match of style.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)) {
      addIfAsset(match[1]);
    }
  });
  $('style').each((_, el) => {
    for (const match of $(el).text().matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)) {
      addIfAsset(match[1]);
    }
  });

  for (const match of html.matchAll(/https?:\/\/assets\.guns\.lol[^\s"'`<>)]+/g)) {
    if (!isConcreteAssetUrl(match[0])) continue;
    try {
      urls.add(normalizeAssetUrl(new URL(match[0]).toString()));
    } catch {}
  }

  return [...urls];
}

// The dashboard's own navigation is the only place a route it gains later will be written down.
function extractDashboardPaths($: cheerio.CheerioAPI): string[] {
  const paths = new Set<string>();
  const host = new URL(BASE_URL).hostname;

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    try {
      const url = new URL(href, BASE_URL);
      if (url.hostname !== host) return;
      const path = stripLocalePrefix(url.pathname.replace(/\/+$/, '') || '/');
      if (isCrawlableDashboardPath(path)) paths.add(path);
    } catch {}
  });

  return [...paths];
}

// Rejects URLs pulled from source that are actually template literals with unresolved interpolations, e.g.
// `https://assets.guns.lol/${P}.png`.
function isConcreteAssetUrl(raw: string): boolean {
  return !/\$\{|%7[bd]/i.test(raw);
}

function normalizeAssetUrl(url: string): string {
  const parsed = new URL(url);
  parsed.pathname = parsed.pathname.replace(/\/+$/, '');
  return parsed.toString();
}

main();
