---
name: particles
title: Particles
category: motion
aliases: [particle system, dust, sparks, confetti, floating dots, swarm, fireflies, snow, embers, particle field]
media: [canvas, webgl]
---

# Particles

Many small independent elements moving under shared rules — dust motes,
sparks, confetti, snow, swarms, and the connective "network" fields of
countless hero sections.

## You know it when you see

- Fields of drifting dots/sparks giving a scene atmosphere
- Bursts: confetti, sparks, explosions on an event
- Swarms that flow, avoid the cursor, or form shapes
- Points connected by lines when near each other (the "plexus" look)

## Dials

- **count** — dozens (DOM ok) → thousands (canvas) → hundreds of thousands (GPU)
- **spawn & lifetime** — continuous ambience vs event bursts; fade/shrink over life
- **forces** — gravity, wind, drag, curl-noise flow ([[procedural-noise]]), cursor attraction/repulsion; the force mix *is* the personality
- **rendering** — soft glowing sprites ([[glow-bloom]]), hard confetti quads, trails (fade instead of clear)
- **coherence** — independent (dust) vs flocking/flow-field (alive, directed)

## Techniques

- **Canvas 2D loop** — array of `{pos, vel, life}`, integrate, draw. Right up
  to a few thousand particles; trails via translucent-fill clearing.
- **GPU particles (WebGL/three.js)** — positions in textures or instanced
  buffers, physics in shaders (FBO/GPGPU ping-pong or transform feedback).
  Right for 10k+ or physics-heavy fields.
- **DOM/CSS particles** — a handful of animated elements; only for tiny
  decorative counts (sparkle on a button).
- **Event confetti** — solved problem; use a micro-library rather than
  hand-rolling ballistics.

## Starting points

- canvas-confetti (npm) — the standard event burst
- tsparticles — configurable ambient/network particle backgrounds (heavy;
  fine for marketing pages)
- drei `Points`/`Sparkles`, and pmndrs GPGPU examples for R3F
- The "curl noise particles" family on Shadertoy/codrops for premium flow

## Search queries

- `canvas-confetti npm`
- `three.js gpgpu particles fbo texture positions`
- `curl noise particle flow field webgl`
- `tsparticles network lines background`

## Related

[[procedural-noise]] (flow fields), [[glow-bloom]] (particle sprites glow),
[[motion-ceremony]] (bursts are ceremony; budget them), [[volumetric-light]]
(dust motes sell light shafts).
