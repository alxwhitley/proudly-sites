# After Hours Product Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show the captured After Hours live carousel in the first product-proof row for local visual review.

**Architecture:** Extend the validated feature record with optional video and poster paths. The shared case component renders video first, image second, and the existing placeholder last. A small client script prevents autoplay when reduced motion is active.

**Tech Stack:** Astro 7 content collections, Markdown frontmatter, native HTML video, CSS media queries, Node verification script, H.264 MP4.

## Global Constraints

- Keep the existing 4:3 feature frame and alternating layout.
- Use `autoplay`, `muted`, `loop`, and `playsinline` only in normal-motion mode.
- Reduced-motion visitors receive the static poster.
- Do not change other case-study content or deploy the result.
- Preserve the unrelated existing `DESIGN.md` modification.

---

### Task 1: Add and verify optional feature video support

**Files:**
- Modify: `scripts/verify-content-architecture.mjs`
- Modify: `src/content.config.ts`
- Modify: `src/components/CaseStudy.astro`
- Modify: `src/content/case-studies/after-hours-ministry/index.md`
- Create: `src/assets/case-studies/after-hours-ministry/voice-carousel.mp4`
- Create: `src/assets/case-studies/after-hours-ministry/voice-carousel-poster.jpg`

**Interfaces:**
- Consumes: a feature record with optional `video` and `poster` image-schema fields.
- Produces: `<video class="feature-video" poster="…" autoplay muted loop playsinline>` in normal motion and a poster-only presentation under reduced motion.

- [ ] **Step 1: Extend the verifier with failing After Hours video assertions**

Assert that the After Hours content references both `voice-carousel.mp4` and `voice-carousel-poster.jpg`, that both files exist, and that `CaseStudy.astro` contains the native playback attributes plus reduced-motion pause logic.

- [ ] **Step 2: Run the verifier and confirm RED**

Run: `node scripts/verify-content-architecture.mjs`

Expected: failure because the published media files, content fields, and renderer support do not exist.

- [ ] **Step 3: Promote the review assets and implement minimal schema/rendering support**

Copy the reviewed MP4 into the route-owned folder, derive its poster from the middle frame, add optional `video` and `poster` image fields, reference them only from After Hours feature one, render the native video, and pause/remove autoplay when `prefers-reduced-motion: reduce` matches.

- [ ] **Step 4: Run the verifier and build to confirm GREEN**

Run: `node scripts/verify-content-architecture.mjs`

Expected: `Content architecture verified: 4 case studies.`

Run: `npm run build`

Expected: exit code 0 with all static routes generated.

- [ ] **Step 5: Verify locally in a browser**

Open `/work/after-hours-ministry` at 1440px and 390px. Confirm one video in the first feature, two remaining placeholders, muted inline autoplay, no overflow, no console errors, and a static poster under reduced motion.

- [ ] **Step 6: Leave the review implementation uncommitted**

Report the local URL and exact files changed. Do not deploy or commit the implementation until Alex accepts the visual result.
