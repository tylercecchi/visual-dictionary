---
name: ai-orb
title: AI Orb / Presence Indicator
summary: "the assistant's animated sphere; idle, listening, thinking, speaking states"
category: components
aliases: [ai orb, voice orb, thinking orb, assistant orb, siri orb, siri blob, voice mode blob, glowing orb, glass orb, plasma orb, energy orb, agent presence, listening indicator, thinking state, speaking indicator, ai avatar, assistant glow, apple intelligence glow, breathing orb]
media: [css, svg, canvas, webgl]
---

# AI Orb / Presence Indicator

The animated sphere or blob that stands in for an AI agent — breathing when
idle, swelling when listening, churning when thinking, pulsing to speech —
so the system's *state* is legible without a spinner or a sentence.

## You know it when you see

- A glowing, slightly translucent ball in the middle of a voice screen that
  wobbles when you talk and settles when you stop
- A small iridescent dot or pill beside a chat reply that swirls while the
  answer is being generated, then goes still
- A soft colored glow crawling around the screen edge when the assistant
  is summoned (the Siri / "Apple Intelligence" register)
- The failure: an orb animating "thinking" while nothing is happening —
  the animation lies about the system's state

## Dials

- **state vocabulary** — the set the orb must distinguish: *idle* (slow
  breathe), *listening* (amplitude-driven swell), *thinking* (internal
  churn, faster noise, no external reactivity), *speaking* (pulse to
  output cadence), *error/blocked* (desaturate, stall). Fewer states,
  cleanly separated, beats a continuum nobody can read
- **material** — *gradient blob* (soft [[mesh-gradient]] mass), *glass
  orb* (refractive shell + interior, [[frosted-glass]] / [[refraction-displacement]]),
  *plasma / energy* (bright core + [[glow-bloom]] halo), *dotted /
  particle* (the orb as a cloud of points, [[particles]]), *liquid metal*
  ring ([[liquid-metal]]). Material sets the brand register more than
  color does
- **reactivity source** — none (scripted loop), microphone amplitude
  ([[audio-reactive]]), token-stream cadence, or pointer proximity;
  reactivity is what makes *listening* believable
- **motion amplitude × speed per state** — the two numbers that actually
  encode state; keep speed changes larger than amplitude changes so states
  read at a glance ([[motion-ceremony]]: this animation runs for minutes,
  so the idle loop must be *quiet*)
- **palette** — single brand hue with luminance variation vs spectral /
  [[iridescence]] drift; multi-hue reads "generative AI," mono reads "tool"
- **size register** — full-screen hero (voice mode), inline component
  beside text (agent status), avatar-slot (the orb *is* the assistant's
  face across the product); the same orb must scale across all three
- **reduced motion** — static gradient + opacity pulse only; state still
  communicated via label/icon ([[visible-accessibility]])

## Techniques

- **CSS blob stack** — 2-4 blurred, saturated radial-gradient circles in
  an `overflow:hidden` round container, each on its own slow
  translate/scale keyframe loop, `mix-blend-mode: screen`; state changes
  by swapping `--speed`/`--amplitude` custom properties. Zero
  dependencies; the right default for inline/status orbs.
- **SVG filter wobble** — `feTurbulence` + `feDisplacementMap` on a
  gradient-filled circle for an organic edge, `feGaussianBlur` for the
  halo; animate `baseFrequency`/`scale` per state.
- **Canvas 2D metaballs** — a few noise-driven blobs merged by a
  threshold pass; microphone amplitude (Web Audio `AnalyserNode`) drives
  radius for the listening state. Good middle tier when reactivity is
  needed without WebGL.
- **Fragment shader** — fBm domain-warp for interior motion, fresnel rim
  for the glass/plasma edge, optional transmission through a gradient
  behind; every state is a uniform set (speed, warp amplitude, hue shift,
  brightness). Full-screen voice-mode orbs live here.
- **three.js sphere** — `MeshPhysicalMaterial` with transmission/
  thickness for a true glass orb, an emissive core, [[glow-bloom]] post;
  the expensive route, justified for hero surfaces only.

## Starting points

- `thinking-orbs` (npm, MIT) — dotted thought-orb loaders for agent UIs,
  nine tuned states, web plus React Native/SwiftUI ports; from
  libraries.dev (see LIBRARIES.md)
- Orbkit (orbkit.zzzzshawn.cloud) — React WebGL shader orbs with
  idle/thinking/speaking states, shadcn-registry install
- Murmur (murmur.krispuckett.com) — open-source animated glass orbs with
  listening/thinking/responding states, web + SwiftUI
- `orbloom` (npm) — voice orb with microphone reactivity and presets
- Rare UI Fluid Orb / Matrix Orb, React Bits Orb — single-file React
  orbs (registry entries in LIBRARIES.md)
- ThreeUI brand-orbs / orb-gallery — three.js orb materials at scene
  quality (freemium; see LIBRARIES.md)

## Search queries

- `ai voice orb react component idle listening thinking speaking`
- `thinking-orbs npm agent loading states`
- `glsl fbm fresnel orb shader audio reactive`
- `css blurred gradient blob animation mix-blend-mode screen`
- `swiftui animated orb assistant glass`

## Related

[[loading-language]] (the orb is its AI-native register — same honesty
and duration laws), [[audio-reactive]] (listening/speaking reactivity),
[[glow-bloom]] + [[mesh-gradient]] + [[frosted-glass]] + [[liquid-metal]]
(the material family), [[particles]] (dotted register),
[[chips-badges-avatars]] (inline agent-status pills), [[conversation-layout]]
(where inline orbs live), [[morphing]] (orb-to-avatar / orb-to-icon
handoffs), [[visible-accessibility]] (reduced-motion contract),
[[motion-ceremony]] (idle loops run for minutes — budget accordingly).
