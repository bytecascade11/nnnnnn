import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(60),
    description: z.string().min(50).max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.object({ src: z.string(), alt: z.string() }).optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  post: postCollection,
  // note and tag collections optional — ignore for now
};
