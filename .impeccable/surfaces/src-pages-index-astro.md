---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Homepage surface brief

- Scope: `/`, Persuade mode. Reproduce the current Framer New-build homepage in Astro rather than inventing a new direction.
- Audience/job: reputation-led service-business founders must recognize their website problem, trust Alex's direct involvement, inspect real work, and contact him.
- Primary action: visit `/contact` through “Get in Touch” in the hero and “Let’s Work Together” at the close.
- Proof/content: Smith Cash Family Law, Vital Watch, Legacy Renovations, Alex’s real founder photo, three real testimonials, and the existing Google review tile.
- Approved composition: `.impeccable/framer-home-desktop.jpg` and `.impeccable/framer-home-mobile.jpg`. Exact Framer structure and breakpoint behavior are authoritative.
- Memorable moment: the centered serif hero with terracotta italic emphasis, sparse star field, and direct-work founder chip resolves into a compact proof strip before the case-study sequence.
- Fidelity inventory: semantic nav, headings, body copy, buttons, tags, process cards, testimonial cards, footer columns, and star field in HTML/CSS; project and founder photography as local raster assets; no generated imagery ships.
- Component grammar: warm cream/white and espresso fields; subtle 1px hairlines; 8–12px card rounding; flat surfaces; offset shadow only on the primary CTA; Playfair Display headings and Lato body.
- Unresolved content: preserve current Framer-rendered content exactly, including Vital Watch, current CTA labels, numberless pricing language, current service-card mismatch, three testimonials plus rating tile, and sitemap footer. These are copied as visual/content fidelity, not declared reconciled product decisions.

## Shipped record

- Implementation: `src/pages/index.astro`, completed as a single Astro page with semantic HTML, page-scoped global CSS, responsive breakpoints at 800/801px, and local raster assets.
- Visual disposition: PASS against the approved desktop and mobile Framer references.
- Accepted fidelity exceptions: the incumbent Lato family remains the functional sans, and the implemented mobile type sizes remain intentionally compact to match the reference.
- Responsive behavior: desktop alternating two-column projects collapse to a single column; proof clients become a 2×2 grid; service, process, review, about, and footer grids stack; desktop navigation collapses to a menu glyph.
- Motion: the hero uses a one-time 12px fade-up sequence only when reduced motion is not requested. No continuous motion ships.
- Resolved system decision: process cards establish the dedicated Dark Card surface (`rgb(61,36,22)`) on Espresso Black with a translucent white hairline; this resolution is now reflected in `DESIGN.md`.
- Scope boundary: the hero star field, centered first viewport, exact narrative order, content mismatches, and footer sitemap are homepage-specific fidelity decisions and are not promoted to global design-system rules.
