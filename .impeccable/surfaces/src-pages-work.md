---
version: 1
slug: "src-pages-work"
primary_target: "src/pages/work/index.astro"
related_targets:
  - "src/components/CaseStudy.astro"
  - "src/pages/work/smith-cash-family-law.astro"
  - "src/pages/work/legacy-renovations.astro"
  - "src/pages/work/strictly-clean-detailing.astro"
  - "src/pages/work/after-hours-ministry.astro"
---

Scope: the Work cluster - `/work` (portfolio index) plus four case detail pages, all rendered through one shared `CaseStudy.astro` component (layout + CSS live there once; the four page files are data only). Visitor mode: Persuade. Established-world extension of the homepage's "Grounded Workshop" - no new world, no concept roll. One cluster brief; the portfolio is the primary conversion tool (positioning §6).

Audience and job: a reputation-led service-business founder (45-60, non-technical), usually referred, looking at real client work the way their own clients will look at theirs. Job: find a case that rhymes with their situation, believe the work is real and careful, and move to /contact.

Canonical case set (runbook C1, resolved): Smith Cash Family Law, Legacy Renovations, Strictly Clean Detailing, After Hours Ministry - the four with real Framer Works CMS material. NO Vital Watch detail page or index card (homepage proof strip only, per the 2026-08-06 content-reconciliation decision). NO Jubala anywhere - full scrub (runbook C2): no case, no card, no mention, and Jubala source material was not used even as copy inspiration.

Case page structure (CaseStudy.astro, from the Framer case-study template): hero (niche + optional live link + transformation H1 + full-bleed image), a Who / What changed summary band, then The Moment / What We Built / What Changed narrative, an optional real-quote band, and a dark close with the CTA + a next-project link that loops the four together.

Copy sourcing (runbook A2 fallback - the Framer Works CMS was UNREACHABLE this session, plugin not connected): each narrative drafted with judgment from the case-study template's summary fields, positioning.md (§3 the moment, §6 proof, §10 language bank), the homepage card bodies, the four real capability tags per case, and the real review quotes. All four flagged for Alex's copy review (expected, per A2). Not generic, not placeholder.

Quotes: real only. Smith Cash (Kelly S.), Legacy (Tony R.), After Hours (Josh F.) render real quotes. Strictly Clean's real "Kevin W." quote lives in the unreachable CMS - the quote band is OMITTED rather than fabricated (PRODUCT.md: don't fabricate testimonials). Queued for morning.

Imagery:
- Smith Cash + Legacy heroes use real existing screenshots (smith-cash.jpeg, legacy-renovations.jpeg). Legacy also has a live-site link on hand.
- Strictly Clean + After Hours have no local asset and the CMS was unreachable -> on-palette placeholder panels (mockup `.ph` idiom, Oat surface, not a gradient), logged to assets.md + morning queue.
- No inline "What We Built" screenshots on any case (one real image per case, spent on the hero); the narrative carries the build. Additional real captures can be added in the morning.
- Missing live URLs (runbook: skip and queue, do NOT placeholder-substitute a screenshot): Smith Cash, After Hours, Strictly Clean. No fresh Playwright capture attempted (Legacy URL on hand but a real Legacy screenshot already existed; unattended headless capture skipped as low-value/higher-risk - queued).

Locations: only asserted where confident (Smith Cash + Legacy = Raleigh, per the homepage). Strictly Clean + After Hours ship with niche only - location omitted rather than invented.

States: static content pages, no forms. Scroll-reveal gated behind a JS-added `.reveal` class (no-JS / reduced-motion get fully visible content); hero CSS load fade-up under prefers-reduced-motion: no-preference.

Unresolved / builder must not invent:
- Framer Works CMS unreachable; all narrative drafted from local sources per A2, flagged for review.
- Strictly Clean quote + Strictly Clean/After Hours hero imagery are real gaps (CMS), placeholdered/omitted honestly and queued.
- No metrics anywhere (the CMS model has no metrics field; PRODUCT.md forbids implying quantified results).
- Pricing shows no number; CTA subline "Live in weeks, not months."
