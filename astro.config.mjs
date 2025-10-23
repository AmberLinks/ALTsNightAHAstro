import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import react from '@astrojs/react'; // 👈 削除

export default defineConfig({
  site: 'https://alts-night-ah-astro.vercel.app', 
  integrations: [
    sitemap()
    // react() // 👈 削除
  ]
});