---
name: forced-perspective
title: Forced Perspective / Anamorphosis
category: distortion-and-lens
aliases: [anamorphic illusion, perspective illusion, impossible geometry, escher, penrose, trompe loeil, street art 3d, fake 3d, axonometric illusion]
media: [css, svg, canvas, webgl]
---

# Forced Perspective / Anamorphosis

Geometry that lies about depth — flat compositions that read as deep space,
distorted images that resolve only from one viewpoint, impossible objects
that connect locally but contradict globally. Perspective as a trick rather
than a truth.

## You know it when you see

- Anamorphosis: smeared/stretched art that snaps into shape at the right angle (street-art 3D, billboard corner illusions)
- Impossible objects: Penrose triangles, Escher stairs — every joint plausible, the whole unbuildable
- Trompe-l'œil UI: elements "breaking the frame," casting shadows onto the page, punching fake holes in surfaces
- One-point-perspective compositions pulling the eye down a corridor (vaporwave grids, title sequences)

## Dials

- **viewpoint contract** — anamorphosis has *one* privileged viewpoint: static composition (bake it), or cursor/scroll/gyro-driven (reveal the snap moment interactively — the payoff [[motion-ceremony]] beat)
- **depth cue inventory** — which cues sell the lie: converging lines, scale gradient, overlap, [[elevation]] shadows, blur ([[depth-of-field]]); illusions work by making cues agree — impossible objects by making them *locally* agree
- **frame-break courage** — trompe-l'œil UI: how far elements violate their container (peeking over card edges, shadows cast outside bounds); small violations charm, big ones need flawless craft
- **grid language** — one-point corridor (vanishing point placement = where the eye goes, [[visual-hierarchy]] by geometry) vs isometric impossibility ([[long-shadow-isometric]]'s projection is *why* Penrose works — no foreshortening to betray it)

## Techniques

- **CSS 3D perspective** — `perspective` + `rotateX/Y/Z` on real elements;
  the corridor/room illusion from DOM planes ([[parallax]]'s machinery
  pointed at illusion); `transform-origin` discipline is the craft.
- **Baked anamorphosis** — pre-distort artwork (inverse-project in any 3D
  tool or by grid warp) so the on-screen composition resolves at the
  privileged view; pair with gyro/cursor rotation for the snap-reveal.
- **Impossible objects (SVG)** — drawn flat in isometric projection with
  deliberate connection swaps; animation between possible and impossible
  states is the premium version ([[morphing]]).
- **Frame-break UI (CSS)** — overflowing children + shadows drawn on the
  *parent* surface + `clip-path` holes; z-order theater with [[elevation]]
  physics kept consistent.
- **Corridor scenes (GLSL/three.js)** — actual one-point geometry, or
  raymarched infinite corridors ([[sdf-rendering]] domain repetition).

## Starting points

- Escher archives + Penrose figures for the impossible vocabulary
- Street anamorphosis (Julian Beever class) for the baked-distortion register
- CSS 3D transform corridor/cube demos (searchable, no library)

## Search queries

- `css perspective 3d room corridor illusion`
- `anamorphic illusion gyroscope reveal web`
- `penrose triangle svg construction`
- `sdf raymarching infinite corridor domain repeat`

## Related

[[long-shadow-isometric]] (the projection that permits impossibility),
[[parallax]] (depth cues from motion), [[depth-of-field]] + [[elevation]]
(cue inventory), [[morphing]] (possible↔impossible transitions),
[[period-looks]] (vaporwave's one-point grid), [[sdf-rendering]] (infinite
corridors), [[scene-staging]] (honest perspective's home).
