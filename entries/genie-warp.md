---
name: genie-warp
title: Genie / Warp Transitions
summary: "non-rigid transitions; an element funnels, slurps, or stretches toward a target"
category: motion
aliases: [genie effect, genie minimize, warp transition, mesh warp, suck into, slurp into, funnel wipe, funnel into icon, elastic minimize, non-rigid transition, lattice deform, rubber sheet, dock minimize, stretch into, tube warp, taffy pull]
media: [css, svg, canvas, webgl]
---

# Genie / Warp Transitions

The transition where an element *deforms* on its way somewhere — funneling
into a dock icon, slurping into a button, stretching like taffy toward the
thing that swallowed it — instead of merely scaling or sliding. Continuity
expressed as material, not as geometry.

## You know it when you see

- A window or card narrows into a curved neck and pours into a small
  target, top edge lagging behind the bottom (the macOS Genie minimize)
- A dismissed item stretches toward the icon that will hold it, then
  snaps in — the element visibly *goes somewhere*
- A reveal that unfurls from a point with a bulge, not a hard scale-up
- Rows or columns of the element arriving at the target at different
  times, so the surface bends mid-flight
- The failure: a warp applied to a rigid, text-heavy element that stays
  readable-looking while deformed — it reads as a rendering bug, not a
  gesture; and a warp on every transition, which spends the ceremony
  budget on nothing

## Dials

- **anchor** — the target point the element funnels toward (icon, button,
  tab, viewport edge); the whole effect reads only if the anchor is
  visible and meaningful
- **curvature** — how much the silhouette bends: straight taper (a
  trapezoid — cheap, calm) → S-curve neck (the classic genie) → whip
  (overshoot past the anchor, then settle)
- **row lag** — the delay between the leading edge and the trailing edge
  of the element; large lag = liquid, small lag = elastic sheet
- **squash vs stretch** — does the element thin as it travels (stretch,
  conserves "volume") or compress into the target (squash); mirror the
  register's [[interaction-feel]] physics
- **content behavior** — content warps with the surface (faithful, needs
  a texture), fades out before the warp (cheap, honest), or freezes to a
  snapshot first ([[dissolve-disintegration]]'s DOM-to-texture step)
- **duration & easing** — 250-450ms ease-in toward the anchor; the
  reverse (restore) may be faster; this is a *ceremonial* move —
  [[motion-ceremony]] allows it for close/minimize/send, not for hover
- **reduced motion** — collapse to a plain scale-to-anchor or crossfade
  ([[visible-accessibility]]); the anchor cue survives, the warp does not

## Techniques

- **Strip slicing (CSS)** — cut the element into N horizontal strips
  (clones with `clip-path: inset()` or a `background-position` trick),
  give each strip the same translate/scale-to-anchor keyframes with a
  row-indexed `animation-delay`; 8-16 strips read as a genie at normal
  sizes. Zero dependencies, layout-stable, the default.
- **`feDisplacementMap` (SVG)** — the element (or its snapshot) under an
  SVG filter whose displacement source is an animated gradient or
  `feTurbulence`; true curvature, filter-friendly content only, verify
  performance on large areas.
- **Scanline interpolation (Canvas 2D)** — the original algorithm:
  snapshot the element, then for each row draw it with left/right
  extents interpolated between the source rectangle and the target
  curve (a quadratic/cubic toward the anchor), with a per-row time
  offset for lag. `drawImage` per row; fine at a few hundred rows.
- **Vertex-shader plane (WebGL)** — a subdivided plane textured with the
  snapshot; displace vertices toward the anchor by `smoothstep(t - lag(y))`
  in the vertex shader. The faithful, 60fps version; three.js / R3F or
  OGL. Structural if the project has no WebGL — offer the strip version
  alongside.
- **Restore** — play the same warp backward from the anchor; keep the
  anchor's own micro-feedback (a bounce, a fill) so the receipt is
  visible ([[interaction-feel]]).

## Starting points

- macOS Genie/Scale minimize — the reference behavior; screen-record it
  to calibrate curvature and lag
- The "genie effect" Canvas 2D reimplementations on CodePen/GitHub —
  the scanline algorithm worked through
- three.js `PlaneGeometry` + custom `ShaderMaterial` examples for mesh
  deformation; React Bits / Canvas UI displacement components for a
  vendored WebGL route (see LIBRARIES.md)
- html-to-image / html2canvas for the DOM snapshot step

## Search queries

- `genie effect javascript canvas implementation`
- `css clip-path strips animation delay warp transition`
- `three.js plane vertex shader displacement toward point`
- `svg feDisplacementMap animated transition`
- `html-to-image snapshot dom to texture`

## Related

[[morphing]] (shape-to-shape; this entry warps one shape toward a point),
[[page-transitions]] + [[layout-motion]] (the rigid shared-element and
FLIP moves this replaces for ceremonial exits), [[sheet-drawer]] (dismiss
targets), [[dissolve-disintegration]] (the other material exit; shares
the snapshot pipeline), [[liquid-ripple]] (gooey merges when the element
arrives), [[refraction-displacement]] (static displacement, same
filter/shader machinery), [[origami-fold]] (fold and curl — the paper
sibling), [[interaction-feel]] (the physics register), [[motion-ceremony]]
(budget: exits and sends, not hovers), [[visible-accessibility]]
(reduced-motion fallback).
Also [[liquid-reveal]] and [[shatter]] (the rest of the material-transition family).
