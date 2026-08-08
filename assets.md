# Assets Index — astro/proudly

Raw asset staging for the Astro build. Mirrors the Framer project's `assets/` + `assets.md`
convention. Real, shippable images copied into `public/images/` when used; this file tracks
what's on hand, what's placeholder, and what's still missing.

Format per entry: `path | used on | status (real/placeholder/missing) | notes`

**Session note (2026-08-06 overnight):** The Framer Works CMS was UNREACHABLE this run (Framer plugin not connected — expected for an unattended session). So the runbook C4 pulls (Legacy / Strictly Clean banner + Kevin W. quote / After Hours imagery from the CMS) could not happen. Real existing assets were used where on hand; the two cases with no local asset use on-palette placeholder panels (not gradients, not fake photos), all logged below and in the morning queue. No live-site Playwright captures were attempted this run (see Missing captures).

## Case studies

| Asset | Used on | Status | Notes |
|---|---|---|---|
| `src/assets/case-studies/smith-cash-family-law/hero.jpeg` | Smith Cash case, work index, homepage, and service proof | real | Canonical case-owned image. Reused by collection consumers. |
| `src/assets/case-studies/legacy-renovations/hero.jpeg` | Legacy case, work index, homepage, and service proof | real | Canonical case-owned image; live-site link is recorded in the case Markdown. |
| On-palette placeholder panel (Oat, "Live-site capture pending") | `/work/strictly-clean-detailing` hero | placeholder | No local asset; CMS unreachable. CSS panel, not an image file. Swap for a real Strictly Clean photo/screenshot when available. |
| On-palette placeholder panel (Oat, "Live-site capture pending") | `/work/after-hours-ministry` hero | placeholder | No local asset; CMS unreachable. Swap for a real After Hours photo/screenshot when available. |
| Strictly Clean "Kevin W." quote | `/work/strictly-clean-detailing` quote band | missing | Real quote lives in the unreachable CMS. Quote band OMITTED rather than fabricated. Supply the real quote to add it. |
| On-palette placeholder panel (Oat, "Capture pending") | `/work` index card (Strictly Clean, After Hours) | placeholder | Same two cases lack a card thumbnail; placeholder panels used. |

## Services

| Asset | Used on | Status | Notes |
|---|---|---|---|
| Smith Cash canonical case image | `/services/branding` + `/services/web-design` proof 1 | real | Imported from its route-owned folder under `src/assets/case-studies/`. |
| Legacy canonical case image | `/services/branding` + `/services/web-design` proof 2 | real | Imported from its route-owned folder under `src/assets/case-studies/`. |
| On-palette placeholder panel (Oat, "Live-site capture pending") | `/services/branding` + `/services/web-design` proof 3 (After Hours) | placeholder | No local After Hours asset; CMS unreachable. Swap for a real After Hours brand-in-context capture when available. |
| (none — no proof imagery by design) | `/services/ai-and-search-visibility` | N/A | New service, no live precedent (runbook B4). No screenshot proof — expected gap, not an error. |

## Studios

| Asset | Used on | Status | Notes |
|---|---|---|---|
| `public/images/haw-branch-home.jpeg` | `/studios/church-studio` hero | real | Haw Branch Church homepage (in-progress build), worship photo + "There's a seat for you Sunday." headline. |
| `public/images/haw-branch-sunday.jpeg` | `/studios/church-studio` included section (screenshot rail) | real | Haw Branch Plan Your Visit page, hour-by-hour Sunday walkthrough. |
| `public/images/haw-branch-answers.jpeg` | `/studios/church-studio` included section (screenshot rail) | real | Haw Branch page answering a first-time guest's honest questions. |
| `public/images/haw-branch-next.jpeg` | `/studios/church-studio` proof row | real | Haw Branch next-steps section + dark closing footer, First Step invite. Church Studio build still in progress; swap for the launched-site link when live per the copy doc. |

### Missing live-site captures (queued — no placeholder screenshot substituted, per runbook Section C)
- Smith Cash, After Hours, Strictly Clean: no live URL on hand -> fresh live-site screenshots skipped, need Alex to supply URLs.
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
