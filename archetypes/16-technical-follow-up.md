# Archetype 16: Technical follow-up project

> One figure or method reproduced from a key paper, plus a 1,500-word writeup of what broke.

## Why this archetype exists

For Technical AI Safety alumni (and AGI Strategy alumni with technical
inclination), the analog to a policy memo is a technical artifact: a
partial replication of a paper, a small tool, an eval harness. The
skills you build by reproducing a known result — pulling the model, the
data, the code, the assumptions — are exactly the skills that
demonstrate you're ready for a research role, a MATS fellowship, an
ARENA cohort, or a job at an alignment lab.

The trap is shipping nothing because you're aiming for a full
reimplementation. **Partial replication of one figure**, done well, in
six weeks, with an honest writeup of what broke, is the v1 that fits
this menu's "ship in six weeks" bar. Full reimplementations are v2/v3
territory.

## When to pick this

**Best fit for:** TAIS (primary). Also AGIS if your trajectory bends technical.

- You can name **one specific paper** whose result you want to
  reproduce. "Interpretability research" is not a project; "the
  activation-patching figure 3 from Wang et al." is.
- You have the **technical baseline** — PyTorch / transformers /
  interpretability libraries, depending on the paper — to start running
  experiments in week one.
- You have **6–10 hours a week for 6–8 weeks** of focused work.
- You can **write a 1,500-word writeup** of what worked and what
  didn't. The writeup is half the artifact; without it, the replication
  is a folder.

## When NOT to pick this

- **You can't name the paper.** Don't pick this until you've read at
  least three candidates and chosen the one you actually want to spend
  six weeks on.
- **You're aiming for a full reimplementation.** Partial replication of
  one figure is v1. Save the full reimplementation for after you've
  shipped two partials.
- **You don't have the technical baseline.** Pick ARENA (a TAIS
  bootcamp), then come back to this archetype with the skills the
  bootcamp builds. Trying to skill up *during* the project burns the
  six weeks on setup rather than the result.
- **You'd ship the code without the writeup.** The writeup is what
  makes the artifact legible to people who didn't run the experiment
  themselves — and it's what gets cited in your next application.

## Two variants

Pick one:

### A. Partial replication (default)

One figure from one paper, reproduced. Code in a public repo. A
1,500-word writeup covering: what you reproduced; what your numbers
were vs. the paper's; what broke and what you learned about the
underlying method; what you'd do differently next time. This is the
v1 most TAIS alumni should pick.

### B. Tool / eval harness build

A small open tool that another researcher could use: an eval harness
for a specific capability, a visualization for a specific kind of
result, a benchmark on a specific narrow capability, a reproducibility
check for a recent claim. Code public, writeup at the same 1,500-word
bar, with a clear "what this tool is for and what it isn't" section.

The two variants have the same v1 bar (code public, writeup written,
named artifact) and the same time horizon. Pick by which skill you most
want to demonstrate.

## What v1 looks like

For the partial-replication variant:

1. **One figure from one paper, reproduced** in a public GitHub repo.
2. **Your numbers vs. the paper's** in a table.
3. **A 1,500-word writeup** covering method, results, what broke, what
   you'd do differently.
4. **Clear setup instructions** so someone else could re-run your code.
5. **An honest "limitations" section** — what you didn't reproduce,
   what you'd need to do v2.

You're done with v1 when the repo is public, the writeup is published
(on your Substack, personal site, or LessWrong / AI Alignment Forum),
and at least one researcher in the area has read it.

## What to do after v1

- **Email the paper's authors** with your replication. Most are
  delighted; a few will give you direct feedback. This is also
  archetype #13 (1:1 outreach) in action.
- **Apply to MATS, ARENA, SPAR, or Apart** with the replication as
  your portfolio artifact (archetype #10). The replication makes the
  application non-generic.
- **Extend to v2** — reproduce a second figure, run a follow-up
  experiment the paper didn't, or implement on a slightly different
  model.

## How I'd start if I were you (week 1)

1. **Pick the paper.** Read three candidates with the question "could I
   reproduce *figure N* of this in six weeks?" Pick the one where the
   answer is closest to "yes, with effort."
2. **Set up the environment.** Get the model loaded, the data
   accessible, the inference loop working. If this takes more than 3
   days, the paper is too ambitious; back off to a simpler one.
3. **Reproduce the simplest possible version first.** Sub-sample the
   dataset, use a smaller model, run a 10% version of the experiment.
   The point of week 1 is to prove the pipeline works.
4. **Draft the writeup skeleton** in week 1. Section headings only.
   Knowing what you're writing toward shapes what you measure.

## Common failure modes

- **Aiming for a full reimplementation.** Six weeks isn't enough.
  Partial is the v1.
- **Setup creep.** Spending three weeks on environment setup leaves
  three weeks for everything else. If setup is taking that long, the
  paper is wrong for the timeline.
- **Skipping the writeup.** Code without writeup is illegible; writeup
  without code is unverifiable. Both, or neither.
- **Polishing the result before you ship.** Numbers that don't match
  the paper are interesting, not embarrassing. Ship them with an
  explanation.
- **Not naming the limits.** "We reproduced X under conditions Y and
  didn't reproduce Z" is more useful than "we successfully reproduced
  the result." Honest scope is signal.

## Templates

No archetype-specific template yet — adapt:

- [`templates/landscape-doc-skeleton.md`](../templates/landscape-doc-skeleton.md)
  — the writeup structure (scope, method, results, gaps) ports cleanly
  from landscape doc to replication report.
- [`templates/project-brief.md`](../templates/project-brief.md) — for
  scoping the partial replication in week 1.

## Combinations

- **#16 (tech follow-up) → #11 (Substack)** — the replication writeup
  becomes the substantive content for a four-week Substack run on your
  reading of the paper and what it tells you about the field.
- **#16 (tech follow-up) → #10 (fellowship application)** — the
  replication is the portfolio piece that makes an application to MATS,
  ARENA, SPAR, or Apart non-generic.
- **#16 (tech follow-up) → #13 (1:1 outreach)** — emailing the paper's
  authors with your replication is one of the highest-conversion cold
  emails available to a TAIS alum.
