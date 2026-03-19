// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://infinitiwarrior.github.io',
  base: '/infiniti-wiki',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx({
    components: {
      Callout: './src/components/Callout.astro',
      Diagram: './src/components/Diagram.astro',
    }
  })]
});