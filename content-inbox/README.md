# Content inbox

This is the landing zone for material that has not yet been approved or published.

## Where to put things

- `assets/`: raw photos, screenshots, video, and client files. This folder is ignored by Git except for its README because source files may be private or very large.
- `blog-material/`: notes, source links, transcripts, and rough ideas for future articles.
- `case-study-material/`: interview notes, quotes, outcomes, URLs, and unprocessed project material.

## Processing rule

Do not publish directly from this folder. Verify the material, identify its destination slug, optimize any shippable media, then move approved content into `src/content/blog/<slug>/` or `src/content/case-studies/<slug>/`. Route-owned images go in the matching `src/assets/` slug folder.

Never invent a missing quote, URL, metric, or result. Record it as an open item in the destination Markdown instead.
