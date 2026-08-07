# Replacement checklist — /services image placeholders

Created 2026-08-07 during the Layout Discipline rework (`DESIGN.md` §"Layout
Discipline" / The Paired Claim Rule): every `/services` claim section now
pairs with a real image. Where no real asset exists yet, the section ships
behind a `data-placeholder="true"` panel instead of running as bare text or
a fabricated/stock fill. Find them all with:

```
grep -rn 'data-placeholder="true"' src/pages/services/
```

## Photography — 4 placeholder panels across 4 pages

| Subject | Page | Section | Suggested asset |
|---|---|---|---|
| After Hours Ministry brand-in-context | `/services/branding` | Proof rows, 3rd row | A real live-site screenshot of After Hours Ministry once a URL is on hand (see `assets.md` — no URL supplied yet). Same gap as the `/work/after-hours-ministry` case page. |
| After Hours Ministry site design | `/services/web-design` | Proof rows, 3rd row | Same asset as above — one capture serves both slots once sourced. |
| AI Overview / ChatGPT-style citation | `/services/ai-and-search-visibility` | "The way people find you is changing" claim block | A real screenshot of an AI Overview or ChatGPT-style answer citing one of Alex's client sites (or a stand-in search citation until a real one exists). First flagged in the 2026-08-06 2:15 PM Framer chat critique (`framer/proudly/log.md`). |
| AI Overview / ChatGPT-style citation (index preview) | `/services` | Search & AI Visibility claim block | Same asset as the `/services/ai-and-search-visibility` slot above — reuse once sourced rather than capturing twice. |

## Not a placeholder — real assets already wired

The `/services` index's Branding and Web Design claim blocks use real existing
assets (`/images/smith-cash.jpeg`, `/images/legacy-renovations.jpeg`), already
in production use elsewhere on the site (case pages, homepage). No action
needed there.

## Scope note

This file tracks only the placeholders introduced or reconfirmed by the
2026-08-07 Layout Discipline rework of `/services` and its three detail
pages. It does not duplicate the broader per-page asset log in `assets.md`
(case studies, homepage, /about) — check both files when doing a full
pre-launch photography pass.
