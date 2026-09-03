## Now

**Current Priority:** `/clients` is live. Latest: Nichols, Choi & Lee, PLLC added to Midtown Six Forks (PR #27, merged). Always merge and make live.

**Verification done:** Production `https://www.proudlysites.com/clients` (Vercel production deploy of merge `3b234a8`, HTTP 200, `x-vercel-cache: MISS`) includes Nichols, Choi & Lee, PLLC at 4700 Homewood Court, Suite 320, `data-visit="true"`, rating 3, Sent unchecked, IG blank. `npm run build` (15 pages) and `node --test tests/clients-visit-list.test.mjs` passed (68 rows). Playwright on production at 1440px and 390px confirmed the row on Visit · 25.

**Next Action:** Confirm a real end-to-end Web3Forms submission lands in the intended inbox (only mocked-network testing has been done so far). Then continue the remaining follow-up backlog (Legacy Renovations proof imagery, remaining case-study product placeholders, etc.).

**Verification done:** `npm run build` — 14 routes, zero errors. Playwright against the static build (network calls to `api.web3forms.com` mocked, so no real test email was sent) confirmed on all three pages: the real access key is present in the submitted payload, the honeypot stays off-screen, the light/dark theme variant renders correctly (dark on Church Studio's Espresso Black card, light on contact/pricing), and the accessible inline success state fires after submit. Post-deploy, production `/contact`, `/pricing`, and `/studios/church-studio` all returned HTTP 200 with the real access key confirmed present in each page's HTML.

**Branch state:** `main` is pushed through implementation commit `755a201` and deployed to Vercel production as `dpl_3KzX1JzGYG4zaKLLnmvQ7ShNXd8f`, aliased at `https://proudly-psi.vercel.app`. The pre-existing untracked `src/assets/case-studies/after-hours-ministry/section2.mov` and `src/assets/services/branding/after-hours-tiktok-logo-showcase.png` remain untracked (unrelated to this change).

**Next Action:** Confirm a real end-to-end submission lands in the intended inbox (only mocked-network testing has been done so far). Then continue the remaining follow-up backlog (Legacy Renovations proof imagery, remaining case-study product placeholders, etc.).

## Next Session Punch List

Visual polish batch from 2026-08-08 evening chat review (screenshots against live site). Ordered as raised, not by priority. Distinct from the Follow-up Backlog below.

1. **Case-study close band:** ~~drop the centered "Next project" line under the CTA.~~ **Partially done (2026-08-11, `polish/fraunces-and-case-study-fixes`)** — moved off the centered CTA stack to a bottom-right foot row near the footer's top hairline, reusing the existing `next` prop. **Still open:** the fuller two-up prev/next band (previous case study left, next case study right) described here was not built — that still needs `prev` added alongside `next` in `[slug].astro`'s `getStaticPaths`, a data/layout change beyond tonight's scope.
2. **Heading font:** ~~Playfair Display is hard to read at large display sizes when blown up. Revisit for headings.~~ **Done (2026-08-11, `polish/fraunces-and-case-study-fixes`)** — swapped to Fraunces sitewide (Google Fonts link, DESIGN.md tokens, every literal reference), pulling its ital/opsz/wght variable axes so 56px+ display sizes read sturdy. Verified via Playwright screenshots at 1440px; not yet reviewed by Alex/Fable in the browser.
3. **Case-study hero "See Live Site" button:** ~~change from grey/muted to solid black.~~ Reposition lower, sitting right above the hero image instead of top-right of the header row. **Reposition done** (`CaseStudy.astro`). **Further changed (2026-08-11):** the H1 and button now sit in one row (H1 left, button right, centered vertically on desktop; button stacks below H1 on mobile) instead of stacked, on the same branch above. **Color still open:** the live-URL state already renders `--espresso` (near-black); the grey/muted look is the intentional `.is-pending` disabled state on the three cases without a live URL yet. Needs a decision, not a mechanical fix, since solidifying it would make a non-working button look clickable.
4. **`/about` quote band** ("A referral is a moment of trust..."): ~~left-aligned in the tan section, should be centered.~~ **Done** — `.thesis-line` now centers itself and its text in `about.astro`.
5. **Homepage case-study preview cards:** replace the browser-chrome mockup style (full window frame + shadow) with the same no-background/slight-shadow/tilt product-image treatment used on the case study pages. Reuse the existing per-case images already used on the case pages — no new captures. Still open, a visual redesign, not a quick edit.
6. **Text link hover consistency:** ~~homepage "View Project →" has no hover effect.~~ **Done** — `.text-link` uses the site's translateX(4px) hover/focus pattern in `index.astro`; the broader arrow-link audit found every eligible plain text link already using the established reduced-motion-safe treatment.
7. **Homepage "How It Works" eyebrow:** ~~"PROCESS" eyebrow is inconsistent with every other section (none of them have one). Remove it~~ **Done** — removed from `index.astro` along with its dead CSS. **Sweep not done:** the other "eyebrow"-styled elements site-wide (nav dropdown category tags, case-study niche label, hero location) are functional identifiers, not the AI-generic per-section scaffolding DESIGN.md's No-Scaffolding Rule targets, so they were left as-is pending a decision to remove them too.
8. **"How It Works" step numbers (1-4):** ~~too small.~~ **Done** — resized from 14px sans to 32px Playfair Display in `index.astro`; no other numbered element existed on the site to size-match against.
9. **Case-study live URLs:** still need real URLs for Smith Cash, Strictly Clean, After Hours — blocked on Alex.
10. **Non-case-study live sites:** need a lighter listing treatment for live sites that don't get the full case-study treatment. Open question — where it lives (own `/work` section below case studies? separate page?) and what data it needs (name + URL + maybe screenshot, no full narrative). Scope before building.
11. **Nav dropdown carets** ("Work ⌄", "Services ⌄"): ~~sit visually low, not aligned to the same baseline as the label text.~~ **Done** — `.nav-trigger::after` nudged `translateY(-2px)` in `global.css`.

## Follow-up Backlog

Ordered by production impact. Each item should be handled as its own focused task or a tightly related pass.

### 1. Restore form submissions
- **Done (2026-08-17, uncommitted)** — real Web3Forms access key wired into `/contact`, `/pricing`, and `/studios/church-studio` via a shared `InquiryForm.astro` component. Honeypot, inline success/error states, and no-JS POST fallback preserved from the original per-page implementations.
- **Still open:** verify actual inbox receipt with a real submission after this lands in production (only mocked-network testing has been done so far, deliberately, to avoid spamming the inbox with test sends pre-review).

### 2. Correct Legacy Renovations proof imagery
- Replace the tile-repair/lead-capture screenshot used across the case, homepage, and service proof surfaces with imagery that matches the kitchen-and-bath narrative, or revise the narrative only if that screenshot is the actual product truth.
- Check every consumer of the canonical Legacy image and prevent headline cropping.

### 3. Replace remaining case-study product placeholders
- Supply and install three real product-image compositions for Strictly Clean, matching its three canonical feature records. Smith Cash, Legacy Renovations, and After Hours are complete on `codex/after-hours-video-review`.
- Preserve the shared alternating structure, stable ratios, descriptive alt text, and browser-only pointer response.
- Track exact required captures in `assets.md` until all twelve slots are real.

### 4. Complete missing case-study material
- Confirm live URLs for Smith Cash, Strictly Clean, and After Hours.
- Supply the real Kevin W. quote for Strictly Clean.
- Supply real hero imagery for Strictly Clean and After Hours, then replace their `/work` card and service-proof placeholders.

### 5. Refresh the Impeccable design-system sidecar
- **Done** — refreshed `.impeccable/design.json` from the current `DESIGN.md`, preserving the Grounded Workshop system and current named rules without changing production UI.

### 6. Resolve the live-button hover palette exception
- Decide whether the pre-existing `#33241b` live-site button hover belongs in the documented tonal ramp or should be replaced by an existing Espresso value.
- Update `DESIGN.md` only if the value is intentionally retained; do not suppress the detector without that decision.

### 7. Finish the remaining service-page design debt
- Differentiate Branding and Web Design beyond the shared template and repeated screenshots.
- Add the missing Scan-Then-Prove opening structure to both pages and remove repeated proof copy.
- Resolve cropped client-site headlines and the visually light Search & AI Visibility desktop composition in the same service-cluster review.
- When the real secondary service-page image is supplied, add its dedicated slot and port the retired restrained scroll-parallax behavior there; do not ship empty markup or dormant motion code first.

## Morning Queue

### 2026-08-08 (session 2) — `overnight/system-fixes-2` run (branch off `overnight/system-fixes`, committed not merged)

**1. Nothing was skipped as ambiguous.** All seven phases plus the same-pass `height:auto` fix completed cleanly; Phase 5 required no changes (confirmed already clean, nothing to commit).

**2. Critique snapshot (full detail in `.impeccable/critique/2026-08-08T02-29-37Z__src-pages.md`).** 28/40, 1 P0, 2 P1, 1 P2, down from last night's 30/40 baseline even though last night's P0 is resolved, because this pass scored two pre-existing issues more prominently than last night did. **P0:** both `/contact` and Church Studio's inquiry forms ship `value="YOUR_WEB3FORMS_ACCESS_KEY"`, so every submission fails. Not introduced tonight, already tracked as an open item, now the site's clearest single blocker. **P1s:** the dead `/#pricing`/`/#blog` nav anchors carried unchanged from last night; a structurally broken mobile nav accordion (`global.css`, `.mobile-submenu` has no `:not([hidden])` guard, so both submenus render fully expanded on open regardless of state), newly surfaced tonight, pre-existing, not touched by any of the six phases. **P2:** Branding and Web Design detail pages are near-indistinguishable (same template, same two screenshots, no brand-specific proof material), carried from the 2026-08-07 `/services` critique below.

**3. Still deferred, confirmed not touched this run.** The "See Live Site" button and `/work`'s conditional link text. The iframe modal still needs Alex live.

**4. Two prior open questions from last night are now resolved, not carried forward.** CaseStudy.astro's narrative eyebrow headings (item 2 below) were restyled tonight per Phase 2. `/about`'s capability chips and "honest advice" line (item 3 below) were confirmed fully gone with no salvage, per Phase 5.

### 2026-08-08 — Overnight system-fixes run (branch `overnight/system-fixes`, committed not merged)

**1. Critique findings (full detail in `.impeccable/critique/2026-08-08T00-29-37Z__src-pages.md`, superseded by the 2026-08-08 session 2 snapshot above).** P0 (image aspect ratio) resolved in session 2, see above. P1s: "Pricing"/"Blog" nav items point at homepage anchors that don't exist (silent dead-end click, still open); terracotta still used on non-button card-icon accents (`.bridge-arrow` on all three service-detail pages, homepage `.service-icon` glyphs) which a strict reading of the freshly-tightened One Voice Rule also catches, left untouched since Phase 2 scoped explicitly to text links, not icon accents, still open. P2s: the homepage's "PROCESS" kicker (`index.astro:142`, color `#d1b791`, untokenized) still reads as an eyebrow without the literal dot Phase 3 was scoped to; the brand-new Whole-Or-Center Rule isn't yet true of `/about`'s thesis band or Church Studio's two consecutive left-set text bands, both of which predate the rule and would need a real layout decision, not a mechanical edit, to fix.

**2. RESOLVED in session 2.** CaseStudy.astro's three narrative `h2.eyebrow` headings ("The Moment," "What We Built," "What Changed") were restyled to real Playfair Display section headings per Phase 2 above.

**3. RESOLVED in session 2.** `/about`'s unplaced salvage content (the three capability chips and the "honest advice" line) was confirmed fully gone with no dead markup or CSS surviving, per Phase 5 above. Confirmed drop, not salvaged.

**4. `about.astro`'s "Alex, at work" photo placeholder was deliberately NOT resized to 16:10.** Phase 2's placeholder-resize instruction was scoped to placeholders standing in for site/browser screenshots; this one is a portrait environmental photo of Alex, so it was left at its existing 4:5 crop rather than forced into a landscape ratio that wouldn't suit a person photo.

### 2026-08-07 — `/services` critique (still open, untouched by tonight's run)

Handoff from the 2026-08-07 `/services` Layout Discipline session (uncommitted on `redesign/about-layout` at the time; snapshot `.impeccable/critique/2026-08-07T20-59-15Z__src-pages-services.md`, 30/40, 1 P0, 2 P1). P0: Legacy Renovations proof captions on `branding`/`web-design` describe "finished kitchens" but the screenshot shows tile-repair copy. P1s: Scan-Then-Prove only implemented on `ai-and-search-visibility` (branding/web-design open straight into proof rows); `object-fit:cover` crops client-site headlines in claim/proof images (this is the same family of bug as tonight's P0 image-aspect-ratio finding — worth fixing together). P2s: repeated sentence 3x per service; branding/web-design read as near-clone pages.

### 2026-08-06 — overnight Services + Work run (still open)

Handoff from the 2026-08-06 overnight Services + Work run (branch `overnight/services-and-work`, committed not merged). Nothing here broke the build; these are review-and-decide items.

**1. Drafted copy to approve (every new page — expected per the run's no-placeholder-copy rule).** All 4 Services pages, all 4 case studies, and both index pages ship with real, judgment-drafted copy from positioning.md §10, services-copy.md proof captions, and the homepage cards (the Framer Works CMS was UNREACHABLE this session — plugin not connected — so its fields could not be used). Sign off especially on: the Search & AI Visibility page (new service, capability-framed, softened away from any "you will show up" guarantee); each case narrative; and the After Hours title "goes beyond generic" (lands a touch weak).

**2. Placeholder imagery (on-palette "capture pending" panels, not fake photos — logged in assets.md).** `/work/strictly-clean-detailing` + `/work/after-hours-ministry` heroes and their `/work` index cards; `/services/branding` + `/services/web-design` proof-3 (After Hours). Replace with real photos/screenshots when available.

**3. Missing live-site captures (queued, NOT placeholder-substituted, per runbook Section C).** Smith Cash, After Hours, Strictly Clean have no live URL on hand — supply URLs so screenshots can be captured. (Legacy's URL is on hand and already has a real screenshot.)

**4. Real assets/quote owed from the Framer Works CMS (unreachable this session).** Strictly Clean "Kevin W." quote (the quote band is omitted rather than fabricated — add it once you have the real quote); Legacy / Strictly Clean / After Hours craft imagery (runbook C4).

**5. Material finish-review findings queued (auto-fixes were already applied; these need your judgment).**
- **Section left-spine (desktop):** heroes sit in a narrower centered band than the sections below, so left edges wander. The two reviewers disagreed (Services: material "unify the spine"; Work: low "defensible editorial narrowing"). Decide: unify to one spine, or keep the centered narrowing. Cross-cutting CSS.
- **Search & AI Visibility reads text-light on desktop** (no proof imagery by design) — a large right-side void. Options: two-column intro, center the measure, or add a supporting visual.
- **Hollow narrative bands:** the case "What We Built"/"What Changed" bands inherit generous Unhurried padding around short paragraphs with no supporting image. Real fix is supplying `builtShot` imagery per case; trimming padding would touch the named Unhurried Rule, so left for you.
- **Hero screenshots carry a baked drop shadow + non-cream backdrop** (`smith-cash.jpeg`, `legacy-renovations.jpeg`) — reads against the Single Tool Rule on the two flagship case pages. Re-export flat, or accept the mockup style. NOTE: the homepage uses the same two assets (with an intentional CSS shadow there), so it is a broader asset-style call.

**6. Naming + nav flags.** The runbook prose calls the new service "AI and Search Visibility"; the build unifies on "Search & AI Visibility" (matching the shipped homepage card 3 + footer). Slug is `/services/ai-and-search-visibility` regardless — confirm the display string. Nav + footer "Pricing"/"Blog" point at homepage anchors (`/#pricing`, `/#blog`) since those pages are not built (runbook D2). Homepage "View Project" for Vital Watch points at the `/work` index (no case page, per C1), and Vital Watch was dropped from the footer Case Studies column (had no page to link). Homepage card 3 still reads "so you show up in the answer" (approved, out of scope) — consider matching the new pages' softened "so you can show up."

**7. Low / no-standard notes (FYI, no action unless you set a bar).** PRODUCT.md sets no a11y standard: the 12px placeholder caption on Oat (~4.3:1) and small terracotta links on espresso/cream (~3.9-4.25:1) sit just under 4.5:1; the terracotta links are the established action color (One Voice Rule). `.impeccable/design.json` is older than DESIGN.md (pre-existing, from the /about session) — run `/impeccable document` to refresh when convenient. `overnight-runbook.md` is left untracked (your session spec, not committed).

**Build-gate failures / reverted pages:** none. Every page passed `npm run build`; nothing was reverted.

## Recent

### [Thursday Sep 3, 2026 · /clients Nichols, Choi & Lee] — Code

- **Did:** Added Nichols, Choi & Lee, PLLC to Midtown Six Forks after Jenny Doyle (nearest 27609 street-office stop). Official-site address 4700 Homewood Court, Suite 320 (directory Suite 220 ignored). Website is the live Wix subdomain; `ncl-law.com` currently 500s. Published `info@ncl-law.com` and `919-341-2636`. Instagram left blank (`@ncl_law` was only the LinkedIn slug). `emailed: false`, `rating: 3`, `visit: true`. Hours `Not published - call first`. Homewood Court added to that Maps loop. No other stops changed.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (68 rows). Production `https://www.proudlysites.com/clients` returns 200 with the name, Suite 320, phone, Wix URL, Visit · 25, and blank IG. Playwright at 1440px and 390px confirmed the Visit-tab row.
- **Shipped:** PR #27 merged to `main` (`3b234a8`). Production live.

### [Wednesday Sep 2, 2026 · /clients Meliora Wellness emailed] — Code

- **Did:** Set `emailed: true` only on Meliora Wellness (`contact@meliorawellnessnc.com`). No other fields or stops changed. Visit-list test now expects Meliora in the sent set.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed. Built and production `/clients` HTML have `checked` on `aria-label="Sent: Meliora Wellness"`. Browser pass at 1440 and 390 on production confirmed Meliora Sent is checked; Amos & Amos and NeuroBloom still checked.
- **Shipped:** PR #26 merged to `main` (`7ec891b`). Production `https://www.proudlysites.com/clients` returns 200 with that Sent checkbox checked.

### [Tuesday Sep 1, 2026 · /clients five new leads] — Code

- **Did:** Added Six Forks Animal Hospital (`six-forks-lead-mine`, after Kindrachuk), Reflex Physical Therapy (`leesville`, after Brier Creek Vision), The Matta Law Firm, PLLC (`midtown-six-forks`, after Hormone Wellness / same 211 E Six Forks building), Mantilla Immigration Law Office (`midtown-six-forks`, after Doctor Direct near Oak City/Roper), and Grace Baptist Church (new `neuse-east` Sunday loop). `emailed` is false. Existing stops unchanged. Rebuilt maps loops for the four touched sets.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (62 rows, 39 published emails, Visit · 19, 7 sets). Production `https://www.proudlysites.com/clients` returns 200 with all five names.
- **Shipped:** PR #23 merged to `main`. Production live.

### [Monday Aug 31, 2026 · /clients North Raleigh Periodontics emailed] — Code

- **Did:** Set `emailed: true` only on North Raleigh Periodontics & Implant Center (`contact@northraleighperio.com`). No other fields or stops changed.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed. Built `/clients` HTML has `checked` on `aria-label="Sent: North Raleigh Periodontics & Implant Center"`.
- **Shipped:** PR #22 merged to `main`. Production `https://www.proudlysites.com/clients` returns 200 with that Sent checkbox checked.

### [Monday Aug 31, 2026 · /clients five prospect stops] — Code

- **Did:** Added The Roper Law Firm, P.A. (`midtown-six-forks`, same building as Oak City; maps loop already had 5660 Six Forks), Lowry Law Offices and The Law Offices of Jeffrey G. Marsocci, PLLC (`six-forks-lead-mine`; 8358 and 8406 Six Forks inserted in the loop), FIRST IN SIGHT (`creedmoor`; 8015 Creedmoor Rd in the loop), and Brier Creek Vision Care (`leesville`; 9650 Brier Creek Parkway near Triangle Christian Center). `emailed` is false on all five. Existing stops unchanged. No duplicates.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (57 rows, 34 published emails, Visit · 14). Built `/clients` HTML includes all five names, mailto/tel values, and the updated loop URLs.
- **Shipped:** PR #21 open on `cursor/field-visit-prospect-stops-0f69`. Not merged. Not deployed.

### [Thursday Aug 27, 2026 · /clients Mueller, Jenny Doyle, Doctor Direct] — Code

- **Did:** Added The Mueller Law Firm, P.A. to Falls / Raven Ridge (after Betham). Added Jenny Doyle Immigration Counsel and Doctor Direct to Midtown Six Forks (Doctor Direct after Oak City on Six Forks; Jenny Doyle at end of the set). `emailed` stays false. Existing names unchanged. Rebuilt both Maps loops.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (49 rows, 26 published emails). Built `/clients` HTML includes the three names, mailto/tel values, `data-visit="false"`, and Visit · 8. Production `https://www.proudlysites.com/clients` returns 200 with the three names, phones, and updated loop URLs.
- **Shipped:** PR #18 merged to `main`. Production `https://www.proudlysites.com/clients` is live.

### [Wednesday Aug 26, 2026 · /clients Revive, Betham, Barrett] — Code

- **Did:** Added Revive Physiotherapy and Wellness to Creedmoor (7201 Creedmoor, next to Capital Derm). Added Betham Law, PLLC to Falls / Raven Ridge (6325 Falls of Neuse mailing suite, after Meliora). Added Barrett Law Offices, PLLC to Crabtree / midtown (5 West Hargett Suite 910, downtown high-floor, after Allen). `emailed` stays false. Did not add Paws At Play. Existing names unchanged. Rebuilt the three Maps loops.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (46 rows, 23 published emails). Built `/clients` HTML includes the three names, mailto/tel values, and Revive IG.
- **Shipped:** PR #17 merged to `main`. Production `https://www.proudlysites.com/clients` is live.

### [Friday Aug 21, 2026 · /clients Meliora, Amos & Amos, Allen Law] — Code

- **Did:** Added Meliora Wellness and Amos & Amos, Attorneys at Law to Falls / Raven Ridge (Amos after NeuroBloom at 9204 Falls of Neuse; Meliora after North Ridge Church at 6837, continuing south). Added Allen Law Offices to Crabtree / midtown next to Triangle Sinus (4030 Wake Forest Rd, Suite 115). Stored published emails, phones, hours, and IG handles as given (`@meliora_wellness_nc`, `@amoslawnc`; Allen IG blank). Rebuilt both Lake Lynn Maps loops. Did not change existing names or emailed flags (Peck and Campbell stay sent).
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (42 rows, 19 published emails). Production `https://www.proudlysites.com/clients` returns 200 with 42 rows and the three new names, addresses, phones, and IG; NeuroBloom, North Ridge Church, and Triangle Sinus still present.
- **Shipped:** PR #12 merged to `main`. Production `https://www.proudlysites.com/clients` is live.

### [Thursday Aug 20, 2026 · /clients Triangle Functional Medicine] — Code

- **Did:** Added Triangle Functional Medicine to Midtown Six Forks (Millbrook / Spring Forest) without changing existing leads. Stored published email, phone, hours, and `@trianglefunctionalmedicine`. Added 809 Spring Forest Rd to that set’s Lake Lynn Maps loop; existing stops stayed in the URL.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (39 rows, 16 published emails). Production `https://www.proudlysites.com/clients` returns 200 with the new name, Spring Forest address, phone, IG, and 39-row count; McNeil and Freedom Church still present.
- **Shipped:** PR #10 merged to `main`. Production `https://www.proudlysites.com/clients` is live.

### [Wednesday Aug 19, 2026 · /clients Peck emailed + five leads] — Code

- **Did:** Set `emailed: true` only on The Peck Law Firm (first-touch 2026-08-19 to info@pecklawfirm.net). Added North Raleigh Christian Church (Leesville, same building as Newpath), NeuroBloom PT and North Raleigh Periodontics (Falls / Raven Ridge), Kratt Dedmond and Araneda & Stroud (Crabtree / midtown). Updated Falls and Crabtree Maps loops; Leesville already included 9225 Leesville Rd. Did not mark anyone else emailed.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (38 rows, 15 published emails, one Sent checkbox). Playwright at 1440px and 390px: Peck checked, new names present, Visit · 6.
- **Shipped:** PR #9 merged to `main`. Production `https://www.proudlysites.com/clients` is live.

### [Tuesday Aug 18, 2026 · /clients published emails] — Code

- **Did:** Merged PR #6 onto `main` with Freedom Church and Raleigh Family Orthodontics already present. Ten published emails total. No invented addresses.
- **Verified:** Build + clients test (33 rows, 10 published emails). Production `/clients` shows the eight PR #6 emails plus Freedom Church and Raleigh Family Orthodontics.
- **Shipped:** PR #6 merged to `main`. Production live.

### [Tuesday Aug 18, 2026 · /clients Raleigh Family Orthodontics] — Code

- **Did:** Added Raleigh Family Orthodontics as a real Leesville / Brier Creek stop (9201 Leesville Rd, same road as Campbell / Leesville AH). Stored published email, phone, and `@raleighfamilyortho` (linked on their site). Updated that set’s Maps loop.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (33 rows; RFO on Leesville loop).
- **Shipped:** PR #8 merged to `main`. Production `https://www.proudlysites.com/clients` shows Raleigh Family Orthodontics and Freedom Church Raleigh.

### [Tuesday Aug 18, 2026 · /clients Freedom Church Raleigh] — Code

- **Did:** Added Freedom Church Raleigh as `extra: true` on Midtown Six Forks. Stored published `info@freedomchurchraleigh.com` and verified `@freedomraleigh`. No phone. Did not add `raleigh@freedomchurch.cc`.
- **Verified:** `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed (32 rows; Freedom Church extra on Midtown Six Forks).
- **Shipped:** PR #7 merged to `main`. Production `https://www.proudlysites.com/clients` shows Freedom Church Raleigh (`info@freedomchurchraleigh.com`, `@freedomraleigh`).

### [Monday Aug 17, 2026 · /clients Instagram column] — Code

- **Did:** Added `instagram` on every stop in `src/data/field-visits.json` and a dense IG column after Website. Filled only handles published on the business site (or official same-name/same-city page). Left blank when none was published.
- **Verified:** Live-site lookups for all 31 leads. `npm run build` (15 routes) and `tests/clients-visit-list.test.mjs` passed. Playwright at 1440px and 390px: IG column after Website, `@fusioneyecarenc` links, Peck stays blank, `noindex`, no marketing chrome.
- **Shipped:** PR #5 merged to `main` (`bfd664d`). Production `https://www.proudlysites.com/clients` shows the IG column (13 published handles).

### [Monday Aug 17, 2026 · /clients Visit ratings] — Code

- **Did:** Scored every lead `rating` 1–3 from existing tells only; `visit` is true only at 3. Added General | Visit tabs. Visit list is Peck, Triangle Christian Center, Campbell Orthodontics, Morton (Wix / dated / TeleVox 2009 / GoDaddy).
- **Verified:** Build + clients HTML test.

### [Monday Aug 17, 2026 · /clients Sent checkbox] — Code

- **Did:** Added `emailed: false` on every lead in `src/data/field-visits.json` and a read-only Sent checkbox column after Stop. Source of truth is the JSON; no send history invented.
- **Verified:** `npm run build`; clients HTML test (31 unchecked boxes).
- **Shipped:** Branch `cursor/clients-sent-checkbox-7a82`.

### [Monday Aug 17, 2026 · /clients field-visit list] — Code

- **Did:** Filled the empty `/clients` stub, then restyled it to a dark dense spreadsheet: one row per lead, industry filter tabs, sticky header, `tel:` and Maps. Leads live in `src/data/field-visits.json` with conservative `industry` labels. Page stays off header/footer nav and is `noindex`. Marketing chrome is omitted on this utility route.
- **Decided:** Match the in-chat xlsx viewer, not the marketing card layout. Kindrachuk & Gilchrist has no industry (name does not state one). Extra stop (Omar Baloch Law) stays in the table and is omitted from the Leesville loop URL.
- **Verified:** `npm run build` (15 routes). `node --test tests/clients-visit-list.test.mjs`. Playwright: 31/6/10/14 rows for All/Churches/Healthcare/Law; screenshots at 390px and 1440px.
- **Shipped:** Branch `cursor/clients-visit-list-7a82`, PR open. Not merged or deployed.
- **Blocked:** Vercel deploy still needs a token or MCP auth.

**Files touched:** `src/data/field-visits.json`; `src/data/field-visits.ts`; `src/pages/clients.astro`; `src/layouts/BaseLayout.astro`; `pages/clients-copy.md`; `tests/clients-visit-list.test.mjs`; `plan.md`.

### [Monday Aug 17, 2026 · Web3Forms activation] — Code

- **Did:** Replaced the `YOUR_WEB3FORMS_ACCESS_KEY` placeholder across `/contact`, `/pricing`, and `/studios/church-studio` with the real production key. Extracted the three near-duplicate form implementations into one shared `src/components/InquiryForm.astro`, which owns the Web3Forms hidden fields, honeypot, submit handler, accessible inline success/error states, and the shared field CSS; each page supplies only its own distinct fields via the component's default slot.
- **Decided:** Added a `theme` prop (`light` default, `dark` for Church Studio's Espresso Black/Dark Card context) and a `headingLevel` prop (`h2`/`h3`) to preserve the two real visual/semantic differences between the three original forms, rather than forcing them identical. Used `:global()` selectors in the component's scoped styles for the field-level CSS since that markup is authored in the caller's slot content, not the component's own template. Kept per-page `subject`/`from_name` values so inbox messages stay attributable to their source page. Scope was expanded from the user's original ask (pricing + contact) to include Church Studio after confirming with Alex, since it carried the identical placeholder and plan.md already tracked it as part of the same blocker.
- **Verified:** `npm run build` — 14 routes, zero errors. Playwright against the static build with `api.web3forms.com` network-mocked (intentionally, to avoid sending real test emails before review) confirmed on all three pages: real access key present in the submitted payload, honeypot stays off-screen, correct light/dark theme rendering, and the inline success state fires after submit. Screenshots reviewed at desktop.
- **Shipped:** Implementation commit `755a201` pushed to `main` and deployed to Vercel production as `dpl_3KzX1JzGYG4zaKLLnmvQ7ShNXd8f`, aliased at `https://proudly-psi.vercel.app`.
- **Verified in production:** `/contact`, `/pricing`, and `/studios/church-studio` all returned HTTP 200, each with the real access key confirmed present in its HTML.
- **Blocked:** None for the code change itself. Real-inbox receipt from an actual submission is still unverified — see Follow-up Backlog #1.

**Files touched:** `src/components/InquiryForm.astro` (new); `src/pages/contact.astro`; `src/pages/pricing.astro`; `src/pages/studios/church-studio.astro`; `plan.md`.

### [Thursday Aug 13, 2026 · Morning, fast-path image batch] — Code

- **Did:** Added responsive 640/960/1280px renditions to `/work` card images so VitalWatch stays sharp on high-density displays; added Alex's Strictly Clean `work-index.jpeg`; routed both external work cards through the homepage's shared live-site preview modal; removed the beige outer frames from `/services/web-design` proof images; replaced its After Hours placeholder with the approved `work-index.jpeg` capture.
- **Decided:** Reused the existing route-owned After Hours asset instead of duplicating the binary. Preserved real external URLs as no-JavaScript/new-tab fallbacks while intercepting enhanced clicks for the shared modal. Applied responsive output to every `/work` image card so the grid has consistent rendering quality.
- **Verified:** `git diff --check`; red-green focused coverage followed by `node --test tests/work-index-cards.test.mjs` (3/3); `npm run build` (14 routes); Impeccable detector (one pre-existing off-ramp fluid font endpoint only); Playwright at 1440px and 390px confirmed the Strictly Clean image loads, both modal triggers open, and each iframe receives the correct external URL; headless Chromium full-page checks covered `/work` and `/services/web-design`.
- **Shipped:** Implementation commit `d83ee69` is pushed to `main` and deployed to Vercel production as `dpl_GvwPo3ZHa9GyndtKUn3zauwz8yuJ`, aliased at `https://proudly-psi.vercel.app`.
- **Verified in production:** `/work` returned HTTP 200. Playwright at 1440px and 390px confirmed the Strictly Clean image loads from an optimized responsive source, both external-card modals open with their correct URLs, and the console stays clear.
- **Blocked:** The Web3Forms key remains the standing production blocker.

**Files touched:** `src/pages/work/index.astro`; `src/layouts/BaseLayout.astro`; `src/pages/services/web-design.astro`; `tests/work-index-cards.test.mjs`; `assets.md`; `plan.md`; added `src/assets/case-studies/Strictly-clean/work-index.jpeg`.

### [Tuesday Aug 11, 2026 · Evening, workflow] — Docs

- **Did:** Added a project-level fast path to `AGENTS.md` for bounded Proudly changes. Eligible copy, image, isolated CSS/layout, link, accessibility, and existing-pattern edits now proceed directly without brainstorming interviews, committed specs/plans, worktrees, manufactured tests, repeated verification, or multiple process commits.
- **Decided:** Made the fast path the default when one clear outcome fits within three existing source files plus related assets/tests, while retaining the normal workflow for architecture, dependencies, schemas, security, destructive work, broad redesigns, ambiguity, or cross-system changes. Defined `fast path` as an explicit trigger and `ship` as authorization for one consolidated commit/push/deploy/verify/closeout workflow.
- **Verified:** `git diff --check` and focused diff review. This is an instruction-only change; no site build or browser pass is warranted under the new policy.
- **Blocked:** None. The Web3Forms key remains the standing production blocker.

**Files touched:** `AGENTS.md`; `plan.md` (`## Now`, this entry).

### [Tuesday Aug 11, 2026 · Evening, deployment] — Code

- **Did:** Deployed pushed `main` commit `f2af910` to Vercel production as `dpl_4F3orooKqt1RRBKe5iTyom4Zo21V`, aliased at `https://proudly-psi.vercel.app`.
- **Decided:** Deployed the already verified and pushed commit without additional source changes. Kept the preceding production deployment available as the rollback point.
- **Verified:** Pre-deploy `npm run build` generated 14 routes and `node --test tests/work-index-cards.test.mjs` passed 2/2. Vercel reported READY; public `/work` returned HTTP 200 with a Vercel cache hit, and its HTML contains both `https://www.vitalwatch24.com/` and `https://www.strictlycleandetailing.com/`.
- **Blocked:** Web3Forms remains the standing production blocker.

**Files touched:** `plan.md` (`## Now`, this entry). Production deployment changed external state; no implementation files changed.

### [Tuesday Aug 11, 2026 · Evening, later] — Code

- **Did:** Refreshed `/work` with Alex's supplied After Hours and VitalWatch browser-frame images, added VitalWatch as a fifth external-only project card, and changed Strictly Clean's card from its unfinished Proudly case-study route to the live Strictly Clean website. Added a focused rendered-output regression test and updated the asset ledger.
- **Decided:** Kept VitalWatch route-local instead of inventing a content-collection case study that does not exist. Preserved After Hours as an internal case-study link. External cards open in a new tab with `noopener noreferrer` and say “See Live Site ↗”; internal cards retain “View Project →”. Left Strictly Clean's existing Oat placeholder in place because no replacement image was supplied.
- **Verified:** `npm run build` generated 14 routes with zero errors; `node --test tests/work-index-cards.test.mjs` passed 2/2. Chromium at 1440px and 390px showed five cards, loaded After Hours/VitalWatch images at the intended 4:3 ratio, correct destinations and link attributes, zero console issues, and zero horizontal overflow. The first mobile full-page capture did not scroll, so VitalWatch's lazy image had not entered the viewport; a scrolled recheck loaded it correctly and confirmed the final presentation.
- **Blocked:** Not pushed or deployed. Web3Forms remains the standing production blocker. The Impeccable hook repeated an existing `30px` quote-size advisory and stale-sidecar notice; this change did not touch that typography or the sidecar, so both remain unsuppressed and out of scope.

**Files touched:** `src/pages/work/index.astro`; `src/assets/case-studies/{after-hours-ministry,vital-watch}/work-index.jpeg`; `tests/work-index-cards.test.mjs`; `assets.md`; `docs/superpowers/{specs,plans}/2026-08-11-work-index-card-images*`; `plan.md` (`## Now`, this entry).

### [Tuesday Aug 11, 2026 · Evening] — Code

- **Did:** Removed the sand-colored (`var(--sand)`) background/padding panel behind `/services/branding`'s three proof images (`.proof-visual`), so VitalWatch, Smith Cash, and After Hours Ministry now sit directly on the white surface instead of inside a beige mat. Committed directly to `main` (no branch, per direct request), pushed, and deployed to Vercel production.
- **Decided:** Dropped the container's `border-radius: 16px` alongside the background/padding since it had no visible effect once the background was removed — the image already carries its own 10px radius. Left `web-design.astro` and `ai-and-search-visibility.astro` untouched even though they share the same `.proof-visual` pattern (cloned from this template), since the request was scoped to the branding page specifically.
- **Verified:** `npm run build` — 14 routes, zero errors. Playwright at 1440px and 390px on `/services/branding`: zero console errors, zero overflow. First full-page screenshot showed a large blank gap where the second/third proof rows and the bridge section should be — traced to the page's scroll-reveal `IntersectionObserver` not having triggered yet in a fast headless capture, not a real bug; a re-run that scrolled through the page and waited past the script's 1500ms safety-net timeout showed all 3 proof rows and 5/5 `.rv` elements correctly revealed. Post-deploy: production HTTP 200, HTML confirmed clear of the old sand-background rule.
- **Blocked:** None. Web3Forms placeholder key remains the standing production blocker (unrelated).

**Files touched:** `src/pages/services/branding.astro`; `plan.md` (`## Now`, this entry).

### [Tuesday Aug 11, 2026 · Afternoon, later] — Code

- **Did:** Merged `polish/fraunces-and-case-study-fixes` into `main` (fast-forward, `077cd60..aab20f9`), pushed to GitHub, and deployed to Vercel production.
- **Decided:** Used `--ff-only` since `main` hadn't moved since the branch point (no merge commit needed). Deleted the local branch after merge; it was never pushed to origin, so no remote branch to clean up.
- **Verified:** Production alias `https://proudly-psi.vercel.app` returns HTTP 200; its HTML contains `Fraunces` and the case-study `close-foot` class, confirming the deployed build is the merged one. Vercel reports the deployment (`dpl_9G9bLukVoXK2qM6yPrRAb5S5JdUo`) READY.
- **Blocked:** None for this batch. Web3Forms placeholder key remains the standing production blocker (unrelated to tonight's work).

**Files touched:** `plan.md` (`## Now`, this entry). No source files changed — this entry covers the merge/push/deploy only.

### [Tuesday Aug 11, 2026 · Afternoon] — Code

- **Did:** Landed a four-item visual-polish batch on new branch `polish/fraunces-and-case-study-fixes` (off `main`, 4 commits, not merged): (1) swapped Playfair Display for Fraunces sitewide — Google Fonts link, DESIGN.md typography tokens, and every literal `font-family` reference across components/pages; (2) changed the case-study hero from H1-stacked-above-button to a single row (H1 left, "See Live Site" button right, centered vertically on desktop, button stacks below H1 on mobile); (3) moved the case-study close-band's "Next project: X →" link off the centered CTA stack to a bottom-right foot row near the footer's top hairline, reusing the `next` prop `[slug].astro` already passes; (4) added a "Site" (Home/About/Contact) column to the footer, extending `footer-grid` to five tracks and tightening its gap from 70px to 56px.
- **Decided:** Kept Fraunces at the same weight-500/sizes/letter-spacing as Playfair (typeface swap only, not a re-scale) and added `font-optical-sizing: auto` on the case-study H1 so its variable opsz axis engages at large sizes — confirmed via Playwright screenshots that this reads sturdy rather than soft at 56-78px, so no weight bump was needed. Scoped the close-band fix to repositioning the existing single next-link rather than building the full two-up prev/next band from punch-list item 1 (that still needs `prev` added to `getStaticPaths`, a data/layout change out of scope tonight). Added a narrow, value-specific Impeccable hook ignore for `overused-font: Fraunces` (`.impeccable/config.json`) since the task explicitly named Fraunces as the required replacement and the hook would otherwise re-flag every subsequent edit to files using it.
- **Verified:** `npm run build` — 14 routes, zero errors, at every commit's final state. Playwright at 1440px and 390px against a dedicated local dev server (port 4325, separate from an unrelated Codex worktree's server already running on 4321) across `/`, `/work/legacy-renovations`, `/work/smith-cash-family-law`, and `/work/strictly-clean-detailing` (to confirm the `.is-pending` disabled hero state still renders correctly): zero console errors, zero horizontal overflow at either viewport.
- **Blocked:** Not merged — left on `polish/fraunces-and-case-study-fixes` for Fable/Alex review per instruction. Punch-list item 1's full two-up prev/next band and item 3's live-button color decision remain open.

**Files touched:** `.impeccable/config.json`; `DESIGN.md`; `src/layouts/BaseLayout.astro`; `src/styles/global.css`; `src/components/{CaseStudy,Footer}.astro`; `src/pages/{about,contact,index,pricing}.astro`; `src/pages/services/{index,branding,web-design,ai-and-search-visibility}.astro`; `src/pages/studios/church-studio.astro`; `src/pages/work/index.astro`; `plan.md` (`## Now`, `## Next Session Punch List`, this entry).

### [Tuesday Aug 11, 2026 · 12:45 PM] — Code
- **Did:** Integrated the remaining Legacy feature and Impeccable sidecar commits from Codex worktrees into `main`, aligned the content verifier, moved case-study content images onto Astro's image pipeline, pushed through `d675648`, and deployed production as `dpl_8g6eeAC1zMFxF6jqMf7fuuErkzJ4`.
- **Decided:** Preserved the current browser tilt/video/mobile system while adding Legacy's natural presentation metadata. Kept seven intentionally local source/review media files out of Git, including two `.mov` files over GitHub's normal file limit. Fixed forward after the first integration deployment exposed Astro's raw-asset deduplication edge case for two byte-identical images.
- **Verified:** Content verifier and 14-route build pass; static-preview and production Playwright at 1440px/390px show zero console errors and overflow on homepage, pricing, and Legacy. All three Legacy assets load at intrinsic ratio from emitted WebP URLs; Vercel reports READY.
- **Blocked:** The Web3Forms production key remains missing.

**Files touched:** `assets.md`; `.impeccable/design.json`; `docs/superpowers/{plans,specs}/2026-08-08-legacy-case-feature-refresh*`; `src/assets/case-studies/legacy-renovations/*`; `src/components/CaseStudy.astro`; `src/content.config.ts`; `src/content/case-studies/legacy-renovations/index.md`; `scripts/verify-content-architecture.mjs`; `plan.md` (`## Now`, follow-up item 5, this entry).

### [Tuesday Aug 11, 2026 · 11:42 AM] — Code
- **Did:** Integrated the completed Impeccable sidecar refresh into `main`, bringing `.impeccable/design.json` in line with the current `DESIGN.md` without changing UI or production behavior.
- **Decided:** Kept the current `main` plan and added this record explicitly rather than replacing newer project status with the sidecar worktree's older plan snapshot.
- **Verified:** Sidecar commit records successful JSON parsing, semantic assertions, and an empty Impeccable doctor findings array; the combined site build and production checks follow in this integration session.
- **Blocked:** The Web3Forms production key remains missing.

**Files touched:** `.impeccable/design.json`; `plan.md` (follow-up item 5, this entry).

### [Tuesday Aug 11, 2026 · 10:11 AM] — Code
- **Did:** Rebuilt /pricing as a two-column hero mirroring /contact, with the price ledger above the fold, a three-quote testimonial row, and a slimmed FAQ carrying Care/Growth detail.
- **Decided:** Cut the prior included/moves/plans/close sections and dark form entirely; kept the Service schema, Web3Forms placeholder, and existing form IDs/script binding.
- **Verified:** `npm run build` 14 routes, zero errors; Playwright at 1440px/390px confirms layout, no overflow, no console errors, single form, and unchanged IDs.
- **Blocked:** Work left uncommitted on local main for review. Web3Forms production key still missing.

**Files touched:** `src/pages/pricing.astro`; `plan.md` (`## Now`, `## Recent`, this entry).

### [Tuesday Aug 11, 2026 · 9:38 AM] — Code
- **Did:** Deployed local commit `fd72685` to Vercel production as `dpl_AZuhVZpj8MKG1nVhyorQ3y4K5ttT`, including the approved light pricing card and completed basic cleanup batch.
- **Decided:** Deployed directly from the verified local branch without pushing to GitHub `main`. Kept the immediately prior production deployment `dpl_ChcadqEFu11731a7vFT1QUumXqKk` as the rollback point.
- **Verified:** Vercel reports the deployment READY; the production alias returns HTTP 200; deployed HTML contains the Pricing route and four-column footer, omits Blog from shared chrome, and includes the mobile Contact correction.
- **Blocked:** GitHub remains behind production until a direct push is explicitly approved. The Web3Forms production key is still missing.

**Files touched:** `plan.md` (`## Now`, this entry). Production deployment changed external state; no implementation files changed.

### [Tuesday Aug 11, 2026 · 9:34 AM] — Code
- **Did:** Removed the unfulfilled Blog links and footer column, restored full-width mobile Contact alignment, raised eight Oat placeholder captions to WCAG AA contrast, and repaired the mobile submenu hidden state so closed links leave the keyboard order.
- **Decided:** Removed the Blog promise instead of creating placeholder content, kept the contrast change contextual at `#655b54`, and left the separately owned Impeccable sidecar and pre-existing palette findings unchanged and unsuppressed.
- **Verified:** Content architecture verification and the 14-route build pass. Browser checks at 390px and 1440px confirm four footer columns on desktop, mobile Contact width parity, pointer and keyboard accordion behavior, 4px arrow-link hover and focus motion with reduced-motion fallback, 4.90:1 Oat-label contrast, zero overflow, and zero console errors across five routes.
- **Blocked:** The Web3Forms production key remains missing. Local `main` is eight commits ahead of `origin/main` after this closeout; push and deployment were not part of this batch.

**Files touched:** `docs/superpowers/specs/2026-08-11-basic-site-cleanup-design.md`; `docs/superpowers/plans/2026-08-11-basic-site-cleanup.md`; `src/components/{Header,Footer,CaseStudy}.astro`; `src/styles/global.css`; `src/pages/{contact,about}.astro`; `src/pages/services/{index,ai-and-search-visibility,branding,web-design}.astro`; `src/pages/work/index.astro`; `plan.md` (`## Now`, `## Next Session Punch List`, `## Follow-up Backlog`, this entry).

### [Tuesday Aug 11, 2026 · 9:03 AM] — Code
- **Did:** Replaced `/pricing`'s Espresso price inversion with the site's established Pure White card treatment and kept the `$4,000–$8,000` range together at desktop widths.
- **Decided:** Matched the supplied service-card reference with a Pure White surface, 1px Hairline Grey edge, 16px radius, generous padding, Espresso type, muted supporting copy, and no shadow or motion. Left the surrounding factor ledger and all pricing content unchanged.
- **Verified:** `npm run build` generated 14 routes. Playwright at 1440px and 390px confirmed the specified computed styles, static positioning, responsive column behavior, and no horizontal overflow. The manual Impeccable detector reported only seven pre-existing type-ramp advisories; no exception was added.
- **Blocked:** The Web3Forms placeholder key and stale Impeccable sidecar remain open. The desktop dev check logged one Astro audit fetch error from the development toolbar; mobile logged no console errors.

**Files touched:** `DESIGN.md`; `src/pages/pricing.astro`; `docs/superpowers/specs/2026-08-08-pricing-scanability-polish-design.md`; `docs/superpowers/plans/2026-08-08-pricing-scanability-polish.md`; `plan.md` (`## Now`, this entry).

### [Tuesday Aug 11, 2026 · 8:55 AM] — Code
- **Did:** Deployed commit `7ca6967` to Vercel production as `dpl_8FjoKSuXu4WzkNAL6J8RK3H7wMEk`, restoring parity between GitHub and the public site for the pricing scanability polish and approved quick visual fixes.
- **Decided:** Used the prior production deployment `dpl_BGnkHrzbcba3mp2usCUeX1bAhxje` as the rollback point and preserved all unrelated untracked review media through the existing `.vercelignore` exclusions.
- **Verified:** Local and Vercel builds generated 14 routes; the production alias returns HTTP 200 and its HTML contains the included fact grid, static price callout, factor list, and one-week delivery sentence; Vercel reports the deployment READY.
- **Blocked:** The Web3Forms access key remains a placeholder, so inquiry submissions are still the highest-priority production blocker.

**Files touched:** `plan.md` (`## Now`, this entry). Production deployment changed external state; no source files changed.

### [Saturday Aug 8, 2026 · Evening] — Code
- **Did:** Landed six of the eleven Next Session Punch List items as direct CSS/markup edits: removed the homepage "Process" eyebrow and its dead CSS; resized the "How It Works" step numbers from 14px sans to 32px Playfair Display; added the site's established translateX(4px) hover/focus treatment to homepage "View Project →"; centered the `/about` pullquote; nudged the nav dropdown caret to align with the label baseline; repositioned the case-study "See Live Site" button above the hero image.
- **Decided:** Left the "See Live Site" button color unchanged rather than guessing: its live-URL state already renders near-black `--espresso`, and the grey/muted look is the intentional `.is-pending` disabled state on the three cases without live URLs yet, so darkening it would make a non-functional button look clickable. Scoped the eyebrow removal to the homepage "Process" label only, not a full site sweep, since the other eyebrow-styled elements (nav dropdown category tags, case-study niche label, hero location) are functional identifiers, not the AI-generic scaffolding DESIGN.md's No-Scaffolding Rule targets. Skipped the case-study prev/next two-up band and the homepage card mockup swap (punch list items 1 and 5) as real layout/data changes, not quick edits.
- **Verified:** `npm run build` generated all 14 routes after every edit.
- **Blocked:** Not committed; not yet reviewed by Alex in the browser. Punch list items 1, 2, 5, 9, 10 remain open, and item 3's color question needs a decision.

**Files touched:** `src/pages/index.astro`; `src/pages/about.astro`; `src/components/CaseStudy.astro`; `src/styles/global.css`; `plan.md` (`## Now`, `## Next Session Punch List`, this entry).
