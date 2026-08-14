// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // Matches all Markdown / MDX files in src/content/projects
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Quant', 'Systems', 'Mathematics', 'Web', 'Game Dev', 'Data', 'Others']), // Domains: Quantitative, Systems/Crypto, ML
    tags: z.array(z.string()),
    metrics: z.string().optional(), // For quantitative results (e.g., "2.08 Profit Factor")
    github: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(true),
  }),
});

export const collections = { projects };