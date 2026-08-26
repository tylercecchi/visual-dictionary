---
name: inflatable
title: Balloon / Inflatable
category: surface-and-material
aliases: [balloon, inflated, puffy, blow up, bubble letters, 3d bubble text, squishy, air filled, pool float, pillow, quilted]
media: [css, svg, canvas, webgl]
---

# Balloon / Inflatable

Surfaces pumped full of air — taut, rounded, light-catching volumes with
pinched seams. Balloon type, pool-float UI, quilted pillows: the toy-joy
register where everything looks squeezable.

## You know it when you see

- Letterforms swollen into glossy rounded volumes (balloon/bubble type)
- A bright specular hotspot + broad soft sheen on every bulge — the vinyl/latex material
- Pinched seams, tied knots, quilted valleys between puffy panels
- Slight squash-and-wobble on interaction ([[interaction-feel]] jelly, inflated)

## Dials

- **inflation pressure** — how taut: soft pillow (gentle bulges, fabric) → firm balloon (tight curves, latex) → over-pumped (near-spherical, comedy); pressure shows in how fast edges curve away
- **material gloss** — matte fabric (broad soft sheen), satin vinyl (medium hotspot), wet latex/chrome-balloon (tight [[specular-metallic]] hotspot + environment hints [[iridescence]] for the mylar register); hotspot positions must obey [[light-on-flat]]
- **seam grammar** — where air is pinched: quilt grid valleys, radial tufting, balloon-animal segment twists, a tied knot detail; seams are where inflatable reads as *made*, not just blurred
- **squish response** — press = flatten locally + bulge neighbors (volume conserves!), release = overshoot wobble ([[motion-ceremony]] spring, damping low); static inflation without squish is half the promise
- **palette** — saturated candy colors, pastels, or foil metallics; inflatables are never muted — the register *is* loud ([[color-roles]] holiday-toy budget)

## Techniques

- **CSS/SVG bubble type** — heavy rounded font + layered inner glows
  (light top-center inset, dark bottom inset for underside shading) +
  a white ellipse hotspot pseudo-element; SVG gradients (radial, offset
  toward the light) per letter for the committed version.
- **SVG inflation shading** — each shape gets: base radial gradient
  (light-biased), a tight hotspot ellipse, a soft rim-dark stroke; seam
  lines as darker creased paths with their own tiny shadow/highlight pair.
- **GLSL puff (SDF)** — treat the 2D shape as an SDF, fake a normal from
  the distance gradient (`normalize(vec3(dFdx(d), dFdy(d), k))`), light it —
  instant inflation for any shape/text ([[sdf-rendering]]'s cheapest party
  trick); squish by warping the SDF domain near the cursor.
- **three.js real inflation** — geometry with vertex normals pushed
  outward (or cloth/softbody sim for the honest register); transmission +
  clearcoat materials for vinyl; spring-driven scale/squash for interaction.

## Starting points

- The SDF-normal inflation trick (Shadertoy: search "puffy", "inflated")
- Balloon-type lettering references (searchable: "inflatable type
  specimen" — several famous display faces)
- drei/three.js softbody & clearcoat examples

## Search queries

- `puffy sdf normal fake lighting shader`
- `css bubble text inner glow inset`
- `inflatable 3d type blender style web`
- `clearcoat vinyl material three.js`

## Related

[[light-on-flat]] (hotspot law), [[specular-metallic]] + [[iridescence]]
(vinyl/mylar finishes), [[sdf-rendering]] (the puff trick),
[[interaction-feel]] (squish physics), [[liquid-ripple]] (goo kin —
inflatables are goo with pressure), [[skeuomorphism]] (claymorphism's
inflated cousin), [[shape-language]] (maximum roundness stance),
[[stickers-badges]] (puffy-sticker crossover).
