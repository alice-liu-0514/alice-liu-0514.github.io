import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const xmlEscape = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  const paths = ['/', '/about/', '/projects/', '/research/', '/cv/', '/contact/', ...projects.map(({ id }) => `/projects/${id}/`)];
  const entries = site
    ? paths.map((path) => `  <url><loc>${xmlEscape(new URL(path, site).toString())}</loc></url>`).join('\n')
    : '';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
