import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        author: z.string().default("Chatravasa Editorial Team"),
        date: z.string(),
        updated: z.string().optional(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        readingTime: z.string().optional(),
      }),
    }),
  },
});
