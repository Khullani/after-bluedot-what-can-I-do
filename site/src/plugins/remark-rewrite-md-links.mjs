import { visit } from 'unist-util-visit';

const BASE = '/after-bluedot-what-can-I-do';
const GITHUB_BLOB = 'https://github.com/Khullani/after-bluedot-what-can-I-do/blob/main';

/** Map of root-level .md filenames to their site URL */
const SITE_PAGES = {
  'PLAYBOOK.md': `${BASE}/method`,
  'FAQ.md': `${BASE}/faq`,
  'FACILITATING.md': `${BASE}/facilitators`,
  'COMMUNITY.md': `${BASE}/facilitators`,
  'CONTRIBUTING.md': `${BASE}/about`,
};

/**
 * Rewrite relative .md links so they resolve to the correct site paths instead
 * of 404ing when clicked from a rendered page (e.g. /facilitators/CONTRIBUTING.md).
 *
 * Rules applied in order:
 *  1. Root-level known pages → their site URL
 *  2. archetypes/xx-name.md → /menu/xx-name
 *  3. templates/name.md     → /templates/name
 *  4. examples/name.md      → /examples/name
 *  5. examples/             → /examples/
 *  6. Any other .md path    → GitHub blob URL
 */
export default function remarkRewriteMdLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      const url = node.url;
      if (!url || url.startsWith('http') || url.startsWith('#') || url.startsWith('/')) return;

      // Content files live at different depths in the repo. Strip any leading
      // ./ or ../ segments before matching them to a site collection.
      const norm = url.replace(/^(?:\.\.?\/)+/, '');
      const hashIndex = norm.indexOf('#');
      const path = hashIndex >= 0 ? norm.slice(0, hashIndex) : norm;
      const hash = hashIndex >= 0 ? norm.slice(hashIndex) : '';

      if (SITE_PAGES[path]) {
        node.url = `${SITE_PAGES[path]}${hash}`;
        return;
      }

      if (path.startsWith('archetypes/') && path.endsWith('.md')) {
        const slug = path.replace(/^archetypes\//, '').replace(/\.md$/, '');
        node.url = `${BASE}/menu/${slug}${hash}`;
        return;
      }

      if (path.startsWith('templates/') && path.endsWith('.md')) {
        const slug = path.replace(/^templates\//, '').replace(/\.md$/, '');
        node.url = `${BASE}/templates/${slug}${hash}`;
        return;
      }

      if (path.startsWith('examples/') && path.endsWith('.md')) {
        const slug = path.replace(/^examples\//, '').replace(/\.md$/, '');
        node.url = `${BASE}/examples/${slug}${hash}`;
        return;
      }

      if (path === 'examples' || path === 'examples/') {
        node.url = `${BASE}/examples/${hash}`;
        return;
      }

      if (path.endsWith('.md')) {
        node.url = `${GITHUB_BLOB}/${path}${hash}`;
      }
    });
  };
}
