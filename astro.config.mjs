import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react'; // (もしReactも使う場合は残しておきます)

// https://astro.build/config
export default defineConfig({
  // VercelのURL（またはカスタムドメイン）を設定
  site: 'https://alts-night-ah-astro.vercel.app', 
  integrations: [
    sitemap(),
    react() // (もしReactも使う場合は残しておきます)
  ]
});