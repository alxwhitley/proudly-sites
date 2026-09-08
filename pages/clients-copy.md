# Clients / field-visit list

Unlisted utility at `/clients`. Not in the marketing nav or footer. `noindex`. Dark spreadsheet scan view, not a marketing layout.

## Job of this page

Give Alex a dense 27613 lead table: General vs Visit vs Today tabs, industry filters, buyer score, outreach outcome, Sent, IG, `tel:` and Maps.

## Source of truth

Lead facts live in `src/data/field-visits.json`. Do not invent emails, phones, hours, addresses, or Instagram. Blank fields stay blank. `email` is a published address from the business’s own site, or absent. Published emails render as `mailto:` in Note. `instagram` is a published `@handle` from the business’s own site (or official same-name/same-city page), or `""`. `industry` is derived conservatively from the name or existing website host. `emailed` is true only after a real send; default false. `buyer_score` is 1–3 (temporary stand-in from the former rating until rescored). `visit` is logistics-only and independent of buyer score. `outcome` is `""` until first-touch email, then one of `no_reply` | `replied` | `meeting` | `declined` | `closed`. `ai_visible` is `true` | `false` | `null` (unknown). `competitors_shown` is a string array, default empty. Today’s Maps loop stays in `today.stopNames` drive order.

## Sections in order

1. Title, row count, home address.
2. Primary tabs: General | Visit | Today.
3. Industry filters: All leads, Churches, Healthcare, Law firms.
4. Sticky-header table: Set, Stop, Sent, Buyer, Outcome, Name, Industry, Address, Hours, Closed, Phone, Website, IG, Note.
