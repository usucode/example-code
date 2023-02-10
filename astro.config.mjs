import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';
import image from '@astrojs/image';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [image()]
});