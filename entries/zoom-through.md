---
name: zoom-through
title: Zoom-Through / Portal Transitions
summary: "the camera dives into an element; a thumbnail becomes the page, a scene nests inside a scene"
category: motion
aliases: [zoom through, zoom-through, portal transition, hyperzoom, infinite zoom, zoom into thumbnail, zoom into card, dive in, zoom navigation, semantic zoom, zoom to detail, camera dive, fly through, zoom scroll narrative, russian doll zoom, nested zoom, zoomable ui, app open zoom]
media: [css, svg, canvas, webgl]
---

# Zoom-Through / Portal Transitions

Navigation as a camera move *into* the thing you chose — the thumbnail
grows until it is the page, the scroll wheel dives deeper into a scene,
a hole in one world opens onto the next. Depth stands in for hierarchy:
you don't go to the detail, you go *in*.

## You know it when you see

- Tapping a card and having it expand until its own contents are the new
  screen — the iOS app-open move
- Scrolling that zooms into an illustration, where a window in the
  picture turns out to contain the next section
- A map or canvas where zooming changes what things *are* — dots become
  labels become buildings (semantic zoom)
- A circular portal opening from a button and the camera passing through
  it into a 3D scene
- The failure: a zoom with no origin — content scaling from the center
  when the user tapped a corner; and nested zooms with no way back that
  lose the reader's sense of level

## Dials

- **continuity** — *shared element* (the tapped thing literally becomes
  the destination; [[layout-motion]] FLIP lineage) vs *camera* (the
  viewport moves through space and the destination was already there)
- **origin** — the zoom's center is the tapped/hovered element, always;
  `transform-origin` at its rect, not the viewport center
- **depth levels** — one hop (list → detail) vs nested/infinite (scene
  inside scene, the Russian-doll register); each level needs a return
  affordance and a sense of scale
- **LOD swap** — content stays the same asset scaled (photo, illustration)
  vs changes representation at thresholds (semantic zoom: [[cartographic-style]]'s
  zoom levels applied to any data)
- **driver** — tap (discrete, 350-600ms), scroll-scrub ([[scroll-choreography]],
  the camera tied to the wheel), pinch (continuous, follows the fingers)
- **scale curve** — zoom is perceptually logarithmic: animate scale
  exponentially (equal *ratio* per unit time), or linear scale reads as
  slow-then-sudden
- **travel effects** — [[depth-of-field]] / [[progressive-blur]] on the
  layer being passed through, a slight [[parallax]] between levels,
  darkening the outer world as the inner one takes over
- **reduced motion** — crossfade with the destination anchored at the
  origin element ([[visible-accessibility]])

## Techniques

- **View Transitions API (CSS)** — give the thumbnail and the destination
  hero the same `view-transition-name`; the browser interpolates
  position and size (the shared-element zoom) for free; customize the
  `::view-transition-old/new` animations for easing and blur. The
  default for one-hop zooms.
- **FLIP scale** — measure the thumbnail rect, render the destination
  full-size, apply the inverse transform, then transition to identity
  ([[layout-motion]]); works everywhere View Transitions don't.
- **Nested-layer zoom (CSS)** — pre-rendered levels stacked with
  `transform: scale()`; drive a single exponential progress value and
  swap the visible level when scale crosses a threshold (each level's
  "window" is the next level's full frame). Scroll-driven via
  `animation-timeline: scroll()` for the narrative register.
- **Semantic zoom (Canvas/SVG)** — d3-zoom (or maplibre for maps) with
  representation swaps at scale breakpoints; keep labels unscaled.
- **Portal (WebGL/CSS 3D)** — a `clip-path` hole growing from the
  trigger while a three.js camera dollies forward (or CSS
  `perspective` + `translateZ`); render the inner scene to a texture
  and reveal it through the hole for a true portal ([[cutaway-xray]]'s
  lens, animated).

## Starting points

- MDN View Transitions API (same-document and cross-document)
- d3-zoom — semantic zoom with proper scale math
- Scroll-driven animations (`animation-timeline`) — browser support at
  use time
- three.js camera/dolly examples and render-to-texture portals
- Apple's app-open zoom and Zoomquilt — the two ends of the register

## Search queries

- `view transitions api shared element zoom thumbnail`
- `infinite zoom scroll animation nested layers css`
- `d3-zoom semantic zoom level of detail`
- `three.js portal render target camera dolly`
- `animation-timeline scroll zoom scrub`

## Related

[[page-transitions]] (the system this move belongs to), [[layout-motion]]
(FLIP), [[spatial-canvas]] (the pan/zoom surface as a whole layout),
[[cartographic-style]] (semantic zoom's native home),
[[scroll-choreography]] (scrubbed dives), [[depth-of-field]] +
[[progressive-blur]] + [[parallax]] (travel effects), [[scene-staging]]
(camera discipline), [[cutaway-xray]] (the portal lens),
[[forced-perspective]] (impossible nesting), [[morphing]] (shape
handoff at the threshold), [[genie-warp]] (the non-rigid alternative for
exits), [[motion-ceremony]] (budget), [[visible-accessibility]]
(fallback).
