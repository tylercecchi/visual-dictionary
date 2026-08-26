---
name: interaction-feel
title: Interaction Feel / Haptic Texture
category: motion
aliases: [drag physics, rubber banding, momentum scroll, overscroll, snap, resistance, elasticity, juicy ui, tactile ui, pull to refresh, swipe feel, feels dead, unresponsive clicks, click feedback, button feedback]
media: [css, canvas]
---

# Interaction Feel / Haptic Texture

How manipulation *feels* through the screen — the weight of a dragged card,
the stretch at a scroll boundary, the click of a snap point. Where
[[motion-ceremony]] governs animations that play *at* you, this governs
physics that respond *to* you.

## You know it when you see

- Dragged elements with mass: they lag, tilt, and carry momentum on release
- Rubber-banding: content stretching reluctantly past its boundary, snapping back
- Snap points that pull the drag toward resting states (carousels, sheets)
- Pull-to-refresh choreography: resistance, threshold, release payoff
- The failure: drags stapled 1:1 to the finger with dead stops — technically responsive, physically dead

## Dials

- **mass & momentum** — how much velocity carries after release (fling distance, decay rate); heavy (luxurious, slow) vs light (snappy, toy-like)
- **resistance curves** — beyond boundaries or toward thresholds, displacement grows sub-linearly (`log`/`sqrt` of overdrag); the resistance *is* the boundary's material
- **snap strength & radius** — how far snap points reach and how decisively they capture; interruptible springs, never time-based tweens (mid-gesture grabs must hand velocity back)
- **direct-manipulation fidelity** — the touched point stays under the finger/cursor (the sacred rule); secondary parts may lag (tilt, trailing) — that lag is the texture
- **threshold theater** — actions armed by distance (pull-to-refresh, swipe-to-delete) need visible state progression: approaching, armed, committed ([[motion-ceremony]] handles the release payoff)

## Techniques

- **Native scroll physics first** — CSS `scroll-snap-type`,
  `overscroll-behavior`, momentum scrolling: free, correct, interruptible;
  fight the platform only with reason.
- **Spring-based gesture libraries** — framer-motion (`drag`,
  `dragConstraints`, `dragElastic`, `useSpring`), react-spring + use-gesture:
  velocity-preserving, interruptible springs are the entire toolkit;
  `dragElastic` *is* the rubber-band dial.
- **Custom physics loop** — position += velocity, velocity *= friction,
  spring toward snap targets; ~20 lines when libraries don't fit (canvas,
  unusual gestures); overdrag via `resisted = k * log(1 + drag/k)`.
- **Sheet/carousel grammar** — detents (snap heights), velocity-aware
  dismissal (a fast short fling beats a slow long drag) — project the release
  velocity to pick the target detent.
- **Haptics** — where available (mobile web vibration API is coarse;
  native is the real home), a tick at snap/threshold moments completes the
  texture; on desktop, audio-free visual "clicks" (1-frame scale pulse).

## Starting points

- use-gesture + react-spring docs — the vocabulary (velocity, rubberband,
  bounds) implemented right
- framer-motion drag documentation
- Apple WWDC "Designing Fluid Interfaces" (2018) — the canonical talk on
  momentum, redirection, and interruptibility

## Search queries

- `use-gesture rubberband bounds drag`
- `framer-motion dragElastic dragMomentum`
- `designing fluid interfaces wwdc principles`
- `css scroll-snap overscroll-behavior`
- `bottom sheet detents velocity dismissal`

## Related

[[motion-ceremony]] (the non-interactive half of motion personality — the
two must share a physics), [[liquid-ripple]] (jelly on release),
[[cursor-effects]] (magnetism is snap applied to hover),
[[skeuomorphism]] (physical UI demands physical feel),
[[scroll-choreography]] (scroll owns its physics; choreography rides it),
[[elevation]] (lifted-while-dragging is the standard contract).
