---
version: 1
slug: "src-pages-contact-astro"
primary_target: "src/pages/contact.astro"
related_targets: []
---

Scope: the `/contact` route (`src/pages/contact.astro`). Visitor mode: Persuade.

Audience and job: a reputation-led service-business founder (45-60, non-technical) who has decided to reach out and wants to feel they will reach one accountable person, not a queue. Job: send a short, qualified inquiry, or reach Alex directly.

Action and success: submit the contact form; the secondary path is the direct email/phone in the left ledger. Success is Alex receiving a message he can triage and personally answer.

Proof and content: the single-operator promise made literal - Alex's real portrait, name and role, direct email (alex@proudlysites.com), phone ((919) 634-8169), Raleigh NC, and a short "what happens next" note. No pricing, no response-time promise, no fabricated proof.

Chosen direction and memorable moment: an established "Grounded Workshop" extension (no new world, no concept roll). Full-width Playfair H1 plus lead, then a two-column body - human/contact ledger on the left, one flat white form card on the right. The memorable moment is the lone terracotta stacked-shadow CTA spent on Send, with Alex's face as the human anchor. Mobile reorders to intro then form then ledger (form-first for conversion).

Fields and states: light-qualify form (Name*, Email*, Phone optional, a "What do you need?" select*, Message*). States: default, HTML5 validation, submitting, inline success that replaces the form, a warm neutral error notice with a mailto fallback, and a no-JS native POST fallback.

Constraints: static Astro, no backend. The form posts to Web3Forms (host-agnostic, public access key); a JS fetch enhances it to inline success. Deploy host stays open.

Unresolved / builder must not invent:
- The Web3Forms access key is a PLACEHOLDER (`YOUR_WEB3FORMS_ACCESS_KEY`); the form will not deliver until the real public key is set.
- Cross-page nav: the shared Header/Footer use homepage anchors (#work / #services / #about) that do not resolve on /contact; the nav CTA reads "Get in Touch" per Alex. A nav pass is owed as the other secondary pages come online.
- No scheduler/booking exists; /contact is the stand-in per PRODUCT.md.
