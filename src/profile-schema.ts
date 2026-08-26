// Lifts the profile document embedded in the `/$` page's RSC flight data down to its field shape, so a newly shipped
// profile feature shows up as one added line in the snapshot diff instead of buried in a minified page.
import { isUuid } from './identifiers';
import { outputPath, saveJson } from './output';

// Also a literal in index.ts's `hardcodedPaths`, which is walked before this runs.
export const PROFILE_PATH = '/$';

const PROFILE_SCHEMA_FILE = outputPath('profile-schema.json');

// Injected by the PoW bootstrap, under per-build obfuscated keys.
const NON_PROFILE_KEYS = new Set(['_gpp_ch']);

// A flight row can span several `self.__next_f.push` calls, so join the chunks first.
function extractFlightStream(html: string): string {
  const marker = 'self.__next_f.push([1,';
  let stream = '';
  let index = html.indexOf(marker);
  while (index !== -1) {
    let cursor = index + marker.length;
    while (cursor < html.length && /\s/.test(html[cursor]!)) cursor++;
    const literal = html[cursor] === '"' ? readJsonString(html, cursor) : null;
    if (literal) {
      stream += literal.value;
      cursor = literal.end;
    }
    index = html.indexOf(marker, cursor);
  }
  return stream;
}

function readJsonString(source: string, start: number): { value: string; end: number } | null {
  for (let i = start + 1; i < source.length; i++) {
    if (source[i] === '\\') {
      i++;
      continue;
    }
    if (source[i] !== '"') continue;
    try {
      return { value: JSON.parse(source.slice(start, i + 1)) as string, end: i + 1 };
    } catch {
      return null;
    }
  }
  return null;
}

function readBalancedObject(source: string, start: number): string | null {
  let depth = 0;
  let inString = false;
  for (let i = start; i < source.length; i++) {
    const char = source[i];
    if (inString) {
      if (char === '\\') i++;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === '{') depth++;
    else if (char === '}' && --depth === 0) return source.slice(start, i + 1);
  }
  return null;
}

// Anchored on the key rather than the flight row id, which Next.js reassigns per build.
function findProfileData(stream: string): Record<string, unknown> | null {
  const anchor = '"data":';
  for (let i = stream.indexOf(anchor); i !== -1; i = stream.indexOf(anchor, i + anchor.length)) {
    const brace = stream.indexOf('{', i + anchor.length);
    if (brace === -1 || stream.slice(i + anchor.length, brace).trim() !== '') continue;
    const raw = readBalancedObject(stream, brace);
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw) as Record<string, unknown>;
      if (typeof parsed.username === 'string' && isPlainObject(parsed.config)) return parsed;
    } catch {}
  }
  return null;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function describeType(value: unknown): string {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

// Generated ids used as keys (`lyrics_track_map`) are data, not schema.
function isIdKeyedMap(value: Record<string, unknown>): boolean {
  const keys = Object.keys(value);
  return keys.length > 0 && keys.every(isUuid);
}

function collectFieldTypes(value: unknown, path: string, types: Map<string, Set<string>>) {
  if (path) {
    let observed = types.get(path);
    if (!observed) types.set(path, (observed = new Set()));
    observed.add(describeType(value));
  }

  if (Array.isArray(value)) {
    for (const item of value) collectFieldTypes(item, `${path}[]`, types);
    return;
  }
  if (!isPlainObject(value)) return;

  const keyed = isIdKeyedMap(value);
  for (const [key, child] of Object.entries(value)) {
    if (!path && NON_PROFILE_KEYS.has(key)) continue;
    collectFieldTypes(child, path ? `${path}.${keyed ? '*' : key}` : key, types);
  }
}

// Badges are served whether earned or not, so this doubles as the site's catalogue.
function collectBadgeNames(data: Record<string, unknown>): string[] {
  const config = data.config;
  const badges = isPlainObject(config) ? config.user_badges : undefined;
  if (!Array.isArray(badges)) return [];

  const names = new Set<string>();
  for (const badge of badges) {
    if (isPlainObject(badge) && typeof badge.name === 'string') names.add(badge.name);
  }
  return [...names].sort();
}

function buildProfileSchema(data: Record<string, unknown>, source: string) {
  const types = new Map<string, Set<string>>();
  collectFieldTypes(data, '', types);

  const fields: Record<string, string> = {};
  for (const path of [...types.keys()].sort()) {
    fields[path] = [...types.get(path)!].sort().join(' | ');
  }
  return { source, fields, badges: collectBadgeNames(data) };
}

// Non-fatal: if the payload moves the file vanishes, and that deletion is the signal.
export async function saveProfileSchema(html: string, source: string) {
  const data = findProfileData(extractFlightStream(html));
  if (!data) {
    console.error(`Could not locate the profile document in ${PROFILE_PATH}; profile schema not written`);
    return;
  }

  const schema = buildProfileSchema(data, source);
  await saveJson(PROFILE_SCHEMA_FILE, schema);
  console.log(`Saved profile schema: ${PROFILE_SCHEMA_FILE} (${Object.keys(schema.fields).length} fields)`);
}
