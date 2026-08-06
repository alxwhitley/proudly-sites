---
version: 1
slug: "src-pages-about-astro"
primary_target: "src/pages/about.astro"
related_targets: []
---

Scope: the `/about` route (`src/pages/about.astro`). Visitor mode: Persuade. Established-world extension of the homepage's "Grounded Workshop" - no new world, no concept roll, no comp.

Audience and job: a reputation-led service-business founder (45-60, non-technical), usually referred, weighing whether to trust one person with their site. Job: leave believing the single-operator model is a strength, not a risk, and move to /contact.

Action and success: reach the closing CTA and click through to /contact. Success is a qualified inquiry from someone who now reads "one accountable person" as the reason to hire, not the reason to hesitate.

Proof and content: all real/approved. Alex's one real headshot (reused hero + CTA card), the single-operator promise made concrete, the honest "is one person enough?" objection answered, reused live homepage claims (5.0 Google Reviews, Raleigh), and two user-confirmed credentials: "5 years in business" (trust bar) and "Member, Triangle Christian Chamber of Commerce" (Alex CTA card). No pricing number, no fabricated proof.

Chosen direction and memorable moment: the Framer about-mockup's section order rebuilt on the live tokens/chrome (its stale tokens dropped). Sequence: two-column hero (H1 + lead / real 4:5 headshot); a text-forward "Why This Exists" story anchored by an italic Playfair pullquote (the focal moment); a hairline-divided numbered "Three things I won't compromise on"; the italic "Is one person really enough?" section with three forward-looking capability chips; a thin trust bar; and a dark closing with the lone terracotta stacked-shadow CTA plus a Dark-Card "Alex" credential card. The memorable moment is the pullquote plus the honest-question section turning the solo model from risk into reassurance.

Photo decision: only one real photo exists (alex-whitley.jpeg); used in the hero and the small CTA card. The story is deliberately text-forward - the absence of a second/candid photo is a decision, not a gap (DESIGN.md bans placeholder imagery).

States: static content page, no forms. Scroll-reveal (IntersectionObserver adds `.in`) is gated behind a JS-added `.reveal` class so no-JS and reduced-motion visitors get fully visible content; the hero has a CSS load fade-up under prefers-reduced-motion: no-preference.

Unresolved / builder must not invent:
- The capability chips keep "Booking systems" with no case study behind it yet (Alex chose "keep all three" as a forward-looking capability claim); it is the line most exposed to PRODUCT.md's "don't overstate the evidence" principle if ever revisited.
- Cross-page nav debt (shared with /contact): the shared Header uses homepage anchors (#work / #services / #about) that do not resolve off the homepage, and there is no Pricing nav item; a nav pass is owed as the secondary pages land.
- Pricing shows no number (PRODUCT.md forbids the old range until Alex confirms one); the CTA subline is "Live in weeks, not months."
