# Assets Index — astro/proudly

Raw asset staging for the Astro build. Mirrors the Framer project's `assets/` + `assets.md`
convention. Real, shippable images copied into `public/images/` when used; this file tracks
what's on hand, what's placeholder, and what's still missing.

Format per entry: `path | used on | status (real/placeholder/missing) | notes`

**Session note (2026-08-06 overnight):** The Framer Works CMS was UNREACHABLE this run (Framer plugin not connected — expected for an unattended session). So the runbook C4 pulls (Legacy / Strictly Clean banner + Kevin W. quote / After Hours imagery from the CMS) could not happen. Real existing assets were used where on hand; the two cases with no local asset use on-palette placeholder panels (not gradients, not fake photos), all logged below and in the morning queue. No live-site Playwright captures were attempted this run (see Missing captures).

## Case studies

### Product-image standard

When Alex supplies two screenshots for a case-study product image, stitch them vertically so they read as one continuous, longer webpage inside a single browser window. Add one browser bar at the top, a slight outer corner radius, and a subtle shadow. The canvas outside the browser must be transparent: no gradient, color field, scene, or device background. Preserve the supplied website UI, imagery, and text pixel-for-pixel through deterministic compositing; do not use image generation to redraw or reinterpret the screenshots. Save each first-pass candidate in `content-inbox/assets/` for visual approval, one product image at a time. Do not move it into the canonical `src/assets/case-studies/<slug>/` folder or wire it into a case study until Alex explicitly approves it.

| Asset | Used on | Status | Notes |
|---|---|---|---|
| `src/assets/case-studies/smith-cash-family-law/hero.jpeg` | Smith Cash case, work index, homepage, and service proof | real | Canonical case-owned image. Reused by collection consumers. |
| `src/assets/case-studies/legacy-renovations/hero.jpeg` | Legacy case, work index, homepage, and service proof | real | Canonical case-owned image; live-site link is recorded in the case Markdown. |
| `src/assets/case-studies/legacy-renovations/legacy-brand-mark.png` | Legacy feature 1, branding | real | Alpha-cropped copy of the approved Legacy identity mark; source remains intact in the canonical checkout. |
| `src/assets/case-studies/legacy-renovations/legacy-homepage-quote-path.png` | Legacy feature 2, new-client inquiry path | real | Approved stitched browser composition with transparent background; rendered uncropped. |
| `src/assets/case-studies/legacy-renovations/legacy-services-navigation.png` | Legacy feature 3, service discovery and search structure | real | Approved stitched browser composition with transparent background; rendered uncropped. |
| On-palette placeholder panel (Oat, "Live-site capture pending") | `/work/strictly-clean-detailing` hero | placeholder | No local asset; CMS unreachable. CSS panel, not an image file. Swap for a real Strictly Clean photo/screenshot when available. |
| On-palette placeholder panel (Oat, "Live-site capture pending") | `/work/after-hours-ministry` hero | placeholder | No local asset; CMS unreachable. Swap for a real After Hours photo/screenshot when available. |
| Strictly Clean "Kevin W." quote | `/work/strictly-clean-detailing` quote band | missing | Real quote lives in the unreachable CMS. Quote band OMITTED rather than fabricated. Supply the real quote to add it. |
| `src/assets/case-studies/after-hours-ministry/work-index.jpeg` | `/work` index card + `/services/web-design` proof row (After Hours) | real | Approved 4:3 browser-frame capture supplied by Alex. |
| `src/assets/case-studies/Strictly-clean/work-index.jpeg` | `/work` index card (Strictly Clean) | real | Approved 4:3 browser-frame capture supplied by Alex; the card opens the live site in the shared preview modal. |
| `src/assets/case-studies/vital-watch/work-index.jpeg` | `/work` index card (Vital Watch) | real | Approved 4:3 browser-frame capture supplied by Alex; served with responsive high-density renditions and linked directly to the live site. |
| `src/assets/case-studies/smith-cash-family-law/case-study-section-{1,2,3}.png` | Smith Cash case product-proof rows | real | Three approved stitched browser images, presented in section order with transparent surroundings. |
| `src/assets/case-studies/legacy-renovations/section1-branding.png` and `section{2,3}-browser.png` | Legacy case product-proof rows | real | Approved transparent brand mark followed by two stitched browser images. |
| `src/assets/case-studies/after-hours-ministry/section1-browser.webm`, `case-study-section2.png`, and `section3-mobile.webm` | After Hours case product-proof rows | real | Approved desktop browser video, stitched browser still, then mobile-behavior video without browser chrome. The uploaded ProRes alpha masters remain untouched and uncommitted; tracked VP9-alpha derivatives are the browser-deliverable versions. |
| Three product-feature image slots | `/work/strictly-clean-detailing` alternating proof rows | placeholder | Neutral labeled placeholders remain because no approved Strictly Clean feature media was supplied. |

## Services

| Asset | Used on | Status | Notes |
|---|---|---|---|
| Smith Cash canonical case image | `/services/branding` + `/services/web-design` proof 1 | real | Imported from its route-owned folder under `src/assets/case-studies/`. |
| Legacy canonical case image | `/services/branding` + `/services/web-design` proof 2 | real | Imported from its route-owned folder under `src/assets/case-studies/`. |
| On-palette placeholder panel (Oat, "Live-site capture pending") | `/services/branding` proof 3 (After Hours) | placeholder | No local After Hours brand-in-context asset; CMS unreachable. Swap for a real brand capture when available. |
| `src/assets/services/ai-and-search-visibility/search-console-performance.jpeg` | `/services/ai-and-search-visibility` story section | real | Real Google Search Console performance for a client site (clf-church.com visible in the screenshot). Fills the runbook B4 proof gap. Ships unoptimized (1MB, matching the branding page's own proof images) — a compression pass is still open. |

## Studios

| Asset | Used on | Status | Notes |
|---|---|---|---|
| `public/images/haw-branch-home.jpeg` | `/studios/church-studio` hero | real | Haw Branch Church homepage (in-progress build), worship photo + "There's a seat for you Sunday." headline. |
| `public/images/haw-branch-sunday.jpeg` | `/studios/church-studio` included section (screenshot rail) | real | Haw Branch Plan Your Visit page, hour-by-hour Sunday walkthrough. |
| `public/images/haw-branch-answers.jpeg` | `/studios/church-studio` included section (screenshot rail) | real | Haw Branch page answering a first-time guest's honest questions. |
| `public/images/haw-branch-next.jpeg` | `/studios/church-studio` proof row | real | Haw Branch next-steps section + dark closing footer, First Step invite. Church Studio build still in progress; swap for the launched-site link when live per the copy doc. |

### Missing live-site captures (queued — no placeholder screenshot substituted, per runbook Section C)
- Strictly Clean's live URL is `https://www.strictlycleandetailing.com/`; its `/work` card links there directly while a dedicated thumbnail remains pending.
- Legacy: URL on hand (legacykitchenbathroomrenovations.com) but a real screenshot already existed, so no fresh Playwright capture was run this session.

## About

| Asset | Used on | Status | Notes |
|---|---|---|---|
| On-palette placeholder panel (Sand/Oat, "Real photo pending") | `/about` Principles section (photo-split, 2026-08-07 layout reshape) | placeholder | Reshape reverses the page's prior "no placeholder imagery" call with Alex's explicit go-ahead — the section needs a real candid workspace/process photo of Alex, portrait orientation (3:4–4:5), to replace this panel. Not sourced yet; swap before this branch ships. |

---
Status key:
- **real** — actual client asset, ship-ready
- **placeholder** — stand-in used because no real asset existed at build time; flagged for morning fill-in
- **missing** — no asset available, no placeholder found either; page/section skipped, queued
