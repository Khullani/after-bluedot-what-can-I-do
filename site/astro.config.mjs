// @ts-check
import { defineConfig } from 'astro/config';
import remarkRewriteMdLinks from './src/plugins/remark-rewrite-md-links.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://khullani.github.io',
  base: '/after-bluedot-what-can-I-do',
  output: 'static',
  trailingSlash: 'ignore',
  markdown: {
    remarkPlugins: [remarkRewriteMdLinks],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
