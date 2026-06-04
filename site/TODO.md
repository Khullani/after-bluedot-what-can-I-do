# Site TODO — Phase 2–4 follow-up

This file tracks what's deliberately deferred from PR3 (the scaffold)
to a follow-up PR (PR4 onward) so the next session can pick it up
without re-reading the spec.

PR3 shipped Phase 0–1 from the build spec:
- Astro project scaffold (`/site`)
- Content collections for archetypes, examples, templates, pages
- Front matter on all 16 archetype files + 6 example files
- All 9 routes from §3 of the spec, rendering markdown with basic styling
- GitHub Action that builds + deploys to GitHub Pages on push to `main`

What's left (Phase 2–4):

## Phase 2 — Interactive menu / finder

- [ ] **Clarity-score slider** (0–10) at the top of `/menu`. If 0–3,
      surface a "do a reading-and-conversation sprint first" callout
      linking the FAQ + the PLAYBOOK reading list. If 4+, drop into
      the grid. Mirror the playbook's opening move.
- [ ] **Course filter chips** above the grid: `All · FAIG · AGIS · BIOS
      · TAIS`. Single-select. This is the highest-leverage filter
      after the broadening from PR #13 — a TAIS alum shouldn't scroll
      past 11 policy archetypes.
- [ ] **Time-bucket filter chips**: `≤ 4 wks · 4–8 wks · 8–12 wks · 12+
      wks`. Note: archetype #14 (networking events) uses
      `timeBucket: per-event` and should be excluded from time
      filtering.
- [ ] **"Has live example" toggle**.
- [ ] All filter state in URL query params so people can share the
      filtered view (`?course=TAIS&time=4-8`).
- [ ] **Build as one Astro island** (or vanilla JS over rendered
      cards). No accounts, no saved state, no backend.

## Phase 2 — Template UX

- [ ] **Copy-to-clipboard button** on `/templates/[slug]` — copy the
      raw markdown body.
- [ ] **Download .md button** — same content, saved as a file.
- [ ] On the per-archetype detail page, the **"Grab the matching
      template"** CTA should jump straight to the right template
      (single-template archetypes) or scroll-anchor to the templates
      section (multi-template archetypes).

## Phase 3 — Design pass

- [ ] Self-host the Newsreader + Inter font subsets (currently
      loaded from Google Fonts in `global.css`) for performance +
      privacy.
- [ ] Mobile pass: thumb-first navigation, hero scale check, card grid
      reflow on portrait phones.
- [ ] Dark mode behind `prefers-color-scheme`. Light first; only ship
      dark when it's beautiful.
- [ ] Subtle hover states on cards + filter chips. Smooth transitions
      on filter; no other motion.
- [ ] Verify body measure (~68 characters) holds at all viewports.
- [ ] Replace nav `text-decoration` underline with a proper active-link
      marker (e.g. a colored underline only on the active page).
- [ ] Restyle blockquote treatment in archetype detail pages so the
      one-line tagline (`> ...`) feels like a deck, not a sidebar.

## Phase 4 — Ship polish

- [ ] **Open Graph image per page**. Generate at build time from the
      archetype number + title, or hand-design one OG card for the
      home page and use the same for all (simpler).
- [ ] **Lighthouse pass.** Aim 95+ on performance and accessibility.
      Minimal sites should hit this easily.
- [ ] **Add the website URL to the repo `README.md`** so the two
      front doors point at each other.
- [ ] **Cross-link examples ↔ archetypes** within the rendered
      markdown. Currently the archetype detail's "Example in the wild"
      points at the repo path; rewrite at build time to point at
      `/examples/[slug]`.
- [ ] **Search.** Optional, low priority. If we add it, use Pagefind
      (static, no backend).
- [ ] **CI check for missing front matter.** Fail the PR if a new
      `archetypes/*.md` file lacks the required fields. Matches the
      contributor note in `CONTRIBUTING.md`.

## Non-goals (explicit, from spec §10)

- No login, accounts, saved progress.
- No comments, no forum.
- No analytics beyond optionally a lightweight privacy-respecting
  counter.
- No newsletter capture popup.
- No second accent color.
- No CMS, no duplicate content store.

## Known small issues to fix in PR4

- The home page's "menu teaser" picks the first 6 archetypes by
  number. Once the finder lands, swap to a smarter selection (a
  cross-section — one writing, one action, one applying, etc.).
- The archetype detail page's "Back to archetype" link from a case
  study uses a brittle slug-rewrite trick. Replace with a clean lookup
  via the front matter `archetype: N`.
- Markdown links inside content collections that point at other repo
  files (e.g., `[FACILITATING.md](./FACILITATING.md)`) currently 404
  on the site. Add a remark plugin in `astro.config.mjs` that rewrites
  `*.md` links to the corresponding site route.
