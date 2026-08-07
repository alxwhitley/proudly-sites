---
target: /services (index, branding, web-design, ai-and-search-visibility) — Layout Discipline rework
total_score: 30
p0_count: 1
p1_count: 2
timestamp: 2026-08-07T20-59-15Z
slug: src-pages-services
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | `.svc-row` hover/focus feedback is a 2.5% background tint — nearly invisible; the translateX carries it alone. |
| 2 | Match System / Real World | 3 | Plain language throughout, but the Legacy captions contradict the pictured site (see P0), and internal placeholder microcopy ("AI OVERVIEW CITATION CAPTURE PENDING") ships on a public route. |
| 3 | User Control and Freedom | 3 | Bridge cards cross-link siblings, but there's no route back to `/services` except global nav — no breadcrumb. |
| 4 | Consistency and Standards | 3 | Strong internal system consistency, but "See Search & AI Visibility" breaks the "See the X work" CTA parallel, and the same sentence appears as scan-outcome, claim-heading, and H1. |
| 5 | Error Prevention | 4 | Placeholders are governed (`data-placeholder` + REPLACE.md), reveal JS has a 1.5s safety net, links are all valid. |
| 6 | Recognition Rather Than Recall | 2 | Branding and Web Design show the same three clients, same order, same images — telling the services apart requires recalling caption nuance. |
| 7 | Flexibility and Efficiency | 3 | Dual index paths (scan rows + claim blocks) genuinely serve both scanners and readers; whole-row link targets are generous. |
| 8 | Aesthetic and Minimalist Design | 3 | Real restraint, but each service's sentence is said twice per page and `object-fit: cover` crops client headlines, worst on mobile. |
| 9 | Error Recovery | 3 | Mostly n/a (no forms in this cluster); placeholders communicate honestly rather than breaking. |
| 10 | Help and Documentation | 3 | The contact promise sets expectations well; nothing else needed for this surface. |
| **Total** | | **30/40** | **Good** — solid foundation, address weak areas |

## Anti-Patterns Verdict

**Does this look AI-generated? At a glance, no.** The three previously-flagged tells are verifiably gone across all four files: no `01/02` numbering, no eyebrow dot+label (heroes open straight into H1), no stacked text-only sections — every claim on the index and every proof row on the detail pages now shares its fold with a real image or a logged placeholder panel.

**On a comparative read, the tells moved one level deeper:**
1. **Copy recycling along the click path.** The same sentence appears three times per service — as the index scan-row outcome, as the index claim-block heading, and again as the detail page's H1 (e.g., "A Brand People Trust Before You Say a Word"). This is the signature of one seed line fanned out, not copy written per-surface.
2. **The claim-block metronome.** Every visual in the cluster is the identical sand panel — same radius, same padding, same 3:2 ratio, alternating with perfect regularity across all four pages. Well-executed, but zero-variance application is itself a template tell.
3. **A stitched-copy seam.** The index's third claim block reads "...not three clicks past it. It is about a site that is fast..." — "It is about" answers a sentence that only exists on the detail page it was harvested from; on the index the referent is missing.

**Deterministic scan (Assessment B):** `detect.mjs --json` against all four files returned **exit 0, zero findings** — a genuine clean result (non-trivial 319–348 line files, no crash). The detector's own Puppeteer URL-scan mode wasn't available (puppeteer not installed alongside this detector instance); browser-based evidence was gathered via Playwright instead as a substitute. Across all four live routes at desktop (1440) and mobile (390): zero console errors, zero failed requests, zero side-stripe borders, zero gradient text, zero glassmorphism, no hero-metric templates, no 01/02 numbering, no identical/interchangeable card grids, no eyebrow-dot labels, no genuine text overflow.

**Two apparent findings the detector assessment caught and ruled out as false positives, worth noting explicitly so they aren't mistaken for real defects:** (1) an initial screenshot pass showed large blank bands between sections — traced to the scroll-reveal system's own `.rv`/`.stagger` opacity-0-until-observed pattern, captured before its 1.5s safety-net timer fired; re-shooting after the wait showed every section rendering correctly. (2) A DOM probe flagged the header's collapsed "Work"/"Services" dropdown trigger as overflowing — its hidden hover-panel content was being measured against the collapsed trigger width; the header renders as a clean single-line bar with no visible clipping.

No visual overlay was available on this static preview server (`/detect.js` 404s, as expected off a build-only preview) — findings above are from direct DOM/CSS probing and full-page screenshot inspection instead, per the fallback path.

## Overall Impression

The rework does exactly what it set out to do structurally: it kills the stacked-text AI-generic read and replaces it with a genuine editorial grammar (masthead thesis, hairline scan rows, alternating claim-and-proof blocks). It passes the 5-second gut check. Where it falls short is a level deeper than layout — the same three services are proven with the same two images in the same order on two near-identical pages, and one of those two captions describes a business the picture doesn't show. The single biggest opportunity: differentiate Branding from Web Design with different proof (the assets already exist, unused, in `public/images/`), and let each service's argument advance instead of restating its own heading three times.

## What's Working

1. **The editorial index is a real idea, executed.** Thesis masthead + hairline whole-row links + terracotta arrow, no cards, no chips — refuses the interchangeable-tiles pattern and reads bespoke. The scan layer is exactly what the Scan-Then-Prove rule asked for.
2. **Proof-as-argument voice.** Display-size Playfair captions attached to real client artifacts, no fabricated metrics anywhere, and the AI-visibility page's honest capability framing (a placeholder instead of an invented result, matching PRODUCT.md's "don't overstate the evidence") is rare discipline for this category of page.
3. **System governance holds.** One accent, one shadow on one button per page, `prefers-reduced-motion` fully honored, a real reveal safety net, `role="img"` + descriptive `aria-label` on every placeholder, and every placeholder logged in `REPLACE.md` exactly as the new rule requires.

## Priority Issues

**[P0] The Legacy Renovations captions contradict the image beside them.**
- **Why it matters:** `branding.astro` says "let the finished kitchens carry the page"; `web-design.astro` says "leading with a finished kitchen remodel." The actual `legacy-renovations.jpeg` reads "Restore Your Surfaces with Confidence — Expert Tile Repair in Raleigh, NC" over a bathtub — no kitchen, no remodel. This is a proof section whose proof disproves its caption, on a studio selling attention to detail.
- **Fix:** Rewrite both captions/alts to the real business (tile refinishing), or swap in a correct capture if one exists. This is copy, not layout — route through chat and write back to the copy source before reapplying.
- **Suggested command:** `/impeccable clarify /services/branding` and `/services/web-design`, after the copy correction lands.

**[P1] The Scan-Then-Prove rule is unimplemented on 2 of 3 detail pages.**
- **Why it matters:** The rule as written says "every service/detail template opens with the hairline-divided value-prop list." `ai-and-search-visibility.astro` has it (`facets`); `branding.astro` and `web-design.astro` go straight from hero into proof rows with no opening scan list. DESIGN.md and the shipped templates currently disagree.
- **Fix:** Either port a 3-item hairline facet list to both pages (e.g., for Branding: Color / Voice / Type as decision lenses), or narrow the rule's scope line in DESIGN.md to claim-paired pages only, not every detail template.
- **Suggested command:** `/impeccable layout /services/branding` then `/services/web-design`, or a DESIGN.md wording pass.

**[P1] `object-fit: cover` crops client-site headlines, worst on mobile.**
- **Why it matters:** `.claim-visual img` / `.proof-visual img` force a 3:2 ratio onto full-page site captures; at 390px both visible screenshots render sliced mid-word. The images are the entire proof strategy — cropped-broken proof undercuts it.
- **Fix:** Export art-directed 3:2 crops (hero-area only, headline intact) as dedicated assets, or drop the forced ratio and letterbox inside the sand panel.
- **Suggested command:** `/impeccable adapt /services` once corrected assets exist.

**[P2] One sentence repeated across three surfaces on the same click path.**
- **Why it matters:** Scan-row outcome, claim heading, and detail H1 are verbatim-identical per service; plus the dangling "It is about..." stitch in the index's third claim. Kills the sense of progress on click-through and is the strongest remaining machine-generated tell.
- **Fix:** Give each layer its own register — scan row keeps the plain outcome, claim heading advances the argument, H1 keeps the outcome. Rewrite the stitched sentence with its own setup.
- **Suggested command:** `/impeccable clarify /services`.

**[P2] Branding and Web Design read as near-clone pages.**
- **Why it matters:** Same three clients, same order, same two images, same heading, same bridge, same CTA — a recognition-over-recall failure, and the deepest source of the "template" read. Unused real assets exist (`haw-branch-*.jpeg`, `vital-watch.jpeg`) that could differentiate them.
- **Fix:** Re-cast Web Design's proof around different clients, keep Smith Cash + Legacy for Branding; also lets you avoid ending a proof sequence on a placeholder.
- **Suggested command:** `/impeccable craft /services/web-design` scoped to the proof section, after a chat pass on client/copy selection.

**[P3] Terracotta claim-links on Warm Cream miss AA contrast.**
- **Why it matters:** `rgb(204,70,19)` on `rgb(245,243,239)` computes to ≈4.24:1, just under the 4.5:1 body-text floor. The same terracotta on Pure White (detail-page surfaces) passes at ≈4.7:1 — only the index's cream-surface claim links are affected.
- **Fix:** Move claim links onto a white surface, bump size/weight, or add a cream-surface link variant a shade darker.
- **Suggested command:** fold into the next `/impeccable audit` pass.

## Persona Red Flags

**Jordan (Confused First-Timer):** Reads "A brand people trust before you say a word" in the scan list, meets it again as a claim heading below, clicks, and lands on a detail page titled with the same sentence, led by the same image he just saw — concludes the click may not have done anything.

**Riley (Stress Tester):** Zooms the Legacy image, reads "Expert Tile Repair," then reads "finished kitchens carry the page" — and now distrusts every other caption on the site. Then counts placeholder panels across the cluster (present on 3 of 4 pages).

**Casey (Distracted Mobile User):** The first image she sees on `/services` is a client screenshot with its headline sliced mid-word by the forced crop; the index page runs long on her phone, and the claim section below tells her nothing the scan list above it didn't.

## Minor Observations

- Stale `FIRST VIEWPORT: eyebrow...` design-brief comments remain in all three detail-page hero blocks — a future craft session reading them literally could reintroduce the banned eyebrow.
- `#6d635c` is hard-coded in five places across the cluster; it's the DESIGN.md Muted Label token and deserves a shared custom property rather than a repeated literal.
- The closing CTA, `.ph-panel`, bridge, and reveal `<script>` are pasted verbatim into all four files — worth extracting before a fifth service/detail page multiplies the drift risk.
- "See Search & AI Visibility" breaks the "See the X work" CTA parallel — honest (there's no proof yet), but reads slightly off; a phrase like "How visibility is built in →" would keep both the honesty and the rhythm.
- `.proof-client`'s uppercase tracked label is attribution, not scaffolding, and defensible — but it is typographically identical to the eyebrow style the No-Scaffolding rule retired, worth a second look.
- Two evidence-gathering artifacts were correctly caught and ruled out rather than reported as bugs: a screenshot-timing false positive from the reveal system's own safety net, and a collapsed-dropdown width false positive from the header's hover menu. Both are documented above under Anti-Patterns Verdict so they aren't mistaken for real findings in a future comparison.

## Questions to Consider

1. The Paired Claim Rule demands an image per claim, but only two publishable client captures currently exist — is the rule manufacturing placeholder debt on 3 of 4 pages? Should it instead cap claims at the proofs actually on hand?
2. Branding and Web Design are proven by the same three artifacts in the same order — are these genuinely two services, or one craft marketed twice? Would a single proof spine viewed through service-specific lenses read more honest than two near-identical templates?
3. The index both routes (scan rows) and persuades (claim blocks) for the same three items, saying each thing twice in one page — would a pure-router index with richer scan rows convert better than the doubled-up version?
