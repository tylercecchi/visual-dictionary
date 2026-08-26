---
name: chart-voice
title: Chart Voice / Data-Ink
category: ui-foundations
aliases: [dataviz style, chart style, data-ink, chart design, graph aesthetics, dashboard look, chart colors, minimal charts]
media: [css, svg, canvas]
---

# Chart Voice / Data-Ink

The visual identity of a product's charts — how much ink goes to data versus
scaffolding, and whether the charts read austere-editorial, dense-terminal,
or friendly-consumer. Charts are UI with their own dials.

## You know it when you see

- Charts you could attribute to the product without a logo (FT's salmon
  austerity, terminal-green trading density, rounded consumer-app bars)
- Gridlines, axes, and legends that whisper while the data speaks
- Or the failures: default-library charts (says template), or decoration
  outshouting data (3D bars, heavy grids, rainbow series)

## Dials

- **data-ink ratio** — how much scaffolding survives: full frames+grids (dense/technical) → baseline-only (editorial) → sparklines (pure data); Tufte's dial
- **categorical palette** — series colors: how many before recycling, brightness-matched or deliberately ranked; sequential/diverging ramps for quantity ([[gradients]] in OKLCH for even perceptual steps)
- **mark personality** — bar radius ([[shape-language]] leaks in), line weight and interpolation (stepped = technical, smooth monotone = consumer), point emphasis
- **labeling stance** — direct labels on data (editorial, confident) vs legends (compact, indirect); axis tick density and number formatting ([[typographic-voice]]: tabular figures)
- **animation register** — none (serious), staged draw-in on entry, live-updating ([[motion-ceremony]] applies; animate once, not perpetually)

## Techniques

- **Theme the library, never default** — every serious chart library
  (d3-based, Recharts/visx/Observable Plot class, ECharts) accepts a theme:
  encode the palette, grid weights, fonts as one theme object/tokens.
- **Own the scaffolding** — gridlines at low-alpha foreground tokens,
  axis lines often removable entirely; format numbers (k/M, precision) —
  defaults betray you here first.
- **Direct labeling** — last-point labels on lines, values on bars beat
  legends when series count is small; d3/Plot make this natural.
- **Sparklines & micro-charts** — the no-axes register for tables and cards;
  a line + endpoint dot + min/max markers.

## Starting points

- Consult the local `dataviz` skill when building any chart in this
  environment — it carries a validated palette method and mark specs
- Tufte (data-ink), and the FT/Economist/NYT visual vocabularies as
  reference voices
- Observable Plot — the current least-effort path to non-default-looking charts

## Search queries

- `observable plot theme tokens style`
- `categorical palette perceptually uniform oklch charts`
- `direct labeling vs legend charts`
- `sparkline table design`

## Related

[[color-roles]] (chart palette extends the system), [[typographic-voice]]
(tabular numerals, label discipline), [[visual-hierarchy]] (data-ink *is*
hierarchy), [[motion-ceremony]] (entry animation budget), [[border-stroke]]
(grid weight is stroke language), [[spacing-density]] (dashboard density
register).
