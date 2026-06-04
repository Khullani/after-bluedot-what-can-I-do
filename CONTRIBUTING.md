# Contributing

This is a living document. I'd rather it grow and be partly wrong than stay
small and tidy.

If you're a facilitator who's run a BlueDot cohort — yours, mine, or
anyone's — you've seen patterns I haven't. You've seen archetypes I left
off the menu. You've watched your own people ship things I haven't seen.
That's the point of contributions: each facilitator's experience adds
evidence the next facilitator gets to use.

If you're an alum who shipped a v1 of one of the archetypes, your example
is more useful to the next cohort than anything I can write from the
outside. Add it.

## Where to start

Three doors in, depending on how formal you want to be:

- **Open an issue** at [`/issues/new/choose`](../../issues/new/choose) —
  pick from cohort-entry, new-example, new-archetype-proposal, or
  disagree-or-clarify. The cohort-entry template is a form; no git
  required.
- **Open a PR** directly if your change is concrete (a new case study,
  a template improvement, a typo fix). See the [PR template](./.github/PULL_REQUEST_TEMPLATE.md).
- **Show up to office hours** ([`COMMUNITY.md`](./COMMUNITY.md)) — for
  high-friction contributions (new archetypes, appendices), the call
  is the fastest way to pressure-test before you write.

## The five kinds of contribution, in roughly descending value

**1. Add your shipped artifact as a live example.** Highest-value
contribution by a wide margin. The menu compounds when each archetype has
two or three real examples instead of one. PR adds a file to `examples/`
in the same shape as the existing case studies, plus links from
`README.md` and the relevant archetype file. Friction: low.

**2. Add a cohort entry to `CHANGELOG.md`.** If you facilitated a cohort
and handed this playbook to them, log it: course name, dates, participant
count (names omitted by default unless they want public credit), what
each person picked, and what shipped. Friction: low. Worth doing even if
nobody shipped — the "what stalled" notes are just as useful.

**3. Improve an existing template.** If you used `op-ed-pitch.md` or
`one-pager.md` and found a better structure, send the diff with a sentence
on why. Templates evolve faster than archetypes do. Friction: low.

**4. Propose a new archetype.** The bar is higher: don't propose what
sounds good in theory; propose what you've seen at least one person
actually ship. Open an issue first describing the archetype, who it's
for, and the v1 you saw. If I think it belongs on the menu, the next
step is a PR adding the archetype detail file and at least one example.
Friction: moderate-to-high.

**5. Add an appendix or framework.** The appendix in `PLAYBOOK.md`
(a reading list for staying grounded) is facilitator-specific material
that compounds across cohorts. If you teach a framework that consistently
lands with your cohorts — and that's not already covered — propose it.
Appendices are signed by their authors, in their voice. Friction:
moderate (requires editorial discussion to keep the playbook's overall
stance coherent).

## The voice contract

The playbook is opinionated and first-person on purpose. The voice is
what makes it useful as a hand-off — cohort members are not looking
for a balanced catalog, they're looking for somebody to tell them
what to do this week.

A few rules that keep the voice coherent as the document grows:

- **The main menu and "The three questions" stay in my voice.** These
  are the editorial spine. PRs that change them are welcome but I'll
  edit for voice before merging. Don't take that personally.
- **Archetype detail files use the same opinionated register.** If
  you contribute a new archetype, write it in *your* first-person voice
  — but match the structure of the existing archetype files (why it
  exists, when to pick / not pick, v1, failure modes, etc.). Add an
  attribution footer: "Originally contributed by [name], [affiliation],
  [date]."
- **Appendices and case studies are explicitly multi-author.** Each
  one is signed. Write in your own voice; don't try to imitate mine.
- **Templates are stylistically neutral.** They get filled in by
  cohort members, so they should sound like generic scaffolding, not
  like any one facilitator's editorial voice.

## What I won't merge

A short, honest list:

- **Hedged neutrality.** "Some practitioners might consider…" PRs that
  remove specificity from the menu make it worse, not better.
- **Generic AI-policy commentary.** This repo is a project menu, not a
  blog. Substantive commentary belongs on Substack (yours, ideally).
- **Self-promotion without an artifact.** "Here's my company, please
  link to it." If the company shipped something that fits an
  archetype, add the artifact. If not, don't.
- **Anything that softens the failure-mode sections.** The "common
  failure modes" in each archetype are doing real work. They get
  sharper, not softer.

## How to actually do it

1. Fork the repo.
2. Make your change on a branch. Keep the PR small — one contribution
   per PR is much easier to review than a sweeping update.
3. Open the PR against `main`. Use the PR template; check the box for
   the kind of contribution.
4. If you're adding yourself to the facilitators list (see
   [`README.md`](./README.md)), include that in the same PR.
5. I'll review within 1–2 weeks. For high-friction contributions (new
   archetypes, appendices), expect a round or two of editorial
   discussion before merge.

## Facilitator credits

If you're using this playbook with a cohort you facilitated, add yourself
to the "Facilitators using this playbook" list in
[`README.md`](./README.md). One line: name, affiliation/city, the
course you facilitated. Optional: a link to your bio or your cohort's
public summary.

The cohort-entry issue template has a checkbox for this — easiest path.

## Staying in touch

There isn't a live cross-facilitator office hours or chat group attached to
this repo. If you want to set one up around your own cohort or facilitator
network, [`COMMUNITY.md`](./COMMUNITY.md) has patterns to adapt. For direct
contact with the maintainer: open an issue, open a PR, or email
**info@techne.ai**.

## Disagreements

If you think I'm wrong about something in the playbook — a failure
mode that isn't actually a failure mode, an archetype that's
mis-described, an appendix that overreaches — open an issue and
say so directly. I'd rather argue about it than have you fork silently.

The point of this being a living document is that I expect to be
wrong about parts of it, and I'd rather discover where through
contributions than through cohort members quietly skipping the
sections that didn't land.
