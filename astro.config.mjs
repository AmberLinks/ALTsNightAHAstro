// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alts-night-ah-astro.vercel.app',
  integrations: [sitemap()] // (reactなどもここに入れる)
});