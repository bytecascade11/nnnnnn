import { defineConfig } from 'astro/config';
import icon from '@astrojs/icon';  // This is the new official one

// Your other imports (like tailwind, react, etc.)

export default defineConfig({
  integrations: [
    icon(),  // Add this line (new official icons)
    // ...your other integrations here
  ],
  // Remove any old 'astro-icon' import or line
});
