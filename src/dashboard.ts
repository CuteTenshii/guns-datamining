import type * as cheerio from 'cheerio';
import { OBJECT_ID_PATTERN, SNOWFLAKE_PATTERN, UUID_PATTERN } from './identifiers';

// Dashboard pages render one real account, and `output/` is public. Values are scrubbed, keys kept: a shipped feature
// shows up as a new key, not a new value.

// Two namespaces, not one subtree -- /account, plus reserved single-segment routes sharing the /[username] namespace.
// The client bundle never lists them, so this is the record; index.ts crawls for anything added later.
export const DASHBOARD_PATHS = [
  '/account',
  '/account/analytics',
  '/account/settings',
  '/account/badges',
  '/account/redeem',
  '/templates',
  '/links',
  '/customize',
];

// Every root is itself a listed path, so the list doubles as the prefix set.
export function isDashboardPath(path: string): boolean {
  return DASHBOARD_PATHS.some(root => path === root || path.startsWith(`${root}/`));
}

// /templates links to /templates/<id> for every template on the site; following those would snapshot the catalogue
// every six hours. Record ids carry digits and run long, so plain letters mark a route rather than a row.
const ROUTE_SEGMENT = /^[A-Za-z][A-Za-z-]*$/;
const MAX_ROUTE_DEPTH = 3;

export function isCrawlableDashboardPath(path: string): boolean {
  if (!isDashboardPath(path)) return false;

  const segments = path.split('/').filter(Boolean);
  return segments.length <= MAX_ROUTE_DEPTH && segments.every(segment => ROUTE_SEGMENT.test(segment));
}

const REDACTED = 'REDACTED';
const REDACTED_EMAIL = 'REDACTED@REDACTED';
const REDACTED_UUID = '00000000-0000-0000-0000-000000000000';

// Normalised before lookup, so one entry covers `display_name` and `displayName`. Ids with a recognisable shape
// (`_id`, `discord_id`, `*_id`) are absent -- the patterns below find those whatever the key is called.
const SENSITIVE_KEYS = new Set([
  // who the account is
  'uid', 'username', 'displayname', 'email',
  // what they typed, uploaded, or linked to
  'avatar', 'banner', 'customcursor', 'description', 'favicon', 'idletext', 'image', 'location',
  'pageentertext', 'presence', 'title', 'url', 'value',
  // credentials, named rather than found by shape: absent without image hosting or MFA, so there is no sample
  'uploadkey', 'secret', 'token',
  // counters and stamps that move between runs on their own
  'accountcreated', 'lastdismissedat', 'lastshownat', 'pageviews', 'toppercentage', 'updatedat',
]);

const EMAIL_PATTERN = /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g;

// Next.js embeds the document as plain JSON and again backslash-escaped in an RSC row; `\1` covers both quote forms.
const JSON_ENTRY_PATTERN =
  /(\\?")([A-Za-z_][A-Za-z0-9_]*)\1(\s*:\s*)(?:\1((?:[^"\\]|\\.)*?)\1|(-?\d+(?:\.\d+)?))/g;
const ALIASES_PATTERN = /(\\?")aliases\1\s*:\s*\[([^\]]*)\]/g;
const QUOTED_STRING_PATTERN = /\\?"((?:[^"\\]|\\.)*?)\\?"/g;

// Shorter than this, a global replace is likelier to corrupt ordinary markup than to redact the handle.
const MIN_HANDLE_LENGTH = 3;

// Stat cards are a label block then a value block; the value moves on its own and would diff on every scrape.
const VOLATILE_STAT_LABELS = new Set(['Profile Views', 'UID']);

function escapeRegExp(literal: string): string {
  return literal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeKey(key: string): string {
  return key.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
}

function isSensitiveKey(key: string): boolean {
  return SENSITIVE_KEYS.has(normalizeKey(key).replace(/_/g, ''));
}

// Numbers stay unquoted, matching how index.ts redacts the view counter.
function redactSensitiveEntries(html: string): string {
  return html.replace(
    JSON_ENTRY_PATTERN,
    (match: string, quote: string, key: string, colon: string, _text: string, digits: string) => {
      if (!isSensitiveKey(key)) return match;
      const value = digits === undefined ? `${quote}${REDACTED}${quote}` : REDACTED;
      return `${quote}${key}${quote}${colon}${value}`;
    },
  );
}

/** Every value in the document under one of `keys`, whichever of the two JSON shapes it was written in. */
function collectValues(source: string, keys: ReadonlySet<string>, numeric: boolean): string[] {
  const values: string[] = [];
  for (const [, , key, , text, digits] of source.matchAll(JSON_ENTRY_PATTERN)) {
    const value = numeric ? digits : text;
    if (value !== undefined && keys.has(normalizeKey(key!).replace(/_/g, ''))) values.push(value);
  }
  return values;
}

// The handle appears far outside the JSON declaring it (titles, profile links, imagehost domains), so collect first.
function collectHandles(source: string): string[] {
  const handles = new Set(collectValues(source, new Set(['username', 'displayname']), false));

  for (const match of source.matchAll(ALIASES_PATTERN)) {
    for (const alias of match[2]!.matchAll(QUOTED_STRING_PATTERN)) handles.add(alias[1]!);
  }

  // Longest first: replacing `alice` before `alice_alt` would leave `REDACTED_alt` behind.
  return [...handles]
    .filter(handle => handle.length >= MIN_HANDLE_LENGTH)
    .sort((a, b) => b.length - a.length);
}

function groupDigits(digits: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** Scrubs the account document out of a dashboard page. `source` is the untouched response -- by the time this runs,
 *  index.ts has already blanked some of the values it needs to find. */
export function redactAccountHtml(html: string, source: string): string {
  let redacted = html;

  for (const handle of collectHandles(source)) {
    redacted = redacted.replace(new RegExp(`(?<![A-Za-z0-9_-])${escapeRegExp(handle)}(?![A-Za-z0-9_-])`, 'g'), REDACTED);
  }

  // The uid is printed comma-grouped in the sidebar and a stat card, where no JSON pattern reaches it.
  for (const uid of collectValues(source, new Set(['uid']), true)) {
    redacted = redacted
      .replace(new RegExp(`(?<![\\d,])${escapeRegExp(groupDigits(uid))}(?![\\d,])`, 'g'), REDACTED)
      .replace(new RegExp(`(?<!\\d)${escapeRegExp(uid)}(?!\\d)`, 'g'), REDACTED);
  }

  redacted = redactSensitiveEntries(redacted);
  redacted = redacted.replace(EMAIL_PATTERN, REDACTED_EMAIL);
  redacted = redacted.replace(UUID_PATTERN, REDACTED_UUID);
  redacted = redacted.replace(OBJECT_ID_PATTERN, REDACTED);
  redacted = redacted.replace(SNOWFLAKE_PATTERN, REDACTED);

  return redacted;
}

/** Redacts the counts the dashboard renders as text, which no pattern over the account document can reach. */
export function redactAccountDom($: cheerio.CheerioAPI) {
  $('h1').each((_, el) => {
    if (!VOLATILE_STAT_LABELS.has($(el).text().trim())) return;

    $(el).parent().next().find('h1, h3').each((_, valueEl) => {
      $(valueEl).contents().each((_, node) => {
        if (node.type === 'text' && /\d/.test(node.data ?? '')) {
          node.data = (node.data ?? '').replace(/[\d,]+/g, REDACTED);
        }
      });
    });
  });
}
