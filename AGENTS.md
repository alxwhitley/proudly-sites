# Proudly Sites (Astro)

**Required first read:** `~/websites/astro/AGENTS.md`  
That file is the Astro lane workflow (Impeccable command spine). This folder is its own git repo and does not inherit parent project rules automatically.

## This project

- Mode: rebuild of agency marketing site (Framer → Astro); **no Decap/CMS** — content in code
- Stack: Astro + Vercel; Impeccable craft/extract/polish already in use
- Framer was prior source; reconciliation: `content-reconciliation.md`
- Overnight scope notes may live in `overnight-runbook.md` (session-local; not the lane spine)

## Fast path for bounded work

Use the fast path by default when the request has one clear outcome, no material ambiguity, and can be completed by changing at most three existing source files plus directly related assets or tests. Typical fast-path work includes copy edits, image swaps, isolated CSS/layout fixes, link changes, small accessibility corrections, and straightforward changes that follow an existing local pattern.

Alex can also explicitly invoke it by saying `fast path`. That instruction is approval to proceed directly when the eligibility rules above are met.

The fast path does **not** apply to new architecture, dependencies, public interfaces, content-schema changes, authentication/security, destructive actions, migrations, broad redesigns, unclear requirements, or changes spanning multiple systems. If a request crosses that boundary, say why in one sentence and use the normal workflow.

When the fast path applies, these project instructions override skill defaults that would otherwise add ceremony:

1. Do not run brainstorming interviews or require design approval beyond Alex's request. Ask a question only when the answer would materially change the result and cannot be discovered locally.
2. Do not create or commit design specs, implementation-plan documents, ADRs, worktrees, or feature branches unless Alex explicitly asks for them.
3. Do not invoke `superpowers:brainstorming`, `superpowers:writing-plans`, `superpowers:executing-plans`, `superpowers:subagent-driven-development`, or `superpowers:finishing-a-development-branch` for eligible work. Use a short internal checklist or a single concise commentary plan instead.
4. Use test-first development only when behavior or logic is changing. For copy, assets, markup, and styling, use the smallest relevant verification instead of manufacturing a regression test solely to satisfy process.
5. Load only the target file, its directly related data/test file, and one existing pattern when needed. Do not reread broad specs, full skill files, large logs, or unrelated routes after orientation.
6. Implement the complete bounded change in one pass. Consolidate related edits into one implementation commit rather than separate spec, plan, implementation, and session-log commits.
7. Run one final verification cycle after the complete edit:
   - docs-only: `git diff --check` plus focused diff review;
   - copy/asset/markup/style: targeted build and one browser pass on affected routes at 1440px and 390px;
   - behavior/logic: focused test(s), then the relevant build/browser check.
   Do not rerun unchanged verification after a documentation-only commit.
8. Keep tool output narrow: use targeted `rg`/`sed`, cap output, summarize successful build logs, and prevent assertions from dumping full generated HTML or other large artifacts. Inspect images at the lowest detail sufficient for the decision; do not send original-resolution media through the model unless pixel-level review requires it.
9. Keep commentary to orientation, a blocker or material finding, and the final result. Do not narrate every routine tool call.
10. Update `plan.md` once at session close, not after each micro-task. A single closeout entry may cover a coherent batch.
11. Push or deploy only when Alex explicitly asks. If asked to `ship`, that authorizes commit, push, production deploy, production smoke verification, and one closeout record as a single workflow.

Fast path never relaxes the hard safety rules, preservation of unrelated work, required project orientation, or evidence before completion claims.

## Canonical docs here

- `plan.md` — `## Now` + `## Recent` (+ morning queue when present)
- `PRODUCT.md` / `DESIGN.md` — Impeccable
- `assets.md` + `assets/` — media index
- Prefer `structure.md` + `pages/*-copy.md` for any new IA/copy work (Gate S); some copy still lives in routes from the Framer port — write back to `pages/*-copy.md` when edited
- `src/content/case-studies/<slug>/index.md` — canonical case-study content and metadata
- `src/content/blog/<slug>/index.md` — canonical blog content and metadata
- `src/assets/<content-type>/<slug>/` — route-owned shippable media
- `content-inbox/` — unprocessed material; read its README before promoting anything

## Content routing

| Task | Read first | Then inspect | Skip unless needed |
|---|---|---|---|
| Edit a case study | `src/content/case-studies/<slug>/index.md` | Matching `src/assets/case-studies/<slug>/`, `src/components/CaseStudy.astro` | Other case folders, `.impeccable/` |
| Add case-study material | `content-inbox/README.md` | Matching inbox and canonical slug folders | Unrelated routes |
| Write or edit a blog post | `src/content/blog/README.md` | Matching blog folder, `positioning.md` | Case studies, route CSS |
| Edit a fixed page | Matching `pages/*-copy.md` | Matching `src/pages/` route | Blog and case collections |
| Change shared design | `DESIGN.md` | `src/styles/global.css`, shared components | Content inbox |
| Find missing content or media | `plan.md`, `assets.md` | Matching canonical content folder and inbox | Design critique history |

## Open / blocked

- See `plan.md` `## Now` / morning queue (merge branch, Web3Forms key, placeholder imagery, finish-review decisions)
