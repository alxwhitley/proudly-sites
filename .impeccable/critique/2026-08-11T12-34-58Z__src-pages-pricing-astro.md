---
target: live pricing page based on DESIGN.md
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
timestamp: 2026-08-11T12-34-58Z
slug: src-pages-pricing-astro
---
# Impeccable Critique: Live Pricing Page

**Target:** `https://proudly-psi.vercel.app/pricing`, resolved locally to `src/pages/pricing.astro`  
**Mode:** Persuade  
**Assessment provenance:** Dual independent sub-agents: design-director assessment plus detector/browser evidence

## Design-specificity verdict

The deployed page inherits Proudly's authored surface language through Warm Cream, Playfair and Lato, calm copy, and the Espresso closing inquiry. Its information architecture is still generic: centered heading, centered paragraph, and bullets repeat from the hero through the plans. The product-specific opportunity, making a high-trust `$4,000–$8,000` decision legible for a 90-second referral buyer, is not expressed structurally. Verdict: authored styling, generic information architecture.

## Nielsen heuristic scores

| # | Heuristic | Score | Note |
|---|---|---:|---|
| 1 | Visibility of system status | 3/4 | FAQ and form states exist, but the long page offers little progressive orientation. |
| 2 | Match between system and real world | 4/4 | Plain founder-to-founder language, explicit ranges, and no jargon or hype. |
| 3 | User control and freedom | 3/4 | Familiar navigation and optional FAQ disclosure, but the primary action is deferred to the bottom. |
| 4 | Consistency and standards | 1/4 | The live page contradicts the current source and all resolved Pricing Page rules. |
| 5 | Error prevention | 3/4 | Required fields and native input types are present, but the placeholder Web3Forms key prevents successful submission. |
| 6 | Recognition rather than recall | 1/4 | Thirteen prose bullets and buried thresholds force reading and memory. |
| 7 | Flexibility and efficiency | n/a | Not meaningfully applicable to this Persuade surface. |
| 8 | Aesthetic and minimalist design | 1/4 | Calm visually, but cognitively dense and compositionally repetitive. |
| 9 | Help users recover from errors | 3/4 | The form includes an explicit email fallback and success state. |
| 10 | Help and documentation | n/a | The FAQ adequately serves the marketing-page equivalent. |

**Total: 19/32 (59%, focused revision needed).**

## Cognitive load

The page presents eight included bullets, five pricing-driver bullets, and eight Growth Plan bullets without a strong scan layer. The actual decisions are only three: whether the project range fits, what changes scope, and whether Care or Growth fits. The live layout makes them feel like dozens of equal-weight facts.

## Emotional journey

The opening is calm and credible. Energy drops during the first dense list, and the intended pricing reassurance is flattened into inline bold text. The second list continues the same valley. Care and Growth restore some utility, while the dark inquiry becomes the first decisive visual peak. The resolved dark price inversion should create the missing mid-page peak, leaving the inquiry as the closing reassurance.

## Strengths

1. The copy is candid, specific, and aligned with the warm, calm founder voice.
2. The shell uses the intended cream, espresso, Playfair, and Lato language coherently.
3. The Care and Growth treatment is structurally closest to the design contract, with adjacent flat columns and a Sand surface step.

## Priority issues

### P1: The deployment is stale and violates the Pricing Page contract

The live page lacks the required two-column fact ledger, five label/explanation hairline rows, and static Espresso price inversion. It also says roughly one month while the current approved source says roughly one week. The local source already implements these rules. Establish deployment parity before judging further refinements.

### P1: Scanability fails the 90-second gut check

Eight included bullets followed by five driver bullets create thirteen dense reading units with little typographic differentiation. A referral-led owner must read linearly to understand the offer.

### P1: Price has no visual authority

The normal range is only bold text inside a paragraph, while `$10,000+` appears later in another paragraph. The page does not produce the certainty moment required by Static Price Inversion.

### P1: The inquiry form cannot submit successfully

The deployed hidden Web3Forms access key remains `YOUR_WEB3FORMS_ACCESS_KEY`. Labels and error recovery are sound, but the core conversion action is functionally blocked.

### P2: Section rhythm does not meet the Unhurried Rule

Desktop hero and section padding fall below the documented 120 to 160px top-and-bottom rhythm. The cream sections read as one long manuscript rather than distinct persuasive beats.

### P2: Mobile density remains high

The 390px layout has no visible overflow, but plan bullets, factor copy, and footer text are small and dense. Care and Growth become serial rather than comparative.

### P2: Local type values drift from the documented ramp

The detector found seven advisory literal values: 28px, 18px, and 22px occurrences outside the documented 40/32/24/20/16/14 steps. Responsive clamp endpoints are lower impact; fixed 18px and 22px values deserve reconciliation or documentation.

## Persona red flags

- The primary 45 to 60-year-old referral-led owner cannot identify the normal price, included value, or `$10,000+` distinction within a short scan.
- A first-time custom-site buyer must understand internal scope mechanics before receiving a clear next action.
- A mobile visitor experiences a long serial reading task, with the inquiry many screens away.

## Minor observations

- The navigation and overall shell feel composed and familiar.
- Whole-Or-Center is respected mechanically but violates its own "used sparingly" requirement.
- The Full-Bleed Rule cannot organize the live lists because their hairline structures are missing.
- The Single Tool Rule is not violated by decorative excess. The problem is insufficient structural contrast.
- The live page returned HTTP 200 and showed no visible horizontal overflow at 390px.

## Provocative questions

1. Can a buyer locate the normal price, what is included, and what makes them a `$10,000+` project in under 15 seconds?
2. Should one restrained inline CTA follow the price and scope block, or should the bottom inquiry remain the only ask?
3. Does the buyer need every Care and Growth operational detail before contacting, or should the distinction lead and detail follow?
4. Should the page's emotional peak be transparent pricing, included craft, or personal reassurance at inquiry?

## Recommended command sequence

1. Establish deployment parity with the current `src/pages/pricing.astro` implementation.
2. `$impeccable critique` the deployed version again so the resolved named rules, rather than the stale page, are scored.
3. `$impeccable layout` to tune the Unhurried rhythm and major section boundaries.
4. `$impeccable typeset` to reconcile scan labels, mobile density, and the documented type ramp.
5. `$impeccable polish` for a bounded desktop and mobile finish pass.
6. `$impeccable audit` after the design structure is settled.
