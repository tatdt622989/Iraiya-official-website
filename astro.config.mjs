import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://iraiya.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
