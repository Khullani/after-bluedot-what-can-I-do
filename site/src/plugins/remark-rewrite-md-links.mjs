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
 *  4. examples/             → /examples/
 *  5. Any other .md path    → GitHub blob URL
 */
export default function remarkRewriteMdLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      const url = node.url;
      if (!url || url.startsWith('http') || url.startsWith('#') || url.startsWith('/')) return;

      const norm = url.replace(/^\.\//, '');

      if (SITE_PAGES[norm]) {
        node.url = SITE_PAGES[norm];
        return;
      }

      if (norm.startsWith('archetypes/') && norm.endsWith('.md')) {
        const slug = norm.replace(/^archetypes\//, '').replace(/\.md$/, '');
        node.url = `${BASE}/menu/${slug}`;
        return;
      }

      if (norm.startsWith('templates/') && norm.endsWith('.md')) {
        const slug = norm.replace(/^templates\//, '').replace(/\.md$/, '');
        node.url = `${BASE}/templates/${slug}`;
        return;
      }

      if (norm === 'examples' || norm.startsWith('examples/')) {
        node.url = `${BASE}/examples/`;
        return;
      }

      if (norm.endsWith('.md')) {
        node.url = `${GITHUB_BLOB}/${norm}`;
      }
    });
  };
}
