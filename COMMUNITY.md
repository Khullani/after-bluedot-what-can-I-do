# Community patterns

Guidance for facilitators who want to set up community around their own cohorts
using this playbook.

> **What this document is.** This is template/guidance content, not a
> description of a live office hours series or WhatsApp group that this repo
> runs. The maintainer does not currently host either; if you'd like to set
> them up for your own cohort or facilitator network, the patterns below are
> what I've seen work. Adapt them, fork them, ignore them.
>
> For questions about the playbook itself, email the maintainer at
> **info@techne.ai**.

## Facilitator office hours

A recurring call for facilitators using this playbook is the kind of forum
where it gets sharper over time — trading what's working and what isn't
across cohorts, surfacing candidate new archetypes, and reviewing live
examples that have shipped since the last call. If you want to run one, here's
the shape I'd start with.

### Cadence

- **Monthly** while the community is young — short feedback loops are how the
  documents and patterns actually improve.
- **Quarterly** once it stabilizes — sustainable over years.

If you launch one, expect the first two or three calls to feel under-attended.
That's fine: the people who do show up are the ones whose feedback will sharpen
the playbook most.

### Hosting

[Luma](https://lu.ma) works well for a recurring series — familiar signup
flow, email capture by default, calendar integration. (For reference, AI
Safety Chicago runs at [luma.com/ais-chicago](https://luma.com/ais-chicago).)
Any tool that gives you a stable RSVP link and an email list is fine; pick
the one your audience already uses.

### Standing agenda (60 minutes)

A structure that's worked in adjacent communities:

- **0–10:** Round-robin check-in. Each facilitator: cohort status,
  one thing that worked last month, one thing that stalled.
- **10–25:** Live examples since last call. New artifacts that have
  been added to `examples/` get a 2-minute walkthrough from whoever
  shipped them.
- **25–45:** Topic of the month — a new archetype proposal under
  review, a template that needs sharpening, a framework somebody's
  using that should be an appendix.
- **45–55:** Open discussion / questions.
- **55–60:** Commitments for next call. Each facilitator names one
  concrete thing they'll do before we meet again.

### Notes

If you run this, summarize each call into a one-page recap and post it as a
GitHub issue tagged `office-hours` on your fork (or this repo, if it's a
shared call). People who couldn't attend catch up by reading the recaps in
reverse chronological order; the issue thread also doubles as a searchable
archive.

## WhatsApp groups

For a faster-than-email asynchronous channel between calls, WhatsApp works
well — high open rates, low friction. Useful for:

- Sharing live updates between cohorts
- Asking quick questions ("anyone run a salon with mid-career legal
  practitioners? what worked?")
- Sharing relevant news (a bill that just dropped, a comment window
  that just opened)
- Coordinating regional meetups

Pick whatever messaging tool your audience already uses; the platform is
incidental to the norms.

### Suggested groups

- **A core group for facilitators using your fork of the playbook.**
  Maintainer-curated. Open to anyone running a cohort, plus people who have
  shipped a v1 of one of the archetypes.

- **Regional groups** (form organically once the network grows).
  Chicago, Bay Area, NYC, DC, London, etc. Spin one up when there are
  4+ facilitators in a single city.

### Norms that keep the channel useful

- **Substance over signal.** Share artifacts, not just opinions.
- **Name what you're asking for.** "Looking for feedback on this draft
  by Friday" lands better than "thoughts?"
- **Default to Chatham House for sensitive discussions.** If you're
  sharing a draft memo or a private cohort dynamic, say so explicitly.
- **Cross-post to GitHub when something compounds.** If a chat exchange
  produces a template improvement or a new archetype idea, open the issue
  or PR. The chat is for speed; the repo is for memory.

## A note on the maintainer

There isn't a live cross-facilitator community attached to this specific repo
right now. The patterns above describe what one could look like, drawn from
adjacent communities I've watched work; whether to set one up — and who to
include — is a call for whoever is facilitating, not the maintainer.

For substantive questions about the playbook, archetype proposals, or
contributions, the best paths are:

1. **Open an issue** at [`/issues/new/choose`](../../issues/new/choose) —
   cohort-entry, new-example, new-archetype-proposal, or disagree-or-clarify.
2. **Open a PR** — see [`CONTRIBUTING.md`](./CONTRIBUTING.md).
3. **Email the maintainer** at **info@techne.ai** for anything that doesn't
   fit either.
