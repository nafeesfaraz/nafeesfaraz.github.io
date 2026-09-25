import { existsSync } from 'node:fs';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
	// Case studies as Markdown or MDX files in `src/content/work/`.
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		// One line shown under the title and on cards.
		summary: z.string(),
		// Meta description for search and social previews.
		description: z.string(),
		company: z.string(),
		role: z.string(),
		period: z.string(),
		stack: z.string(),
		// Path to a social preview image in /public. The build fails if the file is missing.
		ogImage: z
			.string()
			.refine((path) => path.startsWith('/') && existsSync(`public${path}`), {
				message: 'ogImage must be a path to an existing file in /public, starting with /',
			})
			.optional(),
	}),
});

export const collections = { work };
