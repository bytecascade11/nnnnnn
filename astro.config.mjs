import { defineConfig } from 'astro/config';
import icon from 'astro-icon';  // Keep your existing import

// Your other imports...

export default defineConfig({
  integrations: [
    icon(/* your options if any */),
    // ...your other integrations (tailwind, etc.)
  ],
  vite: {
    ssr: {
      noExternal: ['astro-icon', /\.astro$/],  // This is the key line
    },
    optimizeDeps: {
      exclude: ['astro-icon'],
    },
  },
});
