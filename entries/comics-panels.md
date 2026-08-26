---
name: comics-panels
title: Comics / Panel Layout
category: layout
aliases: [comic book layout, comic panels, speech bubbles, speech balloons, manga layout, graphic novel, panel grid, gutters, onomatopoeia, webtoon, sequential art]
media: [css, svg]
---

# Comics / Panel Layout

**Coordinate:** 2d · grid (with sanctioned breaking) · tiled-to-layered ·
egalitarian panels, hero moments · **linear (the strictest reading
contract in the dictionary)** · single-surface.

Sequential art's machinery — panels, gutters, balloons, SFX lettering —
where layout *is* time: panel size is duration, the gutter is a cut, and
breaking the grid is a scream. Requested as "comic style" for heroes,
onboarding, and storytelling sections.

```
┌────────┬───┐  ╭────────╮
│        │   │  │ Balloon │
│   1    │ 2 │  ╰──╥─────╯
├───┬────┴───┤     ▼
│ 3 │   4    │  POW!
└───┴────────┘
```

## You know it when you see

- Bordered panels in rows separated by white gutters; reading Z-order unmistakable
- Speech balloons with tails pointing at speakers; jagged bursts for shouts; caption boxes for narration
- A splash panel breaking the grid for the big moment; SFX lettering ("POW") drawn, not typeset
- The failures: ambiguous panel order, balloon tails pointing at nobody, every panel the same size (no rhythm)

## Dials

- **the reading-order law** — panels must resolve to one unambiguous sequence (Z-path rows in Western, right-to-left in manga — pick and never mix); when a layout could be read two ways, it *will* be; gutters and alignment are the disambiguators ([[grid-systems]] serving time itself)
- **panel rhythm as pacing** — size = duration (wide panel: a beat lingers; slivers: rapid cuts), row height varies by scene; the splash (full-width/page panel) is the reserved fortissimo ([[visual-hierarchy]] at narrative scale); borderless or bled panels signal flashback/dream (register shifts by frame treatment)
- **gutter grammar** — even white gutters are the default cut; tighter gutters = faster time; overlapping panels ([[collage-scatter]] license) = simultaneity or chaos, spent rarely
- **balloon anatomy** — oval body + tail *to the speaker's mouth-region*; order of balloons follows reading order within the panel (first speaker upper-left in Western); variants carry voice: cloud (thought), jagged burst (shout), wavering (weak/spooky), rectangle caption (narrator — [[color-roles]] tinted per narrator); tails never cross
- **SFX lettering** — onomatopoeia as drawn display type ([[type-composition]] license: warped, perspective, integrated into the art), sized to the sound's volume
- **webtoon register** — the vertical-scroll mutation: single column, tall gutters as *timing* (long white = pause — [[spacing-density]] as tempo), panels sized to viewport beats ([[scroll-choreography]]'s trigger register native here)

## Content contract

A sequence with real narrative order — story beats, steps, before/after
chains. Every panel needs a reason to be its size (pacing), every balloon
a speaker. Non-sequential content in comic clothes is decoration, not
comics — fine for one hero image, dishonest as a system.

## Collapse behavior

Rows reflow to fewer columns *preserving reading order absolutely*
(the one layout where reflow bugs change the story); the native mobile
form is the webtoon register — single column, gutter-timed. Balloons
scale with panels; SFX may crop, dialogue may not.

## Techniques

- **Panel grid** — CSS grid with per-row templates; spans for wide
  panels; gutters via gap; borders per register (2-3px ink,
  [[border-stroke]]); bleeds via negative margins to the frame edge.
- **Balloons** — SVG: ellipse/path body + tail path as one filled
  shape (tail merged, not a separate triangle — the amateur tell);
  jagged bursts as star-polygons; comic lettering faces (verify
  licensing) with hand-set line breaks, center-aligned
  ([[text-block-grammar]]'s centered-display exception).
- **The style pass** — halftone shading ([[halftone]]), ink outlines
  ([[toon-outline]]), aged newsprint ([[print-artifacts]] +
  [[material-texture]]) for the vintage register; flat-modern for
  contemporary.
- **Motion** — panels reveal on scroll ([[scroll-choreography]],
  one-time), balloons pop in sequence ([[motion-ceremony]] stagger);
  the comic that assembles itself is the premium onboarding register.

## Search queries

- `comic panel css grid layout`
- `speech balloon svg tail shape`
- `webtoon vertical scroll pacing`
- `comic reading order eye tracking`

## Related

[[grid-systems]] (the grid being narratively broken), [[halftone]] +
[[toon-outline]] + [[print-artifacts]] (the style stack),
[[type-composition]] (SFX lettering), [[visual-hierarchy]] (splash
economics), [[scroll-choreography]] (webtoon timing),
[[stories-format]] (the video-native sibling: sequential, full-screen,
tap-paced), [[cute-naive]] (rubberhose kinship),
[[illustration-style]] (the art inside the panels).
