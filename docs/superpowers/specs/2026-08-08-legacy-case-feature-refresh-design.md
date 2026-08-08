# Legacy Case-Study Feature Refresh

## Goal

Replace Legacy Renovations' three placeholder feature stories with proof that matches the approved assets: the new brand mark, the homepage quote path, and the service-page navigation and search structure.

## Feature sequence

1. **A Brand Built to Look Established** uses the Legacy mark and explains how the identity makes the company recognizable without competing with renovation photography.
2. **An Easier First Step for New Clients** uses the homepage and quote-form composition. The copy describes an inquiry or quote path, not appointment booking, because the interface does not schedule appointments.
3. **Services Organized for People and Search** uses the service-page composition and explains both offer discovery and focused search content.

## Media behavior

The supplied compositions must remain uncropped. Add an optional `natural` feature-media presentation while preserving the existing cropped 4:3 behavior as the default for all other case studies. Natural media uses its intrinsic aspect ratio, disables the crop/parallax wrapper, and remains responsive. The logo source may be alpha-cropped non-destructively to remove excess transparent padding.

## Asset handling

Copy the three untracked assets from the canonical checkout into this worktree with descriptive names. Do not delete or rename the originals. Keep all assets in `src/assets/case-studies/legacy-renovations/`.

## Verification

The content architecture verifier and Astro build must pass. Browser verification at desktop and mobile must confirm three populated features, uncropped media, no horizontal overflow, and no console errors. Other case-study behavior remains unchanged.
