import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const siteUrl = process.env.SITE_URL;

export default defineConfig({
  site: siteUrl ? new URL(siteUrl).toString() : undefined,
  integrations: [mdx()],
});
