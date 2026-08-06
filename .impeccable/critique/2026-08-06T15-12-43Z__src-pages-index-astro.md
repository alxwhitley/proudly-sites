---
target: "the homepage for proudly at http://127.0.0.1:43991/"
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
timestamp: 2026-08-06T15-12-43Z
slug: src-pages-index-astro
---
Method: dual-agent (A: a8fd5753c07edc76e · B: a0a5918f93459d3c3)

# Critique — Proudly Sites homepage (`src/pages/index.astro`) · Persuade mode

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Button hover states are good; anchor nav has no active/current-section cue. |
| 2 | Match System / Real World | 3 | Voice is plain and founder-friendly, but "Search & AI Visibility" is jargon and the crop-mark "stars" / ◎▣⌁ glyphs carry no real-world meaning. |
| 3 | User Control and Freedom | 2 | Mobile menu is a cosmetic ☰ glyph with no menu behind it — mobile users cannot navigate at all. |
| 4 | Consistency and Standards | 2 | Three labels for one action; "Pricing" nav scrolls to Process; "we" vs "I"; false dropdown carets on Work/Services. |
| 5 | Error Prevention | 3 | "Book a Free Call" and "Pricing" set expectations the page can't meet. |
| 6 | Recognition Rather Than Recall | 3 | Sections legible; no active-nav cue for orientation. |
| 7 | Flexibility and Efficiency | n/a | Marketing homepage; no power-user paths apply (Persuade). |
| 8 | Aesthetic and Minimalist Design | 4 | Genuine strength — one accent, one shadow, clear hierarchy, room to breathe. (Score does not capture the 23 AA-contrast/legibility failures the detector surfaced — see P1.) |
| 9 | Error Recovery | 3 | No error states on the page; broken mobile nav / anchor mismatches aren't recoverable, but there's nothing to "diagnose." |
| 10 | Help and Documentation | n/a | Phone + contact suffice for a marketing homepage (Persuade). |
| **Total** | | **23/32** | **Good (72%) — dragged down by Consistency (2) and mobile Control (2).** |

Heuristics 7 and 10 marked n/a (Persuade surface); max renormalized to 32.

## Design Specificity Verdict

**On-brand at the surface, category-interchangeable in the skeleton, and two decorative gestures fight the target buyer.**

**LLM assessment:** The visual language is authored for this product and executed with conviction — warm cream + espresso fields, a single terracotta action color, one offset shadow spent only on the ask, Playfair/Lato pairing, photography-led proof. A SaaS could not wear this palette unchanged; it reads as "The Grounded Workshop." Content choices are specific too ("Their Craft, Presented Well" flatters the client's craft, not Alex's ego; the real studio photo; first-person de-risking copy). But the structural architecture is a stock boutique-studio template: hero → client strip → alternating case studies → about → services → process → testimonials → dark CTA → footer. Swap palette and photos and any agency ships this order. The two most "designery" flourishes — the crop-mark star field and the abstract ◎▣⌁ glyphs — are exactly the "novel/clever over familiar/credible" move Product Principle 3 warns against for a non-design-literate, trust-first buyer.

**Deterministic scan:** CLI detector (`detect.mjs`) exit 2, 9 findings on `src/pages/index.astro` — 2× `overused-font` (Lato) and 7× `design-system-font-size` advisories, all inside the responsive `@media` blocks (lines 197–199). In-browser detector reported **26 flagged elements / 45 individual findings** (identical desktop and mobile): **low-contrast ×23**, undersized-ui-text ×7, tiny-text ×6, kicker-above-heading ×5, all-caps-body ×1, icon-tile-stack ×1, overused-font ×1, cream-palette ×1. Agreement with the LLM: the detector independently confirmed the small-type read. New issue the LLM under-weighted: the **contrast cluster** — muted text on cream at 3.2–3.8:1, review cites at 3.8:1, and **white-on-terracotta CTA text at 3.7:1** (the primary conversion button's own label fails AA). False positives (design-sanctioned): `overused-font: Lato` (the approved incumbent sans; not even in the rule's own font list), `cream-palette` (the deliberate background), and `kicker-above-heading` ×5 (the intentional eyebrow-above-serif section pattern).

**Visual overlays:** Assessment B ran the in-page detector headless, so there is **no persistent user-visible overlay tab** — findings are from the detector's console output, captured at 1440 and 390 widths (byte-identical sets).

## Overall Impression

This is a genuinely tasteful homepage with a strong emotional core — the founder chip and the real-room About photo make "you work directly with one accountable person" *tangible*, which is the single hardest thing this brand has to sell. The palette discipline (one accent, one shadow) is exactly right for a buyer who reads restraint as competence. But the site is undermined by a cluster of **honesty-and-function leaks** that hit precisely where this buyer's 90-second gut check lands: a Pricing link that leads to no price, a "Book a Free Call" button with no booking, a dead mobile menu, live "(TBD)" placeholders in the footer, and a "5.0" rating shown three times from a review base PRODUCT.md calls too thin to lean on. The biggest single opportunity: **make the site as honest and functional as the person it's selling** — every leak contradicts the exact promise ("no surprises, one straight-shooting person") the design otherwise earns.

## What's Working

1. **The About section is the strongest trust asset on the buyer's axis.** An authentic, un-stocked photo in a real room beside "Hi, I'm Alex. Your project never gets handed off." makes the solo-operator claim concrete exactly when skepticism peaks. Stock headshots reassure no one; this does.
2. **Ruthless discipline with one accent + one shadow.** Terracotta and the offset shadow appear only on the two real asks, so the page reads intentional and calm. For a non-design-literate buyer, that restraint *is* the competence signal — and the detector confirmed no rogue second accent crept in.
3. **De-risking copy at both asks.** "You'll hear back from me, not a sales team, within a day, with honest advice on whether a new site is even the right move" removes fear of a pushy funnel at the highest-stakes moment — perfectly tuned to a low-pressure, referral-led buyer.

## Priority Issues

### [P0] Mobile navigation is completely non-functional
- **Why it matters:** On mobile, `.site-header nav,.nav-cta{display:none}` and the ☰ is a decorative `::after` glyph with nothing behind it (line 198). This audience skews mobile and local; those visitors can only scroll — they cannot reach Work/Services/Pricing/About/Blog or the "Book a Free Call" CTA. Casey and the local 55-year-old founder are stranded.
- **Fix:** Implement a real disclosure menu (nav links + a terracotta CTA); keep the tel: link tappable.
- **Suggested command:** `/impeccable harden` (with `/impeccable adapt` for responsive).

### [P0] "Pricing" promises an answer the page refuses to give
- **Why it matters:** `id="pricing"` is parked on the Process section (line 157), so the "Pricing" nav link (line 77) scrolls to "How It Works," and no price appears anywhere. Cost is a top-three gut-check question for this buyer, and a promised-but-absent answer directly contradicts the "clear pricing, agreed upfront / straight shooter" brand being sold.
- **Fix:** Either remove "Pricing" from the nav until the pricing question is resolved, or point it to an honest "what it costs / every project is quoted upfront" band — no hardcoded number, per the open pricing decision.
- **Suggested command:** `/impeccable clarify` (+ `/impeccable shape` if adding a band).

### [P1] The conversion path collapses in the middle
- **Why it matters:** One destination (`/contact`), three labels — "Book a Free Call" (line 81), "Get in Touch" (91), "Let's Work Together" (178) — and "Book a Free Call" implies scheduling that doesn't exist. Worse, there is **no terracotta CTA between the hero and the closing section**: the entire Work → About → Services → Process → Reviews stretch (the majority of the page and its emotional peak) has no ask. A buyer convinced at the About photo has nowhere to click.
- **Fix:** Pick one verb system (recommend "Get in Touch" / "Start the Conversation"); drop "Book a Free Call" until a real booking flow exists; add one terracotta CTA immediately after the About or Reviews section.
- **Suggested command:** `/impeccable clarify` (+ `/impeccable layout` for the mid-page CTA).

### [P1] Legibility & contrast — real AA failures, including the primary CTA
- **Why it matters:** The in-page detector flagged **23 contrast failures** — muted text on cream at 3.2–3.8:1, and **white-on-terracotta CTA text at 3.7:1** — plus 10–11px labels ("Selected Work," project captions) and 10px footer/eyebrow text. For a 45–60 audience with aging eyes, faint 3.2:1 labels and sub-11px type read as hard-to-use, which for this buyer reads as *less trustworthy*, not more minimal.
- **Fix:** Darken muted text to hit ≥4.5:1 on cream/white; lift the smallest labels/captions to ≥12px; verify the terracotta button label passes AA (darken the terracotta a touch or the button uses a slightly deeper shade behind white).
- **Suggested command:** `/impeccable audit` (then `/impeccable polish`).

### [P1] Thin proof is over-leaned and leaks credibility
- **Why it matters:** Unquantified "5.0 Google Reviews" appears 3× (proof strip line 102, reviews link 167, dedicated 5.0 tile 170); the "See All Google Reviews" link is a Google *search* URL (101/167), not a verified Business Profile; and the footer ships live placeholders — "Blog Post 1/2/3 (TBD)" (188) and "Instagram (TBD) · LinkedIn (TBD)" (190). PRODUCT.md says reviews are too few to lean on; repeating the number inflates thin proof and invites the one question you can't answer ("5.0 out of how many?"), while "(TBD)" tells a stress-tester the site is unfinished.
- **Fix:** Show a real review count or drop the numeric rating; replace the 5.0 tile with a real count or a fourth testimonial; link to the actual Business Profile; hide every "(TBD)" link until real.
- **Suggested command:** `/impeccable distill` (+ `/impeccable harden` the claims).

**Cheap, high-leverage P2:** The copy oscillates between "I" and "we" — "What We Do," "We built," "We map your audience" (lines 7/18/37/38/149) — for a studio whose literal differentiator is *there is no we*. Convert work-referring "we" → "I" so the layout (one face, one room) and the words finally agree. (`/impeccable clarify`)

## Persona Red Flags

**Jordan (First-Timer):** Recognizes the problem and enjoys the real case studies. Wants to act after the About photo but there's no button there — must hunt back up to the nav. Clicks "Pricing" to check affordability → lands on "How It Works," no price → confusion. "Book a Free Call" vs "Get in Touch" leaves him unsure which is the "real" way in.

**Riley (Stress-Tester):** Immediately clocks "5.0" with no review count shown three times → reads as inflation (and PRODUCT.md confirms the instinct). "See All Google Reviews" → a search URL, not a profile. Footer "(TBD)" placeholders → "this isn't finished." "Book a Free Call" → a plain form, not a calendar → over-promise. Three testimonials + ~3 case studies, all Raleigh → small operation; the repeated 5.0 amplifies the thinness rather than owning it.

**Casey (Distracted Mobile):** Clean, readable mobile hero. Taps ☰ → nothing happens → cannot navigate, can only scroll. Can tap the phone number (good) and the two terracotta CTAs. Body copy at 13–14px (labels at 10–11px) is small for older eyes.

**"Gary" (project persona — 55, reputation-led remodeler/attorney, not design-literate, 90-second gut check):** Reads the hero as "a real, professional business" (win) and the About photo as "a real person who'll answer the phone" (biggest win). But he wants a ballpark, taps "Pricing" → gets your process, no number — the exact "will he be straight with me?" question answered *badly* by the site's own navigation. The crop-mark star field and abstract glyphs register faintly as "trying to be arty," which is friction, not trust, for him. Net: passes on humanity, fails on the pricing promise and booking-label honesty — the two things that most matter to his "won't jerk me around" test.

## Minor Observations

- **Star field renders as corner/crop-marks (⊢), not stars** — `.stars i::before/::after` draws a 1px vertical + 1px horizontal line, i.e. a registration mark. Homepage-only; do not promote.
- **False dropdown carets (⌄) on "Work" and "Services"** imply submenus that don't exist.
- **Service-card content mismatch:** the "Search & AI Visibility" card body talks about Framer/control/ease-of-update, never search or AI; the section eyebrow "Strategy, Copy, and Design, In-House" doesn't map to the card titles (Branding / Web Design / Search & AI Visibility).
- **Desktop cream voids:** the gap between "Their Craft, Presented Well" and the first project (and around the About heading) reads empty rather than premium — the Unhurried Rule over-applied at those seams.
- **Founder-chip headshot is only 40px** with an off-center crop (`object-position:56% 43%`) — the face is small at the exact spot it's doing the most work.
- **◎ ▣ ⌁ service glyphs** read as placeholder to this audience; replace with plain named line icons.
- **Detector false positives to ignore:** `overused-font: Lato`, `cream-palette`, and the 5× `kicker-above-heading` are all DESIGN.md-sanctioned choices, not defects.

## Patterns: Site-Wide vs Homepage-Specific

**Promote to the design system:** the founder chip (best reusable embodiment of the differentiator — belongs on /contact, /about, service pages, footer); the section opener (gold dot + tracked eyebrow + H2); the Process/Dark-Card-on-Espresso component (already in DESIGN.md); the proof strip *after fixing the thin-proof content*; the terracotta offset-shadow primary button (it *is* the system).
**Keep homepage-only:** the crop-mark star field, the centered serif first viewport (interior pages should left-align for legibility), and the exact narrative order.
**Do not promote / replace:** the abstract ◎▣⌁ service glyphs.

## Questions to Consider

1. A 55-year-old remodeler taps "Pricing" and lands in your *process* with no number. Are you optimizing for his gut check, or for your own undecided pricing?
2. You show "5.0" three times from a review base your own docs call too thin to lean on. Is the third 5.0 tile building trust, or quietly begging for it?
3. Your entire pitch is "one person, no handoffs." So why does the copy say "we"? Whose "we"?
4. The About photo is your best trust asset *and* the emotional peak — why is there no button there?
5. For a buyer who trusts the familiar over the clever, what are the crop-mark star field and abstract glyph icons *buying* you that a plain, legible cue wouldn't?
