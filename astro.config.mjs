import { defineConfig } from 'astro/config';
import icon from 'astro-icon';  // Keep this exactly as is

// Your other imports (tailwind, etc.)

export default defineConfig({
  integrations: [
    icon(/* your current options, if any */),
    // ...your other integrations
  ],
  vite: {
    ssr: {
      noExternal: ['astro-icon'],
    },
    plugins: [
      {
        name: 'astro-icon-virtual-fix',
        enforce: 'pre',
        resolveId(id) {
          if (id === 'virtual:astro-icon') {
            return id;
          }
        },
        load(id) {
          if (id === 'virtual:astro-icon') {
            return 'export default {}; export const config = {};';
          }
        },
      },
    ],
  },
});
