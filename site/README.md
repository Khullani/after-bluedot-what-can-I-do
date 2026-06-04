# `/site` — the After BlueDot website

A static [Astro](https://astro.build) site that renders the repo's own
markdown as a beautiful, minimalist website for a non-GitHub audience.

The site lives at **https://khullani.github.io/after-bluedot-what-can-I-do/**
and rebuilds automatically on every push to `main` that touches the
content (the `.github/workflows/deploy-site.yml` workflow lists the
paths it watches).

## Strategy: single source of truth

This site does **not** copy or duplicate the repo's content. It reads
the existing markdown files in `archetypes/`, `examples/`, `templates/`,
`PLAYBOOK.md`, `FAQ.md`, `FACILITATING.md`, `COMMUNITY.md`,
`CONTRIBUTING.md`, and `CODE_OF_CONDUCT.md` directly via Astro content
collections. Edit the markdown in the repo as you always have; the site
rebuilds itself.

## Develop locally

```sh
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # builds to ./dist
npm run preview  # serves the built site locally
```

## Project structure

```
site/
├── public/
│   └── favicon.svg                Static assets
├── src/
│   ├── components/                Nav, Footer, ArchetypeCard
│   ├── content/
│   │   └── config.ts              4 collections: archetypes, examples, templates, pages
│   ├── layouts/
│   │   └── BaseLayout.astro       Shared HTML shell
│   ├── pages/
│   │   ├── index.astro            Home — hook, two-doors, method, menu teaser
│   │   ├── method.astro           Renders PLAYBOOK.md
│   │   ├── menu/
│   │   │   ├── index.astro        16-archetype grid
│   │   │   └── [slug].astro       Per-archetype detail page
│   │   ├── examples/
│   │   │   ├── index.astro        6 case studies
│   │   │   └── [slug].astro       Per-example detail
│   │   ├── templates/
│   │   │   ├── index.astro        Template list
│   │   │   └── [slug].astro       Per-template page
│   │   ├── facilitators.astro     FACILITATING.md + COMMUNITY.md
│   │   ├── faq.astro              FAQ.md
│   │   └── about.astro            About + CONTRIBUTING.md
│   └── styles/
│       └── global.css             Design tokens, type, cards
├── astro.config.mjs               Site config; sets base path for GH Pages
├── package.json
└── tsconfig.json
```

## Content collections

Defined in `src/content/config.ts`:

- **`archetypes`** — `glob('*.md', base: '../archetypes')`. Schema enforces
  `number`, `title`, `oneLine`, `timeToV1`, `timeBucket`, `courses[]`,
  `templates[]`, `exampleStatus`, `example`.
- **`examples`** — `glob('*.md', base: '../examples', exclude: README)`.
  Schema enforces `title`, `archetype`, `status`, `link`,
  `maintainerArtifact`; allows additional optional fields per example
  type (publishedDate, sponsor, format, etc.).
- **`templates`** — `glob('*.md', base: '../templates', exclude: README)`.
  Schema is permissive (templates don't have structured front matter).
- **`pages`** — top-level documents: `PLAYBOOK`, `FAQ`, `FACILITATING`,
  `COMMUNITY`, `CONTRIBUTING`, `CODE_OF_CONDUCT`. Schema is permissive.

## Front-matter contract for new content

When you add a new archetype file under `archetypes/`, it must include
this front-matter block at the top:

```yaml
---
number: 17
title: "Your archetype title"
oneLine: "One-line tagline"
timeToV1: "6 weeks"
timeBucket: "4-8"        # one of: 0-4 | 4-8 | 8-12 | 12+ | per-event
courses: ["FAIG", "AGIS", "BIOS", "TAIS"]   # subset valid; ALL = all four
templates: ["templates/something.md"]        # array; empty if none
exampleStatus: "pending"                     # live | pending | n/a-by-design
example: null                                # path to examples/*.md or external URL or null
---
```

Without front matter, the build fails (the schema is strict). See
[`CONTRIBUTING.md`](../CONTRIBUTING.md) in the repo root for the
contribution guide.

## What's not yet built — see `TODO.md`

Phase 2–4 of the build spec (the archetype finder, the design pass,
the template copy/download buttons, the Lighthouse polish) lands in a
follow-up. Track them in [`TODO.md`](./TODO.md).
