---
version: 1
slug: "src-pages-services"
primary_target: "src/pages/services/index.astro"
related_targets:
  - "src/pages/services/branding.astro"
  - "src/pages/services/web-design.astro"
  - "src/pages/services/ai-and-search-visibility.astro"
---

Scope: the Services cluster - `/services` (overview index) plus three detail pages (`/services/branding`, `/services/web-design`, `/services/ai-and-search-visibility`). Visitor mode: Persuade. Established-world extension of the homepage's "Grounded Workshop" - no new world, no concept roll, no comp. Built on the live shared system (BaseLayout / global.css tokens + chrome). One cluster brief covers all four near-identical template pages (overnight-run efficiency); per-page specifics noted below.

Audience and job: a reputation-led service-business founder (45-60, non-technical), usually referred, evaluating whether Proudly can deliver the one piece they care about (a brand / a site design / being found). Job: leave believing the claim is proven by real client work, not asserted, and move to /contact.

Chosen direction: the services-copy.md "picture-forward proof" pattern rebuilt on the live tokens. Each detail page = hero (eyebrow + outcome H1 + one-line lead), 2-3 real client proof rows (alternating image + decision caption, never a feature list), a two-card "Bigger Picture" bridge to the other two services (the one-person differentiator, stated once per page), and the homepage closing-CTA reused verbatim. The index = hero + three linked service cards + one differentiator line + the same close.

Copy sourcing (per runbook A2): Branding + Web Design copy from `~/websites/framer/proudly/pages/services-copy.md` (authoritative). Search & AI Visibility is a NEW service seeded from the homepage capability-card 3 ("Search & AI Visibility") and expanded; it has no case-study proof by design (runbook B4). All copy drafted for Alex's morning review.

Service-line change (runbook B2): "Web Development" is permanently retired and replaced by "Search & AI Visibility" everywhere - no Web Development slug, nav item, card, or copy anywhere in the build. Slug is `ai-and-search-visibility` (runbook-mandated). Display name unified on "Search & AI Visibility" to match the already-shipped homepage card 3 and footer (runbook cites the homepage card as the established precedent). NOTE for morning queue: runbook prose calls it "AI and Search Visibility"; chose "Search & AI Visibility" for consistency with the shipped homepage/footer - Alex to confirm the exact string.

Proof imagery:
- Branding + Web Design proof rows use real existing assets: `smith-cash.jpeg` (Smith Cash live-site screenshot) and `legacy-renovations.jpeg` (Legacy). These satisfy runbook B4's live-site-screenshot requirement from assets already on hand.
- The third proof on each (After Hours Ministry) has no local asset and the Framer CMS is unreachable this session (plugin not connected) -> on-palette placeholder panel (mockup `.ph` idiom, Oat surface, not a gradient), logged to assets.md + morning queue.
- Search & AI Visibility ships with NO screenshot proof (runbook B4: new service, no live precedent) - expected gap, not an error. Its middle is honest capability explanation, no fabricated results (PRODUCT.md: SEO/GEO strategy currently void; don't overstate evidence).

States: static content pages, no forms. Scroll-reveal gated behind a JS-added `.reveal` class (no-JS / reduced-motion get fully visible content); hero CSS load fade-up under prefers-reduced-motion: no-preference. Same motion contract as /about.

Unresolved / builder must not invent:
- Framer Works CMS was unreachable (plugin not connected) - all case/service copy drafted from local sources per A2 fallback order, flagged for review.
- Search & AI Visibility claims are capability-framed only; no ranking results, no case proof (PRODUCT.md SEO/GEO void).
- Pricing shows no number (homepage precedent); CTA subline "Live in weeks, not months."
- Display-name string for the third service ("Search & AI Visibility" vs runbook's "AI and Search Visibility") pending Alex.
