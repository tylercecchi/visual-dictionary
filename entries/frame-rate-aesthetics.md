---
name: frame-rate-aesthetics
title: Frame-Rate Aesthetics / Stop-Motion
summary: "deliberately stepped motion; on twos, boil, sprite cycles, the hand-animated feel"
category: motion
aliases: [stop motion, stop-motion, on twos, on ones, on threes, stepped animation, steps easing, choppy on purpose, claymation feel, flipbook, low frame rate, frame stepping, hand-animated feel, boil, boiling lines, jittery lines, sprite sheet animation, sprite cycle, 12 fps, frame by frame]
media: [css, svg, canvas, webgl]
---

# Frame-Rate Aesthetics / Stop-Motion

Motion that advances in visible steps on purpose — animated on twos or
threes, lines that boil, sprite cycles, positions that drift frame to
frame like moved clay. The frame rate becomes a *register*: hand-made,
crafted, playful, or retro — the opposite of the smooth 60fps default.

## You know it when you see

- A hover state that snaps through three drawn frames instead of easing
- Outlines that jitter slightly every frame while the shape holds still
  (the boil of hand-drawn animation)
- A character or icon cycling through a sprite sheet at 8-12 fps
- Slight registration wobble — a cut-paper or clay object never landing
  in exactly the same place twice
- The failure: stepped motion on functional UI (scroll, drag, sheets)
  where it reads as lag; and the register applied to one element while
  everything else eases at 60fps, so it reads as a bug rather than a
  choice

## Dials

- **frame rate** — on ones (24/30 fps, barely stepped) → on twos (12
  fps, the classic hand-drawn feel) → on threes/fours (8/6 fps, chunky,
  stop-motion) → 2-4 fps (flipbook, deliberate crudeness)
- **hold pattern** — uniform steps vs an animator's timing: longer holds
  on the extremes, fewer frames through the fast middle, smear frames
  ([[motion-blur-trails]]) at peak velocity
- **boil** — per-frame re-randomization of line and edge
  ([[hatching-sketch]]'s wobble re-seeded each frame); amplitude and rate
  set how alive vs how nervous it feels
- **registration jitter** — small per-frame position/rotation drift of
  the whole object (cut paper, clay, puppets); zero for cel, present for
  physical media
- **interpolation** — pure steps (`steps()` on linear progress) vs
  stepped easing (steps sampled from an eased curve — most convincing)
- **scope** — one hero/mascot at 12fps inside a smooth UI (contrast as
  the point) vs the whole interface stepped ([[period-looks]],
  [[pixel-art-technique]] registers)
- **safety** — boil and flicker between roughly 3-30 Hz over large areas
  are photosensitivity risks: keep boil small and local, never strobe
  the ground; `prefers-reduced-motion` → static frame
  ([[visible-accessibility]])

## Techniques

- **`steps()` easing (CSS)** — `animation-timing-function: steps(12,
  jump-none)` on an otherwise ordinary keyframe animation; combine with
  an eased parent (a stepped child inside a smoothly moving wrapper) for
  animator's timing. Zero deps.
- **Sprite sheets (CSS)** — `background-position` stepped across a
  horizontal sheet with `steps(n)`; the classic cycle; integer scaling
  and `image-rendering: pixelated` for pixel sprites.
- **rAF throttle (Canvas/WebGL)** — render only when `now - last >
  1000 / fps`; or quantize the time uniform in shaders
  (`floor(t * fps) / fps`) so procedural motion steps too.
- **Boil** — re-seed the wobble each frame: `feTurbulence` `seed` stepped
  through values, a hand-drawn SVG path swapped among 2-3 variants, or a
  noise offset keyed on `floor(t * fps)`.
- **Lottie / hand-drawn frames** — export on twos from the animation
  tool rather than stepping a smooth export; the holds come from the
  animator.

## Starting points

- The 12 principles of animation (timing, slow-in/out) — userinterface.wiki
  carries them as rules (LIBRARIES.md); Disney/Laika/Aardman as the
  register's canon
- MDN `steps()` timing function; sprite-sheet packers (TexturePacker,
  free-tex-packer)
- Lottie (with frame-rate capped exports) for complex hand-drawn cycles

## Search queries

- `css steps() timing function sprite sheet animation`
- `animation on twos web css stepped easing`
- `svg feTurbulence seed boil line animation`
- `requestAnimationFrame throttle fps canvas stepped`
- `lottie frame rate export on twos`

## Related

[[hatching-sketch]] (the boil's home), [[pixel-art-technique]] (sprite
cycles, integer scaling), [[motion-blur-trails]] (smear frames),
[[motion-ceremony]] (a register choice, not a budget exception),
[[cute-naive]] + [[illustration-style]] (mascots that live at 12fps),
[[period-looks]] + [[crt-scanlines]] (low-fi kin), [[interaction-feel]]
(stepped detents), [[kinetic-type]] (stepped type reveals),
[[animated-numbers]] (odometer stepping), [[game-ui-registers]]
(retro-console register), [[visible-accessibility]] (flicker limits).
