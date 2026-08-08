# Case-study Pointer Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace case-study scroll parallax with a subtle, explicitly classified browser-screen pointer effect, prove it on one Legacy Renovations image, and reserve scroll parallax for a future service-page secondary image.

**Architecture:** The content schema owns media classification through `mediaKind`; `CaseStudy.astro` converts only browser-classified images into pointer targets. A small framework-free motion module maps normalized pointer coordinates to bounded CSS variables and resets them on exit. Service-page parallax remains documented only until a real secondary image exists.

**Tech Stack:** Astro 5, TypeScript-flavored Astro scripts, CSS transforms, `requestAnimationFrame`, Node content-verification script, Playwright browser verification.

## Global Constraints

- Preserve all pre-existing uncommitted case-media and video work in this checkout.
- Never apply pointer motion to the case-study hero, branding/logo art, mobile screens, videos, placeholders, or unclassified images.
- Pilot only Legacy Renovations feature two before user approval.
- Do not add an empty service-page media slot or dormant service parallax code.
- Disable pointer motion for `prefers-reduced-motion: reduce`, coarse pointers, touch-only devices, and non-hover devices.
- Use no new runtime dependency.

---

### Task 1: Add explicit media classification and pilot data

**Files:**
- Modify: `src/content.config.ts`
- Modify: `src/content/case-studies/legacy-renovations/index.md`
- Modify: `scripts/verify-content-architecture.mjs`

**Interfaces:**
- Produces: `feature.mediaKind?: "browser" | "brand" | "mobile"` for `CaseStudy.astro`.
- Produces: exactly one pilot feature with `mediaKind: browser`.

- [ ] **Step 1: Extend the content verifier with a failing pilot contract**

Add parsed-frontmatter validation that Legacy feature two declares `mediaKind: browser`, while its other two features do not. The break caught is accidentally enabling multiple pilot images or failing to classify the approved pilot.

- [ ] **Step 2: Run the verifier and confirm the expected failure**

Run: `node scripts/verify-content-architecture.mjs`

Expected: non-zero exit describing the missing Legacy feature-two browser classification.

- [ ] **Step 3: Add the schema field and pilot metadata**

Add this optional schema field inside each feature:

```ts
mediaKind: z.enum(["browser", "brand", "mobile"]).optional(),
```

Add `mediaKind: browser` only to Legacy Renovations feature two.

- [ ] **Step 4: Run content verification and build**

Run: `node scripts/verify-content-architecture.mjs`

Expected: exit 0.

Run: `npm run build`

Expected: exit 0 with all routes generated.

### Task 2: Replace case parallax with bounded pointer motion

**Files:**
- Modify: `src/components/CaseStudy.astro`
- Test: browser verification script under `/tmp`, not committed

**Interfaces:**
- Consumes: `feature.mediaKind` from Task 1.
- Produces: `[data-pointer-tilt]` only on browser-classified image media.
- Produces CSS variables: `--pointer-rx`, `--pointer-ry`, `--pointer-x`, `--pointer-y`.

- [ ] **Step 1: Write a failing Playwright behavior probe**

The probe must open `/work/legacy-renovations`, assert exactly one `[data-pointer-tilt]`, assert it belongs to feature two, move the mouse near two opposite corners, verify the computed transform changes in opposite directions, leave the target, and verify it returns to the neutral transform. It must also assert the hero and every video lack the pointer selector.

- [ ] **Step 2: Run the probe and confirm the expected failure**

Run the project dev server, then run the probe against its local URL.

Expected: failure because `[data-pointer-tilt]` does not exist.

- [ ] **Step 3: Remove case-study scroll parallax**

Remove `data-parallax`, `--parallax-y`, the scroll listener, the parallax animation frame, and parallax-specific transform rules from `CaseStudy.astro`. Preserve unrelated reveal and reduced-motion video behavior.

- [ ] **Step 4: Add the pilot pointer target**

Render `data-pointer-tilt` only when the feature has an image and `feature.mediaKind === "browser"`. Apply `perspective(900px)` on the media wrapper and use the four bounded variables on the image-bearing inner element.

- [ ] **Step 5: Add the pointer controller**

Gate setup with:

```js
const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
```

For each eligible target, normalize pointer coordinates to `[-1, 1]`, clamp them, map them to no more than 2.5 degrees rotation and 3px translation, update through one `requestAnimationFrame`, and reset all variables on `pointerleave` and `pointercancel`.

- [ ] **Step 6: Run the pilot probe**

Expected: one target, opposing transforms at opposing corners, neutral reset, static hero, and no video target.

- [ ] **Step 7: Run reduced-motion and mobile probes**

At 1440px with reduced motion, assert the target's computed transform remains neutral after pointer movement. At 390px with touch emulation, assert no transform is applied, no horizontal overflow occurs, and no console errors appear.

### Task 3: Record the durable motion split and verify the site

**Files:**
- Modify: `DESIGN.md`
- Modify: `plan.md` at session close

**Interfaces:**
- Documents: case-study browser pointer motion and future service secondary-image parallax.

- [ ] **Step 1: Update the durable motion rule**

Replace the case-study parallax exception in `DESIGN.md` with two explicit rules: browser-only pointer motion in case-study proof rows, and future service-page parallax only after a real secondary asset exists. Record the one-image pilot gate.

- [ ] **Step 2: Run full verification**

Run: `node scripts/verify-content-architecture.mjs`

Run: `npm run build`

Run the pilot desktop, reduced-motion, and mobile Playwright probes across the Legacy route, plus a console-error and overflow smoke check on the other case-study routes.

Expected: all commands exit 0; exactly one pilot target exists; no case-study scroll transform remains; zero console errors and zero horizontal overflow.

- [ ] **Step 3: Stop for visual approval**

Present desktop evidence of the Legacy feature-two pilot to Alex. Do not classify or activate any additional browser screenshot until Alex explicitly approves the motion.

### Task 4: Post-approval browser-screen rollout

**Files:**
- Modify after approval only: matching `src/content/case-studies/*/index.md` records
- Modify if contracts expand: `scripts/verify-content-architecture.mjs`

**Interfaces:**
- Consumes: approved pointer behavior from Task 2.
- Produces: explicit `mediaKind: browser` only for visually confirmed browser screenshots.

- [ ] **Step 1: Inventory remaining images with Alex's approval**

Classify only assets that visibly represent browser screens. Keep branding compositions, logos, mobile captures, placeholders, and videos unclassified or assigned their non-browser kind.

- [ ] **Step 2: Add classifications without changing motion code**

Add `mediaKind: browser` to each approved record. No selector, transform, timing, or amplitude changes are part of rollout.

- [ ] **Step 3: Verify all case-study routes**

Run content verification, full build, desktop pointer checks for each newly classified image, reduced-motion checks, mobile overflow checks, and console-error checks.

Expected: every approved browser screenshot reacts; all excluded media remains static.

### Deferred service-page task: Add parallax when the real asset arrives

This is intentionally not executable in the current change because the secondary image, placement, and alt text do not exist. When supplied, create a separate implementation plan that adds the real asset and dedicated service-detail secondary-image slot, then ports the retired 16px maximum vertical scroll offset with mobile and reduced-motion disablement. Do not reuse case-study pointer metadata for this service-page behavior.
