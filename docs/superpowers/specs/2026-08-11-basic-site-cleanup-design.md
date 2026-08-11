# Basic Site Cleanup Design

## Goal

Clear the smallest low-risk site backlog without adding content, credentials, components, dependencies, or a new visual direction.

## Scope

### Remove the unfulfilled Blog promise

- Remove the Blog link from the desktop primary navigation.
- Remove the Blog link from the mobile navigation.
- Remove the complete "From the Blog" footer column.
- Let the footer grid reflow from five columns to four columns on desktop.
- Do not create a Blog page, homepage Blog anchor, placeholder content, redirect, or disabled navigation item.

### Correct the mobile Contact layout

- Preserve the existing two-column desktop Contact layout.
- At `800px` and below, explicitly set the collapsed `.contact-grid` to `align-items: stretch` so the form card and contact details share the mobile content spine.
- Preserve the current form-first mobile order, spacing, and field behavior.

### Verify the mobile navigation accordions

- Treat the current `hidden` attribute and `.mobile-submenu:not([hidden])` rule as the intended implementation.
- Test Work and Services independently at 390px.
- Confirm each submenu starts closed, opens only from its own caret, updates `aria-expanded`, closes when toggled again, and does not expose hidden links to keyboard navigation.
- Change code only if verification exposes a failure. Do not redesign the mobile menu.

### Normalize obvious text-link motion

- Audit text links that visually use the site's arrow-link treatment.
- Preserve purposeful component motion, including service-row movement, card lifts, button presses, and dropdown item movement.
- For a plain arrow-style text link that has no interaction treatment, use the established `translateX(4px)` hover and `:focus-visible` behavior inside `prefers-reduced-motion: no-preference`.
- Do not animate disabled text, `.is-pending` states, ordinary inline prose links, navigation items, or whole cards.

### Correct muted-label contrast on Oat

- Inspect small labels and captions rendered directly on `--oat` (`#e4ddd3`).
- Where `#6d635c` is used on Oat, replace it contextually with `#655b54`, which has approximately `4.90:1` contrast on Oat.
- Do not globally replace `#6d635c`; preserve appearances on backgrounds where it already passes and preserve the broader neutral palette.
- Recheck every adjusted small-text instance against the WCAG AA `4.5:1` threshold.

## Files Expected to Change

- `src/components/Header.astro`: remove desktop and mobile Blog links.
- `src/components/Footer.astro`: remove the Blog column.
- `src/styles/global.css`: change the desktop footer grid to four columns; only adjust shared hover or mobile submenu CSS if the audit or browser verification requires it.
- `src/pages/contact.astro`: make the collapsed Contact grid stretch to the mobile content spine.
- Route-local Astro files only where the link-motion or Oat-contrast audit finds a confirmed violation.
- `plan.md`: close only the backlog claims proven complete by implementation and verification.

## Explicitly Out of Scope

- Web3Forms credentials or form-delivery testing.
- A Blog page, Blog content model, or homepage Blog section.
- Case-study imagery, URLs, quotes, previous/next navigation, or card redesign.
- Heading-font changes, service-page redesign, live-button palette decisions, and the Impeccable sidecar refresh.
- Broad token replacement or unrelated refactoring.

## Verification

- Run the project content verifier if present, followed by `npm run build`; all 14 existing routes must still generate.
- At 390px, verify the Contact card aligns to the content spine with no horizontal overflow.
- At 390px, exercise both mobile accordions with pointer and keyboard input and confirm their ARIA state matches visibility.
- At desktop width, confirm Blog is absent from the header and footer and the four-column footer remains balanced.
- Exercise every changed text-link hover and focus state, including reduced-motion behavior.
- Measure every changed Oat label at or above `4.5:1` contrast.
- Confirm zero new browser console errors.

## Completion Boundary

This batch is complete when the dead Blog promise is gone, the mobile Contact alignment is corrected, the existing accordions are verified or minimally repaired, confirmed arrow-link inconsistencies are normalized, confirmed Oat contrast failures are corrected, and the build and browser checks pass. No deployment is included without a separate instruction.
