import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://revibyte.blog',

  vite: {
    build: {
      rollupOptions: {
        external: ['virtual:astro-icon'],
      },
    },
  },
});
