## Now

**Current Priority:** /pricing has been rebuilt in Astro with a two-column hero (copy and hairline price ledger left, light form card right), a three-quote testimonial row, and an FAQ carrying the remaining Care/Growth detail. The work is uncommitted on local main for review.

**Verification done:** `npm run build` generates 14 routes with zero errors. Playwright checks at 1440px and 390px confirm a two-column desktop hero, a single-column mobile layout with the H1 above the form, zero horizontal overflow, and zero console errors. Only one form exists; the form IDs `pricing-form`, `pricing-form-success`, and `pricing-form-error` are unchanged and the submit script binds to them.

**Branch state:** Local main has uncommitted changes in `src/pages/pricing.astro` and `plan.md` (this update). GitHub `origin/main` remains behind production until a direct push is explicitly approved. Existing unrelated untracked case-study media and the auto-generated Impeccable critique file remain untouched.

**Next Action:** Review the rebuilt /pricing page, then approve a direct push and Vercel deploy when ready. The Web3Forms placeholder key remains the highest-priority production blocker.

## Next Session Punch List

Visual polish batch from 2026-08-08 evening chat review (screenshots against live site). Ordered as raised, not by priority. Distinct from the Follow-up Backlog below.

1. **Case-study close band:** drop the centered "Next project" line under the CTA. Add a two-up row right above the footer hairline instead — previous case study left, next case study right, matching treatment. Pass `prev` alongside the existing `next` in `[slug].astro`'s `getStaticPaths` (same modulo wrap). Still open, a data/layout change, not a quick edit.
2. **Heading font:** Playfair Display is hard to read at large display sizes when blown up. Revisit for headings. No replacement direction decided yet. Still open.
3. **Case-study hero "See Live Site" button:** ~~change from grey/muted to solid black.~~ Reposition lower, sitting right above the hero image instead of top-right of the header row. **Reposition done** (`CaseStudy.astro`). **Color still open:** the live-URL state already renders `--espresso` (near-black); the grey/muted look is the intentional `.is-pending` disabled state on the three cases without a live URL yet. Needs a decision, not a mechanical fix, since solidifying it would make a non-working button look clickable.
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
- Replace `YOUR_WEB3FORMS_ACCESS_KEY` in both `/contact` and Church Studio with the confirmed production key.
- Verify successful submission, failure messaging, spam protection, and receipt at the intended inbox on both forms.

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
- Handed off to the separate Codex task **Refresh Proudly Impeccable sidecar**.
- Diagnose drift first, then refresh `.impeccable/design.json` from the current `DESIGN.md` without redesigning or changing unrelated UI.

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
