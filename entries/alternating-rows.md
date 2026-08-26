---
name: alternating-rows
title: Alternating Rows
category: layout
aliases: [zigzag layout, alternating features, media object rows, left right sections, feature rows, z pattern sections, ping pong layout]
media: [css]
---

# Alternating Rows

**Coordinate:** vertical · grid · tiled · egalitarian · linear ·
single-surface.

Feature rows with media and text swapping sides each beat — image left/text
right, then flipped, down the page. [[split-screen]] serialized into a
rhythm; the workhorse of "features" sections and the layout most likely to
be built on autopilot.

```
┌─────────┬─────────┐
│ ██ img  │ text    │
├─────────┼─────────┤
│ text    │ img ██  │
├─────────┼─────────┤
│ ██ img  │ text    │
└─────────┴─────────┘
```

## You know it when you see

- Feature sections ping-ponging media across the center line
- The eye tracing a Z/S path down the page
- The failure modes: alternation so mechanical it lulls (template drumbeat), or content-free symmetry — six identical rows proving the team had six bullet points

## Dials

- **alternation rhythm & breaks** — strict ABAB (calm, predictable) vs broken (ABA-*full-bleed*-BA: a breaker row resetting attention — [[centered-stack]] rhythm logic applied here); 3-5 rows before a break; more than 6 rows total means the content wants a [[bento-grid]] or table instead
- **ratio & gutter** — media:text at 50/50 (formal) or ~60/40 (media-forward); a generous center gutter keeps the swap legible; rows share the same ratio flipped, not new ratios each row ([[grid-systems]] discipline)
- **media register consistency** — all screenshots, all illustrations, or all photos ([[image-treatment]]/[[illustration-style]] one register); mixed media registers per row is the most common incoherence
- **vertical alignment** — text block centered against media (default) vs top-aligned (denser, technical); pick once
- **connective tissue** — optional flow cues between rows: a running line/path (SVG connecting rows — [[blueprint]] energy), numbered steps ([[typographic-voice]] label system), or scroll-linked continuity ([[scroll-choreography]])

## Content contract

3-6 peer features, each with equal-weight media and a text block of similar
length (the layout exposes ragged content volumes instantly). If one
feature is the flagship, it deserves a [[split-screen]] hero or bento hero
cell instead — alternating rows are *egalitarian* by coordinate. Media must
be real; placeholder-quality media in this layout is unhidable.

## Collapse behavior

Alternation dies: every row stacks media-over-text (or text-over-media —
pick by whether media is self-explanatory) in the *same* order every row.
The Z-path is gone, so mobile rhythm relies on the connective tissue and
row spacing. Never alternate stack-order per row on mobile — it reads as a
bug, not a rhythm.

## Techniques

- **Grid + `direction` flip** — each row a 2-col grid; alternate rows swap
  template areas or use `dir`/`order` (visual order only — DOM stays
  text-first for [[visible-accessibility]] and correct collapse).
- **`:nth-child(even)` swap** — the classic: same markup, even rows flip
  via `order` or mirrored template; one selector carries the whole
  alternation.
- **Breaker rows** — a full-bleed row class ([[grid-systems]] full track)
  inserted at rhythm breaks.
- **Scroll staging** — media slides in from its own side (the one
  alternation-aware reveal that's earned; [[scroll-choreography]] trigger
  register, subtle distance).

## Search queries

- `alternating feature rows nth-child order css`
- `zigzag layout responsive stack order`
- `feature section media text ratio`
- `visual order vs dom order accessibility`

## Related

[[split-screen]] (one row, isolated), [[centered-stack]] (the page it
lives in), [[bento-grid]] (where >6 features go), [[image-treatment]] +
[[illustration-style]] (media register law), [[scroll-choreography]]
(side-aware reveals), [[grid-systems]] (ratio discipline),
[[visual-composition]] (the Z-path is an eye-path armature).
