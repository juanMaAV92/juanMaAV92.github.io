import { defineCollection, z } from 'astro:content';

// Docs de Steer: una colección por idioma, con los mismos nombres de archivo (slugs) y el mismo `order`.
const steerDocsSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
});

const steerDocs = defineCollection({ type: 'content', schema: steerDocsSchema });
const steerDocsEs = defineCollection({ type: 'content', schema: steerDocsSchema });

export const collections = { 'steer-docs': steerDocs, 'steer-docs-es': steerDocsEs };
