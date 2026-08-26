---
name: parallax
title: Parallax
category: motion
aliases: [depth scrolling, layers moving at different speeds, 2.5d, tilt effect, scroll effects, depth on scroll, mouse parallax]
media: [css, canvas, webgl]
---

# Parallax

Layers moving at different rates as the viewpoint changes — scroll or cursor
input translated into a sense of depth between flat layers.

## You know it when you see

- Background imagery scrolling slower than foreground content
- Cards/scenes that tilt and shift subtly toward the cursor
- Layered illustrations that separate into planes as you scroll
- Its failure mode: motion sickness and jank when overdone

## Dials

- **depth ratio** — how much slower each layer moves; subtle (0.9×) reads as texture, strong (0.3×) reads as staged depth
- **input source** — scroll (narrative), pointer (playful/product), gyroscope (mobile)
- **layer count** — 2 (background/foreground) up to full 2.5D scenes
- **damping/lag** — pointer parallax needs eased following or it feels stapled to the cursor
- **restraint** — respect `prefers-reduced-motion`; parallax is the top offender

## Techniques

- **CSS-only scroll parallax** — `perspective` on a scroll container with
  `translateZ`-offset children, or modern **scroll-driven animations**
  (`animation-timeline: scroll()`) — check current support. Right for simple
  layer-speed effects with zero JS.
- **JS scroll mapping** — scroll position → transforms, via an animation
  library's scroll tools rather than raw handlers (they batch and smooth).
- **Pointer parallax** — normalized cursor position → small translates/
  rotations per layer, with lerped following.
- **WebGL depth parallax** — displace an image by its depth map (real or
  ML-generated) for the "photo becomes 3D" effect; or true camera movement in
  a layered three.js scene.

## Starting points

- GSAP ScrollTrigger — the scroll-choreography standard
- framer-motion `useScroll`/`useTransform` for React
- Depth-map photo parallax: search for current implementations (the
  technique is stable; libraries churn)

## Search queries

- `css scroll-driven animations animation-timeline support`
- `gsap scrolltrigger parallax layers`
- `depth map image parallax webgl`
- `pointer parallax lerp card tilt`

## Related

[[elevation]] (parallax proves the z-axis elevation implies),
[[motion-ceremony]] (damping/restraint rules live there), [[particles]]
(a drifting particle layer is cheap parallax depth), [[specular-metallic]] /
[[iridescence]] (tilt-driven surfaces share the pointer input).
