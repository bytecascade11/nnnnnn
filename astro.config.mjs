import { defineConfig } from 'astro/config';
import icon from '@astrojs/icon';  // This is the new one

// Your other imports...

export default defineConfig({
  integrations: [
    icon(),  // Add this (or icon({ /* options */ }) if needed)
    // ...your other integrations like tailwind(), etc.
  ],
  // Remove any old 'astro-icon' or vite.ssr.noExternal stuff
});
