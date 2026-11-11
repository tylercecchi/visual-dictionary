# Entry template

File: `entries/<kebab-name>.md`. Keep entries tight — an agent reads these
mid-task. Every section below is required unless marked optional.

```markdown
---
name: <canonical-kebab-name>
title: <Canonical Name>
summary: "<one line, ≤ 90 chars; shown by resolve()/browse() and in INDEX.md>"
category: light-and-depth | surface-and-material | distortion-and-lens | color-and-tone | pattern-and-texture | motion | behavior | foundations | components | editorial | wardrobe | layout
aliases: [trend names, slang, adjacent terms people actually say — whole words match, so include plurals/variants people type]
media: [css, svg, canvas, webgl]   # where it can be achieved
---

# <Canonical Name>

<One-sentence definition.>

## You know it when you see

<2-4 bullets of perceptual cues, written the way a non-expert would describe
the look. These are the grep targets for vague requests.>

## Dials

<The named parameters of the effect, each with what turning it up/down does.
This is the shared vocabulary for iteration.>

## Techniques

<Ordered cheapest-medium-first. For each: the technique name, one line on how
it works, and when it's the right choice.>

## Starting points   (optional — omit only when the entry is pure rules/tokens)

<Known libraries / reference implementations, with the caveat that the agent
must verify currency. Include Shadertoy/reference URLs for shader techniques.
Cross-cutting libraries go in LIBRARIES.md, not here.>

## Search queries

<3-5 literal queries the agent should run to find current libraries and
implementations.>

## Related

<[[links]] to adjacent entries: what it combines with, what it's confused with.>
```

## Behavior entries

Entries in the `behavior` category describe a mechanism, not a look — but
every behavior has a visible face, so they keep the standard sections
("You know it when you see" lists the cues a user *sees and feels*; Dials
are the timing/threshold/feedback parameters). They additionally require,
before Dials:

- **What it does** — the mechanism in 2-4 sentences: the problem it
  solves and the move it makes. No history or lineage — present tense only.
- **When to use** — the situations where it is the right call (bullets).
- **When not to use** — where it fails and what to use instead (bullets,
  each naming the alternative).

Sources: write behavior entries in our own words from general practice.
Interface Lineage (interfacelineage.com) may be *cited and linked* — add
its URL to Starting points — but its terms forbid copying its text or
rebuilding its corpus, so never paraphrase an entry of theirs section by
section. See `REFERENCES.md`.

## Layout entries

**Categories.** `foundations` = the systems every UI has (color roles,
spacing, hierarchy…) — the diagnosis path and the custom-wardrobe dial
sheet. `components` = component families with contracts. `editorial` and
`layout` = structure. `wardrobe` = aesthetic registers (preset dial bundles
over the foundations). The effect/material categories are attributes any
wardrobe can reach for. `behavior` = interaction patterns — how an
interface *acts* (undo windows, drag-and-drop, hover intent, inline
commands); see "Behavior entries" below. After adding or changing entries run
`node tools/lint.mjs` and `node tools/findability-audit.mjs`.

Entries in the `layout` category additionally require, after the title:
a **Coordinate** line (the entry's position across LAYOUT.md's seven
variables), an **ASCII diagram** of the arrangement, and two extra
sections before Techniques: **Content contract** (what the layout demands
of its content) and **Collapse behavior** (how it degrades at narrow
widths). Register new archetypes in LAYOUT.md's coordinate table as well
as INDEX.md.
