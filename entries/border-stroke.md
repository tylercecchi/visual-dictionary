---
name: border-stroke
title: Border / Stroke Language
category: ui-foundations
aliases: [borders, outlines, dividers, rules, hairline, keyline, stroke, separator, inset border, ring, focus ring, border beam, animated border, glowing border, star border]
media: [css, svg]
---

# Border / Stroke Language

How a UI draws its edges — whether containers are defined by lines, shadows,
or space alone, and what weight and color those lines carry. A quiet system
with loud consequences.

## You know it when you see

- Brutalist/editorial UIs made of visible 1-2px rules and boxes
- Soft modern UIs with almost no borders — separation by [[elevation]] and background shifts
- Hairline dividers organizing dense lists and tables
- The failure: borders *and* shadows *and* background shifts all at once (over-fenced), or double borders where components meet

## Dials

- **separation strategy** — the core choice per surface: border, shadow, background contrast, or pure space; pick a primary, use others sparingly
- **weight** — hairline (0.5-1px, refined/dense) vs 1px standard vs 2px+ (graphic/brutalist statement)
- **color & alpha** — borders as translucent foreground (adapts across surfaces) vs opaque tokens; border color sits *between* its two surfaces
- **inside vs outside** — inset borders/rings (`box-shadow: inset`, `outline`) don't shift layout; `border` does — a systems decision, not a detail
- **focus ring language** — the accessibility stroke: offset, width, color; deserves design, not browser default vs removal (never just removal)

## Techniques

- **Border tokens** — `--border-subtle` / `--border-strong` translucent
  values; translucency makes one token work on every surface level.
- **Layout-stable strokes** — `outline` + `outline-offset` or inset
  `box-shadow` for hover/focus/selected states so nothing jumps; `ring`
  utilities in Tailwind-class systems are this.
- **Collapse discipline** — adjacent bordered components share edges (tables,
  button groups): suppress doubles via `+` selectors or gap-based layouts.
- **Hairlines on high-DPI** — true 0.5px hairlines via `0.5px` borders
  (supported on modern high-DPI) or scaled pseudo-elements; verify targets.
- **Gradient/animated borders** — border as identity moment:
  gradient borders via nested backgrounds or `border-image`, animated
  ([[shimmer-sheen]] on the ring) for premium/AI-flavored accents.

## Starting points

- No library — this is tokens + rules
- Tailwind `ring` utilities as a reference model for layout-stable strokes
- WCAG focus-visible guidance for the focus ring's constraints

## Search queries

- `translucent border token dark light surfaces`
- `css outline vs border vs box-shadow ring focus`
- `gradient border css nested background border-image`
- `0.5px hairline border retina css`

## Related

[[elevation]] (the rival separation strategy), [[spacing-density]] (dense →
borders, airy → space), [[shape-language]] (stroke weight ↔ radius ↔
[[iconography-style]] stroke), [[color-roles]] (border tokens),
[[shimmer-sheen]] (animated border accents).
