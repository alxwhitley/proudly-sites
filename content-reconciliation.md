# Homepage content reconciliation — home-copy.md vs. live Framer (New-build, 2026-08-06)

**Purpose:** `~/websites/framer/proudly/pages/home-copy.md` was the copy source of record, but the live Framer New-build branch (`ibncrjpdo`) has been edited directly in the editor multiple times since (see `framer/proudly/log.md`, especially the 2026-08-01 sessions). Pulled live via the Framer agent CLI (`framer.agent.serialize` on the homepage node `augiA20Il`, plus a full-page screenshot for visual confirmation) on 2026-08-06. Where the two disagree, both versions are recorded below — nothing has been picked as "correct." These need Alex's call before the Astro build hardcodes anything.

Sections where live matches home-copy.md (Proof Strip client-tag intent, Featured Work eyebrow/H2, Process, most Testimonials, CTA headline/body) are not listed as conflicts below unless a specific line differs.

## Resolutions (decided Thursday Aug 6, 2026)

All items below were decided with Alex on 2026-08-06. The analysis is kept for reference; these are the calls the Astro build now follows.

1. Jubala vs Vital Watch: follow live. Vital Watch stays in the Proof Strip, Featured Work, and Footer; Jubala stays out.
2. Hero vs bottom CTA: keep live. Hero "Get in Touch", bottom CTA "Let's Work Together".
3. Nav CTA label: "Get in Touch". (This first landed on "Book a Free Call", then Alex changed it to "Get in Touch" the same session; the shared Header already reads "Get in Touch".)
4. Nav structure: build the full secondary-page set (Work, Services, Pricing, Blog, About) and match the live nav.
5. Third Services card: rewritten for real "Search & AI Visibility" positioning (done on the homepage this session).
6. Case-study tag chips: keep the live 4-tag chips.
7. Testimonials: keep live, 3 real quotes plus the "5.0 Google" stat tile.
8. Footer: full sitemap as-is.
9. Smith Cash proof-strip tag: confirmed a live-only wiring bug; the Astro build already renders "Family Law" correctly, so no change needed.
10. Pricing: carry the live number-free pricing copy forward.

Plus: keep the mobile 16px text floor on the homepage.

---

## Nav

**home-copy.md:** Links: Our Work · Pricing · Blog · About. CTA button: Contact.

**Live:** Work (dropdown) · Services (dropdown) · Pricing · Blog · About. CTA button: **Book a Free Call**.

**Conflict:** A "Services" dropdown now exists in the nav that home-copy.md doesn't document at all. The CTA button reads "Book a Free Call" live, not "Contact." Nav link count and structure has grown since home-copy.md was written.

---

## Hero

**home-copy.md:** Primary CTA: **Let's Work Together**.

**Live:** Primary CTA button reads **Get in Touch**.

Everything else in Hero matches exactly: location line, H1 ("Your Business Has *Outgrown* Your Website"), subhead, phone number `(919) 634-8169`, and the Alex chip ("You work directly with me." / Alex Whitley, Founder).

**Conflict:** Hero CTA copy. Note "Let's Work Together" isn't gone from the page — it's live on the bottom CTA section instead (see CTA section below), matching home-copy.md's CTA button text but not its Hero button text. The two CTA labels may have been swapped at some point, or this may be intentional variation. Flagging, not resolving.

---

## Proof Strip

**home-copy.md:** Smith Cash Family Law · Family Law / Jubala Coffee · Coffee & E-commerce / After Hours Ministry · Ministry / Legacy Renovations · Kitchen & Bath.

**Live:** Smith Cash Family Law · **Smith Cash Family Law** (industry tag duplicates the company name instead of showing an industry) / After Hours Ministry · **Nonprofit & Church** / **Vital Watch · Healthcare** / Legacy Renovations · Kitchen & Bath.

**Conflict — significant:** Jubala Coffee is not in the live Proof Strip at all. Vital Watch (a client not mentioned anywhere in home-copy.md) has taken a slot instead. Smith Cash's industry tag appears to be a wiring bug (repeats the company name rather than reading "Family Law") — flagging as a probable bug, not a content decision, but not fixing it silently. Industry wording also differs from home-copy.md's exact phrasing for After Hours Ministry ("Ministry" vs. live's "Nonprofit & Church").

---

## Featured Work

Eyebrow ("Selected Work") and H2 ("Their Craft, Presented Well") match home-copy.md exactly.

**home-copy.md documents 3 cases:** Smith Cash Family Law, Jubala Coffee (marked as the "ceiling-proof case, carries the competence claim"), Legacy Renovations.

**Live renders 3 cases, in this order:** Smith Cash Family Law, **Vital Watch**, Legacy Renovations. Confirmed by screenshot — Jubala Coffee does not appear in the rendered Featured Work section.

- **Case 1 — Smith Cash Family Law:** niche label, H3, and body all match home-copy.md exactly. Live adds 4 tag chips not in home-copy.md at all: "17-Page Site," "Trust-First Brand Identity," "Automated Lead Intake," "High-Intent Legal SEO." Quote and attribution match ("Thoughtful, professional, and highly receptive to feedback." — Kelly S., Smith Cash Law).
- **Case 2 — Vital Watch (live only, not in home-copy.md):** niche label "Vital Watch · Raleigh," H3 "A home nursing service that finally looks like the care it gives," full body copy, and 4 tags ("Full Brand Launch," "Custom Nav," "Healthcare Partners Portal," "SEO"). No quote shown for this card.
- **Case 3 — Legacy Renovations:** niche label, H3, body, and quote all match home-copy.md exactly. Live adds 4 tags not in home-copy.md: "First Real Brand," "SEO-Optimized Service Pages," "Before/After Portfolio," "Service-Based Navigation."

**Conflict — significant:** Jubala Coffee, which home-copy.md explicitly calls out as the case that "makes the $10k buyer feel served" and should carry the competence claim, is absent from the rendered page. Leftover Jubala override data (eyebrow "Jubala Coffee · Raleigh," matching H3/body) still exists deeper in the component tree, but it carries a misattributed quote — the Smith Cash quote and "Kelly S. — Smith Cash Law" attribution — and does not render on the live page per the screenshot. Whether Jubala is meant to come back into rotation, was intentionally swapped for Vital Watch, or is mid-edit is Alex's call, not something to infer here.

Also new since home-copy.md: every case now carries 4 capability tags. home-copy.md has no tag content for any case.

---

## Who You're Working With

Eyebrow, H2 ("Hi, I'm Alex. Your project never gets handed off."), body, and the first two points ("Direct, every step" / "Weeks, not months") all match home-copy.md exactly.

**home-copy.md, point 3:** Transparent pricing — [PRICING PLACEHOLDER, do not hardcode a range].

**Live, point 3:** **Clear pricing, agreed upfront** / **No surprise invoices, ever.**

**Conflict:** The live version has been rewritten to avoid a pricing number entirely rather than carrying a placeholder — this reads as resolved copy, not stale copy, but it's a different sentence from what home-copy.md has on file. Point 4 ("Raleigh-based" / "Local, reachable, invested in Triangle businesses.") matches exactly.

---

## Services ("Strategy, Copy, and Design, In-House") — the flagged suspect section

This is the section log.md's 2026-08-01 10:35 AM entry flagged as edited directly in the Framer editor, with its per-card body text possibly out of sync. Confirmed:

Eyebrow ("What We Do") and H2 ("Strategy, Copy, and Design, In-House") match.

- **Branding card:** heading and body match home-copy.md exactly.
- **Web Design card:** heading and body match home-copy.md exactly.
- **Third card — conflict, confirmed real:** live heading reads **"Search & AI Visibility"**, but the body text is unchanged from the old "Web Development" copy: *"Your site, fully in your control. Built custom in Framer, SEO-ready, and easy to update without calling a developer."* home-copy.md still documents this card under its old name, "Web Development," with this exact same body — so home-copy.md is internally consistent with itself, but the live heading has moved on without the body following. The body describes site control/CMS-updatability, not search or AI visibility at all. This matches the same drift already flagged in `framer/proudly/log.md`'s 2026-08-01 entries for the Services detail-page card_teaser field — it's the same unresolved rename, independently confirmed here on the homepage teaser too.

---

## Process

Eyebrow, H2, intro, and all 4 steps (title + body) match home-copy.md exactly, word for word.

---

## Testimonials

Eyebrow ("Reviews"), H2 ("What Clients Say"), and 3 of the quotes match home-copy.md exactly: Josh F. / After Hours Ministry, Kelly S. / Smith Cash Law, Tony R. / Legacy Renovations.

**home-copy.md's 4th card:** "(Jubala quote once available)" — documented as a 2×2 grid of 4 testimonials.

**Live's 4th card:** not a testimonial at all — a stat card reading "5.0 / Rated 5.0 on Google Reviews."

**Conflict:** The grid is no longer 4 testimonials with a Jubala placeholder; it's 3 real quotes plus one stat tile. This is a structural change, not just a missing quote — home-copy.md's 2×2-testimonial-grid framing is stale.

---

## CTA

H2 ("Your Work Deserves a Website That Proves It") and body match home-copy.md exactly. Button reads "Let's Work Together" — matches home-copy.md's CTA button text (see Hero note above re: the possible swap).

**home-copy.md sub:** [PRICING PLACEHOLDER] · Live in weeks, not months.

**Live sub:** Live in weeks, not months — no pricing placeholder text at all, not even a bracketed stand-in.

No "legitimacy anchor" line under the Alex card on either version — this was already an open, unresolved recommendation in home-copy.md, not a new conflict.

---

## Footer — conflict, structural rebuild

**home-copy.md documents:** Logo (Proudly Sites) / Links: Our Work · Pricing · Blog · About · Contact / Contact line: (919) 634-8169 · Raleigh, NC.

**Live footer is a full sitemap footer**, not the simple link row home-copy.md describes:
- **Services column:** Branding, Web Design, Search & AI Visibility
- **Case Studies column:** Smith Cash Family Law, Vital Watch, Legacy Renovations — Jubala Coffee absent here too, consistent with Featured Work and the Proof Strip
- **From the Blog column:** Blog Post 1 (TBD), Blog Post 2 (TBD), Blog Post 3 (TBD)
- **Contact:** 919-634-8169, alex@proudlysites.com
- **Copyright line:** © 2026 Proudly Sites. Raleigh, NC.
- **Social row:** Instagram (TBD) · LinkedIn (TBD)

**Conflict — significant:** This is not a copy-level drift, it's a different footer entirely. home-copy.md's footer spec should be treated as fully superseded by the live structure, pending Alex's confirmation on which one the Astro build should follow (and whether the "(TBD)" blog posts and social links should exist at all in a no-CMS rebuild with no blog yet).

---

## Not a content conflict, flagging anyway

The live project's page metadata has `noIndexSite: true` set (via `framer.agent.serialize` on the homepage node). Not a copy issue, but worth Alex knowing the New-build branch is currently set to noindex at the project level — separate from anything this reconciliation pass was scoped to fix.

---

## Summary of what needs Alex's call before the Astro build hardcodes copy

1. **Jubala Coffee vs. Vital Watch** in Proof Strip, Featured Work, and Footer Case Studies — is Jubala coming back, staying out, or was this an intentional swap?
2. **Hero CTA vs. bottom CTA label** — "Get in Touch" vs. "Let's Work Together," possibly swapped.
3. **Nav CTA label** — "Contact" (home-copy.md) vs. "Book a Free Call" (live).
4. **Nav structure** — new "Services" dropdown not in home-copy.md.
5. **Third Services card** ("Search & AI Visibility") — body copy needs a real rewrite; it still describes the old "Web Development" positioning.
6. **Case-study tag chips** — new content (4 tags per case) with no home-copy.md source; needs real copy if kept, or explicit confirmation to drop for the Astro build.
7. **Testimonial grid** — 3 quotes + 1 stat tile (live) vs. 4-quote 2×2 grid with a Jubala placeholder (home-copy.md).
8. **Footer** — full sitemap rebuild vs. home-copy.md's simple link row; also decide on the "(TBD)" blog/social placeholders for a no-CMS launch.
9. **Smith Cash proof-strip tag** — likely a wiring bug (repeats company name instead of "Family Law"), not a content decision, but confirm before fixing.
10. **Pricing copy** — home-copy.md's placeholder bracket has already been resolved into real, number-free copy in both the "Who You're Working With" points and the CTA sub. Worth confirming whether the Astro build should carry this same numberless approach forward, since PRODUCT.md / DESIGN.md's pricing note still assumes a number is eventually coming.
