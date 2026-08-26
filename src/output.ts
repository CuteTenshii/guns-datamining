// Every file the scrape produces lands under one directory, wiped and rewritten on each run.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

export const OUTPUT_DIR = './output';

export function outputPath(...segments: string[]): string {
  return join(OUTPUT_DIR, ...segments);
}

export async function saveFile(filePath: string, content: string | Buffer) {
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, content);
}

/** Trailing newline so the last line diffs cleanly. */
export async function saveJson(filePath: string, value: unknown) {
  await saveFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}
