# Legacy Case-Study Feature Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Populate Legacy Renovations' three case-study feature rows with approved media and matching branding, inquiry-path, and service-navigation copy.

**Architecture:** Add an opt-in natural-aspect media mode to the existing case-study content contract and shared component. Legacy opts into that mode for all three features; every other case retains the current cropped 4:3 default.

**Tech Stack:** Astro, Astro Content Collections, Markdown frontmatter, CSS, PNG assets.

## Global Constraints

- Preserve the supplied website screenshots pixel-for-pixel.
- Describe the homepage form as an inquiry or quote path, not appointment booking.
- Keep existing case-study media behavior unchanged unless a feature explicitly selects `natural`.
- Do not modify or remove the source assets in the canonical checkout.

---

### Task 1: Bring Legacy assets into the active worktree

**Files:**
- Create: `src/assets/case-studies/legacy-renovations/legacy-brand-mark.png`
- Create: `src/assets/case-studies/legacy-renovations/legacy-homepage-quote-path.png`
- Create: `src/assets/case-studies/legacy-renovations/legacy-services-navigation.png`

- [ ] Copy the three source files from the canonical checkout with descriptive names.
- [ ] Alpha-crop only the copied logo to remove excess transparent margins.
- [ ] Verify all three files are readable PNGs and retain alpha where present.

### Task 2: Add opt-in natural feature media

**Files:**
- Modify: `src/content.config.ts`
- Modify: `src/components/CaseStudy.astro`

**Interfaces:**
- Consumes: existing feature objects with `title`, `body`, `image`, and `alt`.
- Produces: optional `mediaPresentation: "crop" | "natural"`, defaulting to `crop`.

- [ ] Add a content-verification assertion that Legacy can declare `mediaPresentation: natural` and run it to confirm the schema rejects the field before implementation.
- [ ] Extend the collection schema with the optional enum and default.
- [ ] Add a natural-mode class that uses intrinsic image height, `object-fit: contain`, visible overflow, and no parallax transform.
- [ ] Run the content verifier and build.

### Task 3: Rewrite and populate Legacy's three features

**Files:**
- Modify: `src/content/case-studies/legacy-renovations/index.md`

- [ ] Replace the three feature titles, bodies, alt text, and image references with the approved branding, quote-path, and service-navigation narratives.
- [ ] Set `mediaPresentation: natural` on all three Legacy features.
- [ ] Run the content verifier and build.

### Task 4: Browser verification

**Files:**
- Verify: `/work/legacy-renovations`

- [ ] Test the page at 1440px and 390px.
- [ ] Confirm exactly three populated feature images, correct order, no cropping, and readable copy.
- [ ] Confirm zero horizontal overflow and zero console errors.
- [ ] Spot-check one unchanged case study to confirm default media behavior remains intact.
