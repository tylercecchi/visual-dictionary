---
name: type-composition
title: Type Composition
category: layout
aliases: [typographic layout, poster typography, type driven design, big type, oversized headline, display composition, type as image, text wall, stacked type, typographic hero, kinetic poster, david carson, deconstructed typography, ray gun style, experimental editorial]
media: [css, svg, canvas, webgl]
---

# Type Composition

**Coordinate:** 2d · anchored/scattered · layered · hero · linear-entry ·
single-surface.

Typography as the layout's primary material — the poster register, where
letterforms are the masses, the texture, and the architecture, and imagery
(if any) is subordinate. "Make it more typographic" resolves here.

```
┌───────────────────────┐
│ WE MAKE               │
│ ████████ THINGS       │
│      THAT ████████    │
│ ████ MATTER           │
│           — est. 2020 │
└───────────────────────┘
```

## You know it when you see

- Headlines at viewport scale — type sized to the container, not the content
- Words stacked, staggered, overlapped, rotated; lines broken *for shape*, not just sense
- A tension between huge display type and tiny supporting labels, with little in between
- Type running vertically, on arcs, bleeding off edges, or behind/through imagery
- Text repeated into texture (the marquee wall, the background word-field)

## Dials

**Scale & mass**
- **viewport coupling** — type sized to the container (`clamp()`/`vw`-driven, or fit-to-width) so the composition holds at any size; the poster law: the headline *is* the layout's biggest mass
- **scale gap** — display-to-support ratio: extreme (12:1+, editorial drama) vs moderate; the *absence of middle sizes* is what reads as composed rather than defaulted ([[visual-hierarchy]] at maximum commitment)
- **weight as mass** — heavy cuts carry compositional weight ([[visual-composition]]'s inventory: a black-weight word outweighs a photo); hairline display reads as line-art structure instead

**Arrangement**
- **line-break choreography** — breaks chosen for silhouette and emphasis (one word per line, the staircase stagger, the justified block); the break pattern is the composition's skeleton
- **stacking & registration** — flush-left tower, centered totem, staggered steps, or mixed-alignment collage; lines share deliberate registration lines even when staggered ([[grid-systems]] felt underneath)
- **rotation & direction** — horizontal, vertical (rotated 90° vs CJK-style upright), diagonal statements, arcs/paths ([[knockout-typography]]'s textPath); one deviant direction per composition — two reads as chaos
- **edge behavior** — contained, kissing the edges, or bleeding off (cropped letterforms — confidence move; keep crops on *display* type only, never on information)

**Layering & interaction with other elements**
- **overlap grammar** — type over image, image over type, type through image (interleaved z — the subject's head in front of the headline: [[cutaway-xray]]-like layer surgery via mask), type over type (ghost layers); legibility recovered via [[gradients]] scrims, blend modes, or outline/fill pairs
- **fill & treatment mix** — solid, outline ([[border-stroke]] weights), [[knockout-typography]] fills, gradient ink ([[gradients]]); ratio of treated to plain words (one treated word per composition is the tasteful default)
- **texture register** — type repeated to texture: marquee rows, word-fields at low contrast ([[visual-composition]] crystallographic balance), enormous ghost numerals behind content; texture type must drop contrast so information type wins

**Support structure**
- **micro-type counterpoint** — the tiny labels, coordinates, dates scattered at the composition's edges (the Swiss-poster convention; [[typographic-voice]] wide-tracked caps register); micro-type is the counterweight system ([[visual-composition]] lever law)
- **anchor discipline** — even wild compositions keep one calm anchor (a flush-left block of readable body text, a stable CTA); the anchor is the reader's exit into actual content

## Content contract

A short, strong verbal payload — a claim, a name, a manifesto line (2-12
words of display) plus optional micro-support and one anchor block. The
words must *deserve* the scale: type composition amplifies; weak copy at
poster scale is weakness at poster scale. Body-length content is the
anchor's job, never the composition's.

## Collapse behavior

The composition recomposes, not shrinks: viewport-coupled sizing keeps the
headline dominant; stagger/rotation moves flatten toward a stacked
flush-left tower; overlaps simplify (scrims strengthen); texture layers
thin or drop; micro-type consolidates into one block. The scale *gap*
survives even when absolute sizes drop — that gap is the register.

## Techniques

- **Fit-to-width type** — `clamp()` with `vw` middle terms; true
  fit-to-container needs measurement JS or SVG `<text>` scaled by viewBox
  (the poster-exact route; also gives free crop/bleed).
- **Stacked display** — each line a block with per-line
  transforms/alignment; letter-tight `letter-spacing` and reduced
  `line-height` (0.85-1.0) for display mass ([[typographic-voice]]
  tracking law: tighten large, never tighten small).
- **Overlap surgery** — image-through-type via `mask`; type-behind-subject
  via a duplicated masked image layer; ghost type as low-contrast
  absolutely-positioned layer ([[knockout-typography]] techniques
  compose here).
- **Marquee/texture walls** — CSS animation on duplicated rows
  (translateX loop), `prefers-reduced-motion` static fallback
  ([[visible-accessibility]]); word-fields as generated absolutely-placed
  spans with seeded jitter ([[collage-scatter]] machinery on words).
- **Variable-font mass tuning** — weight/width axes tuned per line so
  every line fills its measure (the justified-poster trick); axes animated
  = [[kinetic-type]] territory.

## Search queries

- `fit text to container width css svg viewbox`
- `poster typography layout css examples`
- `text behind image mask layer effect`
- `variable font width fill line justify display`
- `marquee text wall css animation loop`

## Related

[[typographic-voice]] (the voice being composed), [[knockout-typography]]
(treatments), [[kinetic-type]] (this composition in motion),
[[text-block-grammar]] (the anchor block's rules), [[visual-composition]]
(the balance law — type blocks are masses), [[grid-systems]] (felt
registration), [[magazine-spread]] (editorial cousin with a longer spine),
[[centered-stack]] (where a type-composed hero usually sits),
[[brutalism]] + [[period-looks]] + [[print-artifacts]] (native registers).
