import * as cheerio from 'cheerio';
import { mkdir, writeFile } from 'node:fs/promises';
import beautify from 'js-beautify';

let clearance: string | null = null;

async function main() {
  const clearanceRes = await fetch('https://guns.lol', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
    },
    redirect: 'manual',
  });
  if (clearanceRes.status === 307) {
    clearance = clearanceRes.headers.get('set-cookie')?.match(/guns_clearance=([^;]+)/)?.[1] || null;
  }

  const paths = ['/', '/tenshii'];
  for (const path of paths) {
    const websiteRes = await fetch(`https://guns.lol${path}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'Cookie': clearance ? `guns_clearance=${clearance}` : '',
      },
    });

    if (websiteRes.ok) {
      const html = await websiteRes.text();
      const $ = cheerio.load(html);
      const scriptUrls: string[] = [];
      $('script[src]').each((_, element) => {
        const src = $(element).attr('src');
        if (src) {
          scriptUrls.push(new URL(src, 'https://guns.lol').toString());
        }
      });
      await mkdir('./chunks', { recursive: true });
      for (const url of scriptUrls) {
        let scriptContent = await fetchScript(url);
        scriptContent = beautify.js(scriptContent || '', { indent_size: 2, space_in_empty_paren: true });
        await writeFile(`./chunks/${url.split('/').pop()}`, scriptContent || '');
      }
    } else {
      console.error(`Failed to fetch the website: ${websiteRes.status} ${websiteRes.statusText}`);
    }
  }
}

async function fetchScript(url: string) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
      'Cookie': clearance ? `guns_clearance=${clearance}` : '',
    },
  });

  if (res.ok) {
    const scriptContent = await res.text();
    console.log(`Fetched script from ${url}`);
    return scriptContent;
  } else {
    console.error(`Failed to fetch script from ${url}: ${res.status} ${res.statusText}`);
  }
}

main();