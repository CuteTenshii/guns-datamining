// Generated identifiers the site hands out. The profile schema tells id-keyed maps from real fields; the account
// redaction scrubs them. Defined once so the two agree.

// `r2.guns.lol/<uuid>.webp` for uploads, and the id of an audio track, social entry or custom badge.
const UUID_SOURCE = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}';
const ANCHORED_UUID = new RegExp(`^${UUID_SOURCE}$`, 'i');

export const UUID_PATTERN = new RegExp(UUID_SOURCE, 'gi');

// The account's own `_id`. The lookarounds keep it off a longer hex run.
export const OBJECT_ID_PATTERN = /(?<![0-9A-Za-z])[0-9a-f]{24}(?![0-9A-Za-z])/g;

// Discord snowflakes reach 17-20 digits; millisecond timestamps stop at 13.
export const SNOWFLAKE_PATTERN = /(?<!\d)\d{17,20}(?!\d)/g;

export function isUuid(value: string): boolean {
  return ANCHORED_UUID.test(value);
}
