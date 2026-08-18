# Clients / field-visit list

Unlisted utility at `/clients`. Not in the marketing nav or footer. `noindex`. Dark spreadsheet scan view, not a marketing layout.

## Job of this page

Give Alex a dense 27613 lead table: General vs Visit tabs, industry filters, ratings, Sent, IG, `tel:` and Maps.

## Source of truth

Lead facts live in `src/data/field-visits.json`. Do not invent emails, phones, hours, addresses, or Instagram. Blank fields stay blank. `email` is a published address from the business’s own site, or absent. Published emails render as `mailto:` in Note. `instagram` is a published `@handle` from the business’s own site (or official same-name/same-city page), or `""`. `industry` is derived conservatively from the name or existing website host. `emailed` is true only after a real send; default false. `rating` is 1–3 from existing lead tells only; `visit` is true only when rating is 3.

## Sections in order

1. Title, row count, home address.
2. Primary tabs: General | Visit.
3. Industry filters: All leads, Churches, Healthcare, Law firms.
4. Sticky-header table: Set, Stop, Sent, Rate, Name, Industry, Address, Hours, Closed, Phone, Website, IG, Note.
