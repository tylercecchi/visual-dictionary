# Entry template

File: `entries/<kebab-name>.md`. Keep entries tight — an agent reads these
mid-task. Every section below is required unless marked optional.

```markdown
---
name: <canonical-kebab-name>
title: <Canonical Name>
category: light-and-depth | surface-and-material | distortion-and-lens | color-and-tone | pattern-and-texture | motion | ui-foundations | layout
aliases: [trend names, slang, adjacent terms people actually say]
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

## Starting points

<Known libraries / reference implementations, with the caveat that the agent
must verify currency. Include Shadertoy/reference URLs for shader techniques.>

## Search queries

<3-5 literal queries the agent should run to find current libraries and
implementations.>

## Related

<[[links]] to adjacent entries: what it combines with, what it's confused with.>
```

## Layout entries

Entries in the `layout` category additionally require, after the title:
a **Coordinate** line (the entry's position across LAYOUT.md's seven
variables), an **ASCII diagram** of the arrangement, and two extra
sections before Techniques: **Content contract** (what the layout demands
of its content) and **Collapse behavior** (how it degrades at narrow
widths). Register new archetypes in LAYOUT.md's coordinate table as well
as INDEX.md.
