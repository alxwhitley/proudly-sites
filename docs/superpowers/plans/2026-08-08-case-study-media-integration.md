# Case Study Media Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the approved case-study placeholders with their matching still and video product media in section 1, section 2, section 3 order.

**Architecture:** Keep each case record as the canonical ordering source and extend its three feature records with optional still or video media. The shared `CaseStudy.astro` renderer will choose the declared media kind while preserving the existing alternating narrative layout, product-image transparency, reduced-motion behavior, and mobile copy-first order.

**Tech Stack:** Astro 7 content collections, Markdown frontmatter, native HTML video, CSS, Node content verification, Playwright browser verification.

## Global Constraints

- Do not regenerate, crop, recolor, or otherwise visually alter approved media.
- Preserve section order: section 1, section 2, section 3.
- After Hours section 1 is the desktop browser-framed video; section 2 is the stitched browser still; section 3 is the mobile-behavior video without browser chrome.
- Product media has transparent surroundings, subtle shadow, slight radius, and no gradient background.
- Keep unrelated existing and user changes intact.
- Do not publish or deploy.

---

### Task 1: Restore the approved video support and lock ordering with tests

**Files:**
- Modify: `scripts/verify-content-architecture.mjs`
- Modify: `src/content.config.ts`
- Modify: `src/pages/work/[slug].astro`
- Modify: `src/components/CaseStudy.astro`

- [x] Add verifier assertions for the three affected case records, exact media order, and video renderer behavior.
- [x] Run `node scripts/verify-content-architecture.mjs` and confirm it fails because the final records are not wired.
- [x] Restore and adapt the existing optional video schema and renderer work.

### Task 2: Wire approved media and accurate section copy

**Files:**
- Modify: `src/content/case-studies/smith-cash-family-law/index.md`
- Modify: `src/content/case-studies/legacy-renovations/index.md`
- Modify: `src/content/case-studies/after-hours-ministry/index.md`
- Add: approved route-owned media under the matching `src/assets/case-studies/<slug>/` folders

- [x] Add Smith Cash section 1, 2, and 3 stills in filename order.
- [x] Add Legacy section 1 branding, section 2 homepage/service proof, and section 3 service-detail proof.
- [x] Add After Hours section 1 desktop video, section 2 stitched still, and section 3 mobile-behavior video.
- [x] Adjust feature titles, bodies, and alt text only where the supplied asset demonstrates something more specific than the placeholder copy.

### Task 3: Verify, document, and commit

**Files:**
- Modify: `assets.md`
- Modify: `plan.md`

- [x] Run `node scripts/verify-content-architecture.mjs` and `npm run build`.
- [x] Verify the affected case routes at 1440px and 390px, including console errors, overflow, section order, video playback, and reduced motion.
- [x] Update the asset index and session close fields.
- [x] Inspect the staged diff for unrelated files and secrets, then create one focused commit.
