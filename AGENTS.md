# Proudly Sites (Astro)

**Required first read:** `~/websites/astro/AGENTS.md`  
That file is the Astro lane workflow (Impeccable command spine). This folder is its own git repo and does not inherit parent project rules automatically.

## This project

- Mode: rebuild of agency marketing site (Framer → Astro); **no Decap/CMS** — content in code
- Stack: Astro + Vercel; Impeccable craft/extract/polish already in use
- Framer was prior source; reconciliation: `content-reconciliation.md`
- Overnight scope notes may live in `overnight-runbook.md` (session-local; not the lane spine)

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
