---
version: 1
slug: "src-pages-studios"
primary_target: "src/pages/studios/church-studio.astro"
related_targets:
  - "src/data/studios.ts"
  - "src/components/Header.astro"
  - "src/components/Footer.astro"
---

Scope: the Studios line - `/studios/church-studio` (first entry; more industry verticals planned) plus its nav/footer wiring. Visitor mode: Persuade. Established-world extension of the homepage's "Grounded Workshop" - no new world, no concept roll. Built on the live shared system (BaseLayout / global.css tokens + chrome). Copy source: `pages/church-studio-copy.md` (Alex-drafted, implemented verbatim; the copy doc's `—` em dashes retained as drafted). NOTE: the copy doc originally sat at `src/pages/services/church-studio-page.md`, where Astro compiled it into a public route - moved to the root `pages/` copy-contract folder 2026-08-07.

Audience and job: a pastor or small church leadership team (not a committee) deciding whether to rebuild their site, usually already using Planning Center / Church Center / a giving platform. Job: understand that Church Studio is a fixed, proven eight-page structure (not less craft, less guesswork), see the price band and timeline plainly, and start a dedicated inquiry without leaving the page.

Product context: Studios are a sanctioned exception to two PRODUCT.md rules (no productized tier; no industry targeting in the core message) - documented as an addendum in PRODUCT.md Capabilities and Constraints, 2026-08-07. Industry specificity lives only on this page and its nav entry, never the homepage message.

Chosen direction: long-scroll product page - hero (eyebrow + promise H1 + lead + anchor CTA to `#inquiry`), qualifier list with gold-dot markers + an italic Playfair disqualifier aside (the /about pullquote idiom), the eight-page structure as hairline-ruled editorial rows (the /services index idiom, non-linked), differentiation copy with a gold-ruled Playfair pullquote, a large timeline statement, the Haw Branch proof placeholder (branding.astro `.ph-panel` Oat idiom, logged in assets.md), a large Playfair price range + two hairline factor rows, a native `<details>/<summary>` FAQ (no JS), and a dark Espresso closing holding the dedicated inquiry form on a Dark Card surface (DESIGN.md: cards inset into Espresso Black use Dark Card + translucent white hairline). Identity locked: tokens, Playfair/Lato, gold decorates only, the one terracotta stacked-shadow CTA (hero anchor + form submit).

Nav treatment (Alex-confirmed): Church Studio sits in the Services dropdown BELOW the three services, separated by a hairline divider (`.dd-studios`) with an uppercase "Studios" `.dd-eyebrow` - calm, editorial, no new color (One Voice Rule). Mobile submenu gets a plain hairline divider (`.mobile-studio-divider`) then the studio link. Footer Services column lists it after the three services. Deliberately NOT on the `/services` editorial index - `src/data/studios.ts` is a separate array from `services.ts` for exactly this reason; future studios join that array.

Form: dedicated Church Studio inquiry (Name, Email, Church name, Message), posting to the same Web3Forms endpoint as /contact with a distinct subject/from_name ("New Church Studio inquiry...") per the copy doc's separate-form instruction. Same enhancement contract as /contact: JS inline success + on-palette error, native POST fallback, honeypot. Shares /contact's placeholder access key - form will not deliver until the real key lands (morning-queue item, both forms).

States: static content page; the FAQ is native disclosure (works without JS); scroll-reveal gated behind a JS-added `.reveal` class (no-JS / reduced-motion / headless get fully visible content); hero CSS load fade-up under prefers-reduced-motion: no-preference. Same motion contract as the services cluster.

Unresolved / builder must not invent:
- Haw Branch Church proof is a placeholder by explicit copy instruction ("swap in live site link and screenshot at launch") - not a missing-asset accident.
- Web3Forms access key is the shared placeholder (`YOUR_WEB3FORMS_ACCESS_KEY`).
- Pricing $700-$950 is stated in the approved copy (distinct from the core-brand pricing rule; sanctioned per the PRODUCT.md Studios addendum).
- No a11y standard set for the project (PRODUCT.md [UNDECIDED]); the dark-form field hairlines follow the Dark Card translucent-white convention.
