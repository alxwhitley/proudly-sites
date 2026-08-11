# Basic Site Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the dead Blog promise and close four small, verifiable polish items without adding content, credentials, dependencies, or a new visual direction.

**Architecture:** Keep the work inside the existing Astro components and route-local CSS. Shared navigation and footer changes stay in `Header.astro`, `Footer.astro`, and `global.css`; the Contact correction stays route-local; Oat contrast changes target only placeholder labels whose immediate background is `--oat`. The link-motion and mobile-accordion portions are verification-first and produce code changes only when a confirmed failure exists.

**Tech Stack:** Astro 7, component-scoped CSS, shared global CSS, vanilla browser JavaScript, Chrome DevTools or Playwright-compatible browser automation, Node.js 22.

## Global Constraints

- Do not create a Blog route, homepage Blog section, redirect, disabled Blog item, or placeholder Blog content.
- Do not add or change Web3Forms credentials and do not attempt a real form submission.
- Do not add dependencies, components, or broad design-token replacements.
- Preserve all unrelated untracked case-study media and the untracked Impeccable critique.
- Preserve desktop Contact layout, existing mobile form-first order, and purposeful component motion.
- Every changed small label on Oat must meet WCAG AA `4.5:1`; use `#655b54`, measured at approximately `4.90:1` on `#e4ddd3`.
- Do not deploy. Implementation ends with local verification and project-status documentation.

---

## File Map

- `src/components/Header.astro`: shared desktop and mobile navigation; remove both Blog links.
- `src/components/Footer.astro`: shared footer content; remove the complete Blog column.
- `src/styles/global.css`: update the desktop footer grid from five columns to four; preserve existing mobile stacking.
- `src/pages/contact.astro`: explicitly stretch the collapsed Contact grid at `800px` and below.
- `src/pages/services/ai-and-search-visibility.astro`: deepen the small placeholder label on Oat.
- `src/pages/services/branding.astro`: deepen only `.ph-panel small`; leave `.proof-client` unchanged because it is not on Oat.
- `src/pages/services/web-design.astro`: deepen only `.ph-panel small`; leave `.proof-client` unchanged because it is not on Oat.
- `src/pages/services/index.astro`: deepen `.claim-visual .ph-panel small` on Oat.
- `src/pages/work/index.astro`: deepen only `.ph-panel small`; leave `.work-tag` unchanged because it is outside the Oat placeholder.
- `src/pages/about.astro`: deepen only `.ph-panel small`; leave principle numbers and testimonial citations unchanged because they are not on Oat.
- `src/components/CaseStudy.astro`: deepen `.ph-panel small` and `.feature-placeholder small`; leave summary labels and citations unchanged because they are not on Oat.
- `plan.md`: remove or close only backlog claims proven complete and prepend the required Code session entry.

### Task 1: Remove the dead Blog navigation promise

**Files:**
- Modify: `src/components/Header.astro:68-96`
- Modify: `src/components/Footer.astro:13-23`
- Modify: `src/styles/global.css:98-105`

**Interfaces:**
- Consumes: `BaseLayout.astro`'s existing shared `<Header />` and `<Footer />` composition.
- Produces: shared chrome with no `/#blog` destination and a balanced four-column desktop footer.

- [ ] **Step 1: Capture the failing static assertion**

Run:

```bash
rg -n 'href="/#blog"|From the Blog|Read the Blog' src/components/Header.astro src/components/Footer.astro
```

Expected before implementation: three matching lines, consisting of two Header links and the single footer heading/link line.

- [ ] **Step 2: Remove the Blog entries**

In `Header.astro`, delete these two complete elements:

```astro
<a href="/#blog">Blog</a>
```

In `Footer.astro`, delete this complete column:

```astro
<div><h3>From the Blog</h3><a href="/#blog">Read the Blog →</a></div>
```

- [ ] **Step 3: Rebalance the desktop footer**

In `global.css`, change:

```css
.footer-grid { grid-template-columns: 1.3fr repeat(4, 1fr); }
```

to:

```css
.footer-grid { grid-template-columns: 1.3fr repeat(3, 1fr); }
```

Do not change the mobile `grid-template-columns: 1fr` rule.

- [ ] **Step 4: Run the passing static assertion**

Run:

```bash
if rg -n 'href="/#blog"|From the Blog|Read the Blog' src/components/Header.astro src/components/Footer.astro; then exit 1; else echo 'Blog promise removed'; fi
```

Expected: `Blog promise removed` and exit 0.

- [ ] **Step 5: Build the site**

Run:

```bash
npm run build
```

Expected: exit 0 and all 14 routes generated.

- [ ] **Step 6: Commit the shared-chrome cleanup**

```bash
git add src/components/Header.astro src/components/Footer.astro src/styles/global.css
git commit -m "fix: remove dead blog navigation"
```

### Task 2: Correct the mobile Contact content spine

**Files:**
- Modify: `src/pages/contact.astro:339-348`

**Interfaces:**
- Consumes: the existing `.contact-grid`, `.contact-aside`, and `.contact-form-card` markup.
- Produces: a 390px collapsed layout where both direct children stretch to the available content width while desktop remains unchanged.

- [ ] **Step 1: Verify the current failing computed layout**

Start the local server:

```bash
npm run dev -- --host 127.0.0.1 --port 4321
```

At `http://127.0.0.1:4321/contact`, set the viewport to 390px and record:

```js
const grid = document.querySelector('.contact-grid');
const card = document.querySelector('.contact-form-card');
({
  alignItems: getComputedStyle(grid).alignItems,
  gridWidth: grid.getBoundingClientRect().width,
  cardWidth: card.getBoundingClientRect().width
})
```

Expected before implementation: `alignItems` is `start`, exposing the inherited desktop alignment in flex mode.

- [ ] **Step 2: Add the minimal mobile override**

Change the mobile rule to:

```css
.contact-grid {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 32px;
}
```

Do not modify the desktop `.contact-grid` declaration or `.contact-form-card` ordering.

- [ ] **Step 3: Verify mobile and desktop computed layout**

At 390px, rerun the snippet from Step 1.

Expected:

- `alignItems` equals `stretch`.
- `cardWidth` equals `gridWidth` within 1 CSS pixel.
- `document.documentElement.scrollWidth` equals `document.documentElement.clientWidth`.

At 1440px, verify `getComputedStyle(grid).display` equals `grid`, `alignItems` equals `start`, and the form remains the right-hand column.

- [ ] **Step 4: Build and commit**

```bash
npm run build
git add src/pages/contact.astro
git commit -m "fix: align mobile contact card"
```

Expected: build exits 0 and all 14 routes generate before the commit succeeds.

### Task 3: Fix confirmed small-label contrast on Oat

**Files:**
- Modify: `src/pages/services/ai-and-search-visibility.astro:165-175`
- Modify: `src/pages/services/branding.astro:183-193`
- Modify: `src/pages/services/web-design.astro:183-193`
- Modify: `src/pages/services/index.astro:239-249`
- Modify: `src/pages/work/index.astro:127-137`
- Modify: `src/pages/about.astro:249-258`
- Modify: `src/components/CaseStudy.astro:178-186`
- Modify: `src/components/CaseStudy.astro:293-301`

**Interfaces:**
- Consumes: existing placeholder markup and `--oat: #e4ddd3` surfaces.
- Produces: small uppercase placeholder captions with at least `4.5:1` contrast, without changing neutral text elsewhere.

- [ ] **Step 1: Prove the old and new contrast ratios**

Run:

```bash
node -e 'function L(h){const x=h.match(/\w\w/g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return .2126*x[0]+.7152*x[1]+.0722*x[2]} function C(a,b){a=L(a);b=L(b);return (Math.max(a,b)+.05)/(Math.min(a,b)+.05)} console.log({old:C("6d635c","e4ddd3"),next:C("655b54","e4ddd3")})'
```

Expected: `old` is approximately `4.34` and fails; `next` is approximately `4.90` and passes.

- [ ] **Step 2: Change only the eight Oat-caption selectors**

Replace `color: #6d635c` with `color: #655b54` in exactly these selectors:

```css
/* ai-and-search-visibility.astro */
.story-visual .ph-panel small

/* branding.astro and web-design.astro */
.ph-panel small

/* services/index.astro */
.claim-visual .ph-panel small

/* work/index.astro and about.astro */
.ph-panel small

/* CaseStudy.astro */
.ph-panel small
.feature-placeholder small
```

Do not change `.proof-client`, `.work-tag`, `.principle-num`, `.review-grid cite`, `.summary-label`, or `.quote-band cite`.

- [ ] **Step 3: Check the diff for contextual scope**

Run:

```bash
git diff -- src/pages/services/ai-and-search-visibility.astro src/pages/services/branding.astro src/pages/services/web-design.astro src/pages/services/index.astro src/pages/work/index.astro src/pages/about.astro src/components/CaseStudy.astro
```

Expected: exactly eight color declarations change from `#6d635c` to `#655b54`; no markup or unrelated declarations change.

- [ ] **Step 4: Build and commit**

```bash
npm run build
git add src/pages/services/ai-and-search-visibility.astro src/pages/services/branding.astro src/pages/services/web-design.astro src/pages/services/index.astro src/pages/work/index.astro src/pages/about.astro src/components/CaseStudy.astro
git commit -m "fix: raise oat label contrast"
```

Expected: build exits 0 and all 14 routes generate before the commit succeeds.

### Task 4: Verify interaction behavior and close the backlog batch

**Files:**
- Modify only on confirmed failure: `src/layouts/BaseLayout.astro:26-67`
- Modify: `plan.md`

**Interfaces:**
- Consumes: shared mobile navigation behavior, all arrow-style text links found by the audit, and completed Tasks 1-3.
- Produces: browser evidence for the mobile accordions and link treatments, plus accurate canonical project status.

- [ ] **Step 1: Run the arrow-link source audit**

Run:

```bash
rg -n '→|&rarr;|&#8594;|&#8599;|↗' src --glob '*.astro'
```

Classify every result using these exact rules:

- `dd-seeall`, `.text-link`, `.work-more`, `.next-link a`, and `.claim-link` must have reduced-motion-safe horizontal movement.
- Service rows, bridge cards, buttons, dropdown entries, whole cards, and mobile navigation links preserve their existing component-specific behavior.
- `.is-pending` text remains static.

Expected from the current source: every eligible plain arrow-style link already has the established motion; no code change is required. If the source audit contradicts that expectation, stop this plan and run `superpowers:systematic-debugging` before expanding the approved file scope.

- [ ] **Step 2: Verify both mobile accordions at 390px**

At `http://127.0.0.1:4321/`, use pointer and keyboard input to verify:

1. Open the mobile menu; Work and Services submenus are both hidden and both carets expose `aria-expanded="false"`.
2. Activate Work; only Work becomes visible and its caret becomes `true`.
3. Activate Work again; it becomes hidden and returns to `false`.
4. Repeat for Services.
5. With each submenu closed, Tab does not enter any of its links.
6. Press Escape; the menu closes, both submenus collapse, and all three `aria-expanded` values return to `false`.

Expected from the current source: all checks pass with no code change. If a check fails, make the smallest correction in `BaseLayout.astro` or the existing hidden-state CSS, rerun all six checks, then commit only that correction as `fix: repair mobile navigation accordion`.

- [ ] **Step 3: Run the complete automated gates**

```bash
node scripts/verify-content-architecture.mjs
npm run build
git diff --check
```

Expected: content verification passes, all 14 routes generate, and `git diff --check` reports nothing.

- [ ] **Step 4: Run the final browser matrix**

Check `/`, `/contact`, `/services`, `/work`, and one placeholder-bearing case-study route at 390px and 1440px.

Required evidence:

- Blog is absent from desktop header, mobile menu, and footer.
- Desktop footer has four balanced columns; mobile footer remains one column.
- Contact card equals the collapsed grid width within 1 CSS pixel at 390px and desktop remains two columns.
- Accordions pass all six behaviors from Step 2.
- Eligible arrow links move 4px on hover and keyboard focus when motion is allowed; disabled pending text stays still.
- Oat placeholder labels compute to `rgb(101, 91, 84)` and meet `4.5:1`.
- No tested page has horizontal overflow or new console errors.

- [ ] **Step 5: Update canonical project status**

Declare `WORK` mode before writing. In `plan.md`:

- Remove the dead Blog link, mobile submenu, muted-label contrast, mobile Contact alignment, and link-hover audit claims from active backlog text only after their relevant checks pass.
- Preserve the already-repaired Pricing-link fact; do not claim a new Pricing change.
- Replace `## Now` with the next highest-priority supported item, expected to remain the Web3Forms production key unless project state changes before execution.
- Prepend one Code entry under `## Recent` using the session-contract format, with concise `Did`, `Decided`, and `Verified` lines plus an exact `Files touched` line.

- [ ] **Step 6: Commit the verified closeout**

```bash
git add plan.md
git commit -m "docs: close basic cleanup batch"
```

If Task 4 required a source correction, include only that already-verified source file in its own preceding fix commit. Do not stage any unrelated untracked media or critique files.

---

## Final Review Checklist

- [ ] `git status --short` shows only the pre-existing unrelated untracked media and critique files.
- [ ] `git log --oneline -5` shows separate atomic commits for Blog chrome, Contact alignment, Oat contrast, any evidence-driven interaction repair, and plan closeout.
- [ ] No commit contains Web3Forms credentials, source media, or the Impeccable critique.
- [ ] No deployment command has been run.
