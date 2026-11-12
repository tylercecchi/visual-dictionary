---
name: image-cloud
title: Image Cloud (3D Photo Gallery)
summary: "many images floating on a sphere or depth field; drift, drag to spin, click to focus"
category: layout
aliases: [image cloud, photo cloud, image sphere, photo sphere, image galaxy, photo galaxy, 3d gallery, 3d photo gallery, floating images, floating photos, sphere gallery, globe of images, spinning gallery, depth gallery, flying images, perspective gallery, infinite image field, image tunnel, portfolio sphere]
media: [css, webgl]
---

# Image Cloud (3D Photo Gallery)

A gallery arrangement where many images float in 3D, on a sphere or
through a perspective depth field. The set drifts on its own, the user
spins or flies it by dragging or scrolling, and clicking one brings it
forward to focus.

```
        ▫   ▪       ▫
     ▪    ▫    ▪  ▫        near = larger, sharper
   ▫   ▪   [■]   ▪   ▫     far  = smaller, hazier
     ▫   ▪    ▫    ▪       drag → spin with inertia
        ▫    ▪   ▫         click → focus one
```

## You know it when you see

- A ball of photos you can grab and spin, nearer ones bigger
- Thumbnails drifting toward you from depth, growing as they come and
  wrapping around forever
- Portfolio and campaign pages where the *collection* is the hero
- The failure: it's used as the only way to browse a set people need to
  scan, so they spin hunting for one image

## Content contract

- **Many images of similar weight**: 12-60. Fewer looks sparse; more
  turns to noise without clustering
- **Images that read at thumbnail size**: strong silhouettes and colour,
  not detail-dependent shots or text-heavy cards
- **Order doesn't matter**: placement is seeded random, so sequence and
  rank are lost. If order matters, use [[carousel-filmstrip]] or [[masonry]]
- **A focus view exists**: each image needs a meaningful enlarged state or
  destination, or the click goes nowhere

## Collapse behavior

- Narrow screens: halve the count and shrink the image size; keep drift,
  and map touch drag to spin
- No WebGL / low power: fall back to the CSS perspective variant or to a
  plain grid
- Reduced motion: a still arrangement with no drift, where click-to-focus
  still works
- Always provide a flat, accessible list (grid or links) for keyboard and
  screen-reader users; the cloud is decoration over it

## Dials

- **form**: sphere (closed, spinnable object) vs depth field (open,
  flying through) vs ring/cylinder (one-axis carousel in 3D)
- **density & radius jitter**: count, sphere radius, how much each image
  is pushed in/out from the surface
- **depth cues**: scale with depth, haze/wash toward the ground colour,
  blur on far images ([[depth-of-field]])
- **drift speed**: ambient auto-rotation (≈0.03°/frame) or flight speed;
  the calm-vs-busy dial
- **inertia**: how long a flick keeps spinning (decay 0.9-0.97 per frame)
- **billboarding**: images always face the camera (readable) vs follow the
  surface (more 3D, less legible)
- **focus**: how large the clicked image grows (≈60% of view height) and
  whether the cloud dims behind it

## Techniques

- **CSS 3D transforms**: one `perspective` container, each image a
  `translate3d` element with depth from a small pool and speed multipliers
  for parallax. Handles depth fields of a dozen-plus images with no
  canvas, and stays DOM-accessible.
- **three.js planes on a sphere**: seeded points on a sphere, one
  textured plane per image, billboarded by applying the group's inverse
  rotation; raycast for hover/click. The right choice past ~30 images or
  for a true spinnable sphere. *Structural* addition under the stack rule
  if three.js isn't already present.
- **Spin input**: pointer drag → angular velocity, decay on release
  ([[interaction-feel]]); wheel/scroll can feed flight speed.
- **Focus transition**: animate the chosen image to a centred 2D overlay
  (FLIP / View Transitions) rather than flying the camera.

## Starting points

- design.how Vault — [Image sphere](https://github.com/arla6ka/design.how/tree/main/vault/image-sphere)
  (three.js planes on a jittered sphere, inertia, click-to-focus) and
  [Image galaxy](https://github.com/arla6ka/design.how/tree/main/vault/image-galaxy)
  (CSS-perspective depth field with haze); MIT; see LIBRARIES.md
- three.js examples: CSS3D "periodic table" / "sprites"

## Search queries

- `three.js image sphere gallery drag rotate`
- `css 3d perspective floating images gallery`
- `infinite image tunnel scroll webgl`
- `3d photo cloud react three fiber`
- `fibonacci sphere points distribution`

## Related

[[spatial-canvas]] (pan/zoom over a flat plane instead),
[[carousel-filmstrip]] (ordered, one axis), [[zoom-through]] (flying
into depth as a transition), [[depth-of-field]] and [[parallax]]
(depth cues), [[interaction-feel]] (spin inertia),
[[scene-staging]] (lighting the 3D version), [[masonry]] (the flat
fallback grid).
