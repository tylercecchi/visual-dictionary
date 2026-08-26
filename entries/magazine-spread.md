---
name: magazine-spread
title: Magazine Spread
category: layout
aliases: [editorial layout, magazine layout, feature article layout, spread design, art directed article, pull quote layout, editorial hero, kinfolk style, indie magazine, lookbook, minimalist editorial, interview layout, q and a format]
media: [css]
---

# Magazine Spread

**Coordinate:** 2d · grid · layered · hero · linear · single-surface.

Print editorial translated to screen — a dramatic opener, multi-column text
with images breaking across columns, pull quotes interrupting, captions in
margins. Art direction *per story* on a rigorous underlying grid: the
broken-grid register with a linear reading spine.

```
┌───────────────────────┐
│   HEADLINE  ██████████│
│             ██ hero ██│
├──────┬───────┬────────┤
│ text │ text  │ ❝pull  │
│      │ ┌─────┴──┐quote│
│      │ │ image  │     │
└──────┴─┴────────┴─────┘
```

## You know it when you see

- An opener that's a composition, not a template: display type + image in deliberate tension
- Body text in a disciplined column while images, quotes, and captions span, overlap, and bleed around it
- Pull quotes as typographic events mid-read; drop caps; margin captions
- The failure: decoration interrupting so often the reading spine breaks (art direction defeating the article)

## Dials

- **spine integrity** — the non-negotiable: one continuous text column path the eye can always rejoin; interruptions (images, quotes) *punctuate* the spine, never sever it (the reading contract is `linear` — everything else is subordinate)
- **interruption rhythm** — how often events break the text (every 2-4 screenfuls reads editorial; more reads restless); alternate event types (image → quote → full-bleed) rather than repeating
- **overlap & bleed courage** — images crossing column boundaries, elements over images, full-bleed breakers ([[grid-systems]]' content/breakout/full tracks are built for this); overlap obeys [[visual-composition]] weight balance
- **typographic event design** — pull quotes ([[typographic-voice]] display moments: size jump, hairline rules, or [[knockout-typography]]), drop caps, margin captions ([[grid-systems]] margin column); each event is a designed component, not enlarged text
- **opener register** — quiet (type-only, air) vs maximal (full-bleed image + [[knockout-typography]] headline); the opener sets the story's [[image-treatment]] and palette, which the spread then obeys

## Content contract

A real *article*: one linear text of substance, 3-8 strong images, 2-4
quotable lines, ideally captions. Thin content can't fill the form —
a spread wrapping 300 words is costume. The art direction should respond to
*this* story's imagery and tone (that's what "editorial" means).

## Collapse behavior

The spine wins: single text column, interruptions become in-flow full-width
events in reading order, margin captions move below images, overlaps
flatten to stacked ([[elevation]] departs, sequence remains). The opener
simplifies but keeps its register. A spread that collapses into a clean
[[timeline-feed]]-like article *in the right order* was built correctly.

## Techniques

- **The three-track grid** — `[full-start] [breakout-start] [content-start]
  ...` named lines; body text in content, images span to breakout,
  breakers to full ([[grid-systems]]' pattern is this entry's engine).
- **Text wrap around intrusions** — `float` + `shape-outside` (circle,
  polygon, or image alpha) for text hugging an image or quote — the most
  print-feeling CSS property in existence.
- **Pull-quote components** — extracted spans restyled as aside blocks
  spanning tracks; `float` mid-column for the interleaved version.
- **Drop caps** — `initial-letter` (verify support) with a `::first-letter`
  fallback.
- **Scroll restraint** — [[scroll-choreography]] at whisper level: slow
  [[parallax]] on full-bleeds, quiet reveals; the article is the show.

## Search queries

- `css shape-outside text wrap image editorial`
- `initial-letter drop cap support fallback`
- `named grid lines breakout full-bleed article`
- `art directed article css examples`

## Related

[[grid-systems]] (the tracks), [[typographic-voice]] (the medium),
[[knockout-typography]] (openers and quotes), [[visual-composition]]
(overlap balance), [[image-treatment]] (per-story image rules),
[[split-screen]] (the opener's simpler cousin), [[centered-stack]] (the
undirected article), [[scroll-choreography]] (restrained motion).
