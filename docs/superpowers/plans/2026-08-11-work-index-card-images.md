# Work Index Card Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the supplied After Hours and VitalWatch artwork to `/work`, add an external-only VitalWatch card, and send Strictly Clean's card to its live website.

**Architecture:** Keep the existing content collection as the source for the four published case-study cards. Add one route-local VitalWatch record and one Strictly Clean external-link override in `src/pages/work/index.astro`; store both supplied images in their canonical case-study asset folders so Astro can optimize them.

**Tech Stack:** Astro 5, Astro content collections, `astro:assets`, TypeScript frontmatter, scoped CSS.

## Global Constraints

- VitalWatch links to `https://www.vitalwatch24.com/`.
- Strictly Clean links to `https://www.strictlycleandetailing.com/`.
- External cards open in a new tab with `rel="noopener noreferrer"`.
- Existing internal case-study links, grid styling, responsive behavior, and hover treatment remain unchanged.
- VitalWatch is appended as the fifth card.

---

### Task 1: Add canonical card images

**Files:**
- Create: `src/assets/case-studies/after-hours-ministry/work-index.jpeg`
- Create: `src/assets/case-studies/vital-watch/work-index.jpeg`

**Interfaces:**
- Consumes: `assets/after-hours.jpeg` and `/Users/alexwhitley/Downloads/82shots_so.jpeg`.
- Produces: two Astro-importable JPEG assets at the paths above.

- [ ] **Step 1: Copy the approved source files to canonical asset paths**

Run:

```bash
cp assets/after-hours.jpeg src/assets/case-studies/after-hours-ministry/work-index.jpeg
cp /Users/alexwhitley/Downloads/82shots_so.jpeg src/assets/case-studies/vital-watch/work-index.jpeg
```

- [ ] **Step 2: Verify the copied assets**

Run:

```bash
file src/assets/case-studies/after-hours-ministry/work-index.jpeg src/assets/case-studies/vital-watch/work-index.jpeg
```

Expected: both files report valid JPEG image data; After Hours is 1920×1440 and VitalWatch is 5760×4320.

### Task 2: Update the work-index card model and links

**Files:**
- Modify: `src/pages/work/index.astro`

**Interfaces:**
- Consumes: the two `work-index.jpeg` assets from Task 1 and the existing `caseStudies` collection.
- Produces: a five-card `workCards` array whose records expose `title`, `slug`, `niche`, optional `location`, `summary`, `image`, `imageAlt`, `href`, and `external`.

- [ ] **Step 1: Add image imports and build normalized work-card records**

Add imports for both work-index images. Map the content collection into normalized records, replacing After Hours' missing hero with its supplied image and overriding Strictly Clean's `href` and `external` values. Append this exact VitalWatch content:

```ts
{
  title: "Vital Watch",
  slug: "vital-watch",
  niche: "Healthcare",
  location: "Raleigh",
  summary: "A home nursing service that finally looks like the care it gives.",
  image: vitalWatchWorkIndex,
  imageAlt: "Vital Watch healthcare website shown in a desktop browser frame",
  href: "https://www.vitalwatch24.com/",
  external: true,
}
```

- [ ] **Step 2: Render normalized records with safe external-link attributes**

Change the card loop to use `workCards` and `href={c.href}`. Add `target={c.external ? "_blank" : undefined}` and `rel={c.external ? "noopener noreferrer" : undefined}` to the anchor. Preserve the existing visual markup and fallback panel.

- [ ] **Step 3: Run static verification**

Run:

```bash
npm run build
```

Expected: all routes build with zero errors.

- [ ] **Step 4: Verify the rendered `/work` route in a browser**

At 1440px and 390px, confirm five cards, no horizontal overflow, no console errors, correct After Hours/VitalWatch imagery, correct external attributes for VitalWatch and Strictly Clean, and unchanged internal links for Smith Cash, Legacy Renovations, and After Hours.

- [ ] **Step 5: Commit the implementation**

```bash
git add src/pages/work/index.astro src/assets/case-studies/after-hours-ministry/work-index.jpeg src/assets/case-studies/vital-watch/work-index.jpeg
git commit -m "feat: refresh work index project cards"
```
