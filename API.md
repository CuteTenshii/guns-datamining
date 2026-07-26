# guns.lol API Reference

Reverse-engineered from the datamined client bundles in [`output/`](output/). Every entry is backed by evidence in the beautified chunks under `output/_next/static/chunks/`.

## Conventions

- **Base URL:** `NEXT_PUBLIC_API_URL || "https://guns.lol"` — same origin. Some calls use the resolved base, some hardcode `https://guns.lol`, some use bare relative `/api/...`.
- **Auth:** cookie-session only. No `Authorization`/`Bearer`/CSRF header is set anywhere; the session cookie rides along on same-origin requests. Only one call explicitly sets `credentials: "include"` (`imagehost/domains/list`).
- **Methods:** almost everything is `POST` (110 call sites). Only `leaderboard/views` and `statusLogs` are `GET` (plus the `GET` auth helpers `auth/username/.../availability`, `auth/discord/url`, `auth/oauth/.../url`, and `auth/logout`).
- **Headers:** `Content-Type: application/json` is set on *some* JSON calls but omitted on many (the server evidently parses the body regardless). FormData uploads set no headers (the browser adds the multipart boundary). `imagehost/data`, `imagehost/embed`, `templates/visibility` notably send a JSON string body with **no** `Content-Type`.
- **Response contract:** failures return `{ error: string }`. Mutations typically echo the updated collection (`socials`, `audios`, `buttons`, `folders`, `domains`, `templates`, `favorite_templates`, `portfolio_modules`) or a resource `url`; some return only HTTP status. Successes sometimes carry `message`.
- **Anti-bot:** login/register/reset use captcha (Cloudflare Turnstile or hCaptcha). Public profile view tracking uses a Proof-of-Work challenge (`_gpp_ch`) solved in a Web Worker at `/_challenge/pow/...`, plus Turnstile — see `analytics/view`.
- **Not an API:** the public profile page (`/[username]`) is server-rendered (data arrives as props, no client `fetch`). There is **no** GraphQL or WebSocket API. `sa.guns.lol/latest.js` is a self-hosted Simple Analytics script tag, not a JSON endpoint.

---

## 1. Authentication — `/api/auth/*`

### `POST /api/auth/login`
One endpoint, three request shapes. Headers: none set. *(login/page.js:244–317)*

| Shape | Body fields | Response fields read |
|---|---|---|
| Credential login | `email`, `password`, `token` (captcha), `captchaProvider` (`turnstile`\|`hcaptcha`) | `newLocation`, `resendToken`, `mfa`, `error` |
| New-location OTP | `email`, `password`, `newLocationOTP`, `trustDevice` | `mfa`, `error` |
| MFA / recovery code | `email`, `password`, `mfaToken`, `trustDevice`, `newLocationOTP`, `useRecoveryCodes` | `error` (ok → 200) |

### `POST /api/auth/register`
Header `Content-Type: application/json`. *(register/page.js:170–196)*
- **Body:** `email`, `password`, `username` (normalized: lowercase, `[^a-z0-9._]` stripped, ≤16), `captcha` (hCaptcha), `ref` (`?ref=`), `emailMarketingOptIn` (bool)
- **Response:** `resendToken` (→ `/sent?e=<b64email>&token=...`), `error`

### `GET /api/auth/username/{username}/availability`
No body. *(register/page.js:104–117)* — **Response:** `available` (bool), `error`

### `GET /api/auth/discord/url`
Starts Discord OAuth; redirects to `.url`. *(login/page.js:391–404, register/page.js:138–159)*
- **Query:** `returnUri` (always); `usernameHint`, `ref` (register only, when present)
- **Response:** `url`

### `GET /api/auth/oauth/{provider}/url`
Generic social login (only `google` wired up); redirects to `.url`. *(2552.js:65–85)*
- **Query:** `returnUri`, `usernameHint` (if non-empty), `ref` (if provided) — **Response:** `url`

### `POST /api/auth/resend`
Header `Content-Type: application/json`. *(login/page.js:677–690, sent/page.js:79–92)*
- **Body:** `type` (`otp` \| `reset` \| `register`), `token` — **Response:** status 200 → success, else `error`

### `POST /api/auth/verify`
No headers. *(verify/[verify]/page.js:84–90)*
- **Body:** `token` (email-verify token from route) — **Response:** `ok`, `status` (400 = invalid link)

### `GET /api/auth/logout`
Fire-and-forget; response ignored, then redirect `/login`. *(logout/page.js:14)*

---

## 2. Account recovery & password reset

### `POST /api/recovery/start`
Header JSON. **Body:** `recoveryType` (default `lost_2fa_device`), `identifier`. **Response:** `attemptId` (→ `/recovery/start/evidence?attempt=`), `message`, `error`. *(recovery/start/page.js:342–355)*

### `POST /api/recovery/attempt`
Header JSON. **Body:** `attemptId`. **Response:** `flow.recoveryType` (`lost_email_access`, `lost_2fa_device`, `lost_recovery_codes`, `lost_email_and_2fa`, `forgot_email`, `compromised_account`). *(recovery/finalize/page.js:38–49)*

### `POST /api/recovery/finalize`
Header JSON. **Body:** `attemptId`, `token`. **Response:** `error` (special-cases "new email is required"). *(recovery/finalize/page.js:58–75)*

### `POST /api/recovery/cancel`
Header JSON. **Body:** `attemptId`, `token`. **Response:** `message`, `error`. *(recovery/cancel/page.js:147–159)*

### `POST /api/reset/password/request`
No headers. **Body:** `email`, `captcha` (Turnstile). **Response:** `resendToken` (→ `/sent?...&d=pass&token=`), `error`. *(reset/page.js:545–554)*

### `POST /api/reset/password`
No headers. **Body:** `token` (reset token from route), `password`, `passwordReenter`. **Response:** `error` (ok → `/password/success`). *(reset/[reset]/page.js:145–158)*

---

## 3. Dashboard — Customize (`/api/dashboard/customize/*`)

### `POST /api/dashboard/customize`
No headers. Main appearance save. *(9361.js:2076)*
- **Body (JSON):** `color`, `text_color`, `bg_color`, `icon_color`, `gradient_1`, `gradient_2`, `profile_gradient`, `description`, `presence`, `background_effects`, `background_effects_color` (`#rrggbb`), `opacity`, `blur`, `username_glow`, `social_glow`, `badge_glow`, `use_discord_avatar`, `monochrome`, `animated_title`, `volume_control`, `swap_colors`, `location`, `discord_avatar_decoration`
- **Response:** `error`

### `POST /api/dashboard/customize/usernameEffects`
**Body:** `username_effects`. **Response:** `error`. *(9361.js:1325)*

### `POST /api/dashboard/customize/discordPresenceSettings`
Header JSON. **Body:** `{ show_badges, show_guild_tag, idle_text }`. **Response:** `message`, `error`. *(9361.js:1562)*

### `POST /api/dashboard/customize/upload/{type}`  ·  `type` ∈ `background`\|`avatar`\|`cursor`
FormData. **Body:** field named `{type}` = File (cursor is downscaled first). **Response:** `url`, `error`. *(7602.js:335)*

### `POST /api/dashboard/customize/remove/{type}`
No body. HTTP status only. *(7602.js:350)*

### `POST /api/dashboard/customize/upload/audio`
FormData. **Body:** `audio` (File), `cover` (File), `title` (≤30 chars). **Response:** `audios`, `error`. *(7602.js:368)*

### `POST /api/dashboard/customize/remove/audio`
**Body (JSON):** `id`. **Response:** `audios`, `error`. *(7602.js:376)*

### `POST /api/dashboard/customize/audio/active`
**Body (JSON):** `id`. **Response:** `audios`, `error`. *(7602.js:386)*

### `POST /api/dashboard/customize/audio/details`
FormData. **Body:** `cover` (File), `id`, `title`. **Response:** `audios`, `error`. *(7602.js:400)*

### `POST /api/dashboard/customize/audio/settings`
Two variants (one field each): `{ shuffle_audios }` or `{ audio_player }`. **Response:** `error`. *(7602.js:408, 418)*

### `POST /api/dashboard/onboarding`
Onboarding wizard. **Body (JSON):** `{ step, data:{…} }` (+ `skip`). Step 1 `data.selection` (search_engine/social_profile/friend/other); step 2 `data.selection` (personal/brand/content_sharing/other); steps 3–4 `data._s`. **Response:** `step` (step 4 → `/account`), `error`. *(116.js:193–557)*

---

## 4. Dashboard — Links (`/api/dashboard/links/*`)

| Endpoint | Body | Response |
|---|---|---|
| `POST /add` *(FormData, 2461.js:983)* | `social`, `value`, `mode`, `glow_color`?, `icon`? (File) | `socials`, `error` |
| `POST /edit` *(FormData, 2461.js:943)* | `social`, `value`, `id`, `mode`, `icon`?, `glow_color`? | `socials`, `error` |
| `POST /delete` *(JSON, 2461.js:955)* | `social`, `id` | `socials`, `error` |
| `POST /visibility` *(JSON hdr, 2461.js:967)* | `id`, `hidden` (bool) | `socials`, `error` |
| `POST /order` *(JSON hdr, 2461.js:1415)* | `newOrder`: `[{id}]` | HTTP status only |

---

## 5. Dashboard — Premium (`/api/dashboard/premium/*`)

### `POST /api/dashboard/premium`
**Body (JSON):** `page_enter_text`, `cursor_effects`, `effects_color`, `hide_views`, `layout`, `parallax_animation`, `animation` (default `fade`). **Response:** `error`. *(2617.js:871)*

### `POST /api/dashboard/premium/layout`
**Body (JSON):** `layout`, `border_color`, `border_radius`, `border_width`, `border_enabled`, `border_style` (`static`), `border_opacity` (`0.3`), `text_align`, `button_border_radius`, `show_url`, `button_shadow`, `join_date` (`relative`), `avatar_radius` (`35`), `links_position` (`center`), `portfolio_border_radius` (`20`), `portfolio_modules`? (array). **Response:** `portfolio_modules`, `error`. *(3184.js:1331)*

### Premium buttons
| Endpoint | Body | Response |
|---|---|---|
| `POST /buttons/add` *(FormData, 3184.js:755)* | `button_title`, `button_url` (https-normalized), `icon`? (File) | `buttons`, `error` (ok = status 200) |
| `POST /buttons/edit` *(FormData, 3184.js:775)* | `button_title`, `button_url`, `id`, `icon`? | `buttons`, `error` |
| `POST /buttons/delete` *(JSON, 3184.js:790)* | `id` | `buttons`, `error` |
| `POST /buttons/order` *(JSON hdr, 3184.js:1045)* | `newOrder`: `[{id}]` | HTTP status only |

### Fonts
- `POST /font` *(JSON hdr, 2617.js:158)* — **Body:** `{ font }` **or** `{ letterSpacing, fontSize }`. **Response:** `error`
- `POST /upload/font` *(FormData, 2617.js:114)* — **Body:** `font` (File; ttf/otf/woff ≤5 MB), `fontName`, `fontWeight`, `fontStyle`. **Response:** `url`, `error`
- `POST /remove/font` *(JSON hdr, 2617.js:139)* — no body. **Response:** `error`

### Banner & metadata (OG/SEO)
- `POST /upload/banner` *(FormData, 3184.js:508)* — **Body:** `banner` (File). **Response:** `url`, `error`
- `POST /remove/banner` *(3184.js:517)* — no body. HTTP status only.
- `POST /metadata` *(803.js:66)* — **Body (JSON):** `title`, `description`, `information_overlay`. **Response:** `error`
- `POST /upload/metadata/{type}` *(FormData, 803.js:44)* — `type` ∈ `image`\|`favicon` (favicon downscaled 32×32, ≤10 MB). **Body:** field `{type}` = File. **Response:** `url`, `error`
- `POST /remove/metadata/{type}` *(803.js:53)* — no body. HTTP status only.

### Second tab
`POST /secondTab` *(JSON hdr, 3184.js:146/161)* — two variants:
- Toggle: `{ second_tab_enabled }` (HTTP status only)
- Save: `{ second_tab: { second_tab_option, second_tab_value }, clock_face_style?, clock_hidden?, clock_time_format? }` (timezone-only extras). **Response:** `error`

### Typewriter
- `POST /typewriter` *(JSON hdr, 2617.js:731)* — `{ typewriter_enabled }` **or** `{ typewriter_list: [...] }`. **Response:** `error`
- `POST /typewriterSpeed` *(JSON hdr, 2617.js:775)* — `typewriter_speed`, `typewriter_delete_speed`. **Response:** `error`

### Lyrics
`POST /lyrics/search` *(JSON hdr, 3184.js:2386)* — **Body:** `track_name`, `artist_name`, `duration`?. **Response:** `results[]` (each: `id`, `trackName`/`name`, `artistName`, `albumName`, `syncedLyrics`, `plainLyrics`; sliced to 8).

---

## 6. Dashboard — Templates (`/api/dashboard/templates/*`)

| Endpoint | Body | Response |
|---|---|---|
| `POST /apply?unlisted={bool}` *(JSON hdr, 7667.js:165)* | `templateId`, `applyMode` (`full`\|`custom`), `selections`? `{background,audio,avatar,cursor}` | `message`, `error` |
| `POST /create` *(FormData, 8136.js:1789)* | `name`, `tags` (JSON string), `image` (File), `premium_only`, `visibility` | `isUnlisted`, `unlistedTemplateId`, `message`, `error` |
| `POST /edit` *(FormData, 8136.js:864)* | `templateId`, `name`, `tags` (JSON string), `image`? | `template{name,image,tags}`, `error` |
| `POST /delete` *(JSON hdr, 8136.js:814)* | `templateId` | `message`, `error` |
| `POST /favorite` *(JSON hdr, 8136.js:467…)* | `templateId` | `type` (`favorite`\|`unfavorite`), `favorite_templates`, `message`, `error` |
| `POST /favorites` *(8136.js:1363)* | none | `templates`, `error` |
| `POST /lastUsed` *(8136.js:1549)* | none | `templates`, `error` |
| `POST /uploads` *(8136.js:804)* | none | `templates`, `error` |
| `POST /library[?type=scroll_loading]` *(JSON hdr, 8136.js:407)* | `page`, `sort`, `search`, `templateAuthor`? | `templates`, `hasMore`, `error` |
| `POST /templateAuthor` *(JSON hdr, 8136.js:484)* | `username` | `username`, `avatar`, `display_name`, `error` |
| `POST /visibility` *(no hdr, 8136.js:901)* | `templateId`, `visibility` | `unlistedId`, `message`, `error` |

### `POST /api/users/templatePreview/{templateId}?unlisted={bool}`
No body. *(5712.js:7362)* — **Response:** `id`, `name`, `image`, `premium_only`, `favorites`, `times_used`, `timestamp`, `tags`, `user_information`, `config` (incl. `audio`), `premium`, `error`.

---

## 7. Image host (`/api/dashboard/imagehost/*`, `/api/imagehost/upload`)

### Data / config
- `POST /data` *(JSON hdr, 4998.js:263)* — no body. **Response:** `config.secret_key` (upload key).
- `POST /data?latestConfig=true` *(JSON hdr, 4036.js:264)* — **Response:** `config` (`embed{title,author,author_url,description,color,timestamp}`, `domain` [`i.guns.lol`], `filename_length` [7], `anonymous`, `hide_extension`, `show_embed`, `secret_key`), `totalUploads`.
- `POST /data?latestDomain=true` *(8889.js:81 / 1574.js:81 / 362.js:58)* — **Response:** `totalFiles`, `config.domain`; the dashboard caller also reads `totalUploads`, `leaderboardRank`, `storageUsed(+Formatted)`, `storageLimit`, `storageLeft(Formatted)`.
- `POST /imagehost` *(JSON hdr, 4036.js:313)* — save settings: `anonymous_uploads`, `filename_length` (5–50), `hide_extension`, `show_embed`. **Response:** `error`.
- `POST /regenerate` *(JSON hdr, 4036.js:330)* — no body. **Response:** `secretKey`.
- `POST /embed` *(no hdr, 4036.js:76)* — **Body:** `title`, `author`, `author_url`, `description`, `timestamp`, `color`. **Response:** `error`.
- `POST /appDownloadUrls` *(JSON hdr, 4998.js:272)* — no body. **Response:** `windows`, `macos`, `linux`.
- `POST /dailyUploads` *(JSON hdr, 362.js:66)* — no body. **Response:** `dailyUploads[]`.

### Files & folders
- `POST /upload` *(FormData, 362.js:79)* — **Body:** `file` (File). **Response:** `extension`, `url`, `file_name`, `upload_date`, `file_size`, `key`.
- `POST /files` *(no hdr, 1574.js:95)* — **Body:** `page`, `sort` (`size_asc`\|`name_asc`\|`name_desc`\|…), `search`?, `folder`?. **Response:** `files[]`, `total`.
- `POST /deleteFile` *(no hdr, 1574.js:119)* — **Body:** `fileId`. **Response:** `error`.
- `POST /folders` *(no hdr, 1574.js:109)* — no body. **Response:** `folders[]`.
- `POST /folders/create` *(no hdr, 1574.js:146)* — **Body:** `name`. **Response:** `error`.
- `POST /folders/delete` *(no hdr, 1574.js:159)* — **Body:** `folderId`. **Response:** `error`.
- `POST /folders/moveFiles` *(no hdr, 1574.js:131)* — **Body:** `fileIds[]`, `folderId`. **Response:** `message`, `error`.

### Custom domains
| Endpoint | Body | Response |
|---|---|---|
| `POST /domains/list` *(JSON hdr, **credentials:include**, 8889.js:72)* | `search`, `page` | `page`, `total`, `totalPages`, `domains[]` (`status`, `sslStatus`) |
| `POST /domains/user` *(JSON hdr, 8889.js:91)* | none | `domains[]` |
| `POST /domains/add` *(JSON hdr, 8889.js:109)* | `host`, `visibility` (`public`) | `unsupportedDns`, `hostname`, `cf`, `dnsRecords[]` |
| `POST /domains/status` *(JSON hdr, 8889.js:131)* | `host` | `status`, `sslStatus`, `badge`, `info`, `message` |
| `POST /domains/delete` *(JSON hdr, 8889.js:149)* | `host` | `error` |
| `POST /domains/apply` *(JSON hdr, 8889.js:161)* | `host` | `error` |
| `POST /domains/current` *(JSON hdr, 8889.js:175)* | none | `domain` |
| `POST /domains/visibility` *(JSON hdr, 8889.js:184)* | `host`, `visibility` (`public`\|`private`) | `error` |

### `POST /api/imagehost/upload` (external / ShareX)
Documented in the generated `.sxcu` config (not called via `fetch`). *(4998.js:499)*
- **Body:** MultipartFormData; file field `file`; argument `key` = user upload key.
- **Response (`$json:...$`):** `link`, `deletion_url`, `error`.

---

## 8. Billing & gifts (`/api/billing/*`, `/api/gift/*`)

All four billing calls redirect to `.session` (checkout URL) on success, return `error` on failure. *(6788.js)*

| Endpoint | Body |
|---|---|
| `POST /billing/createCheckout` *(6788.js:479)* | `type` (`premiumlifetime`\|`imagehost`\|`donation`\|`verified`\|`credits`\|`custombadge`\|`aliascredits`), `donation_amount`, `credits`, `badge_data`, `alias_credits`, `metadata{purchase_source,current_url,referrer,locale}` |
| `POST /billing/createCryptoCheckout` *(6788.js:547)* | same as above, `metadata` **without** `locale` |
| `POST /billing/giftCheckout` *(6788.js:504)* | `type`, `username`, `gift_message`, `badge_data`, `metadata{…,locale}` |
| `POST /billing/giftCryptoCheckout` *(6788.js:526)* | `type`, `username`, `gift_message`, `badge_data`, `metadata` (no `locale`) |

### `POST /api/gift/user`
Gift-recipient lookup. **Body:** `username`. **Response:** `display_name`, `avatar`, `error` (existence via `res.ok`). *(6788.js:248)*

---

## 9. Third-party service integrations (`/api/service/*`)

All `POST`, header `Content-Type: application/json`, in `5712.js`. The client parses the ID/handle from a pasted URL before sending.

| Endpoint | Body | Response |
|---|---|---|
| `POST /service/discord` *(7421)* | `type` (`presence`\|`avatar`), `discordId`, `fallbackIdentity` | `identity{username,avatar,avatarDecoration,globalName,displayName,primaryGuild}`, `activities[]{name,type,emoji}`, `status`, `primaryGuild.hasGuildTag`, `error` |
| `POST /service/telegram` *(3327)* | `chatId` | `avatar`, `name`, `members` |
| `POST /service/youtube` *(3351)* | `channelId` | `avatar`, `handle`, `subscribers`, `channelId` |
| `POST /service/roblox` *(3376)* | `userId` | `username`, `avatar`, `friends`, `followers` |
| `POST /service/lastfm` *(3401)* | `username` | `avatar`, `username`, `artist_count`, `playcount` |

*(GitHub second-tab data is fetched directly from `api.github.com`, not a guns.lol endpoint.)*

---

## 10. Analytics, telemetry & misc

### `POST /api/analytics/view`
Header JSON, `cache: no-store`. Body is a **JSON array** (positional), fired once per profile mount after the PoW + Turnstile proof is ready. *(5712.js:2843)*
```
[ turnstileToken,
  [ ch.v, ch.e, ch.t, ch.n, ch.s, ch.c, powProof ],   // challengeData + PoW proof
  username,
  deviceCode,   // 1=mobile, 2=tablet, 0=desktop
  document.referrer ]
```
The PoW challenge (`_gpp_ch`) is solved in a Web Worker at `/_challenge/pow/<id>/<sub>` (`5712.js:2803`). Response not read.

### `POST /api/analytics/click`
Header JSON. **Body:** `username`, `linkId`, `referrer`, `deviceType` (`mobile`\|`tablet`\|`desktop`). **Response:** `error`. *(5712.js:7156)*

### `POST /api/telemetry/errors`
Header JSON, `keepalive: true`. Client error reporting from `error`/`unhandledrejection` handlers. *(app/layout.js:521, app/error.js:140)*
- **Body:** `message`, `name`, `stack`, `componentStack`, `severity` (`error`), `tags[]`, `href`, `route`, `viewport{width,height}`, `metadata{filename,lineno,colno|source, environment{browser,os,device}, rawRoute, normalizedRoute}`
- **Response:** `eventId`, `errorId`

### `POST /api/telemetry/errorsP`
Unauthenticated fallback — fired only when `/api/telemetry/errors` returns **401**. Same body/response. *(app/layout.js:528, app/error.js:147)*

### `GET /api/leaderboard/views`
Header JSON, no query. **Response:** `allTime[]`, `month[]` (each entry: `displayName`, `username`, `views`, `avatar`, `premium`), `error`. *(app/leaderboard/page.js:31)*

### `GET /api/statusLogs?excludeLogs=true`
`cache: no-store`, no headers. **Response:** `currentStatus` (`up`\|`down`\|`partial`). *(1382.js:317)*

### `POST /api/ping`
No headers, no body, response ignored — presence/heartbeat once on app mount. *(app/layout.js:12)*

---

## 11. External guns.lol hosts (non-JSON)

| Host / path | Purpose |
|---|---|
| `GET https://og.guns.lol/api/og?username=<u>[&background=<imgUrl>]` | Open Graph image (used as `<img src>`). *(803.js:368,374)* |
| `https://assets.guns.lol/...` | Static assets (avatars, fonts, `wasm/gpp_gunslol_bg.wasm` PoW module). |
| `https://sa.guns.lol/latest.js` | Self-hosted Simple Analytics loader (`data-collect-dnt`), not a JSON API. |
| `https://r2.guns.lol`, `pub-…​.r2.dev` | Allowed Cloudflare R2 image-host origins. |
