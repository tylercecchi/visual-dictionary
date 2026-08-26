---
name: visible-accessibility
title: Visible Accessibility Design
category: ui-foundations
aliases: [high contrast mode, focus visible, forced colors, accessible design language, wcag aesthetic, focus ring design, reduced motion design, large text mode]
media: [css]
---

# Visible Accessibility Design

The visible layer of accessibility treated as design language rather than
compliance afterthought — focus rings worth looking at, high-contrast modes
that are *designed*, reduced-motion experiences that are alternatives rather
than amputations.

## You know it when you see

- Focus indicators that belong to the brand: offset rings, thick underlines, inverted pills — visible *and* considered
- A high-contrast theme that looks intentional, not like a browser emergency override
- Reduced-motion mode where transitions become crossfades (not nothing) and [[scroll-choreography]] content simply *is present*
- Products where the accessible states are screenshot-worthy — the tell of a team that designed them

## Dials

- **focus ring language** — the marquee decision: outline vs underline vs background swap; width, offset, color ([[border-stroke]]'s focus section, elevated to identity); `:focus-visible` so pointer users aren't shouted at
- **contrast headroom** — designing above minimums (APCA/WCAG targets as *floor*, not target) so themes, states, and [[image-treatment]] overlays never dip under; muted-text tokens are where products quietly fail
- **forced-colors readiness** — Windows High Contrast replaces your palette with system colors: what survives (borders, outlines, text) *is* your structure — products relying on background-color alone vanish; a [[border-stroke]] audit in `forced-colors: active`
- **motion fallback quality** — `prefers-reduced-motion` as a *designed second version*: crossfades for slides, instant-with-emphasis for springs, [[loading-language]] skeletons without shimmer; never bare removal of state feedback
- **target & text scaling** — 200% text zoom and large-type modes as tested layouts; hit areas ≥44px regardless of visual size

## Techniques

- **Focus tokens** — `--focus-ring-*` (color, width, offset) applied via
  `:focus-visible` + `outline`/`box-shadow` uniformly; test keyboard-only
  traversal as a design review, watching the ring travel.
- **Forced-colors CSS** — `@media (forced-colors: active)`: system color
  keywords (`CanvasText`, `Highlight`), `forced-color-adjust` opt-outs only
  where meaning requires; transparent borders on color-only elements become
  visible exactly here.
- **Contrast in the pipeline** — token pairs contrast-checked at build
  (APCA/WCAG tooling in CI), including text-over-image with its scrim
  ([[gradients]]).
- **Reduced-motion branching** — motion tokens with reduced counterparts
  (`--transition-page` swaps to a crossfade); in JS animation libraries, a
  global reduced-motion config, not per-component ifs.
- **High-contrast as a real theme** — beyond forced-colors: an authored
  high-contrast token set (stronger borders, no translucency, no
  [[frosted-glass]]) offered in settings.

## Starting points

- WCAG 2.2 + APCA documentation; Deque/axe tooling for CI
- "Designing beautiful focus states" articles (searchable; several good
  system write-ups) and gov.uk / USWDS design systems — the best public
  focus-ring and contrast practice
- MDN `forced-colors` and `prefers-reduced-motion` guides

## Search queries

- `focus-visible custom focus ring design tokens`
- `forced-colors active css system colors audit`
- `apca contrast ci tokens check`
- `prefers-reduced-motion crossfade alternative patterns`

## Related

[[border-stroke]] (focus rings and the forced-colors skeleton),
[[color-roles]] (contrast-checked pairs), [[motion-ceremony]] +
[[scroll-choreography]] (what reduced-motion branches from),
[[loading-language]] (shimmerless skeletons), [[visual-hierarchy]] (contrast
headroom is hierarchy insurance), [[frosted-glass]] + [[progressive-blur]]
(translucency is what high-contrast mode removes).
