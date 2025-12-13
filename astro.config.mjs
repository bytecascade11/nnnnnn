import { defineConfig } from 'astro/config';
import icon from 'astro-icon';  // assuming this is how you're importing it

export default defineConfig({
  integrations: [icon(/* your options */)],
  vite: {
    ssr: {
      noExternal: ['astro-icon'],
    },
  },
});
