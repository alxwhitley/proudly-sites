# Pricing Scanability Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the opening pricing page's repeated narrow bullet columns with a scannable fact ledger and a static white price-led scope composition.

**Architecture:** Keep all markup and route-specific styling in `src/pages/pricing.astro`, following the page's existing local-composition pattern. Update `DESIGN.md` and the canonical pricing draft so the implementation and approved design contract remain aligned.

**Tech Stack:** Astro 7, semantic HTML, route-scoped CSS, Playwright or browser runtime verification.

## Global Constraints

- Preserve all pricing figures and factual claims except the approved timeline change from one month to one week.
- Keep all surrounding pricing sections cream and use the established Pure White light-card treatment for the price callout.
- Do not add numbering, eyebrow labels, shadows, gradients, sticky behavior, dependencies, or animation.
- Do not change Care and Growth, FAQ, inquiry form behavior, or navigation.

---

### Task 1: Lock the pricing design contract and copy

**Files:**
- Modify: `DESIGN.md`
- Modify: `Internal/pricing-page-copy-draft.md`

**Interfaces:**
- Consumes: Approved restructuring and white-card direction.
- Produces: Canonical rules and one-week source copy for the route implementation.

- [ ] Add the static Pure White pricing card rule to the Pricing Page section in `DESIGN.md`.
- [ ] Replace the retired center-set layout note in the pricing draft with the fact-ledger and scope-ledger description.
- [ ] Change only the build timeline from roughly one month to roughly one week.
- [ ] Confirm other monthly plan language remains unchanged with `rg -n "month|week" Internal/pricing-page-copy-draft.md`.

### Task 2: Implement the fact ledger and scope ledger

**Files:**
- Modify: `src/pages/pricing.astro`

**Interfaces:**
- Consumes: Eight labeled included facts and five labeled scope factors.
- Produces: Semantic `.included-grid`, `.scope-layout`, `.price-callout`, and `.factor-list` structures.

- [ ] Convert the included strings into label and body records and change the timeline to one week.
- [ ] Render eight facts as a semantic list with label and body spans.
- [ ] Render the price callout before a semantic five-row factor list.
- [ ] Preserve the `$4,000–$8,000` and `$10,000+` source values and schema agreement.
- [ ] Remove the retired Editorial Pricing Layout comments and obsolete list styling.

### Task 3: Add responsive visual treatment

**Files:**
- Modify: `src/pages/pricing.astro`

**Interfaces:**
- Consumes: Task 2 markup classes.
- Produces: Two-column desktop layouts and one-column mobile layouts.

- [ ] Style the fact ledger as a wide four-row, two-column hairline grid.
- [ ] Style the scope section as an asymmetrical two-column layout with a static Pure White card.
- [ ] Style factor entries as compact hairline rows with label left and explanation right.
- [ ] Add mobile stacking below 800px, preserving price-first and natural list order.
- [ ] Confirm the price card uses existing Pure White, Espresso, muted, and Hairline Grey tokens.

### Task 4: Verify the complete pricing path

**Files:**
- Verify: `src/pages/pricing.astro`
- Verify: `DESIGN.md`
- Verify: `Internal/pricing-page-copy-draft.md`

**Interfaces:**
- Consumes: Completed pricing polish.
- Produces: Build and runtime evidence.

- [ ] Run `npm run build` and require exit code 0.
- [ ] Inspect `/pricing` at 1440px and 390px in one bounded browser pass.
- [ ] Confirm two-column desktop layouts, one-column mobile layouts, static callout behavior, zero overflow, clean console, and correct semantic order.
- [ ] Run the manual Impeccable detector exactly once on `src/pages/pricing.astro` and triage only findings caused by this change.
- [ ] Review `git diff` and remove accidental churn or out-of-scope edits.
