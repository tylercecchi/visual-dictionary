---
name: fui
title: Sci-Fi FUI / Holograms
category: ui-foundations
aliases: [fui, fictional ui, hud, hologram, sci-fi interface, iron man ui, cyberpunk ui, futuristic dashboard, tactical display, heads up display]
media: [css, svg, canvas, webgl]
---

# Sci-Fi FUI / Holograms

Fictional User Interface — the glowing, scanning, data-dense screens of film
sci-fi, and the holographic objects they orbit. A coherent genre with strict
conventions, borrowed whenever a product wants to feel like the future.

## You know it when you see

- Thin glowing cyan/orange linework on near-black; everything slightly [[glow-bloom]]ed
- Reticles, brackets, and tick marks framing targets; radial gauges everywhere
- Constant micro-motion: rotating rings, sweeping scanners, counting numbers
- Holograms: translucent additive-blue objects with [[crt-scanlines]], flicker, and edge glow
- Data density as decoration — tables and readouts too small to read, by design

## Dials

- **palette discipline** — one dominant hue (cyan classic, orange military, green retro) + one alert accent on dark; [[color-roles]] at its most austere
- **line weight & density** — hairline strokes, dense tick/grid ornamentation ([[border-stroke]] as decoration); the "engineering drawing alive" register
- **motion idle rate** — FUI is never still: slow ring rotations, scanner sweeps ([[shimmer-sheen]] militarized), number jitter; the dial is how *much* ambient motion before it exhausts
- **hologram material** — additive transparency, fresnel edge brightness, scanline texture, occasional [[glitch]] flicker, [[chromatic-aberration]] at edges
- **diegetic noise** — decorative data (hex dumps, coordinates, waveforms); density sells competence, restraint keeps usability

## Techniques

- **SVG linework systems** — rings, arcs (`stroke-dasharray` for ticks and
  sweep animations), brackets as components; CSS rotation/dash animation for
  idle motion. The FUI workhorse.
- **Glow discipline** — layered `drop-shadow` in the theme hue on all
  strokes; on canvas, bloom in post. Glow *is* the material here.
- **Hologram shader (three.js)** — additive blending, fresnel-driven alpha
  and edge color, scrolling scanline texture, vertex jitter/glitch gates.
  A documented recipe (Bruno Simon's hologram shader lesson is the canonical
  walkthrough).
- **Data-texture widgets** — waveforms/oscilloscopes ([[audio-reactive]] for
  live sources), scrolling hex, radial gauges from `conic-gradient` or SVG
  arcs; randomized-but-seeded fake data streams.

## Starting points

- Territory Studio / Cantina Creative portfolios (the real film FUI houses)
  and the HUDS+GUIS archive — reference imagery
- Bruno Simon's Three.js Journey hologram shader lesson
- Codrops FUI/HUD demo articles for portable implementations

## Search queries

- `svg hud rings stroke-dasharray animation`
- `three.js hologram shader fresnel scanlines`
- `fui design territory studio reference`
- `sci-fi ui kit svg components`

## Related

[[glow-bloom]] (the material), [[crt-scanlines]] + [[glitch]] (hologram
texture and misbehavior), [[false-color]] (the sensor feeds inside FUI
frames), [[chart-voice]] (FUI is chart voice pushed to fiction),
[[border-stroke]] (tick-mark ornament), [[motion-ceremony]] (ambient motion
budget), [[typographic-voice]] (condensed/mono type is mandatory genre-wear).
