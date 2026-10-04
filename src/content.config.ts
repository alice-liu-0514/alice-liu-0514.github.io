import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    date: z.coerce.date().optional(),
    year: z.string().optional(),
    status: z.string(),
    role: z.string().optional(),
    organization: z.string().optional(),
    location: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    sdgs: z.array(z.object({
      number: z.number(),
      name: z.string(),
      description: z.string(),
    })).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().default(99),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
      note: z.string().optional(),
    })).default([]),
    links: z.array(z.object({
      label: z.string(),
      href: z.string().url().optional(),
      note: z.string().optional(),
    })).default([]),
    relatedPublications: z.array(z.object({
      title: z.string(),
      href: z.string().url().optional(),
    })).default([]),
  }),
});

export const collections = { projects };
