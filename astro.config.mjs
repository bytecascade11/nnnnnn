import { defineConfig } from 'astro/config';
import icon from '@astrojs/icon';  // New official import

// Your other imports (tailwind, etc.)

export default defineConfig({
  integrations: [
    icon(),  // Add this
    // ...your other integrations
  ],
});
