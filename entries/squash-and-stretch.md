---
name: squash-and-stretch
title: Squash and Stretch
summary: "deform along the motion axis, keep the volume; reads as elastic, alive, cartoony"
category: motion
aliases: [squash and stretch, squash, stretch, squishy, squishy animation, jelly, jelly animation, bouncy, bouncy animation, rubbery, elastic, elastic animation, cartoon physics, cartoony motion, disney principles, animation principles, impact squash, landing squash, anticipation, follow through, overshoot, boing]
media: [css, svg, canvas, webgl]
---

# Squash and Stretch

The first animation principle: a body deforms along its motion. It
stretches when moving fast, squashes on impact, and keeps its volume
while doing so, which makes it read as elastic, weighted and alive.

## You know it when you see

- A ball or letter flattens wide when it lands and stretches tall as it
  launches or falls fast
- Buttons that squish down when pressed and spring back a little too far
- Letters that drop in, splat, and wobble before settling
- The failure: scaling without preserving volume (squash flatter *and*
  narrower) looks like shrinking, not squishing

## Dials

- **amount**: peak deformation (scaleY 0.68 on impact is strong; 0.9-0.95
  is a UI-safe press). Cartoon registers go further
- **volume preservation**: `scaleX = 1 / scaleY` (area) or `1/√scaleY`
  (softer). Off means "rubber sheet", on means "water balloon"
- **axis**: along the velocity vector, not always vertical; rotate the
  deformation to the motion direction for diagonal paths
- **pivot / anchor**: squash from the contact point (`transform-origin:
  bottom` on a landing), not from the centre, or it floats
- **timing**: stretch during fast travel, squash in the 1-3 frames of
  contact, overshoot back past neutral, then settle. Springs with low
  damping give this for free
- **stepping**: smooth (spring) vs held drawings (flipbook frames at
  10-12fps, where one squash is a single held pose)

## Techniques

- **CSS keyframes / transitions**: `transform: scale(x, y)` keyed at the
  contact moment with `transform-origin` at the contact edge. Use
  `:active { transform: scale(1.04, .92) }` for button presses. Use
  `linear()` easing to encode overshoot curves without JS.
- **Spring libraries**: Motion (framer-motion) / react-spring. Drive
  scaleY from velocity (`useVelocity` → `useTransform`) so stretch
  follows real speed, and derive scaleX from it for volume.
- **Per-glyph type**: split text (SplitType/split-text) and give each
  letter its own landing time and squash; that's the classic "pop" title.
- **Canvas / WebGL**: deform the drawn shape's matrix per frame, or
  displace vertices along the velocity in a vertex shader for soft bodies.
- **Reduced motion**: skip the deformation entirely and show the settled
  state; squash is pure ceremony.

## Starting points

- design.how Vault — [Pop type](https://github.com/arla6ka/design.how/tree/main/vault/pop-type)
  (per-letter drop, squash on contact, swell and pop; MIT; see LIBRARIES.md);
  also [Sunset slam](https://github.com/arla6ka/design.how/tree/main/vault/sunset-slam)
  and [Loud burst](https://github.com/arla6ka/design.how/tree/main/vault/loud-burst)
- Thomas & Johnston, *The Illusion of Life*, the twelve principles
- Motion docs: `useVelocity`, spring `bounce`

## Search queries

- `squash and stretch css animation volume`
- `framer motion useVelocity scale squash`
- `bouncy text animation letters split`
- `css linear() easing overshoot spring`
- `squash stretch button press animation`

## Related

[[motion-ceremony]] (squash is a high-ceremony motion setting),
[[interaction-feel]] (the physics this decorates),
[[kinetic-type]] (per-letter choreography), [[inflatable]] (swell
without impact), [[cute-naive]] (the register that wants it most),
[[liquid-ripple]] (jelly surfaces), [[frame-rate-aesthetics]] (held
poses on twos).
