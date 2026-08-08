# After Hours product video design

## Goal

Replace the first product-image placeholder on the After Hours case study with the approved live-site carousel capture so Alex can review motion in the real case-study layout.

## Scope

- Add optional feature-video support to the case-study content schema.
- Render a video only when a feature supplies one; retain the existing image and placeholder behavior for every other feature.
- Assign the six-second After Hours MP4 to the first feature, “A Voice That Feels Personal.”
- Use the live homepage capture as the poster and non-motion fallback.
- Do not publish, deploy, or alter other case studies.

## Presentation and behavior

- The video occupies the existing 4:3 feature-media frame and preserves the alternating product-proof layout.
- Playback attributes: `autoplay`, `muted`, `loop`, and `playsinline`.
- The video has no audio track and no controls because it functions as ambient product proof rather than standalone editorial video.
- `object-fit: cover` keeps the existing frame stable.
- Under `prefers-reduced-motion: reduce`, autoplay is suppressed and the poster remains visible.
- The existing parallax treatment does not animate the video under reduced motion.

## Content ownership

- Published MP4: `src/assets/case-studies/after-hours-ministry/voice-carousel.mp4`.
- Poster: `src/assets/case-studies/after-hours-ministry/voice-carousel-poster.jpg`.
- Canonical references remain in `src/content/case-studies/after-hours-ministry/index.md`.
- Raw and review sources stay in `content-inbox/assets/`.

## Verification

- Run the content architecture verifier and Astro production build.
- Check the After Hours route at desktop and mobile widths.
- Confirm the first feature contains one video, the other two remain placeholders, and no other case renders video.
- Confirm autoplay is muted and inline in normal motion mode.
- Confirm reduced-motion mode displays a static poster.
- Confirm no horizontal overflow or console errors.
