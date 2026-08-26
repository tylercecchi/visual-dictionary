---
name: centered-stack
title: Centered Stack
category: layout
aliases: [landing page layout, hero stack, centered column, single column, vertical sections, marketing page, section stack, one column layout]
media: [css]
---

# Centered Stack

**Coordinate:** vertical · grid · tiled · tiered · linear · single-surface.

The landing page's spine — full-width sections stacked vertically, content
centered in a capped column, read top to bottom: hero, proof, features,
pricing, close. The most-built layout on the web; the craft is entirely in
section rhythm and the discipline of the center line.

```
┌───────────────────────┐
│        HERO           │
│      [ cta ]          │
├───────────────────────┤
│   logos · logos       │
├───────────────────────┤
│      feature          │
├───────────────────────┤
│      pricing          │
└───────────────────────┘
```

## You know it when you see

- A narrative of full-width horizontal bands, each one idea, content centered
- The classic arc: hero → social proof → features → how-it-works → pricing → final CTA
- Section backgrounds alternating to mark boundaries
- The failure: every section identically sized and weighted (a flat drumbeat — no rhythm, no [[visual-hierarchy]] across sections)

## Dials

- **section rhythm** — the layout's actual instrument: varied section heights and internal density (tall airy hero → short dense logo strip → medium features); uniform sections read as template; rhythm *is* the design
- **column cap & deviations** — the center column's max-width ([[typographic-voice]] measure for text, wider for cards) and which elements exceed it (full-bleed imagery, edge-to-edge breakers — [[grid-systems]]' three tracks vertically deployed)
- **boundary language** — how sections separate: background alternation ([[color-roles]] surface levels), [[gradients]] fades, angled/curved dividers ([[shape-language]] statement), or pure [[spacing-density]] whitespace; one language, used consistently
- **narrative arc** — sections as argument beats (attention → trust → understanding → action); each section has one job and one primary element; the CTA reappears at arc peaks, not everywhere
- **scroll staging** — [[scroll-choreography]] reveals per section (short, once), and whether any section upgrades to a pinned moment (one showpiece max — [[motion-ceremony]] at page scale)

## Content contract

A linear *argument*: sequential sections, each one idea with a headline,
support, and optional visual. Demands ruthless section economy (5-8 beats)
and one primary action. Contentless sections ("filler features") show
instantly at this altitude — the layout has nowhere to hide them.

## Collapse behavior

The most collapse-native layout: already vertical and linear. Internal
section layouts do the collapsing ([[split-screen]] halves stack,
[[alternating-rows]] lose alternation, card rows go single-file); section
padding compresses via fluid values. The risk is monotony — on mobile every
section becomes "heading, text, image, button," so background/divider
rhythm matters *more* at narrow widths.

## Techniques

- **Section + container pattern** — full-width section wrappers (background
  owners) each containing a centered `max-width` container
  (`margin-inline: auto; padding-inline`); two classes, whole layout.
- **Fluid rhythm** — section padding and type via `clamp()` so the rhythm
  scales ([[grid-systems]] fluid rhythm at section scale).
- **Divider kit** — angled: `clip-path` on section backgrounds; curved:
  SVG wave between sections; overlap: negative margin pulling a card
  across a boundary ([[elevation]] moment).
- **Reveal restraint** — IntersectionObserver class-toggles, content
  visible-by-default ([[visible-accessibility]] / [[scroll-choreography]]
  fallback law).

## Search queries

- `landing page section container max-width pattern`
- `clamp fluid section spacing typography`
- `svg section divider wave angled`
- `landing page narrative structure sections`

## Related

[[visual-hierarchy]] (across-section rhythm), [[split-screen]] +
[[alternating-rows]] + [[bento-grid]] (sections it hosts),
[[grid-systems]] (the tracks), [[scroll-choreography]] (staging),
[[gradients]] + [[color-roles]] (boundary language), [[knockout-typography]]
(hero headline register), [[loading-language]] (the arc's action states).
