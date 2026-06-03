---
name: New archetype proposal
about: Propose a 9th (or later) archetype that doesn't fit the existing menu.
title: "[Archetype proposal] <one-line name>"
labels: ["new-archetype"]
---

<!--
The bar for a new archetype is higher than for an example or a cohort entry:
don't propose what sounds good in theory; propose what you've seen at least
one person actually ship. Read CONTRIBUTING.md if you haven't.
-->

## The archetype, in one sentence

<!-- The one-line tagline that would go at the top of the archetype file. -->

## Why this doesn't fit one of the existing eight

<!-- Be specific. "This is more like #3 + #5 combined" probably doesn't need
a new archetype — it's a combination. New archetypes earn their place by
being structurally distinct from what's already on the menu. -->

## The v1 you've seen shipped

<!-- You can't propose an archetype without an artifact. Link to the
specific thing that demonstrates this works in practice. -->

## Who would pick this

- **The named human / audience:**
- **When to pick this:**
- **When NOT to pick this:**

## What v1 looks like

<!-- The concrete deliverable in 4–8 weeks. Same shape as the v1 sections
in the existing archetype files. -->

## Common failure modes you've already seen

<!-- 2–3 honest cautions, from real experience. -->

-
-
-

## What needs to come with this if you commit to writing it

If I think it's a fit, the PR adds:

- [ ] `archetypes/0N-<slug>.md` in the same structure as the existing
      archetype files
- [ ] At least one case study in `examples/0N-<slug>.md`
- [ ] Any new templates the archetype needs in `templates/`
- [ ] Updates to the menu table in `README.md` and `PLAYBOOK.md`
- [ ] An entry in `CHANGELOG.md`

I'll respond on this issue with editorial feedback before opening a PR.
