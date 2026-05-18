import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  projects,
};