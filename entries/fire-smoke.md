---
name: fire-smoke
title: Fire / Smoke / Fluid
category: motion
aliases: [fire, flames, smoke, fog, fluid simulation, ink in water, wisps, steam, plasma, embers]
media: [canvas, webgl]
---

# Fire / Smoke / Fluid

Gases and fluids in motion — licking flames, curling smoke, ink blooming in
water. Ranges from cheap noise fakery to real fluid simulation; knowing which
register a request needs is most of the job.

## You know it when you see

- Flames with rising, tearing tongues; embers drifting up
- Smoke that curls, folds, and thins as it rises
- Ink-in-water blooms following cursor movement (the famous WebGL toy)
- Fog banks that drift and swallow content

## Dials

- **register** — *faked* (scrolling noise, cheap, art-directable) vs *simulated* (Navier-Stokes, interactive, mesmerizing); decide this first
- **turbulence & detail octaves** — lazy smooth smoke vs violent churn
- **buoyancy & dissipation** — how fast it rises and how fast it thins
- **palette ramp** — fire is a luminance→color ramp (black-red-orange-white, a [[duotone-gradient-map]] with heat); smoke is alpha over background
- **interaction** — ambient vs cursor/element-driven injection (the fluid-sim showpiece)

## Techniques

- **Scrolling-noise fire (GLSL)** — [[procedural-noise]] scrolled upward,
  shaped by a vertical gradient mask, colored by a heat ramp. The classic
  fake; right for ambient flames, logo fire, small effects.
- **Domain-warped fog** — slow fBm warped by itself, drifting; the standard
  ambient fog/mist layer. Essentially free.
- **GPU fluid simulation** — velocity/pressure fields solved in ping-pong
  textures (Navier-Stokes); dye injected by pointer. Right for interactive
  showpieces; a solved-problem library port, don't hand-derive.
- **Particle smoke/embers** — [[particles]] with curl-noise forces and soft
  sprites; right when smoke must come *from* something specific (a button, a
  cursor, an object) without full sim.
- **Sprite/video** — pre-rendered smoke loops blended in; still legitimate
  for one-off hero moments.

## Starting points

- Pavel Dobryakov's WebGL-Fluid-Simulation (GitHub) — the canonical
  interactive fluid everyone forks
- Shadertoy: search "fire" (noise-ramp versions), "smoke", "fluid"
- The GPU Gems fluid chapters — the theory the sims implement

## Search queries

- `webgl fluid simulation pavel dobryakov fork`
- `glsl fire shader noise vertical ramp`
- `curl noise smoke particles webgl`
- `domain warped fog shader background`

## Related

[[procedural-noise]] (the fake register is pure noise craft),
[[particles]] (embers, sprite smoke), [[volumetric-light]] (light through
the smoke), [[motion-blur-trails]] (feedback buffers give cheap smearing),
[[glow-bloom]] (fire wants bloom).
