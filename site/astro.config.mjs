// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://khullani.github.io',
  base: '/after-bluedot-what-can-I-do',
  output: 'static',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
