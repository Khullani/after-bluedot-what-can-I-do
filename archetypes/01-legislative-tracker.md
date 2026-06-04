---
number: 1
title: "Legislative / regulatory tracker"
oneLine: "Map a jurisdiction's AI laws into something legible"
timeToV1: "4–8 weeks"
timeBucket: "4-8"
courses: ["FAIG", "AGIS", "BIOS", "TAIS"]
templates: ["templates/repo-readme-skeleton.md", "templates/project-brief.md"]
exampleStatus: "live"
example: "https://github.com/Khullani/illinois-AI-laws"
---

# Archetype 1: Legislative / regulatory tracker

> Map a specific jurisdiction's AI laws into something the people who work in
> that jurisdiction can actually use.

## Why this archetype exists

Every state, country, and agency now has an AI legislative pipeline. The
official trackers — General Assembly websites, Federal Register, Congress.gov —
are authoritative but illegible. They present bills in a flat list, often
without context, without thematic grouping, without a way to see procedural
movement at a glance. Compliance officers, policy researchers, journalists,
and engineers all need the same thing and none of them get it from the
official source.

A tracker is the substrate on top of which other moves become possible: a
public comment can cite it, a memo can link to it, a journalist can pull from
it. It is also the project most likely to outlast your interest in it, if
you scope it right.

## When to pick this

**Best fit for:** any of the four BlueDot courses (FAIG, AGIS, BIOS, TAIS) — every domain has laws to track.

- You live in or care deeply about a **specific** jurisdiction. Not "the US"
  — Illinois, or California, or the FTC's AI docket.
- You enjoy structuring information. The work is 60% taxonomy and 40%
  writing.
- You can commit 4–10 hours a week for 6–8 weeks to get to v1, and a few
  hours per month afterward.
- You're comfortable shipping a small website (vanilla HTML/CSS/JS is plenty
  — see the live example).

## When NOT to pick this

- You don't actually follow the jurisdiction's news. Trackers require taste,
  not just data-entry, and taste comes from following the beat.
- You'd resent ongoing maintenance. Trackers rot fast once they're not
  updated, and a stale tracker is worse than no tracker.
- You're picking it because it sounds impressive. There are easier high-leverage
  moves on this menu.

## What v1 looks like

A public site (or a single, well-organized markdown document) that:

1. Lists every relevant bill or rule in your chosen jurisdiction.
2. Groups them into 4–8 thematic categories you defined.
3. Provides a plain-language TL;DR for each.
4. Tracks procedural status (introduced, in committee, passed chamber, enacted).
5. Names the sponsors, the affected agencies, and the effective dates.

You're done with v1 when somebody who works in that jurisdiction tells you
"this saved me three hours."

## What v2/v3 looks like

- Amendment-level history with intent annotations ("this amendment was
  added after [stakeholder] objected to [thing]").
- A compliance assessment wizard for one of the enacted laws.
- A timeline visualization.
- Written testimony / hearing transcripts attached to bills.
- Email alerts when status changes.

## Example in the wild

[illinois-AI-laws](https://github.com/Khullani/illinois-AI-laws) — the
Illinois 104th General Assembly, six regulatory vectors, full procedural
history, vanilla HTML/CSS/JS.

## How I'd start if I were you (week 1)

1. **Pick the jurisdiction and the time window.** Not "every AI law ever" —
   "the current legislative session" or "the past 24 months." Constraint is
   your friend.
2. **Inventory bills into a single spreadsheet** before you touch any code.
   Columns: bill number, title, sponsor, status, last action date, your
   TL;DR, your category.
3. **Draft the categories from the bottom up.** Don't pre-decide the
   taxonomy — let it emerge from the bills. Aim for 4–8 categories.
4. **Ship a single static HTML page that renders the spreadsheet.** No
   framework. JSON file → `<table>`. You can prettify it in week three.

## Common failure modes

- **Scope creep into adjacent jurisdictions.** If you're tracking Illinois,
  do not start tracking Wisconsin in week two. Finish Illinois.
- **Pre-building a framework before you have data.** I have seen people
  spend two weeks on a React app and zero weeks on bill summaries. Inverse
  the ratio.
- **TL;DRs that just paraphrase the bill title.** A good TL;DR explains what
  the bill *does* in concrete operational terms — who has to do what, by
  when, with what penalty.

## Templates

- [`templates/project-brief.md`](../templates/project-brief.md) — scope your
  tracker in one page before you write any code.
- [`templates/repo-readme-skeleton.md`](../templates/repo-readme-skeleton.md)
  — the README structure I'd use.
