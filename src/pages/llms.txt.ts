import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { EMAIL, LINKEDIN_URL, SITE_TITLE } from '../consts';

// A plain-text summary of the site for language models, following llmstxt.org.
export const GET: APIRoute = async ({ site }) => {
	const url = (path: string) => new URL(path, site).href;
	const caseStudies = (await getCollection('work'))
		.map((entry) => `- [${entry.data.title} case study](${url(`/work/${entry.id}/`)}): ${entry.data.summary}`)
		.join('\n');

	const body = `# ${SITE_TITLE}

> Product manager in Stavanger, Norway, who designs products as systems and works AI-first. More than ten years building payment, onboarding and commerce platforms, first for European brands at SELISE Digital Platforms and, since March 2022, at Front Payment.

- Owns FrontGO, Front Payment's modular payments platform, used by 160+ active clients.
- Built OnboardR, Front Payment's merchant-onboarding portal, end to end with Claude Code. The team estimates it cut onboarding from about two weeks to under a day.
- Product Owner and then Senior Product Owner at SELISE Digital Platforms, 2015 to 2021.
- MSc in Business Administration, University of Stavanger. BBA, BRAC University.

## Pages

- [Home](${url('/')}): overview and selected work
${caseStudies}
- [About](${url('/about/')}): background, how I work and contact details

## Contact

- Email: ${EMAIL}
- LinkedIn: ${LINKEDIN_URL}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
