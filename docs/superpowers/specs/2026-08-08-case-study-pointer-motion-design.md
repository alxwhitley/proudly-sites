# Case-study pointer motion design

## Goal

Give browser-screen images inside case-study proof rows a restrained pointer-responsive depth effect, while moving the existing scroll-parallax concept out of case studies and reserving it for a future secondary image on service-detail pages.

## Case-study behavior

- The case-study hero is always static.
- Only a feature image explicitly classified as `browser` is eligible for pointer motion.
- Branding artwork, logos, mobile screens, videos, placeholders, and unclassified images are static.
- On a fine-pointer hover device, the eligible image tilts away from the pointer by a maximum of 2.5 degrees on each axis and translates no more than 3px. The response is smoothed with `requestAnimationFrame` and eases back to neutral on pointer exit.
- The effect does not run when `prefers-reduced-motion: reduce` matches or when the device lacks both hover and a fine pointer.
- The existing case-study scroll parallax and its `data-parallax` contract are removed, so pointer motion has sole ownership of feature-image transforms.

## Eligibility contract

Each case-study feature receives an explicit `mediaKind` value: `browser`, `brand`, or `mobile`. Video remains represented by the existing `video` field and is never pointer-reactive. The rendered component exposes pointer behavior only when `mediaKind === "browser"` and the feature renders an image.

No filename inference, DOM image analysis, or automatic visual classification is allowed.

## Pilot and approval gate

The first implementation enables `mediaKind: browser` only on Legacy Renovations feature two, backed by `section2-browser.png`. All other feature images remain non-reactive during the pilot even if they will eventually qualify.

After automated and browser verification, work pauses for Alex's visual approval. Broader rollout is a separate step and must not happen before that approval.

## Service-page parallax

Case-study scroll parallax is retired immediately. Its future home is a dedicated secondary-image slot on service-detail pages, but no empty markup, placeholder, or dormant JavaScript ships before a real secondary image is supplied and its placement is known.

When that asset arrives, service-page parallax will reuse the prior constraints: restrained vertical movement during active desktop scrolling, no motion after scrolling stops, static mobile behavior, and full reduced-motion disablement.

## Verification

- Content validation accepts the new `mediaKind` contract.
- The Legacy feature-two image responds to pointer position and resets on exit.
- The hero, videos, placeholders, mobile presentations, branding images, and unclassified images do not receive the behavior.
- Reduced-motion and coarse-pointer contexts remain transform-free.
- Case-study pages no longer move in response to scroll.
- All case-study routes build without console errors or horizontal overflow.
