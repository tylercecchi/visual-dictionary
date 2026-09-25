---
name: liquid-reveal
title: Liquid / Ink Reveals
summary: "content arriving as a pour, bleed, or wave; the reveal edge behaves like fluid"
category: motion
aliases: [liquid swipe, liquid transition, liquid page transition, ink reveal, ink bleed, ink drop, paint fill, flood fill reveal, wave wipe, meniscus wipe, blob reveal, watercolor bleed, fluid mask, pour in, drip reveal, fill rising, tank fill text]
media: [css, svg, canvas, webgl]
---

# Liquid / Ink Reveals

Transitions where the *edge* of the reveal is fluid — a color floods in
behind a wobbling meniscus, an ink drop blooms into the page, a swipe
bulges ahead of the finger, text fills from the bottom like a tank. The
arriving side of the material-transition family ([[genie-warp]] and
[[shatter]] are the leaving side).

## You know it when you see

- A new screen swiped in behind a curved, bulging edge instead of a
  straight one
- A dark drop landing on a light page and spreading outward with ragged,
  feathered borders
- A brand color rising through a headline, wavelets on its surface
- A section that seems to be *poured* rather than faded in
- The failure: the liquid edge on every panel swap — a signature move
  spent as a default; and a wobble that never settles, so content
  behind it stays hard to read

## Dials

- **edge character** — clean meniscus (one smooth bulge), rippled
  (several wavelets), ragged bleed (feathered, absorbent-paper), drips
  (trailing tongues that fall under gravity)
- **viscosity** — how fast the edge wobble damps: thick paint settles in
  one bulge, thin ink keeps rippling; sets the whole register
- **source & direction** — from a point (drop, tap location), from an
  edge (swipe, wipe), from below (fill/tank); the source should be the
  thing the user touched or the direction the content came from
- **blend** — opaque flood (the new surface replaces the old) vs
  translucent ink (`multiply` over what's beneath, [[print-artifacts]]
  register) vs mask (the new content *is* the liquid)
- **grain** — flat vector liquid vs textured (paper grain, [[film-grain]],
  [[chalk-blackboard]]-class edges); texture makes bleed believable
- **duration** — 400-800ms, ease-out on the front, wobble settling
  after; ceremonial ([[motion-ceremony]]: page arrivals, hero reveals,
  brand moments — not list items)
- **reduced motion** — crossfade or straight wipe; the fluid edge is
  the first thing to drop ([[visible-accessibility]])

## Techniques

- **Clip-path wave (CSS/SVG)** — the incoming layer clipped by a
  `clip-path: path()` whose wave edge is animated (keyframes between two
  or three path states; or an SVG `<clipPath>` with a morphing `<path>`
  via [[morphing]] tooling). Meniscus and rippled edges; no deps.
- **Gradient-wipe with a threshold map** — the After Effects trick: a
  hand-painted ink texture (or noise) as a luminance map; reveal pixel
  where `map < progress`; a soft `smoothstep` band gives the feathered
  bleed. In CSS via `mask-image` with an animated gradient + `feTurbulence`
  displacement on the mask; in WebGL as a two-line fragment shader
  (`step(progress, texture(map).r)`) — the best quality-per-line in this
  entry, at the cost of one texture asset.
- **Displaced radial mask** — for drops: a growing circle mask whose
  edge is displaced by noise (`feDisplacementMap` in SVG, or noise added
  to the distance in a shader: `smoothstep(t, t + soft, dist + noise)`).
- **Metaball fill (Canvas 2D)** — blobs merging under a threshold
  ([[liquid-ripple]]'s gooey engine) used as the reveal mask; drips are
  extra blobs with downward velocity.
- **Fluid sim (WebGL)** — a real 2D fluid solver driving the mask; only
  when the liquid must react to the pointer.

## Starting points

- Shadertoy "ink reveal" / "gradient wipe" shaders — the threshold-map
  technique worked through
- React Bits and Canvas UI liquid/reveal components (LIBRARIES.md) for
  vendored routes; Radiant's noise shaders for the displacement source
- GSAP + `clip-path` for the CSS wave route
- Scanned ink blots and watercolor edges as threshold maps

## Search queries

- `gradient wipe shader threshold texture reveal`
- `css clip-path wave animation liquid swipe`
- `svg feDisplacementMap mask animated reveal`
- `ink drop reveal webgl noise smoothstep`
- `liquid swipe page transition gsap`

## Related

[[genie-warp]] + [[shatter]] (the leaving half of the material family),
[[dissolve-disintegration]] (noise-eaten edges — the same threshold
machinery in reverse), [[liquid-ripple]] (the gooey engine),
[[page-transitions]] (where a liquid swipe lives in the system),
[[morphing]] (path-state animation), [[procedural-noise]] (the edge's
randomness), [[print-artifacts]] + [[film-grain]] (ink and paper
texture), [[knockout-typography]] (text-as-tank fills),
[[refraction-displacement]] (shared filter/shader machinery),
[[motion-ceremony]] (budget), [[visible-accessibility]] (fallback).
