import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    github: z.string().optional(),
    notes: z.string().optional(),
    tags: z.array(z.string()),
    domain: z.string().optional(),
    order: z.number().int().default(Number.MAX_SAFE_INTEGER),
    featured: z.boolean().default(false),
    confirmed: z.boolean().default(false),
    year: z.number(),
  }),
})

const media = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    type: z.enum(['movie', 'show', 'book', 'game', 'article', 'podcast']),
    creator: z.string().optional(),
    note: z.string(),
    rating: z.number().min(1).max(5),
    date: z.string(),
    tags: z.array(z.string()).optional(),
  }),
})

const resume = defineCollection({
  type: 'data',
  schema: z.object({
    education: z.array(z.object({
      institution: z.string(),
      degree: z.string(),
      field: z.string(),
      year: z.string(),
    })),
    experience: z.array(z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
      description: z.string(),
    })),
    skills: z.array(z.string()),
  }),
})

export const collections = { projects, media, resume }
