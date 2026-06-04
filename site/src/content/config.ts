import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 16 archetype files in /archetypes
const archetypes = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: '../archetypes',
  }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    oneLine: z.string(),
    timeToV1: z.string(),
    timeBucket: z.enum(['0-4', '4-8', '8-12', '12+', 'per-event']),
    courses: z.array(z.enum(['FAIG', 'AGIS', 'BIOS', 'TAIS'])),
    templates: z.array(z.string()).default([]),
    exampleStatus: z.enum(['live', 'pending', 'n/a-by-design']),
    example: z.string().nullable(),
  }),
});

// 6 case-study files in /examples (excluding README.md)
const examples = defineCollection({
  loader: glob({
    pattern: ['*.md', '!README.md'],
    base: '../examples',
  }),
  schema: z
    .object({
      title: z.string(),
      archetype: z.number(),
      status: z.string(),
      link: z.string().url(),
      maintainerArtifact: z.boolean(),
    })
    .passthrough(),
});

// Template scaffolds in /templates (excluding README.md)
const templates = defineCollection({
  loader: glob({
    pattern: ['*.md', '!README.md'],
    base: '../templates',
  }),
  schema: z.any(),
});

// Top-level long-form documents
const pages = defineCollection({
  loader: glob({
    pattern: [
      'PLAYBOOK.md',
      'FAQ.md',
      'FACILITATING.md',
      'COMMUNITY.md',
      'CONTRIBUTING.md',
      'CODE_OF_CONDUCT.md',
    ],
    base: '..',
  }),
  schema: z.any(),
});

export const collections = { archetypes, examples, templates, pages };
