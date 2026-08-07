---
target: Services cluster (src/pages/services)
total_score: 29
p0_count: 0
p1_count: 3
timestamp: 2026-08-07T02-38-08Z
slug: src-pages-services-index-astro
---
# Critique — Services cluster (`/services` + branding, web-design, ai-and-search-visibility)

Diagnosed from source + desktop/mobile renders (playwright, viewport 1440 & 390) + Impeccable detector. Register: **brand** (design IS the product).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav gives no active/current-page state on the Services routes |
| 2 | Match System / Real World | 3 | Copy is plain and strong; the ◎ ▣ ⌁ glyphs carry no real-world meaning |
| 3 | User Control and Freedom | 3 | Standard nav/links; low-stakes marketing, adequate |
| 4 | Consistency and Standards | 3 | Highly consistent — but the consistency has tipped into sameness (see anti-patterns) |
| 5 | Error Prevention | n/a | No input surfaces on these pages |
| 6 | Recognition Rather Than Recall | 3 | Labeled nav, clear structure |
| 7 | Flexibility and Efficiency | n/a | Marketing content, not a tool |
| 8 | Aesthetic and Minimalist Design | 2 | The crux: generic composition, hollow AI page, a visible placeholder block in a proof section |
| 9 | Error Recovery | n/a | No error surfaces |
| 10 | Help and Documentation | 3 | The copy is the help; adequate |
| **Total** | | **~29/40** | **Good (usability) — but the score is the wrong lens here** |

The heuristic score is deliberately unremarkable because **these pages are functionally fine**. They load, read clearly, work on mobile, and speak the buyer's language. Nielsen heuristics measure *usability*, and usability is not the problem. The problem is **distinctiveness**, which the heuristics don't capture — a page can score 29/40 and still read "AI made this." That gap IS the complaint.

## Anti-Patterns Verdict — does this look AI-generated?

**Yes, on composition — not on brand.** The brand *system* (Grounded Workshop: warm cream + espresso + one terracotta stacked-shadow CTA, Playfair on Lato, the bordered card-header, the script wordmark) is genuinely distinctive and should be preserved verbatim. What reads as AI is the **section grammar and page composition** layered on top of it. Named tells present:

1. **Eyebrow above every section — ABSOLUTE BAN.** WHAT I DO / BRANDING / THE PROOF / HOW IT FITS / WHY IT MATTERS NOW / WHAT THAT MEANS — a tiny uppercase tracked label opens essentially every section on every page. This is the single loudest tell. The gold dot is a nice brand touch, but it's still eyebrow-on-every-section grammar. (Note: `/about` deliberately dropped its hero eyebrow; the Services cluster re-introduced it everywhere.)

2. **Identical card grid — ABSOLUTE BAN.** `/services` is three same-size cards: geometric glyph in a rounded tinted square + Playfair heading + gray body + "Learn more →". Textbook. The glyphs (◎ ▣ ⌁) are decorative filler with no meaning, edging into the brand ban "rounded-corner icons above every heading = template."

3. **Numbered scaffolding 01 / 02 — ABSOLUTE BAN (misapplied numbering).** The "How It Fits" bridge numbers the two sibling services 01/02. They are not a sequence (Branding and Web Design aren't step 1→2 of anything), so the numbers are pure decorative scaffolding.

4. **Template sameness across pages.** Branding and Web Design are near-literal clones — same two client screenshots, same alternating proof-row rhythm, same bridge, same CTA, captions that rhyme. Clicking Branding → Web Design shows the same page with the words swapped. Layout sameness is a top-tier slop tell. (The surface brief openly calls them "four near-identical template pages (overnight-run efficiency).")

5. **Colored placeholder block where a photo belongs — BRAND BAN.** The After Hours "LIVE-SITE CAPTURE PENDING" beige panel sits *inside a proof section*. A proof section containing a visible empty box actively undercuts the claim it exists to make.

6. **Hollow / voided composition (AI-Visibility page).** Hero, story, facets, and bridge all hug a narrow left column, leaving ~40% of the desktop viewport empty. Reads as unfinished. Across the whole cluster the composition is safe, centered, symmetric — no dominant idea per fold, no art direction per section, no asymmetry. "Safe = invisible."

7. **Verbatim closing CTA ×4** (also the homepage) — the same dark block, headline, and copy repeated four times.

**Deterministic scan:** `detect.mjs` → `[]` (clean). This matters: "detector-clean" was the overnight ship-gate, but the detector's regexes don't catch compositional slop — an eyebrow with a variant dot, real-copy card grids, or numeric labels all pass. **Detector-clean gave false confidence; the slop here is entirely at the composition altitude.**

**Visual:** no injected overlay was used; findings are from direct desktop+mobile screenshots.

## What's Working (keep these)

- **The brand identity is not generic.** The bordered pill-header, the *Proudly* script wordmark, the terracotta stacked-shadow button, the cream→espresso world — confident and specific. Do not touch.
- **The copy is genuinely good** — plain, founder-voice, specific, non-hypey. The proof captions ("They were already known for honest, steady counsel…") are strong and on-positioning.
- **The alternating proof-row idea** (real client screenshot + a decision caption) is a strong, non-generic pattern *when it has real images* — the two rows that do (Smith Cash, Legacy) are the best moments in the cluster.

## Priority Issues

- **[P1] Eyebrow on every section.** *Why:* the loudest AI tell; reads as scaffolding, not voice. *Fix:* remove the reflexive kicker from every section; let the Playfair H2s carry the sections; keep at most one deliberate, named kicker if any. *Command:* `/impeccable typeset` (or `quieter`).
- **[P1] `/services` index is an identical card grid.** *Why:* the category-default services layout; makes three connected offerings read as three interchangeable tiles. *Fix:* re-compose so the one-person thesis is the dominant element and the three services fall out of it (editorial list / asymmetric feature rows / one lead service), not three equal cards. *Command:* `/impeccable bolder` or a `shape` re-plan of the index.
- **[P1] Template sameness across the three detail pages.** *Why:* clicking between them exposes one template three times; quietly contradicts the "craft, one accountable person" positioning. *Fix:* give each page a distinct dominant idea / art direction so Branding, Web Design, and Search feel like three rooms in one workshop. Structural, not surface. *Command:* `/impeccable shape` the cluster, then rebuild.
- **[P2] AI-Visibility page reads hollow/voided.** *Why:* ~40% empty desktop viewport; reads unfinished on the one page with no photographic proof. *Fix:* give it a real dominant element (a "search + AI → your page" visual, a full-measure two-column composition, or a strong pull-quote). *Command:* `/impeccable bolder` / `layout`.
- **[P2] Placeholder block in a proof section (After Hours).** *Why:* an empty box in a "proof" section is a trust hit for a non-technical, 90-second-gut-check buyer. *Fix:* supply the real screenshot, or drop the third row until you have it — two strong proofs beat two + an empty box. *(Asset supply, not a design command.)*
- **[P2] Numbered 01/02 bridge cards + arrow-in-circle chips.** *Why:* decorative scaffolding on a non-sequence. *Fix:* drop the numbers and the chip; make the bridge one confident line or a typographic link pair. *Command:* `/impeccable layout` / `typeset`.
- **[P3] Verbatim CTA ×4.** *Why:* reads templated at volume. *Fix:* acceptable to reuse; optionally vary the headline per context. Low priority.

## Persona Red Flags

- **Jordan (first-timer, = the real buyer).** The three service cards look identical with meaningless glyphs — nothing signals how the services differ or which matters. Then the detail pages repeat, so Branding and Web Design are indistinguishable at a glance. The "LIVE-SITE CAPTURE PENDING" box reads as *"this site is unfinished"* to a non-technical buyer — the exact thing that fails a 90-second gut check.
- **Riley (stress tester).** The sameness is exposed by precisely the click-through Riley does: Branding → Web Design → Search is one layout thrice. The empty proof box is the "looks done but isn't" gap Riley hunts for.
- **Casey (mobile).** Actually the *stronger* view — the desktop void collapses, cards stack cleanly, no overflow. Main note: four near-identical pages make for a lot of repetitive vertical scroll; the CTA sits far down.

**Business-critical:** the positioning is *"prove competence, don't claim it"* and *"one accountable person, always visible."* A visibly templated, cloned services section with an empty proof box quietly argues the opposite. The genericness isn't just aesthetic — it contradicts the site's core claim.

## Questions to Consider

- What if `/services` led with the one-person thesis as the dominant statement, and the three services were a *consequence* of it rather than three equal tiles?
- What would make Branding, Web Design, and Search feel like three different rooms in the same workshop, instead of one template rendered three times?
- Does every section need a label, or can the Playfair headline carry it alone?
