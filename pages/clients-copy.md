# Clients / field-visit list

Unlisted utility at `/clients`. Not in the marketing nav or footer. `noindex`. Dark spreadsheet scan view, not a marketing layout.

## Job of this page

Give Alex a dense 27613 lead table: one row per business, industry filters, `tel:` and Maps, horizontal scroll on phone.

## Source of truth

Lead facts live in `src/data/field-visits.json`. Do not invent emails, phones, hours, or addresses. Blank fields stay blank. `industry` is derived conservatively from the name or existing website host. `emailed` is true only after a real send; default false. The Sent checkbox is read-only on the page.

## Sections in order

1. Title, row count, home address, industry tabs.
2. Sticky-header table: Set, Stop, Sent, Name, Industry, Address, Hours, Closed, Phone, Website, Note.
