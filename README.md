# Yun-Chen Liu (Alice) — Research Website

A text-led academic and research website built with Astro, TypeScript, Markdown/MDX content collections, and minimal client-side JavaScript.

## Design and template choice

The visual layout is custom-designed for a psychology-trained researcher working across Human-AI Interaction, well-being, and social innovation. It uses an editorial reading layout, restrained colors, clear project evidence, and responsive navigation.

I reviewed several academic Astro projects before choosing the starting point:

- [My Scholar](https://github.com/mychiffonn/myscholar) offers Markdown-first academic pages, project and publication content, built-in SEO, and little client-side JavaScript. It also includes a larger set of blog and scholarly-writing features than this first version needs.
- [Astro Academia](https://github.com/maiobarbero/astro_academia) covers research, publications, a CV, and writing, though its documented content is split between Markdown and TypeScript/component files.
- [Academic Portfolio Astro](https://github.com/rubzip/academic-portfolio-astro) is strongly Markdown-driven, with a default sticky two-column profile layout and additional theme and analytics options.

For this site, an official minimal Astro foundation is a better fit than adopting a complete third-party theme. It keeps the project’s page structure, content model, and visual decisions purpose-built while relying on Astro’s maintained framework and integrations. Astro’s official `create astro` CLI supports official starters and community themes if the project needs a different foundation later.

## Requirements

- Node.js 22.12.0 or newer
- npm

## Run locally

```sh
npm install
npm run dev
```

Open the local address printed by Astro, usually `http://localhost:4321`.

## Build

```sh
npm run build
npm run preview
```

The static production site is written to `dist/`.

## Content

Project pages are Markdown or MDX files in `src/content/projects/`. Their metadata is checked by the schema in `src/content.config.ts`. Add a new project file and it will appear in the projects index; set `featured: true` to include it on the homepage. Use `draft: true` to keep a project out of public routes, the sitemap, and the homepage.

Research records currently distinguish a 2025 conference presentation, a 2026 workshop paper, and a journal manuscript in preparation. Add titles, author lists, and proceedings links only when those details are confirmed.

## Before publishing

1. Add a public email address in `src/data/site.ts`; the contact page will display it automatically.
2. Add the downloadable CV PDF under `public/` and link it from `/cv/` once the public version is ready.
3. Replace the clearly marked evidence-link notes in the project files with verified public project, presentation, demo, media, and award URLs.
4. Set `SITE_URL` to the canonical production URL. This controls canonical tags, Open Graph URLs, the sitemap, and the sitemap line in `robots.txt`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel. Vercel detects Astro and uses `npm run build` with `dist/` as the output directory.
3. Set `SITE_URL` in the Vercel production environment to the public deployment URL, then redeploy.
4. When you buy a custom domain, add it in the Vercel project settings and follow the DNS records Vercel provides. Update `SITE_URL` to the custom domain and redeploy.

The project is static by default and does not need a Vercel server adapter. No Vercel account, GitHub remote, domain, or public deployment is configured in this repository yet.
