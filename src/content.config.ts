import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/case-studies" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    headline: z.string(),
    description: z.string(),
    summary: z.string(),
    niche: z.string(),
    location: z.string().optional(),
    services: z.array(z.string()).default([]),
    heroImage: image().optional(),
    heroAlt: z.string(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().int(),
    status: z.enum(["draft", "published"]),
    who: z.string(),
    whatChanged: z.string(),
    features: z.array(z.object({
      title: z.string(),
      body: z.string(),
      image: image().optional(),
      alt: z.string(),
    })).length(3),
    quote: z.object({
      text: z.string(),
      cite: z.string(),
    }).optional(),
    homepage: z.object({
      body: z.string(),
      tags: z.array(z.string()),
      quoteExcerpt: z.string().optional(),
      quoteCite: z.string().optional(),
    }).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default("Alex Whitley"),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    coverImage: image().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(true),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { caseStudies, blog };
