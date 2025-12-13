import { defineConfig } from 'astro/config';
import icon from '@astrojs/icon';  // Keep this!

// Your other imports...

export default defineConfig({
  integrations: [
    icon(),  // Keep this!
    // ...your other integrations (e.g., tailwind, etc.)
  ],
});
