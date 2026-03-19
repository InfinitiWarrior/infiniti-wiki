import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/chapters' }),
  schema: z.object({
    part: z.number(),
    partTitle: z.string(),
    chapter: z.number(),
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional().default(false),
  }),
})

export const collections = { chapters }