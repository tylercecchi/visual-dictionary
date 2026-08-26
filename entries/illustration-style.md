---
name: illustration-style
title: Illustration Style
category: ui-foundations
aliases: [illustrations, empty state art, spot illustration, hero illustration, mascot, corporate memphis, character style, doodles, iconographic illustration]
media: [css, svg, canvas]
---

# Illustration Style

The drawing system for a product's non-photographic art — empty states, spot
illustrations, heroes, mascots. Like [[iconography-style]] but with a bigger
canvas: one hand must draw everything.

## You know it when you see

- Empty states, onboarding, and error pages clearly drawn by the same hand
- A recognizable register: flat geometric characters ("corporate Memphis"),
  line-art doodles, textured editorial collage, 3D clay renders, pixel sprites
- A mascot carrying personality across the product
- The failure: stock illustrations from three styles side by side; or trend-wear (a style that dates the product to its purchase year)

## Dials

- **register** — flat vector / line-with-fills / textured brush ([[hatching-sketch]], [[print-artifacts]] grain) / 3D clay ([[skeuomorphism]]'s clay wing) / pixel ([[pixelation]]); pick one, write it down
- **stroke contract** — outlined or not, weight, corner behavior; must rhyme with [[iconography-style]] and [[shape-language]]
- **palette coupling** — illustrations drawn *from* [[color-roles]] tokens (limited ink set) vs free-range full-color; limited reads far more owned
- **human proportion & abstraction** — realistic → stylized → geometric abstraction; where faces sit on that slider is the emotional register (and the diversity-representation decision)
- **scene scale** — spot (single object, margins of UI) vs scene (environment, heroes); a system needs rules for both

## Techniques

- **SVG as the native format** — token-colored (`currentColor`/CSS vars so
  themes restyle art automatically), component-ized per illustration;
  animatable ([[morphing]], draw-on).
- **Style guide as artifact** — the illustration system *is* a document:
  stroke specs, palette subset, character proportions, do/don't examples;
  write it before commissioning or generating art.
- **Composable scene kits** — libraries of parts (characters, props,
  backgrounds) assembled per need beat one-off scenes for consistency.
- **Animation pass** — subtle idle/entrance animation (Lottie or CSS on SVG
  layers) at [[motion-ceremony]]-appropriate restraint for empty states.

## Starting points

- Open illustration systems to study or adapt: unDraw (recolorable),
  humaaans-class composable kits, Notion/Mailchimp illustration guidelines
  write-ups as system references
- Lottie/lottiefiles for the animated register
- The "corporate Memphis" critique literature — worth reading to *avoid*
  defaulting into the most dated register

## Search queries

- `undraw customizable illustrations svg`
- `illustration style guide product design system`
- `composable character illustration kit`
- `lottie empty state animation`

## Related

[[iconography-style]] (the small-format sibling — must agree),
[[shape-language]] + [[color-roles]] + [[typographic-voice]] (the system it
must obey), [[hatching-sketch]] + [[print-artifacts]] (texture registers),
[[loading-language]] (long waits and empty states share art),
[[stickers-badges]] (illustration as collage object).
