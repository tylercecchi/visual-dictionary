---
name: shimmer-sheen
title: Shimmer / Sheen
category: motion
aliases: [shine sweep, light sweep, skeleton shimmer, glint, sparkle, catch the light, loading shimmer, sheen]
media: [css, svg, canvas, webgl]
---

# Shimmer / Sheen

A band of light sweeping across a surface — the glint on glass, the highlight
rolling over a card, the pulse that says "loading."

## You know it when you see

- A diagonal bright streak traveling across an element and looping
- Skeleton screens with a moving pale band (loading shimmer)
- A glint that fires once when something appears or is hovered
- Edges of glass/metal that "catch the light" as things move

## Dials

- **band width & angle** — thin diagonal streak (glint) vs broad soft wash (sheen)
- **speed & easing** — constant loop (loading) vs eased single pass (reward/hover)
- **frequency** — continuous, periodic with rest, or one-shot on event
- **intensity & blend** — subtle `soft-light` sheen vs hot white `screen` glint
- **masking** — swept across the whole card, or clipped to edges/text (glint on borders reads premium)

## Techniques

- **CSS gradient sweep** — animated `linear-gradient` background position, or
  an absolutely-positioned gradient pseudo-element translated across, clipped
  by `overflow:hidden`. The standard; right for nearly all UI shimmer.
- **`background-clip: text`** — sweep inside text for shimmering type.
- **SVG mask sweep** — animate a gradient inside a mask for shimmer clipped
  to arbitrary vector shapes (logos, icons, borders).
- **GLSL highlight band** — `smoothstep` band over UV projected on a moving
  axis, added with screen blend; or a real specular term if normals exist.
  Right inside existing shader surfaces ([[frosted-glass]], [[specular-metallic]]).

## Starting points

- No library needed for CSS shimmer — it's a 15-line pattern
- Skeleton shimmer ships in most component libraries (verify the project's
  own library first before adding anything)
- Shadertoy: search "glint", "light sweep"

## Search queries

- `css shimmer skeleton loading gradient animation`
- `svg mask animated gradient shine logo`
- `glsl moving specular band smoothstep`

## Related

[[specular-metallic]] (shimmer is its highlight, mobilized),
[[iridescence]] (rainbow shimmer), [[glow-bloom]] (a glint wants a halo),
[[motion-ceremony]] (how often shimmer fires is a ceremony decision).
