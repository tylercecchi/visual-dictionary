---
name: shatter
title: Shatter / Break-Apart
summary: "an element cracks into shards or tiles that fly, fall, or tumble away"
category: motion
aliases: [shatter, shatter effect, glass break, break apart, break into pieces, fracture, fragment explosion, tile explode, tiles fly away, shards, crumble, explode on delete, voronoi shatter, smash, crack and fall, break on dismiss]
media: [css, svg, canvas, webgl]
---

# Shatter / Break-Apart

The destructive exit — an element fractures into shards or tiles that
scatter, fall, or tumble under gravity. Where [[dissolve-disintegration]]
erodes and [[genie-warp]] pours, shatter *breaks*: it is the exit for
delete, discard, and defeat, and it earns its violence only there.

## You know it when you see

- A crack web races across a card, holds for a beat, then the pieces
  drop and tumble
- A deleted item bursts into tiles that fly outward and fade
- Glass-like shards with bright edges catching light as they turn
- A grid of square tiles flipping and falling row by row
- The failure: shattering a *reversible* action (archive, close) — the
  motion promises destruction the data didn't undergo; and shards that
  stay opaque and readable, which reads as a layout bug mid-flight

## Dials

- **fragment geometry** — Voronoi shards (glass, ice), rectangular tiles
  (mosaic, screen), triangles (low-poly), strips (blinds); geometry sets
  the material story ([[voronoi-cellular]] for the shard web)
- **pre-break** — crack propagation drawn before release, plus a hold
  (60-120ms of stillness — the hit-stop that makes the break land)
- **physics** — gravity fall vs outward explosion vs radial burst from
  the impact point; tumble rotation per shard; drag; how far pieces
  travel before fading ([[interaction-feel]] register)
- **fragment fade** — shards fade while moving (clean) vs persist to
  rest (heavy, only for full-screen defeats)
- **edge treatment** — flat cut vs beveled/highlighted edges
  ([[specular-metallic]] glints, [[refraction-displacement]] on glass)
- **duration** — 500-900ms including the hold; strictly ceremonial
  ([[motion-ceremony]]: destructive confirmations, game losses, one-time
  reveals), never for hover or list churn
- **reduced motion** — fade-out with a single crack frame, or plain
  fade ([[visible-accessibility]])

## Techniques

- **Tile split (CSS)** — N clones of the element, each showing one cell
  via `clip-path: inset()` (or `background-position` on a snapshot), each
  animating its own `translate/rotate/opacity` with a randomized delay
  and direction. Grids and strips; no deps; the default.
- **Voronoi shards (SVG/CSS)** — compute cells with d3-delaunay from
  random seeds (denser near the impact point), emit one `clip-path:
  polygon()` per cell, animate as above; draw the cell edges as strokes
  first for the crack web.
- **Snapshot + physics (Canvas 2D)** — html-to-image snapshot, shards as
  clipped `drawImage` calls, a tiny loop for velocity, gravity, rotation;
  hundreds of shards at 60fps.
- **Instanced shards (WebGL)** — three.js `InstancedMesh` (or a vertex
  shader "explode" on a triangulated plane) with per-instance velocity
  and angular velocity; glass materials for the full effect.
- **The hold** — whichever route: draw cracks, wait 60-120ms, then
  release; the pause is most of the feel.

## Starting points

- Canvas UI's Shatter component (LIBRARIES.md) — vendored HTML-in-canvas
  route; React Bits for tile-based exits
- d3-delaunay — Voronoi cells for shard geometry
- three.js examples (explode/tessellate modifiers, InstancedMesh)
- html-to-image / html2canvas for the snapshot step

## Search queries

- `css shatter effect clip-path tiles animation`
- `d3-delaunay voronoi shatter shards javascript`
- `three.js explode instancedmesh shards physics`
- `html-to-image snapshot canvas fragments animation`
- `glass shatter shader edge highlight`

## Related

[[dissolve-disintegration]] + [[genie-warp]] + [[liquid-reveal]] (the
material-transition family: erode, pour, break, arrive),
[[voronoi-cellular]] (shard geometry and crack webs), [[ice-frost]]
(cracked-glass surfaces), [[glitch]] (the digital break), [[particles]]
(shards as a particle system), [[interaction-feel]] (physics register),
[[layout-motion]] (the calm exit this replaces), [[motion-ceremony]]
(destructive-only budget), [[specular-metallic]] +
[[refraction-displacement]] (glass shard optics), [[game-ui-registers]]
(defeat and loot-break moments), [[visible-accessibility]] (fallback).
