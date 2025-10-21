import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	blog: defineCollection({
		// Load Markdown files in the src/content/blog directory.
		loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string().default(''),
			publishDate:  z.coerce.date(),
			tags: z.array(z.string()).default(['General']),
			img: z.string().default('/assets/stock-3.jpg'),
			img_alt: z.string().optional(),
			draft: z.boolean().default(false),
		}),
	}),
};
