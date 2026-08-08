## Now

**Current Priority:** The case-study pointer-motion pass is complete on `codex/case-study-pointer-motion`. Six explicitly classified browser screenshots use the approved subtle push-away response; heroes, branding artwork, videos, mobile media, placeholders, and touch/reduced-motion contexts stay static. Case-study scroll parallax is retired. Its future use is reserved for a real secondary image on the service-detail pages once that asset and placement are supplied.

**Verification done:** The content verifier passes and the production build generates 14 routes. Playwright verified all four case-study routes: Smith Cash has three pointer targets, Legacy has two, After Hours has one, and Strictly Clean has none. Desktop pointer response and reset pass; reduced motion, mobile touch, and scroll produce no transform; all routes have zero console errors and zero horizontal overflow.

**Branch state:** `codex/case-study-pointer-motion` is based on local `main`; the design spec and implementation plan are committed, while the verified implementation is ready for its feature commit. Production remains on deployment `dpl_25vEEqbCEHCVCd1CPLaTuMEgg7uw`. The pre-existing `#33241b` detector finding and stale Impeccable sidecar remain unchanged and unsuppressed.

**Next Action:** Merge `codex/case-study-pointer-motion` into local `main` and deploy when approved. Add the service-detail secondary image and its restrained scroll parallax only after the real asset is supplied. The Web3Forms placeholder key remains the highest-priority production blocker.

## Follow-up Backlog

Ordered by production impact. Each item should be handled as its own focused task or a tightly related pass.

### 1. Restore form submissions
- Replace `YOUR_WEB3FORMS_ACCESS_KEY` in both `/contact` and Church Studio with the confirmed production key.
- Verify successful submission, failure messaging, spam protection, and receipt at the intended inbox on both forms.

### 2. Repair navigation destinations and mobile behavior
- Resolve the dead `/#pricing` and `/#blog` links by adding real destinations or removing the promises from header and footer navigation.
- Fix the mobile submenu hidden-state behavior so Services and Work expand and collapse only when requested.
- Verify keyboard operation, focus state, Escape/outside-close behavior where applicable, and 390px layout.

### 3. Correct Legacy Renovations proof imagery
- Replace the tile-repair/lead-capture screenshot used across the case, homepage, and service proof surfaces with imagery that matches the kitchen-and-bath narrative, or revise the narrative only if that screenshot is the actual product truth.
- Check every consumer of the canonical Legacy image and prevent headline cropping.

### 4. Replace remaining case-study product placeholders
- Supply and install three real product-image compositions for Strictly Clean, matching its three canonical feature records. Smith Cash, Legacy Renovations, and After Hours are complete on `codex/after-hours-video-review`.
- Preserve the shared alternating structure, stable ratios, descriptive alt text, and browser-only pointer response.
- Track exact required captures in `assets.md` until all twelve slots are real.

### 5. Complete missing case-study material
- Confirm live URLs for Smith Cash, Strictly Clean, and After Hours.
- Supply the real Kevin W. quote for Strictly Clean.
- Supply real hero imagery for Strictly Clean and After Hours, then replace their `/work` card and service-proof placeholders.

### 6. Fix muted-label contrast on Oat
- Replace or contextually deepen `#6d635c` where it renders on Oat so small text reaches WCAG AA 4.5:1 without changing the broader neutral role unnecessarily.
- Recheck every placeholder caption and small label using the same token.

### 7. Correct mobile contact-card alignment
- Remove the desktop `align-items: start` effect when the contact grid collapses to one column.
- Verify the card aligns with the mobile content spine at 390px with no overflow.

### 8. Refresh the Impeccable design-system sidecar
- Handed off to the separate Codex task **Refresh Proudly Impeccable sidecar**.
- Diagnose drift first, then refresh `.impeccable/design.json` from the current `DESIGN.md` without redesigning or changing unrelated UI.

### 9. Resolve the live-button hover palette exception
- Decide whether the pre-existing `#33241b` live-site button hover belongs in the documented tonal ramp or should be replaced by an existing Espresso value.
- Update `DESIGN.md` only if the value is intentionally retained; do not suppress the detector without that decision.

### 10. Finish the remaining service-page design debt
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

### [Saturday Aug 8, 2026 · 4:06 PM] — Code
- **Did:** Replaced case-study scroll parallax with an approved fine-pointer push-away response on six explicitly classified browser screenshots, kept heroes and every non-browser media type static, and documented future service-page parallax as waiting for a real secondary asset.
- **Decided:** Piloted Legacy feature two first and expanded only after Alex approved the live local behavior. Used explicit `mediaKind` metadata rather than filename inference; excluded branding art, videos, mobile presentations, placeholders, touch devices, and reduced-motion contexts.
- **Verified:** Content verification and the 14-route build pass; Playwright confirms target counts of Smith Cash 3, Legacy 2, After Hours 1, Strictly Clean 0, opposite-corner response and neutral reset, static reduced-motion/mobile/scroll behavior, zero console errors, and zero horizontal overflow.

**Files touched:** `DESIGN.md`; `scripts/verify-content-architecture.mjs`; `src/components/CaseStudy.astro`; `src/content.config.ts`; `src/content/case-studies/{smith-cash-family-law,legacy-renovations,after-hours-ministry}/index.md`; `docs/superpowers/specs/2026-08-08-case-study-pointer-motion-design.md`; `docs/superpowers/plans/2026-08-08-case-study-pointer-motion.md`; `plan.md`.

### [Saturday Aug 8, 2026 · 3:49 PM] — Code
- **Did:** Merged every named local branch into `main`, reconciled the Pricing and case-media session state, added a narrow Vercel exclusion file for untracked raw review/source media, and deployed the combined 14-route site to Vercel production as `dpl_25vEEqbCEHCVCd1CPLaTuMEgg7uw`, aliased to `https://proudly-psi.vercel.app`.
- **Decided:** Did not merge the two detached Codex worktrees as branches: the sidecar refresh remains separately owned, while the alternate Legacy-only implementation is superseded by the approved three-case integration. Stopped the first Vercel upload when it attempted to package 1.7 GB of untracked ProRes/source media; preserved those files locally and excluded only the known untracked sources before redeploying.
- **Verified:** `git branch --no-merged main` is empty; the content verifier passes; the production build generates 14 routes; Playwright passes for Pricing and the three updated case studies at 1440px and 390px with in-view After Hours playback; all four production URLs return HTTP 200.
- **Blocked:** GitHub push remains blocked because the repo has no remote and public repository creation requires explicit approval.

**Files touched:** `plan.md` (`## Now`, this entry); new `.vercelignore`.

### [Saturday Aug 8, 2026 · Evening] — Code
- **Did:** Built `/pricing` on new branch `pricing/build` (off `main`, three commits: carry forward the approved DESIGN.md/plan.md pricing resolution, build the page, wire nav): hero, What's Always Included, What Moves the Number, Care/Growth hairline plan columns, FAQ accordion, Service schema JSON-LD, and a closing inquiry form. Repointed both instances of Header.astro's dead `/#pricing` link (desktop nav and mobile menu) to `/pricing`.
- **Decided:** Duplicated `/contact`'s inquiry form fields and Web3Forms wiring into `/pricing` rather than extracting a shared component, since `/contact`'s form is page-inline markup, not an importable component, and Church Studio already established the same duplicate-per-page precedent. Interpreted the Editorial Pricing Layout's "center-set" as centered headings and short intros with left-set body copy and lists inside the narrow column, since fully centering multi-line prose reads poorly, flagged for Alex to confirm or correct. Footer.astro was left untouched, it never had a Pricing link to begin with.
- **Verified:** `npm run build` passed after every phase. Playwright at 1440px and 390px with reduced motion confirmed zero horizontal overflow and zero console errors on `/pricing`, and spot-checked `/`, `/about`, `/work` after the nav change with the same result. Care/Growth columns sit side by side at 1440px and stack cleanly (Care above Growth, horizontal hairline) at 390px, confirmed by computed layout, not just a screenshot glance.
- **Blocked:** Web3Forms access key is still `YOUR_WEB3FORMS_ACCESS_KEY` on `/pricing`, `/contact`, and Church Studio alike (Follow-up Backlog item 1). No real key exists anywhere in the project (`.env.local` holds only a Vercel OIDC token). Branch `pricing/build` is not merged, per instruction. No `/impeccable critique` was run, per instruction.

**Files touched:** `DESIGN.md`; `plan.md` (carried-forward pricing resolution, then this entry, `## Now`); new `src/pages/pricing.astro`; `src/components/Header.astro`.

### [Saturday Aug 8, 2026 · Afternoon] — Chat
- **Did:** Resolved DESIGN.md's stale "Open Decisions" pricing placeholder into a new "Pricing Page" section (public band, Care/Growth plan terms, admin-panel framing); drafted and revised `/pricing` copy per Alex's edits (drafted then cut an e-signature/payment-fee "What's not included" section) at `Internal/pricing-page-copy-draft.md`; wrote a phased terminal build prompt for Alex to run separately.
- **Decided:** `/pricing` is a scoped exception to the Whole-Or-Center Rule (new Editorial Pricing Layout rule) and Care/Growth render as hairline columns, not cards (new Plan Presentation rule), both now recorded in DESIGN.md. Self-editable admin panel documented as opt-in, not default. Growth Plan priced at $350/month, Care Plan confirmed at $120/month.
- **Blocked:** The page itself (`src/pages/pricing.astro`) is not yet built — the terminal prompt was handed off this session but not run. The dead `/#pricing` nav link and the Web3Forms placeholder key remain open (Follow-up Backlog items 1 and 2), both scoped into the terminal prompt's Phase 2/3.

**Files touched:** `DESIGN.md`; `Internal/pricing-page-copy-draft.md`; `plan.md` (this entry, `## Now`).

### [Saturday Aug 8, 2026 · 3:13 PM] — Code
- **Did:** Implemented the approved case-study product media on `codex/after-hours-video-review`: three stitched stills for Smith Cash, a transparent brand mark plus two stitched stills for Legacy Renovations, and After Hours' desktop browser video, stitched still, and separate mobile-behavior video in section 1, section 2, section 3 order. Updated the matching feature copy and the shared renderer for intrinsic transparent media ratios, mobile video presentation, and reduced motion.
- **Decided:** Left VitalWatch out because it has no matching canonical case record and left Strictly Clean's three placeholders because no approved media was supplied. Preserved the uploaded ProRes alpha masters untouched and created small tracked VP9-alpha delivery derivatives. Left the pre-existing live-button hover finding and stale Impeccable sidecar unchanged and unsuppressed.
- **Verified:** The content verifier passes and the Astro build generates 13 routes. Playwright at 1440px and 390px confirmed exact media order, zero overflow, zero console errors, in-view video playback, and reduced-motion pause behavior across all three affected routes. No deploy or publish was run.

**Files touched:** `docs/superpowers/plans/2026-08-08-case-study-media-integration.md`; `scripts/verify-content-architecture.mjs`; `src/content.config.ts`; `src/pages/work/[slug].astro`; `src/components/CaseStudy.astro`; `src/content/case-studies/{smith-cash-family-law,legacy-renovations,after-hours-ministry}/index.md`; nine approved media delivery assets under matching `src/assets/case-studies/` folders; `assets.md`; `plan.md` (`## Now`, Follow-up Backlog item 4, this entry).

### [Saturday Aug 8, 2026 · 12:03 PM] — Code
- **Did:** Consolidated every known out-of-scope production, navigation, case-study content, accessibility, contact-layout, Impeccable drift, palette, and service-page issue into an ordered `plan.md` follow-up backlog with acceptance and verification intent; added the twelve case-feature image slots to `assets.md`; marked the sidecar refresh as handed off to its separate Codex task.
- **Decided:** Kept implementation work separated by production impact and shared surface rather than combining unrelated fixes into one catch-all pass. Assets remain tracked in `assets.md`; executable work remains canonical in `plan.md`.

**Files touched:** `plan.md`; `assets.md`.

### [Saturday Aug 8, 2026 · 11:55 AM] — Code
- **Did:** Reshaped all four case-study detail pages through Impeccable into exactly three project-specific product-proof rows with alternating desktop composition, text-first mobile stacking, honest replaceable image placeholders, and restrained desktop parallax; replaced the retired `moment` / `built` / `changed` content fields with a validated three-feature schema; documented the durable case-study and motion rules in `DESIGN.md`; committed to `main` as `56c4652` and deployed to Vercel production as `dpl_4BRYQfMRvb9bTyqM8koVnn6uHi8A` at `https://proudly-psi.vercel.app`.
- **Decided:** Kept the hero, Who / What Changed summary, testimonial, live-site control, closing CTA, and next-project link unchanged. Limited parallax to the case-study product imagery on motion-enabled desktop only, with static mobile and reduced-motion behavior. Preserved missing imagery as explicit neutral placeholders rather than fabricated screenshots.
- **Verified:** `npm run build` generated 13 routes; Playwright covered four case routes at 1440px and 390px with zero console errors and zero overflow, exactly three features per route, working parallax, and no reduced-motion transform; all four production case URLs returned HTTP 200.
- **Blocked:** No release blocker. The Web3Forms placeholder key remains the highest-priority production issue. The pre-existing live-button hover color hook finding and stale Impeccable sidecar remain unchanged.

**Files touched:** `DESIGN.md`; `src/components/CaseStudy.astro`; `src/content.config.ts`; `src/content/case-studies/{smith-cash-family-law,legacy-renovations,strictly-clean-detailing,after-hours-ministry}/index.md`; `src/pages/work/[slug].astro`; `plan.md`.

### [Saturday Aug 8, 2026 · 11:24 AM] — Code
- **Did:** Replaced four static case-study route records and the duplicated `src/data/work.ts` index with validated Astro Markdown collections and one dynamic `/work/[slug]` route; moved the two real case images into slug-owned `src/assets` folders; wired the work index, homepage features, header, footer, and service proof pages to the canonical records; added the future blog collection, content inbox rooms, fixed-page copy contracts, route map, naming conventions, content verifier, and AGENTS.md routing table.
- **Decided:** Used route-owned `src/assets/<content-type>/<slug>/` folders rather than putting images inside `src/content/`, preserving direct slug retrieval while allowing Astro image validation and optimization. Kept missing quotes, URLs, and images as explicit open items rather than fabricating content. Left pre-existing design-hook findings and the stale Impeccable sidecar unchanged because no visual design values changed.
- **Verified:** `node scripts/verify-content-architecture.mjs` passes for four canonical cases; `npm run build` generates all 13 routes; Playwright confirms the four case URLs and headings, four `/work` cards, zero console errors, and no horizontal overflow on the Legacy case at 390px.

**Files touched:** `.gitignore`; `AGENTS.md`; `CLAUDE.md`; `assets.md`; `structure.md`; `content-inbox/**`; `pages/{README,home-copy,about-copy,contact-copy,services-copy}.md`; `docs/superpowers/plans/2026-08-08-content-architecture.md`; `scripts/verify-content-architecture.mjs`; `src/content.config.ts`; `src/content/**`; `src/assets/case-studies/**`; `src/components/{Header,Footer}.astro`; `src/pages/index.astro`; `src/pages/services/{index,branding,web-design}.astro`; `src/pages/work/{index,[slug]}.astro`; removed `src/data/work.ts`, the four static work routes, and the two duplicate `public/images` case files; `plan.md`.
