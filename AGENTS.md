# Proudly Sites (Astro)

This file is the single source of truth for agent work in this repo. `CLAUDE.md` points here — do not maintain a second copy of these rules. This folder is its own git repo and inherits nothing from any parent project folder.

## This project

- Mode: rebuild of agency marketing site (Framer → Astro); **no Decap/CMS** — content in code
- Stack: Astro + Vercel; Impeccable craft/extract/polish already in use
- Framer was the prior source; reconciliation: `content-reconciliation.md`

## Environment

Read this before running anything. A fresh checkout is not ready to build.

| Need | Command | Notes |
|---|---|---|
| Install | `npm install` | `node_modules/` is not committed; Node >= 22.12 |
| Build | `npm run build` | Writes `dist/`; currently 15 routes, expect zero errors |
| Tests | `node --test tests/*.test.mjs` | Tests assert against `dist/`, so build first; there is no `npm test` script |
| Content guard | `node scripts/verify-content-architecture.mjs` | Checks canonical content/asset layout |
| Local preview | `npm run preview` | Serves the built `dist/` |

Not available in a remote or cloud checkout — if a task needs one of these, stop and say so rather than substituting something else:

- The `/assets/` staging folder (gitignored by design; see `assets.md`) and anything under `~/websites/`, including the client vault and `positioning.md`
- The Framer agent CLI, local Impeccable hooks, and any path on Alex's machine such as `~/Downloads`
- Production deploy credentials and the Web3Forms inbox

## Scope contract

This applies to every task, fast path or planned, and outranks any skill, plan, or habit that would widen the work. Scope creep is the failure mode this repo cares most about.

1. **One outcome per task.** State the requested outcome in one sentence before editing. If you cannot, ask first.
2. **Change budget.** Touch only what that outcome requires. Fast-path work is capped at three existing source files plus directly related assets or tests; planned work is capped at the files the plan lists. Hitting the cap is a stop-and-report, not a reason to keep going.
3. **No drive-by work.** Do not fix, refactor, rename, reformat, restructure, upgrade, or "improve" anything you were not asked to change — including obvious typos, dead CSS, lint noise, stale comments, and adjacent files that share the same pattern. Being one line away from a fix is not authorization.
4. **Park it, don't fix it.** Anything you notice but were not asked to do goes in a `Noticed, not done` list in your final report. Add it to `plan.md` `## Follow-up Backlog` only when Alex asks for that.
5. **No unrequested files.** No new docs, specs, plans, ADRs, scripts, tests, dependencies, config, or extra branches. Add a file only when the requested outcome cannot ship without it.
6. **No invented content.** Never fabricate copy, testimonials, metrics, client names, prices, or imagery — see `PRODUCT.md` §Evidence on Hand. A missing asset, URL, or quote is a blocker to report, not a gap to fill with a plausible substitute or stock fill.
7. **Stop and ask when** the request is ambiguous in a way that changes the result, the fix needs a design or data decision rather than a mechanical edit, the ask conflicts with `PRODUCT.md` or `DESIGN.md`, a required asset or credential is missing, or the work would exceed the change budget. Report what is done, what is blocked, and the real options. Do not silently pick one and continue.
8. **Finish the ask.** Scope discipline is not a license to deliver half of it. Complete the stated outcome end to end, then stop at its edge.
9. **Report against the ask.** Every final summary states what was asked, what changed, what was deliberately left alone and why, and the evidence that it works.

## Fast path for bounded work

Use the fast path by default when the request has one clear outcome, no material ambiguity, and fits the change budget above. Typical fast-path work: copy edits, image swaps, isolated CSS/layout fixes, link changes, small accessibility corrections, and changes that follow an existing local pattern.

Alex can also invoke it explicitly by saying `fast path`. That is approval to proceed directly when the eligibility rules are met.

The fast path does **not** apply to new architecture, dependencies, public interfaces, content-schema changes, authentication/security, destructive actions, migrations, broad redesigns, unclear requirements, or changes spanning multiple systems. If a request crosses that boundary, say why in one sentence and use plan-first execution instead.

When the fast path applies, these project instructions override skill defaults that would otherwise add ceremony:

1. Do not run brainstorming interviews or require design approval beyond Alex's request. Ask a question only when the answer would materially change the result and cannot be discovered locally.
2. Do not create or commit design specs, implementation-plan documents, ADRs, or worktrees unless Alex explicitly asks for them.
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

Fast path never relaxes the scope contract, the hard safety rules, preservation of unrelated work, required project orientation, or evidence before completion claims.

## Plan-first execution

Anything bigger than the fast path is planned before it is built, and the planning happens outside this repo (with Astra or Fable). The plan is committed to `plans/` first; execution is a separate pass that reads it.

- **The committed plan is the scope boundary.** Execute its tasks and steps as written, in order. Its `Out of scope` list is binding for that pass even when an excluded item is adjacent, small, or obviously broken.
- **Do not redesign mid-run.** If a step is wrong, impossible, or already done, stop at that step and report with the specific options. Rewriting the plan while executing it is how a bounded task turns into an unbounded one.
- **Track progress in the plan file.** Check off steps as they land so a resumed session knows exactly where the last one stopped.
- **One plan, one branch, one PR**, unless the plan says otherwise.
- **Plans must run from a clean checkout.** No `~/` paths, no `/assets/` staging folder, no Downloads. Media a plan depends on is either already committed or attached to the task.
- Format and required sections: `plans/README.md` and `plans/TEMPLATE.md`. Plans from the earlier superpowers workflow live in `docs/superpowers/plans/` and are read-only history.

## Git and delivery

- Work on one branch per task. Commit each logical change with a descriptive message; push; open a draft PR.
- Do not merge, force-push, amend, or deploy to production unless Alex asks. `ship` authorizes commit, push, production deploy, production smoke verification, and one closeout record as a single workflow.
- Never revert, stage, or clean up unrelated uncommitted or untracked files. Some media in this working tree is intentionally untracked.
- At session close, add one entry to `plan.md` `## Recent` matching the existing shape: `### [Day Mon D, Year · short title] — Code`, then `- **Did:**`, `- **Verified:**`, and `- **Shipped:**` or `- **Blocked:**`, plus `- **Decided:**` when a judgment call was made.

## Canonical docs here

- `plan.md` — `## Now` + `## Recent` (+ morning queue when present)
- `PRODUCT.md` / `DESIGN.md` — Impeccable; product truth and design system
- `assets.md` — media index; `REPLACE.md` — open image placeholders
- `structure.md` — sitemap, navigation, content ownership, naming
- `pages/*-copy.md` — fixed-page copy contracts; prefer these + `structure.md` for any new IA/copy work (Gate S). Some copy still lives in routes from the Framer port — write back to `pages/*-copy.md` when edited
- `src/content/case-studies/<slug>/index.md` — canonical case-study content and metadata
- `src/content/blog/<slug>/index.md` — canonical blog content and metadata
- `src/assets/<content-type>/<slug>/` — route-owned shippable media
- `content-inbox/` — unprocessed material; read its README before promoting anything
- `plans/` — approved implementation plans awaiting or under execution

## Content routing

| Task | Read first | Then inspect | Skip unless needed |
|---|---|---|---|
| Edit a case study | `src/content/case-studies/<slug>/index.md` | Matching `src/assets/case-studies/<slug>/`, `src/components/CaseStudy.astro` | Other case folders, `.impeccable/` |
| Add case-study material | `content-inbox/README.md` | Matching inbox and canonical slug folders | Unrelated routes |
| Write or edit a blog post | `src/content/blog/README.md` | Matching blog folder, `PRODUCT.md` | Case studies, route CSS |
| Edit a fixed page | Matching `pages/*-copy.md` | Matching `src/pages/` route | Blog and case collections |
| Change shared design | `DESIGN.md` | `src/styles/global.css`, shared components | Content inbox |
| Find missing content or media | `plan.md`, `assets.md`, `REPLACE.md` | Matching canonical content folder and inbox | Design critique history |
| Execute an approved plan | The plan in `plans/` | Only the files that plan names | Everything the plan excludes |

## Open / blocked

See `plan.md` `## Now`, `## Next Session Punch List`, and `## Follow-up Backlog`. Standing blockers as of the last closeout: real end-to-end Web3Forms inbox confirmation, missing case-study live URLs and photography, and the `/services` placeholder panels listed in `REPLACE.md`.
