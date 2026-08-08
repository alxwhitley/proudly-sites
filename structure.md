# Proudly Sites structure

## Sitemap

- `/`: Home. Establish the reputation-led positioning, show featured work, explain the process, and lead to contact.
- `/about`: About. Explain Alex's direct founder-led model and working principles.
- `/contact`: Contact. Qualify and collect project inquiries.
- `/services`: Services index. Frame the three core capabilities.
- `/services/branding`: Branding service detail.
- `/services/web-design`: Web design service detail.
- `/services/ai-and-search-visibility`: Search and AI visibility service detail.
- `/work`: Work index generated from published case-study content.
- `/work/[slug]`: Case detail generated from `src/content/case-studies/<slug>/index.md`.
- `/studios/church-studio`: Church Studio product page.
- `/blog`: Reserved for the future blog index generated from published blog content.
- `/blog/[slug]`: Reserved for future articles in `src/content/blog/<slug>/index.md`.

## Navigation

- Primary navigation: Work, Services, Pricing, Blog, About.
- Primary CTA: Get in Touch, linking to `/contact`.
- Work and Services use desktop dropdowns and mobile submenus.
- Pricing and Blog currently point to homepage anchors and remain future routes.

## Content ownership

- Fixed-page editorial contracts: `pages/*-copy.md`.
- Case-study facts and narratives: `src/content/case-studies/<slug>/index.md`.
- Blog articles: `src/content/blog/<slug>/index.md`.
- Route-owned images: `src/assets/case-studies/<slug>/` or `src/assets/blog/<slug>/`.
- Shared brand and people assets: `public/brand/` and `public/people/` when those folders are introduced.
- Unprocessed material: `content-inbox/`.

## Naming

- Use lowercase kebab-case for folders and files.
- The content folder slug must match the route slug declared in frontmatter.
- Use role-based asset names such as `hero.webp`, `project-detail-01.webp`, and `founder-portrait.webp`.
- Use `YYYY-MM-DD` at the start of filenames only when chronological sorting matters.
- Use frontmatter status fields instead of filename suffixes such as `final-v3`.
