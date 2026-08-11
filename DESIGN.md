---
name: Proudly Sites
description: Custom Framer marketing site for a solo-operator web design studio serving reputation-led service businesses.
colors:
  burnt-terracotta: "rgb(204,70,19)"
  honey-gold: "rgb(243,192,69)"
  pure-white: "rgb(255,255,255)"
  warm-cream: "rgb(245,243,239)"
  pale-nav-grey: "rgb(247,247,247)"
  espresso-black: "rgb(26,15,10)"
  espresso-black-65: "rgba(26,15,10,0.65)"
  pure-white-65: "rgba(255,255,255,0.65)"
  sand: "rgb(237,232,224)"
  oat: "rgb(228,221,211)"
  clay-beige: "rgb(218,207,196)"
  dark-card: "rgb(61,36,22)"
  warm-taupe: "rgb(156,142,135)"
  muted-label: "rgb(109,99,92)"
  hairline-grey: "rgb(221,217,213)"
  true-black: "rgb(0,0,0)"
  mid-grey: "rgb(130,130,130)"
  charcoal-grey: "rgb(84,84,84)"
typography:
  heading-1:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 500
    fontSize: "56px"
    lineHeight: "1.1em"
    letterSpacing: "-0.03em"
  heading-2:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "40px"
    lineHeight: "1.1em"
    letterSpacing: "-0.03em"
  heading-3:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 500
    fontSize: "32px"
    lineHeight: "1.3em"
    letterSpacing: "-0.04em"
  heading-4:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "24px"
    lineHeight: "1.4em"
    letterSpacing: "-0.04em"
  heading-5:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 500
    fontSize: "20px"
    lineHeight: "1.3em"
    letterSpacing: "0px"
  heading-6:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: "1.4em"
    letterSpacing: "-0.02em"
  body-m:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "20px"
    lineHeight: "1.2em"
    letterSpacing: "-0.03em"
  body-s:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: "1.4em"
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "20px"
    lineHeight: "1.6em"
    letterSpacing: "-0.02em"
  body-small:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "14px"
    lineHeight: "1.6em"
    letterSpacing: "-0.02em"
  button:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: "1.3em"
    letterSpacing: "-0.03em"
  highlight:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 400
    fontSize: "36px"
    lineHeight: "1.3em"
    letterSpacing: "-0.03em"
  eyebrow:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "12px"
    lineHeight: "1em"
    letterSpacing: "0.08em"
  nav-link:
    fontFamily: "Lato, -apple-system, sans-serif"
    fontWeight: 400
    fontSize: "15px"
    lineHeight: "1em"
    letterSpacing: "-0.01em"
spacing:
  section-y-min: "120px"
  section-y-max: "160px"
components:
  button-primary:
    backgroundColor: "{colors.burnt-terracotta}"
    textColor: "{colors.pure-white}"
---

# Design System: Proudly Sites

## Overview

**Creative North Star: "The Grounded Workshop"**

Proudly Sites presents itself as a solo-operator's workshop, not an agency floor: Espresso Black grounds the trust-heavy moments (process, footer, the dark CTA), while Warm Cream carries everything else. Ornament is rationed to exactly one tool — Burnt Terracotta and its stacked-shadow CTA button — so the system's one visible gesture of confidence lands exactly where it's earned: on the ask.

The system is a deliberate maturation past the original mockup's more folksy $4–8k "familiar and trustworthy" bar, toward a "clearly better than what I could get elsewhere" read — without touching the palette itself. Same tokens, applied with more restraint and more room to breathe. Photography carries the proof (case-study craft, the founder's own face, real site screenshots) rather than illustration or gradients; nothing here stands in for a real client or a real result.

**Confirmed rejections:** the mockup's untokenized dark brown `#2C1810` (consolidated into Espresso Black); the earlier amber `rgb(250,177,100)` (no longer maps to anything live — do not reintroduce); the mockup's second gold tint `#C49A3C` and its multi-tint service glyphs (collapsed into the single Honey Gold accent); any second or third accent color anywhere in the system.

**Key Characteristics:**
- One accent, ruthlessly: Burnt Terracotta acts, Honey Gold only ever decorates.
- One dramatic gesture, spent exactly once: the hard offset shadow lives on the primary CTA button alone.
- Warm Cream and Espresso Black carry the system; the scale's True Black / Mid Grey / Charcoal Grey sit in reserve, not in the primary language.
- Photography-led proof over illustration or CSS placeholders.
- Generous, unhurried section rhythm — 120–160px of desktop vertical padding.

## Colors

The palette reads warm, grounded, and restrained: cream work-surfaces and espresso-dark sections, with a single decisive accent reserved for action.

### Primary
- **Burnt Terracotta** (`rgb(204,70,19)`): the only action color in the system — reserved for buttons only (CTAs, primary and secondary buttons) and key highlights. Never shared with any other role, and never used for inline text link or link-hover color. Deepened from the original `rgb(231,85,28)` on 2026-08-06 so white button text clears WCAG AA (~4.7:1, was 3.7:1); still a single burnt-terracotta accent.

### Secondary
- **Honey Gold** (`rgb(243,192,69)`): decorative only — the eyebrow tick, review stars, and the dedicated accent surface. Never a button. One sanctioned full-bleed exception, added 2026-08-08: a single-testimonial display-scale pull-quote band (`/work`'s quote-band-gold) — a proof moment, not an ambient background, and still a single deliberate gesture rather than a repeatable pattern. Do not extend Honey Gold to other full-bleed fields without an equally deliberate case.

### Neutral
- **Pure White** (`rgb(255,255,255)`): pure white surfaces, card-on-neutral backgrounds, heading text on dark sections.
- **Warm Cream** (`rgb(245,243,239)`): the primary page background, card-on-white surfaces, tag backgrounds, and the lightest card shade.
- **Pale Nav Grey** (`rgb(247,247,247)`): the nav pill background — this use only.
- **Espresso Black** (`rgb(26,15,10)`): all dark sections (process, footer, dark CTA), light-mode heading text, text set on the Honey Gold accent, and the restricted heavy card border.
- **Espresso Black / 65%** (`rgba(26,15,10,0.65)`): body text on light surfaces.
- **Pure White / 65%** (`rgba(255,255,255,0.65)`): body text on dark surfaces.
- **Sand** (`rgb(237,232,224)`) / **Oat** (`rgb(228,221,211)`) / **Clay Beige** (`rgb(218,207,196)`): a stepped card-shade scale, each one layer deeper than Warm Cream.
- **Dark Card** (`rgb(61,36,22)`): the dedicated inset surface for cards placed on Espresso Black sections, paired with a subtle translucent white hairline.
- **Warm Taupe** (`rgb(156,142,135)`): muted text and tag text.
- **Muted Label** (`rgb(109,99,92)` / `#6d635c`): small uppercase eyebrows, captions, cites, and footer labels — a deeper taupe that clears WCAG AA (≥4.5:1) on cream, white, and the beige surfaces, replacing the earlier ad-hoc light greys (#8e8079 / #867b75 / #8d817a / #81756f) on 2026-08-06.
- **Hairline Grey** (`rgb(221,217,213)`): the default 1px border for surfaces and tags.
- **True Black** (`rgb(0,0,0)`) / **Mid Grey** (`rgb(130,130,130)`) / **Charcoal Grey** (`rgb(84,84,84)`): held in the token scale for edge cases; none are part of the primary visual language above.

### Named Rules
**The One Voice Rule.** Burnt Terracotta is reserved for buttons only. Inline text links are Espresso Black, with no color change on hover — hover reads as motion (a small rightward translate), never a shift toward terracotta. Honey Gold decorates — eyebrow tick, review stars, the accent surface — and is never a button; see the Colors section above for its one sanctioned full-bleed exception (the `/work` quote band). No third accent, anywhere.

## Typography

**Display Font:** Playfair Display, weight 500 (Georgia/serif fallback).
**Body Font:** Lato, regular (system-sans fallback).

**Character:** a confident serif carries headings and the testimonial "Highlight" moments; a plain, efficient sans carries everything functional — body, buttons, nav, labels.

### Hierarchy
- **Heading 1** (Playfair 500, 56px, 1.1 line-height, -0.03em): the hero H1 — the largest serif moment on the page.
- **Heading 2** (40px, 1.1, -0.03em): major section headings, rendered in one of two faces by section type — **Lato** for labelled/eyebrow-led grid sections (Featured Work, Reviews), and **Playfair 500** for narrative and closing sections (About, Process, Closing CTA, and the wall-to-wall-narrative /about page). Same size and role, face chosen by whether the section reads as a data grid or as prose.
- **Heading 3** (Playfair 500, 32px, 1.3, -0.04em): sub-section serif headings.
- **Heading 4** (Lato, 24px, 1.4, -0.04em): minor headings.
- **Heading 5** (Playfair 500, 20px, 1.3, 0em): small serif headings.
- **Heading 6** (Lato, 16px, 1.4, -0.02em, centered): micro-headings.
- **Lead** (Lato, 20px, 1.6, -0.02em): hero subhead and case-study intros.
- **Body M** (Lato, 20px, 1.2, -0.03em) / **Body S** (Lato, 16px, 1.4, -0.03em) / **Body Small** (Lato, 14px, 1.6, -0.02em): body copy at three densities.
- **Highlight** (Playfair regular, 36px, 1.3, -0.03em): testimonial quotes — the one place the lighter serif appears at display scale.
- **Eyebrow** (Lato, 12px, 1em, 0.08em, uppercase): section tag labels.
- **Button** (Lato, 16px, 1.3, -0.03em) / **Nav Link** (Lato, 15px, 1em, -0.01em): interactive label styles.

## Layout

Section vertical padding runs generous — 120–160px desktop top/bottom — deliberately more than the original mockup, so the premium read comes across as unhurried rather than cramped. Card internal padding is likewise increased over the mockup baseline. Heading 1 and Highlight text are given real room; nothing crowds against them.

### Named Rules
**The Unhurried Rule.** Space is added, not trimmed, moving from mockup to build. Generous vertical rhythm is itself part of the premium read.

**The Whole-Or-Center Rule.** Text-only sections (no supporting image) are used sparingly and only for the single most important claim on a page. When used, they are fully center-aligned. Nothing in this system is aligned slightly left of its container: alignment is either flush to the container edge or centered on it.

**The Full-Bleed Rule.** Hairline dividers and section rules run edge to edge within their container. Nothing stops short of the container edge.

## Layout Discipline

**Scope:** service and detail-page templates only — /services and its children (/services/branding, /services/web-design, /services/ai-and-search-visibility, and any future page built on the same template family). This does not touch the homepage or its section grammar.

Confirmed against Sweven.design's structural pattern on 2026-08-07 (layout only — not their palette, type, or branding): service pages read AI-generic when claim after claim runs in plain text with nothing for the eye to land on. The fix is structural, not decorative — every claim earns an image.

### Named Rules

**The Paired Claim Rule.** No two text-only sections run back to back on a service/detail template. Every claim block — an eyebrow-free heading, a 2–3 sentence description, one CTA link — shares its fold with a large real screenshot or photo, never stacked above or below it. Successive claim blocks alternate sides down the page: text-left/image-right, then text-right/image-left. If the image doesn't exist yet, the section waits behind a logged placeholder (`data-placeholder="true"`, tracked in REPLACE.md) rather than shipping as bare text.

**The Scan-Then-Prove Rule.** Every service/detail template opens with a scan layer that gives the reader the whole shape in one pass before the claim blocks prove it underneath. That layer may be a hairline-divided list or a card grid, chosen by content: cards when the items are short parallel facts (a heading plus one or two lines), hairline rows when the items carry more weight. Cards never carry paragraph-length argument, and no card grid is the primary structure of a page. The scan layer stays flat and never interleaves with the claim-block sequence.

**The No-Scaffolding Rule.** No numbered "01/02" scaffolding and no per-section eyebrow dot+label on service/detail templates — both read as AI-generic list-making rather than argument. Section headings carry the page on their own.

## Case Study Proof Sequence

**Scope:** case-study detail pages under `/work/<slug>` only. The hero, Who / What Changed summary, testimonial, closing CTA, live-site control, and next-project link keep their established composition.

### Named Rules

**The Three Proofs Rule.** Every case study carries exactly three project-specific build features selected from supplied project truth. Each feature uses one concise Playfair heading, one short paragraph, and one substantial product image. No generic "The Moment / What We Built / What Changed" sequence, bullets, eyebrows, numbering, or extra scaffolding.

**The Alternating Product Rule.** The three features alternate text-left/image-right, image-left/text-right, then text-left/image-right on desktop. Mobile stacks the related text before its image for all three features. Hairline rules separate the rows, but the sequence remains flat and card-free.

**The Honest Capture Rule.** Missing product imagery uses a clearly labeled neutral placeholder with a stable image ratio and descriptive alt intent. It must be easy to replace through the case study's canonical content entry and must never imitate a finished screenshot. Real product imagery replaces the placeholder without changing the section structure.

## Elevation & Depth

The system is flat by default. Depth appears exactly once, as a deliberate exception: the primary CTA button's hard offset shadow (the stacked black/brown effect). No other surface — card, photo, chip, or nav — carries a shadow. Borders default to Hairline Grey at 1px; the heavier Espresso Black border (1.5px) is reserved for the primary CTA button frame alone. Photos ship borderless, or at most a 1px Hairline Grey edge.

**Hover mechanics.** The offset shadow is fixed — it never moves. On hover, the terracotta face itself travels toward the shadow (a press into it), closing the gap between face and shadow. The shadow does not travel away from the face.

### Named Rules
**The Single Tool Rule.** The workshop keeps one dramatic gesture — the CTA's stacked shadow and heavy frame — and spends it in exactly one place. Everywhere else stays flat, or hairline-thin.

## Components

### Buttons
- **Primary**: Burnt Terracotta background, the system's only hard offset shadow, the heavy Espresso Black frame. This is the one place the workshop's "loud" gesture is allowed.
- **Secondary / Nav CTA**: flat, no shadow — the nav CTA and secondary actions.

### Tags
- **Section Tag** — **RETIRED FROM USE sitewide as of 2026-08-07.** Was paired with the Eyebrow text style (the small uppercase, tracked label opening each section); no longer applied as a section-opener anywhere on the site. The Eyebrow type token stays defined in Typography for any future need, but is not currently applied. This leaves Honey Gold (its color) with reduced usage sitewide — do not reassign Honey Gold to a new role to compensate; it remains reserved for review stars and the accent surface.

### Cards
- **Testimonial Card**: a three-up row of the real testimonials, Playfair Highlight quotes. Previously a 2×2 that padded three testimonials with a standalone "5.0" rating tile; the redundant tile was removed on 2026-08-06 so only real testimonials show.
- **Service Card**: one glyph treatment only — no per-service color tinting.
- Card backgrounds step through the Warm Cream → Sand → Oat → Clay Beige scale depending on surface layering.
- Cards inset into Espresso Black sections use Dark Card with a subtle translucent white hairline.

### Navigation
- **Topbar / Nav Bar**: Pale Nav Grey pill background.

## Do's and Don'ts

### Do:
- **Do** keep Burnt Terracotta as the only action color, everywhere, without exception.
- **Do** reserve the hard offset shadow and the heavy Espresso Black border for the primary CTA button alone.
- **Do** let real photography carry the proof — case-study craft photos, the founder's own headshot, real site screenshots — never a gradient or CSS placeholder.
- **Do** give Heading 1 and Highlight text generous room; don't crowd them against neighboring elements.

### Don't:
- **Don't** reintroduce the old amber `rgb(250,177,100)` — it no longer maps to any live token.
- **Don't** add a third accent color, a per-service tint, or the mockup's second gold (`#C49A3C`) — they collapse into the single Honey Gold accent.
- **Don't** loop or keep anything moving after interaction stops. Case-study scroll parallax is retired. All authored motion is fully off under `prefers-reduced-motion`.

## Motion

Nothing loops or moves after interaction stops. Hero load fade-up 12px 0.55s staggered. Scroll reveals fade-up once at ~15%. Grid stagger 0.08s.

**Case-study browser response.** Inside the three case-study proof rows, only an image explicitly classified as a browser screen may respond to a fine pointer. The image subtly tilts and shifts away from the pointer, then eases to neutral on exit. Heroes, branding and logo art, mobile screens, videos, placeholders, and unclassified images remain static. The behavior is disabled on touch and coarse-pointer devices and under `prefers-reduced-motion`. Rollout begins with one approved pilot image and expands only after visual sign-off.

**Future service-page parallax.** Scroll parallax belongs to a future secondary-image slot on service-detail pages, not to case studies. Do not ship the slot, placeholder markup, or dormant motion code before a real secondary asset and its placement are supplied. When implemented, the image may move vertically by at most 16px during active desktop scrolling, stays static on mobile, and is fully disabled under `prefers-reduced-motion`.

## Pricing Page

**Scope:** `/pricing` only.

**Resolved 2026-08-08.** Public project band is **$4,000–$8,000** (stated in prose as "most projects land between $4,000 and $8,000," not a floor claim), Ceiling $10,000+. Confirmed — may be hardcoded on `/pricing` and its FAQ schema. The $500–900 internal quick-build tier and per-client project numbers (e.g. Timberlake's $6,400) stay off every public page. Church Studio pricing ($700–$950) stays isolated to its own page.

**Post-launch plans, both published in full:**
- **Care Plan** — $120/month ($20 hosting via Vercel Pro, $100 updates/maintenance/support). Unlimited text and photo updates, handled for you — not a self-editable panel by default (see Admin Panel note below). No contract, cancel with 30 days' notice, site and domain stay client's on cancellation, rates hold 12 months.
- **Growth Plan** — $350/month. Everything in Care, plus: monthly search performance reporting, ongoing keyword research, on-page optimization, Google Business Profile management, one new written page per month, AI search visibility monitoring, technical health checks, quarterly strategy call. Same terms as Care. Never outcome-framed — describe work performed, not results delivered.

**Admin panel — offered as an option, not the default.** The done-for-you model ("no dashboard to log into") is the standard Care/Growth posture. A self-editable admin panel remains available as an alternative when a client wants direct access, offered per-client rather than assumed. `/pricing` describes the done-for-you default plainly and may note self-editable access is available on request — never present the admin panel as universal.

### Named Rules

**Scannable Fact Grid.** `/pricing` follows the sitewide Scan-Then-Prove Rule rather than a page-level prose exception — the prior "Editorial Pricing Layout" rule (center-set prose throughout) is retired. Short parallel facts (What's Always Included, eight one-line items) render as a tight fact grid, not paragraphs: two columns of terse label-plus-line rows. No numbering ("01·", "SECTION 01") and no small-caps eyebrow scaffolding — that numbered pattern was already identified as an AI-generic tell and swept off the rest of the site; it does not come back here. Paired driver-and-explanation content (What Moves the Number, five items) renders as hairline rows, label left, explanation right — too much per item for a card, per Scan-Then-Prove. Prose stays reserved for the hero lead and the closing framing only, one or two sentences each, under the ordinary Whole-Or-Center Rule — not the whole page.

**Static Price Card.** The price range callout beside What Moves the Number uses the site's established light-card grammar: a static Pure White surface on the surrounding Warm Cream field, a 1px Hairline Grey edge, a soft 16px radius, generous internal padding, Espresso headings, and muted body copy. It carries the public `$4,000–$8,000` band first, then the `$10,000+` complex-project threshold below one quiet hairline. It is never sticky and uses no accent color, gradient, shadow, or motion. At mobile widths it stacks before the five scope-factor rows.

**Plan Presentation.** Care and Growth are never cards. Per Scan-Then-Prove (hairline rows for items too heavy for a card), they run as two hairline-divided columns. Growth is distinguished from Care by surface step only (Warm Cream vs. Sand) — never by border, shadow, or accent color, since Burnt Terracotta is buttons-only and Honey Gold's full-bleed exception is already spent on `/work`.
