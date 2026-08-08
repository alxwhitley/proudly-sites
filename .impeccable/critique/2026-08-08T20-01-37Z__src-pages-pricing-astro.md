---
target: pricing page specifically addressing the two sections full of text and bullet points
total_score: 17
max_score: 24
na_heuristics: 3,7,9,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-08T20-01-37Z
slug: src-pages-pricing-astro
---
# Impeccable Critique: Pricing page text-heavy sections

**Target:** `src/pages/pricing.astro`, specifically “What’s always included” and “What moves the number”  
**Mode:** Persuade  
**Assessment provenance:** Dual independent sub-agents: design review plus detector/browser evidence

## Design-specificity verdict

The page is unmistakably part of Proudly’s restrained editorial world, but these two sections feel under-designed rather than intentionally editorial. Three consecutive centered headings feed nearly identical narrow bullet columns. The content is specific to Proudly, while the spatial treatment could belong to any text-led brochure.

## Nielsen heuristic scores

| # | Heuristic | Score | Note |
|---|---|---:|---|
| 1 | Visibility of system status | 3/4 | Both ranges exist, but the key price datum is visually buried. |
| 2 | Match between system and real world | 4/4 | Plain-language explanations match how buyers think about scope. |
| 3 | User control and freedom | n/a | Static persuasive content. |
| 4 | Consistency and standards | 3/4 | Cohesive with the system, but repetitive to a fault. |
| 5 | Error prevention | 3/4 | Caveats are clear once read, but not immediately legible. |
| 6 | Recognition rather than recall | 2/4 | Long undifferentiated bullets force sentence-by-sentence reading. |
| 7 | Flexibility and efficiency | n/a | Static persuasive content. |
| 8 | Aesthetic and minimalist design | 2/4 | Clean, but hierarchy and desktop composition are too weak. |
| 9 | Help users recover from errors | n/a | No task or error state in the target sections. |
| 10 | Help and documentation | n/a | FAQ exists later; not applicable here. |

**Total: 17/24 (71%, Good foundation with meaningful hierarchy work needed).**

## Cognitive load

Moderate. The page presents eight undifferentiated included promises followed by five similarly styled scope factors. This exceeds the four-item chunking threshold twice. Visitors are not choosing among thirteen options, but they must parse thirteen full sentences to recognize the categories.

## Emotional journey

The hero establishes candor and trust, then energy drops through two dense reading blocks before recovering at Care and Growth. The highest-stakes information, the normal price band and complex-project threshold, needs to become a designed certainty moment rather than embedded prose.

## Strengths

1. The copy is candid, specific, and credible. Keep the substance.
2. Typography, palette, and restrained surfaces remain faithful to the Grounded Workshop identity.
3. The Care/Growth hairline columns already prove the page can use a wider, confident composition without SaaS theatrics.

## Priority issues

### P1: Repeated composition creates a long scanning valley

Both sections use the same 34rem heading, intro, and ordinary list grammar. The second feels like the first list continuing after whitespace rather than a new thought.

### P1: Strong promises have weak recognition cues

“Always included” has eight long sentences with no concise labels. Visitors have to read rather than scan.

### P1: Price bands lack compositional authority

The main `$4,000–$8,000` range and `$10,000+` exception are buried in paragraph flow. They should register in under two seconds.

### P2: Desktop width is underused

At 1440px, the target content occupies roughly a quarter of the canvas, leaving margins that feel timid rather than luxurious.

### P2: Section distinction is semantic only

Whitespace alone separates guaranteed deliverables from scope variables. The design needs different spatial grammars for these different ideas.

## Recommended direction: Promise grid plus scope ledger

1. Turn “What’s always included” into a wide two-column promise grid, four rows by two columns. Give every promise a concise 2–4 word title followed by the existing factual sentence. Use flat hairline dividers and restrained markers, not eight floating cards. Stack to one column on mobile.
2. Turn “What moves the number” into a true two-column section. The left side is a prominent, anchored price panel for “Most projects: $4k–$8k,” the flat-scope reassurance, and the smaller `$10k+` complex-project note. The right side holds five compact factor cards or divided rows with bold labels and the existing explanations. Stack price first on mobile.

This assigns each visual device a clear job: the grid communicates guaranteed value, cards communicate independent variables, and the two-column composition gives pricing immediate authority.

## Alternatives

1. **Eight receipts:** Eight individual included cards plus two columns of factor rows. More energetic, but risks generic card-grid styling and cramped long copy.
2. **Two ledgers:** Both sections use hairline two-column layouts, with only the price range in a card. Most faithful to the current design system, but underuses cards for the factor variables.

## Persona red flags

- A time-poor owner may skip the included value because only sentence openings distinguish the items.
- A price-anxious prospect may leave without retaining the normal versus complex-project ranges.
- A comparison shopper cannot quickly map Proudly’s scope against another proposal.

## Minor observations

- The detector found five advisory type-ramp deviations, including the shared 18px intro size. These do not cause the scanability problem and should not drive the redesign.
- Semantics are sound: real headings and list markup are already present.

## Provocative questions

- If a visitor reads only six bold phrases, should two be the price bands and four be Proudly’s strongest guarantees?
- Is “what’s included” really a list, or is it the product promise and therefore worthy of the strongest modular treatment before the plans?
- Could the range panel feel like a quiet estimate worksheet rather than marketing decoration?

## Recommended command sequence

1. `$impeccable shape`: Confirm the promise-grid and price-led scope-ledger composition.
2. `$impeccable layout`: Implement the wide grid, two-column range/factor composition, mobile stacking, and section rhythm.
3. `$impeccable typeset`: Add concise scan labels and establish price-range hierarchy without changing factual claims.
4. `$impeccable polish`: Final visual and responsive refinement after the structural work.
