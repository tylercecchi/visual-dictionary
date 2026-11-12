---
name: tech-spec
title: Tech Spec (Consumer-Hardware Spec Aesthetic)
summary: "product specs as design: big numerals, labels, dot-matrix, thin rules, one signal colour"
category: wardrobe
aliases: [tech spec, tech specs, tech spec aesthetic, tech specs page, spec page, specs page, specifications page, product specs, hardware aesthetic, consumer tech aesthetic, teenage engineering style, nothing phone style, nothing aesthetic, dot matrix, dot matrix font, spec grid, spec table, labelled diagram, product callouts, technical labels, orange accent, industrial design website]
media: [css, svg]
---

# Tech Spec (Consumer-Hardware Spec Aesthetic)

The look of consumer-hardware brands that turn specifications into the
design: large numerals with small units, labelled product diagrams,
dot-matrix or mono type, thin rules, generous grids and one signal
colour (often orange or red). Think Teenage Engineering, Nothing, and
hardware spec pages. It's cleaner and more product-marketing than
[[engineering-datasheet]], whose register is the industrial catalogue
with part numbers and dense tables.

## You know it when you see

- Spec numbers set huge ("48 kHz", "12 h") with tiny labels and units
- Product photos or line drawings with callout lines and small labels
- Dot-matrix, pixel or mono type for labels; a clean grotesk for the rest
- White or light grey grounds, black type, one bright signal colour
- Grids of spec cells separated by hairlines
- The failure: specs as decoration with no real data; the register only
  works when the numbers are true and useful

## Dials

- **numeral scale**: how big the hero numbers go relative to labels;
  big contrast is the signature ([[visual-hierarchy]])
- **label voice**: dot-matrix/pixel (playful hardware), mono (technical),
  small caps grotesk (neutral) ([[typographic-voice]])
- **signal colour**: one accent (orange, red, safety yellow) for the
  primary action and key highlights only ([[color-roles]])
- **diagram density**: clean callouts on a hero product shot vs exploded
  views and many labels
- **grid**: spec cells with hairline rules ([[border-stroke]]), modular
  and evenly spaced ([[grid-systems]])
- **ground**: white/light grey (product clean) vs black (pro gear)

## Techniques

- **Spec cells**: CSS grid of cells with 1px borders; value in a large
  tabular-numeral style (`font-variant-numeric: tabular-nums`), unit and
  label small beneath.
- **Callouts**: SVG lines from points on a product image to labels;
  position with percentages so they scale; hide or list them on narrow
  screens.
- **Dot-matrix type**: a dot-matrix web font, or render labels as SVG
  dots for display use only.
- **Data honesty**: pull specs from real product data; tables
  ([[table-design]], [[comparison-columns]]) for full specifications
  below the visual highlights.

## Starting points

- Reference: Teenage Engineering product pages, Nothing product pages,
  hardware tech-spec pages
- Dot-matrix and mono web fonts (search "dot matrix font")

## Search queries

- `product spec page design big numbers`
- `svg callout lines product image labels`
- `dot matrix font web`
- `teenage engineering website design`
- `css grid spec table hairline borders`

## Related

[[engineering-datasheet]] (industrial catalogue: part numbers, dense
tables), [[mono-infra]] (ruled mono UI), [[blueprint]],
[[comparison-columns]], [[table-design]], [[product-detail]],
[[cutaway-xray]] (exploded views).
