---
name: typographic-voice
title: Typographic Voice
category: ui-foundations
aliases: [typography, font pairing, type scale, editorial, monospace, serif, tracking, letter spacing, type personality, font choice]
media: [css]
---

# Typographic Voice

The personality carried by type — typeface choice, scale, weight, spacing, and
case working together into a recognizable voice: editorial, technical, warm,
brutalist, luxury.

## You know it when you see

- You could identify the product from a text-only screenshot
- Serif headlines over sans body (editorial); mono everywhere (technical);
  tight geometric sans (startup-modern); wide-tracked uppercase labels (luxury/technical)
- Or the failure: system-default sameness — type that says nothing

## Dials

- **typeface pairing** — one family (quiet, systematic) vs display+body pairing (voiced); the display face carries most of the personality budget
- **scale ratio** — compressed (1.125, dense/technical) vs dramatic (1.4-1.6, editorial); see [[visual-hierarchy]] for commitment
- **weight range** — how far apart heading and body weights sit; extremes (100/900) are themselves a voice
- **tracking & case** — tight tracking on large headings (modern), wide tracking + uppercase on small labels (technical/luxury); never wide-track lowercase body
- **line height & measure** — airy (1.7+, editorial calm) vs tight (1.3, dense UI); 45-75 characters per line
- **numerals & details** — tabular figures in data UI, old-style in prose; ligatures, true small caps — the tells of care

## Techniques

- **Type tokens** — scale, weights, line-heights, tracking as design tokens;
  voice consistency is token discipline.
- **Variable fonts** — one file, full weight/width axes; enables optical-size
  and weight animation ([[motion-ceremony]] for type).
- **`font-feature-settings` / `font-variant-numeric`** — tabular numbers,
  small caps, stylistic sets; where the details live.
- **Fluid type** — `clamp()` between viewport sizes so the scale survives
  responsive breaks.

## Starting points

- practical-typography.com (Butterick) — the canon
- Modern font sources: Google Fonts (verify quality per face), Fontshare,
  open-source foundries (verify licensing for the project)
- Type-scale calculators for ratio exploration

## Search queries

- `font pairing display body <mood>` (fill the mood: editorial, technical…)
- `variable font weight axis css animation`
- `font-variant-numeric tabular-nums data ui`
- `fluid typography clamp scale`

## Related

[[visual-hierarchy]] (scale ratio commitment), [[color-roles]] (fg levels are
type's color half), [[shape-language]] (geometric type wants geometric UI),
[[ascii-rendering]] (mono as aesthetic extreme), [[motion-ceremony]] (variable-
font motion).
