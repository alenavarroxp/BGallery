import { defineCollection, z } from "astro:content";

const backgrounds = defineCollection({
  schema: z.object({
    component: z.string(),
  }),
});

export const collections = { backgrounds };
