---
name: dissolve-disintegration
title: Dissolve / Disintegration
category: motion
aliases: [thanos effect, particle dissolve, disintegrate, burn away, noise reveal, dissolve transition, crumble, sand effect, fade to particles]
media: [css, svg, canvas, webgl]
---

# Dissolve / Disintegration

Things ceasing to exist with style — edges eaten away by noise, surfaces
crumbling into drifting particles, imagery burning off. The dramatic opposite
of a fade: matter, not opacity, departs.

## You know it when you see

- An element breaking into particles that drift away (the "Thanos" effect)
- A reveal/erase whose edge is ragged organic noise, not a straight wipe
- Burn-away: a glowing ember edge chewing through the surface
- Text or images "sanding off" in the wind direction

## Dials

- **threshold noise** — the [[procedural-noise]] whose values decide dissolve order; its scale sets chunk size (fine = sand, coarse = islands)
- **edge treatment** — hard alpha cut vs a glowing rim band at the threshold (the burn edge: 2-3 hot colors in the transition zone, [[glow-bloom]] on top)
- **particle handoff** — dissolved pixels vanish vs become [[particles]] with velocity (wind, gravity, explosion); the handoff moment is what sells "disintegration"
- **direction bias** — pure noise (all-over) vs noise + gradient (sweeps from one side; the common cinematic version)
- **duration & easing** — dissolves are exits: err brief; the drama is in the edge, not the length ([[motion-ceremony]])

## Techniques

- **GLSL alpha threshold** — `if (noise(uv) < progress) discard;` — the
  canonical dissolve; add `smoothstep` bands around the threshold for the
  burn rim. Right for imagery, 3D materials, transitions.
- **SVG/CSS mask dissolve** — `feTurbulence` into a threshold
  (`feComponentTransfer`) as an animated mask; the no-WebGL version for DOM
  elements. Coarser control, real content.
- **Canvas particle explosion** — sample the element/image into a grid of
  particles (ImageData), animate them out with physics. The DOM-to-dust
  approach; html-to-image → canvas → particles is the standard pipeline.
- **Instanced mesh dissolve (three.js)** — geometry split into instances/
  points, driven by noise + curl velocity; the premium 3D version.

## Starting points

- Shadertoy: search "dissolve", "disintegration" — threshold + burn-edge
  patterns
- The dissolve-shader pattern in game-engine tutorials (Godot/Unity write-ups
  port directly to GLSL)
- html2canvas/html-to-image for the DOM-capture pipeline

## Search queries

- `glsl dissolve shader noise threshold burn edge`
- `thanos snap effect canvas particles imagedata`
- `svg feTurbulence mask dissolve animation`
- `three.js points disintegration curl noise`

## Related

[[procedural-noise]] (the threshold map), [[particles]] (the debris),
[[glow-bloom]] (the burn rim), [[fire-smoke]] (burning is dissolve + smoke),
[[page-transitions]] (dissolves as route changes), [[glitch]] (digital
destruction vs this physical destruction), [[morphing]] (transform vs destroy).
