# Content Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make case studies, blog posts, page copy, and their assets predictable for both Astro and future terminal agents.

**Architecture:** Astro content collections provide the canonical case-study and blog records. Route-owned images live under matching slug folders in `src/assets/`, while global brand assets remain in `public/`. A root routing table and small workspace README files tell future agents exactly what to read and what to skip.

**Tech Stack:** Astro 7 content collections, Markdown, TypeScript, Node verification script.

## Global Constraints

- Preserve all existing live URLs and rendered case-study content.
- Do not fabricate missing images, quotes, URLs, or outcomes.
- Keep raw/private source material outside the public build.
- Use lowercase kebab-case for slugs and asset names.
- Do not create or configure a CMS.

---

### Task 1: Content contracts and verification

**Files:**
- Create: `scripts/verify-content-architecture.mjs`
- Create: `src/content.config.ts`
- Create: `src/content/case-studies/*/index.md`
- Create: `src/content/blog/README.md`

- [ ] Write and run a structural verification script that fails against the current layout.
- [ ] Define the case-study and blog collection schemas.
- [ ] Migrate all four case-study records without changing their copy.
- [ ] Run the verifier and `npm run build`.

### Task 2: Dynamic work routes and owned assets

**Files:**
- Create: `src/pages/work/[slug].astro`
- Modify: `src/pages/work/index.astro`
- Modify: `src/pages/index.astro`
- Delete: four static case-study route files and `src/data/work.ts`
- Move: case-study images from `public/images/` to `src/assets/case-studies/<slug>/`

- [ ] Render all case detail routes from the content collection.
- [ ] Render work cards and featured homepage work from the same collection.
- [ ] Confirm existing route paths and visible copy remain intact.
- [ ] Run the verifier and `npm run build`.

### Task 3: Authoring rooms and agent routing

**Files:**
- Create: `content-inbox/README.md`
- Create: `content-inbox/assets/.gitkeep`
- Create: `content-inbox/blog-material/.gitkeep`
- Create: `content-inbox/case-study-material/.gitkeep`
- Create: missing `pages/*-copy.md` route contracts
- Create: `structure.md`
- Modify: `AGENTS.md`, `CLAUDE.md`, `assets.md`, `.gitignore`

- [ ] Add concise intake and editorial workspace instructions.
- [ ] Document the sitemap and task-to-file routing table.
- [ ] Update the asset index to point to canonical owned assets.
- [ ] Run structural verification and the production build.

### Task 4: Final verification and session handoff

- [ ] Run the full verifier and production build from a clean command.
- [ ] Inspect the final diff for duplicated records, broken references, and private files.
- [ ] Update `plan.md` in WORK mode following the session contract.
- [ ] Commit the completed implementation atomically.
