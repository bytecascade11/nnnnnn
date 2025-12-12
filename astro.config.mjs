import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://revibyte.blog',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('draft'), // skip draft posts
    }),
  ],
});
