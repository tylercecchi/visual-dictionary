---
name: scene-staging
title: 3D Scene Staging
category: light-and-depth
aliases: [product shot, studio lighting, hero 3d, environment lighting, hdri, three point lighting, turntable, product render, soft studio]
media: [webgl]
---

# 3D Scene Staging

The photography layer of a 3D scene — lighting setup, environment, ground,
and camera discipline that make the same model read as luxury product shot,
toy, or laboratory specimen. Staging *is* the look; models are interchangeable.

## You know it when you see

- A product floating in soft gradient limbo with one elegant reflection
- Dramatic single-light hero objects emerging from darkness
- Bright toy-like scenes: soft shadows, pastel ground, high ambient
- The tells of *bad* staging: pitch-black unlit faces, harsh default shadows, horizon lines cutting the backdrop

## Dials

- **key/fill/rim ratio** — the three-point vocabulary: strong key + weak fill = drama; high fill = friendly; rim light separates subject from ground
- **environment (HDRI) choice** — studio softboxes (product), sunset (warm story), interior (context); on reflective materials the envmap is literally the surface ([[specular-metallic]])
- **ground contract** — infinite seamless backdrop (limbo), [[reflections]] mirror floor, or contact-shadow-only (floating); the ground states the register
- **shadow softness** — hard (sun, graphic) vs area-light soft (studio); contact shadows (AO) ground objects even without cast shadows
- **camera** — focal length (long lens = product calm, wide = drama), fixed orbit limits, [[depth-of-field]] amount

## Techniques

- **drei staging shortcuts** — `Stage`, `Environment` (+ preset HDRIs),
  `ContactShadows`, `AccumulativeShadows`, `Lightformer` (build your own
  softboxes): the R3F staging kit that solves 90% of product staging.
- **Three-point manual rig** — key `DirectionalLight`/`RectAreaLight` +
  dim fill + rim; tone-mapping (`ACESFilmic`) and exposure set the film stock.
- **Limbo backdrop** — a curved plane (cyclorama) or pure
  gradient/[[mesh-gradient]] background + fog to melt the horizon.
- **Post stack** — [[glow-bloom]], [[vignette]], [[film-grain]], subtle
  [[chromatic-aberration]]: the same finishing stack as film, via
  `postprocessing`.

## Starting points

- drei `Stage`/`Environment`/`Lightformer` docs and pmndrs examples
- Poly Haven — free HDRIs sorted by mood (studio/outdoor/interior)
- Product-photography lighting guides — the vocabulary ports directly

## Search queries

- `drei stage environment contactshadows example`
- `polyhaven studio hdri product`
- `three.js rect area light softbox tone mapping aces`
- `r3f lightformer custom studio lighting`

## Related

[[specular-metallic]] + [[frosted-glass]] (materials read only as well as
their staging), [[reflections]] (the floor), [[depth-of-field]] +
[[vignette]] + [[film-grain]] (the camera stack), [[volumetric-light]]
(atmosphere register), [[mesh-gradient]] (limbo backdrops),
[[scroll-choreography]] (scroll-scrubbed turntables).
