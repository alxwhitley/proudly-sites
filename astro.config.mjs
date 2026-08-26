// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.proudlysites.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.proudlysites.com/clients/',
    }),
  ],
});
