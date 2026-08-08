## Now

**Current Priority:** `/pricing` implements the approved scanability polish locally: an eight-item hairline fact ledger, one static Espresso price callout, five hairline scope-factor rows, and one-week delivery language. Separately, six quick visual-polish fixes from the Next Session Punch List landed as direct CSS/markup edits: the homepage "Process" eyebrow and step-number sizing, the homepage "View Project" hover treatment, the `/about` quote centering, the nav dropdown caret alignment, and the case-study "See Live Site" button reposition.

**Verification done:** `npm run build` generates 14 routes after both the pricing polish and the punch-list batch. Playwright at 1440px and 390px confirms the pricing layouts specifically (two-column desktop, one-column mobile, static callout, price-first order, one-week copy, zero overflow, zero console errors); the punch-list batch is build-verified only, not yet browser-checked.

**Branch state:** Work is uncommitted on local `main`. Existing unrelated untracked case-study media and the separate After Hours plan remain untouched. The pre-existing stale Impeccable sidecar remains unchanged and unsuppressed.

**Next Action:** Alex reviews the polished `/pricing` page and the six punch-list fixes in the browser; if approved, commit together. The Web3Forms placeholder key remains the highest-priority production blocker. The case-study "See Live Site" button color question (punch list item 3) needs a decision before further action.

## Next Session Punch List

Visual polish batch from 2026-08-08 evening chat review (screenshots against live site). Ordered as raised, not by priority. Distinct from the Follow-up Backlog below.

1. **Case-study close band:** drop the centered "Next project" line under the CTA. Add a two-up row right above the footer hairline instead — previous case study left, next case study right, matching treatment. Pass `prev` alongside the existing `next` in `[slug].astro`'s `getStaticPaths` (same modulo wrap). Still open, a data/layout change, not a quick edit.
2. **Heading font:** Playfair Display is hard to read at large display sizes when blown up. Revisit for headings. No replacement direction decided yet. Still open.
3. **Case-study hero "See Live Site" button:** ~~change from grey/muted to solid black.~~ Reposition lower, sitting right above the hero image instead of top-right of the header row. **Reposition done** (`CaseStudy.astro`). **Color still open:** the live-URL state already renders `--espresso` (near-black); the grey/muted look is the intentional `.is-pending` disabled state on the three cases without a live URL yet. Needs a decision, not a mechanical fix, since solidifying it would make a non-working button look clickable.
4. **`/about` quote band** ("A referral is a moment of trust..."): ~~left-aligned in the tan section, should be centered.~~ **Done** — `.thesis-line` now centers itself and its text in `about.astro`.
5. **Homepage case-study preview cards:** replace the browser-chrome mockup style (full window frame + shadow) with the same no-background/slight-shadow/tilt product-image treatment used on the case study pages. Reuse the existing per-case images already used on the case pages — no new captures. Still open, a visual redesign, not a quick edit.
6. **Text link hover consistency:** ~~homepage "View Project →" has no hover effect.~~ **Done for the flagged instance** — `.text-link` now uses the site's translateX(4px) hover/focus pattern in `index.astro`. **Still open:** the broader site-wide audit for other inconsistent link hovers was not performed.
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

### [Saturday Aug 8, 2026 · Evening] — Code
- **Did:** Landed six of the eleven Next Session Punch List items as direct CSS/markup edits: removed the homepage "Process" eyebrow and its dead CSS; resized the "How It Works" step numbers from 14px sans to 32px Playfair Display; added the site's established translateX(4px) hover/focus treatment to homepage "View Project →"; centered the `/about` pullquote; nudged the nav dropdown caret to align with the label baseline; repositioned the case-study "See Live Site" button above the hero image.
- **Decided:** Left the "See Live Site" button color unchanged rather than guessing: its live-URL state already renders near-black `--espresso`, and the grey/muted look is the intentional `.is-pending` disabled state on the three cases without live URLs yet, so darkening it would make a non-functional button look clickable. Scoped the eyebrow removal to the homepage "Process" label only, not a full site sweep, since the other eyebrow-styled elements (nav dropdown category tags, case-study niche label, hero location) are functional identifiers, not the AI-generic scaffolding DESIGN.md's No-Scaffolding Rule targets. Skipped the case-study prev/next two-up band and the homepage card mockup swap (punch list items 1 and 5) as real layout/data changes, not quick edits.
- **Verified:** `npm run build` generated all 14 routes after every edit.
- **Blocked:** Not committed; not yet reviewed by Alex in the browser. Punch list items 1, 2, 5, 9, 10 remain open, and item 3's color question needs a decision.

**Files touched:** `src/pages/index.astro`; `src/pages/about.astro`; `src/components/CaseStudy.astro`; `src/styles/global.css`; `plan.md` (`## Now`, `## Next Session Punch List`, this entry).

### [Saturday Aug 8, 2026 · 4:27 PM] — Code
- **Did:** Polished `/pricing` from two repeated narrow bullet columns into an eight-item two-column fact ledger and a static Espresso price callout beside five hairline scope-factor rows; changed the build timeline from roughly one month to roughly one week; documented the approved structure and implementation plan.
- **Decided:** Kept the price callout static and made it the only dark surface in the opening pricing sequence. Preserved light Care/Growth and FAQ sections between it and the existing dark closing inquiry. Left all pricing figures, plan terms, FAQ content, form behavior, and navigation unchanged.
- **Verified:** `npm run build` generated 14 routes; Playwright at 1440px and 390px confirmed desktop and mobile column behavior, 390px document width with no overflow, static price-first callout order, one-week copy, and zero console errors; the single detector pass returned only seven existing type-ramp advisories.
- **Blocked:** The Web3Forms placeholder key and stale Impeccable sidecar remain open. No commit or deploy was made because unrelated untracked media is present and Alex has not yet approved the rendered polish.

**Files touched:** `DESIGN.md`; ignored canonical draft `Internal/pricing-page-copy-draft.md`; `src/pages/pricing.astro`; `docs/superpowers/specs/2026-08-08-pricing-scanability-polish-design.md`; `docs/superpowers/plans/2026-08-08-pricing-scanability-polish.md`; `plan.md` (`## Now`, this entry).

### [Saturday Aug 8, 2026 · 4:06 PM] — Code
- **Did:** Replaced case-study scroll parallax with an approved fine-pointer push-away response on six explicitly classified browser screenshots, kept heroes and every non-browser media type static, merged the feature into local `main`, and deployed it to Vercel production as `dpl_BGnkHrzbcba3mp2usCUeX1bAhxje`.
- **Decided:** Piloted Legacy feature two first and expanded only after Alex approved the live local behavior. Used explicit `mediaKind` metadata rather than filename inference; excluded branding art, videos, mobile presentations, placeholders, touch devices, and reduced-motion contexts.
- **Verified:** Content verification and the 14-route build pass before and after merge; all four production case URLs return HTTP 200; live Playwright confirms target counts of Smith Cash 3, Legacy 2, After Hours 1, Strictly Clean 0, zero console errors, and zero horizontal overflow.

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
