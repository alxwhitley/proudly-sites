# Work Index Card Images

## Goal

Update `/work` so the portfolio grid uses the supplied After Hours and VitalWatch images, includes VitalWatch as an external-only project card, and sends the Strictly Clean card directly to its live website.

## Scope

- Copy `assets/after-hours.jpeg` into the canonical After Hours case-study asset folder.
- Copy `/Users/alexwhitley/Downloads/82shots_so.jpeg` into the canonical VitalWatch case-study asset folder.
- Use the supplied After Hours image for the existing After Hours card instead of its placeholder.
- Add a fifth VitalWatch card to the `/work` grid using the supplied image and the existing homepage project copy.
- Link the VitalWatch card to `https://www.vitalwatch24.com/`.
- Link the Strictly Clean card to `https://www.strictlycleandetailing.com/` instead of `/work/strictly-clean-detailing`.
- Open both external destinations in a new tab with `rel="noopener noreferrer"`.

## Implementation

Keep external-card configuration local to `src/pages/work/index.astro`. The existing content collection remains the source for the four case-study cards; a small slug-to-URL map overrides Strictly Clean's card destination, and a route-local VitalWatch record supplies its display copy, image, and URL. This avoids inventing a VitalWatch case-study entry or expanding the shared content schema for two index-only links.

The grid's existing markup, responsive behavior, hover treatment, and card ordering remain intact. VitalWatch is appended as the fifth card.

## Verification

- Run the production build.
- Check `/work` at desktop and mobile widths.
- Confirm five cards render without overflow or console errors.
- Confirm After Hours and VitalWatch use the supplied images.
- Confirm VitalWatch and Strictly Clean have the intended external `href`, `target`, and `rel` attributes.
- Confirm the other three cards still link to their existing Proudly case-study routes.
