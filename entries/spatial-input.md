---
name: spatial-input
title: Spatial Input
summary: "gaze-and-pinch, XR pointing, world-anchored vs head-locked UI, rotary controls"
category: behavior
aliases: [spatial computing, spatial ui, xr ui, vr ui, ar ui, mixed reality, vision pro, visionos, gaze and pinch, eye tracking, look and pinch, hand tracking, pinch gesture, ray pointer, laser pointer, controller pointing, direct touch, direct manipulation, indirect pointing, free space pointing, air mouse, world anchored, world locked, head locked, head up display, hud, rotary dial, rotary encoder, knob, digital crown, physical controls, comfort zone]
media: [css, webgl]
---

# Spatial Input

Input in three dimensions and through physical controls — looking at
targets, pinching to commit, pointing through space, touching virtual
surfaces, turning knobs — and where the UI lives relative to the body.

## You know it when you see

- Buttons that softly glow when you *look* at them; a finger-thumb pinch clicks the one you're looking at
- A laser ray from a controller or hand landing on a distant panel
- Poking a floating panel directly with a fingertip, with a press-depth ripple
- Panels that stay put in the room as you walk around vs a HUD that follows your head
- A car's or watch's rotary knob scrolling a list with detented clicks
- The failures: tiny targets you can't hold your gaze on, UI glued to your face causing nausea, arm-fatigue layouts at shoulder height

## What it does

It separates *targeting* from *committing* — eyes, rays, or proximity
choose the target; a pinch, trigger, tap, or press confirms it — so
selection works without a cursor. It decides whether content anchors to
the world, the body, or the head, and maps physical controls (rotary
dials, crowns, buttons) to focus movement and value changes, keeping
targets sized and placed within comfortable reach and view.

## When to use

- **Gaze + pinch**: headsets with eye tracking where hands rest naturally; fast selection of mid-distance UI
- **Direct touch**: content within arm's reach (~0.5 m), keyboards, sliders, physical-feeling buttons
- **Ray / free-space pointing**: far targets, controllers, TV/air-mouse remotes
- **Indirect pointing**: a trackpad or remote moving focus on a distant screen
- **World-anchored UI**: content tied to places or objects (labels, room-scale apps)
- **Head-locked HUD**: tiny, glanceable, critical status only (recording, battery, alerts)
- **Rotary controls**: eyes-busy contexts (driving, watches, audio gear), fine value tuning, list scrolling

## When not to use

- Text-heavy or precise editing — offer a connected keyboard/trackpad (indirect) rather than gaze or air typing
- Large head-locked panels — anchor to the world or body instead; head-locked content beyond a small HUD causes discomfort
- Gaze dwell as the *only* commit — pair with pinch or a button; dwell-only triggers accidental activation (except accessibility modes)
- Rotary for sparse, unordered choices — use direct buttons or a [[menu-design]] list
- 2D screens with a mouse — use [[hover-response]] and [[pointer-intent]] rules, not spatial ones

## Dials

- **target size** — ≥ ~60 pt / ~1.5-2° visual angle for gaze targets (spacing ≥ 4-8 pt between); direct-touch targets ≥ ~2-3 cm physical
- **gaze hover feedback** — subtle highlight/lift within ~50-100 ms of fixation; system-rendered where privacy requires (apps don't receive raw gaze); no information-bearing tooltips on gaze alone
- **commit gesture** — pinch (tap), pinch-hold (drag), double-pinch; direct touch with ~1-2 cm press depth and haptic/audio click
- **ray smoothing** — filter jitter (one-euro filter or similar), ray length/cursor dot at hit point; larger hit zones at distance
- **placement & distance** — primary content ~1-2 m away, centred slightly below eye level (~10-15° down); horizontal field for key content within ~±30°; reachable controls below shoulder to avoid arm fatigue
- **anchoring mode** — world-locked (stays in room) · body/lazy-follow (recentres after ~1-2 s once user turns > ~30°) · head-locked (HUD only, small, near periphery)
- **depth & scale** — scale panels with distance to keep angular size constant; avoid content closer than ~0.5 m except for direct-touch zones
- **rotary mapping** — detent per item for lists, acceleration for long ranges (velocity-based step size), fine mode on press-and-turn; audible/haptic tick per step ([[continuous-controls]])
- **comfort** — no forced camera motion; fade or vignette on teleport; respect reduced-motion and seated modes

## Techniques

- **Platform-native first** — visionOS/SwiftUI, Android XR, and Meta's
  SDKs provide gaze hover effects, pinch, and anchoring with privacy and
  comfort defaults built in; follow their human interface guidelines.
- **WebXR on the web** — `XRInputSource` for controllers and hands
  (`targetRayMode: gaze | tracked-pointer | screen`), `transient-pointer`
  for gaze-and-pinch in supporting browsers; anchors and hit-test modules
  for world-anchored content.
- **Rotary on the web** — map `wheel` events or focusable
  `role="slider"`/listbox arrow keys; physical encoders via WebHID /
  Web MIDI.
- **three.js + react-three/xr** (or Babylon.js, A-Frame) — controllers,
  hands, ray interactions, and UI panels in WebGL. Structural: a new
  rendering paradigm — confirm before adding; uikit-class libs for
  flat UI inside 3D scenes.

## Starting points

- Apple Human Interface Guidelines: visionOS (eyes, gestures, spatial layout)
- Meta Horizon OS / Quest design guidelines; Android XR design guidance
- WebXR Device API (MDN, Immersive Web) and react-three/xr docs
- Further reading: https://interfacelineage.com/gaze-proposes-hands-dispose,
  https://interfacelineage.com/embodied-free-space-pointing,
  https://interfacelineage.com/indirect-pointing,
  https://interfacelineage.com/world-anchored-overlay,
  https://interfacelineage.com/status-hud,
  https://interfacelineage.com/rotary-control-tuning-dial

## Search queries

- `webxr transient-pointer gaze pinch`
- `react-three xr hand tracking ray interaction`
- `visionos hover effect target size guidelines`
- `xr ui comfort zone placement distance degrees`
- `rotary encoder ui acceleration detents`

## Related

[[game-ui-registers]] (diegetic vs HUD vocabulary), [[fui]] (HUD
aesthetics), [[hover-response]] (gaze hover as the new hover),
[[pointer-intent]] (targeting vs commit), [[touch-gestures]] (pinch and
direct touch), [[continuous-controls]] (rotary value tuning),
[[frosted-glass]] (spatial panel material), [[visible-accessibility]]
(alternative input modes), [[interaction-feel]] (press depth, detents).
