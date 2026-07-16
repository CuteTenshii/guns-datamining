import * as cheerio from 'cheerio';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import beautify from 'js-beautify';

const ASSETS_HOST = 'assets.guns.lol';
const BASE_URL = 'https://guns.lol';
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36';

// Referenced only by relative path via `new URL(..., import.meta.url)` inside the
// wasm-bindgen glue (gpp_gunslol.js), so it never appears as a scannable URL literal.
const EXTRA_ASSETS = ['https://assets.guns.lol/wasm/gpp_gunslol_bg.wasm'];

let clearance: string | null = null;

function makeHeaders(): Record<string, string> {
  return {
    'User-Agent': USER_AGENT,
    ...(clearance ? { Cookie: `guns_clearance=${clearance}` } : {}),
  };
}

async function saveFile(filePath: string, content: string | Buffer) {
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, content);
}

function stripBuildHash(pathname: string): string {
  return pathname.replace(/[.\-][0-9a-f]{16}(\.[a-z]+)$/i, '$1');
}

async function saveBeautified(url: string, content: string, isCSS: boolean, outputPath?: string) {
  const formatted = isCSS
    ? beautify.css(content, { indent_size: 2 })
    : beautify.js(content, { indent_size: 2, space_in_empty_paren: true });
  const pathname = outputPath ?? stripBuildHash(decodeURIComponent(new URL(url).pathname));
  await saveFile(`./output${pathname}`, formatted);
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
  const filePath = `./output/assets${decodeURIComponent(new URL(url).pathname)}`;
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

async function processPage(path: string, seen: Set<string>) {
  const res = await fetchWithRetry(`${BASE_URL}${path}`, { headers: makeHeaders() });
  if (!res.ok) {
    if (res.status === 401) return process.exit(1);

    console.error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
    return;
  }

  const html = await res.text();
  const $ = cheerio.load(html);

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

  const pageName = path === '/' ? 'index' : path.slice(1).replace(/\//g, '-');
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
}

async function main() {
  await rm('./output', { recursive: true, force: true });

  const clearanceRes = await fetch(BASE_URL, {
    headers: { 'User-Agent': USER_AGENT },
    redirect: 'manual',
  });
  if (clearanceRes.status === 307) {
    clearance = clearanceRes.headers.get('set-cookie')?.match(/guns_clearance=([^;]+)/)?.[1] ?? null;
  }

  const seen = new Set<string>();
  const paths = [
    '/', '/tenshii', '/pricing', '/leaderboard', '/login', '/register', '/reset', '/terms', '/privacy',
    '/terms/copyright', '/sent', '/reset', '/logout', '/verify/a', '/reset/a', '/password/success', '/recovery',
    '/recovery/start', '/recovery/finalize', '/recovery/cancel',
  ];
  for (const path of paths) {
    await processPage(path, seen);
  }

  await processAssetUrls(EXTRA_ASSETS, seen);
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

// Rejects URLs pulled from source that are actually template literals with
// unresolved interpolations, e.g. `https://assets.guns.lol/${P}.png`.
function isConcreteAssetUrl(raw: string): boolean {
  return !/\$\{|%7[bd]/i.test(raw);
}

function normalizeAssetUrl(url: string): string {
  const parsed = new URL(url);
  parsed.pathname = parsed.pathname.replace(/\/+$/, '');
  return parsed.toString();
}

main();
