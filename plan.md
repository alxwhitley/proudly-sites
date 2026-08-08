## Now

**Current Priority:** `/pricing` page is scoped and ready to build, not yet started. DESIGN.md now has a "Pricing Page" section (resolved 2026-08-08, replacing the old "Open Decisions" placeholder): public band $4,000–$8,000 (framed as "most projects land between," not a floor claim) and Ceiling $10,000+ are confirmed and safe to hardcode on this page only. Care Plan ($120/mo) and Growth Plan ($350/mo) are both fully specified with bullets and terms. Admin panel is documented as opt-in, not default — done-for-you updates are the standard Care/Growth posture, self-editable access available on request. Two new DESIGN.md Named Rules govern the page: the Editorial Pricing Layout (center-set prose at ~34rem, a scoped exception to the Whole-Or-Center Rule) and Plan Presentation (Care/Growth render as two hairline-divided columns, never cards, differentiated only by surface step, not color/border/shadow).

Approved copy lives at `Internal/pricing-page-copy-draft.md`. A drafted "What's not included" section (e-signature capture, payment processing fees) was cut at Alex's request and is not part of the approved copy.

A full phased terminal build prompt was handed to Alex this session but has not yet been run: Phase 1 builds `src/pages/pricing.astro` off the approved copy per the two Named Rules above, plus Service schema with `priceRange` matching the FAQ's first answer verbatim; Phase 2 wires `Header.astro`/`Footer.astro` "Pricing" links from the dead `/#pricing` anchor (still open per Follow-up Backlog item 2 below) to `/pricing`; Phase 3 resolves or flags the Web3Forms placeholder key, shared with `/contact`'s same open blocker (Follow-up Backlog item 1). Verification specified per-phase (build + Playwright at 1440/390, particular attention to how the Care/Growth hairline columns stack at 390px). Explicitly scoped to stop after Phase 3 with a summary — no `/impeccable critique` run automatically; Alex wants to see the page directly first and decide whether a critique pass is even needed.

**Repo state (verified against disk, not carried from a prior session's memory):** `main` is current through the case-study detail redesign (`56c4652`, deployed to Vercel production `dpl_4BRYQfMRvb9bTyqM8koVnn6uHi8A`). No branch is currently open. `/pricing` should branch fresh off this clean `main`.

**Next Action:** Alex runs the terminal build prompt in `~/websites/astro/proudly` to build the page. Once built, Alex reviews directly before deciding on an Impeccable critique pass.

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

### 4. Replace case-study product placeholders
- Supply and install three real product-image compositions for each of the four cases, matching the three canonical feature records.
- Preserve the shared alternating structure, stable ratios, descriptive alt text, and restrained parallax behavior.
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

### [Saturday Aug 8, 2026 · Afternoon] — Chat
- **Did:** Resolved DESIGN.md's stale "Open Decisions" pricing placeholder into a new "Pricing Page" section (public band, Care/Growth plan terms, admin-panel framing); drafted and revised `/pricing` copy per Alex's edits (drafted then cut an e-signature/payment-fee "What's not included" section) at `Internal/pricing-page-copy-draft.md`; wrote a phased terminal build prompt for Alex to run separately.
- **Decided:** `/pricing` is a scoped exception to the Whole-Or-Center Rule (new Editorial Pricing Layout rule) and Care/Growth render as hairline columns, not cards (new Plan Presentation rule), both now recorded in DESIGN.md. Self-editable admin panel documented as opt-in, not default. Growth Plan priced at $350/month, Care Plan confirmed at $120/month.
- **Blocked:** The page itself (`src/pages/pricing.astro`) is not yet built — the terminal prompt was handed off this session but not run. The dead `/#pricing` nav link and the Web3Forms placeholder key remain open (Follow-up Backlog items 1 and 2), both scoped into the terminal prompt's Phase 2/3.

**Files touched:** `DESIGN.md`; `Internal/pricing-page-copy-draft.md`; `plan.md` (this entry, `## Now`).

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

### [Saturday Aug 8, 2026 · 11:04 AM] — Code
- **Did:** Branched `overnight/system-fixes-3` off `main` (which already contains `overnight/system-fixes` and `overnight/system-fixes-2`, merged earlier that morning via commit `4363083`, before this session), and shipped three phases, one commit each: a navbar-styled "See Live Site" button on `CaseStudy.astro` (real link when `liveUrl` exists, honest non-interactive pending state otherwise, replacing the old subtle text link); a fix for the Vital Watch dead-end link on the homepage's Featured Work card (redirected from `/work`, since `work/index.astro` itself needed no change); and a full-bleed Honey Gold quote band on `/work` (one display-scale testimonial from Legacy Renovations, plus a DESIGN.md amendment recording the sanctioned exception to the "never a full-bleed field" rule). On direct instruction, merged `overnight/system-fixes-3` into `main` (merge commit `c52d8f9`) and deployed `main` to Vercel production via `vercel --prod` (deployment `dpl_2yXLRtBxwV5wB48ZCJtJ5G5h48F2`, live at `https://proudly-psi.vercel.app`).
- **Decided:** Reinterpreted Phase 2's literal "work/index.astro" target after confirming no entry there lacks a real case page; the actual dead-link bug the phase describes lives on the homepage's Vital Watch card instead, matching a prior critique's finding, so fixed it there and documented the deviation rather than shipping a silent no-op. Picked Tony R.'s Legacy Renovations quote for the gold band (most concrete of the three, not the most generic) and placed it on `/work` rather than home or `/about` (primary conversion surface, no existing testimonial content, thematic continuity with the Legacy card shown just above it). Merged and deployed on explicit instruction even though the branch had not been reviewed by Fable or Alex at merge time; no build or verification blocker existed.
- **Verified:** `npm run build` passed after each of the three phases and again on `main` post-merge. A 26-combination Playwright pass (13 routes x 1440/390, reduced motion) came back with zero overflow and zero console errors. Full-site `/impeccable critique` scored 30/40, 1 P0, 3 P1, 3 P2 (trend 30 -> 28 -> 30), snapshot persisted at `.impeccable/critique/2026-08-08T14-18-04Z__src-pages.md`. Post-deploy, `/` and `/work` on the production URL both return 200.
- **Blocked:** Nothing broke the build. The critique's P0 (both contact forms ship a placeholder Web3Forms key, so every submission fails) and the Legacy Renovations image/copy mismatch are now live on production, not just tracked on a review branch. Item 12 (the live-site iframe modal) was explicitly left untouched per this session's instructions.

**Files touched:** `src/components/CaseStudy.astro`; `src/pages/index.astro`; `src/pages/work/index.astro`; `DESIGN.md`; new `.impeccable/critique/2026-08-08T14-18-04Z__src-pages.md`; `plan.md` (this entry, `## Now`).
