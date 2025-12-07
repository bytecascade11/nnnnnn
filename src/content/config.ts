import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),     // this accepts strings like "2025-12-07" too
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    pinned: z.boolean().optional(),
  }),
});

export const collections = {
  blog,        // ← this activates src/content/blog/
};
