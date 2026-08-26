---
name: motion-ceremony
title: Motion Ceremony
category: motion
aliases: [animation feel, easing, springy, snappy, bouncy, fluid, transitions, micro-interactions, juice, how much animation]
media: [css, canvas, webgl]
---

# Motion Ceremony

How much celebration an interaction deserves — the speed, easing, and
choreography that make a product feel snappy, fluid, playful, or solemn.

## You know it when you see

- "Snappy" — things arrive fast and settle instantly (150-250ms, ease-out)
- "Springy/bouncy" — overshoot and settle, physical personality
- "Fluid" — elements morph and share continuity between states instead of cutting
- Or the failure modes: everything animates (theatrical, slow-feeling) or nothing does (abrupt, brittle)

## Dials

- **duration scale** — micro (100-200ms) / standard (200-350ms) / ceremonial (400ms+); reserve long durations for rare, meaningful moments
- **easing family** — ease-out (UI default: fast start, gentle land), spring (mass/stiffness/damping — personality lives in damping), linear (mechanical, loaders only)
- **overshoot** — none (serious) → slight (friendly) → rubbery (playful/cartoon)
- **choreography** — stagger (children cascade in), shared-element continuity (morph between views), enter/exit asymmetry (enter slower than exit)
- **ceremony budget** — which events rank a flourish (first-run, success, delete) vs which must be instant (typing, hover, navigation)

## Techniques

- **CSS transitions/animations** — right for state changes and micro-
  interactions; custom `cubic-bezier` or the newer `linear()` for spring-like
  curves.
- **Spring animation libraries** — real physics springs (interruptible,
  velocity-preserving): framer-motion / react-spring / GSAP depending on
  stack. Right whenever motion follows gestures or gets interrupted.
- **FLIP / shared-element** — measure, flip, animate transforms; View
  Transitions API where supported. Right for "fluid" continuity between
  layouts.
- **Shader-driven motion** — time-based uniforms driving the effects in this
  dictionary ([[shimmer-sheen]], [[liquid-ripple]]); same ceremony rules apply.

## Starting points

- Material Design motion + Apple HIG motion — two coherent, opposite-tempered
  ceremony systems worth reading as *systems*
- framer-motion docs (springs, layout animations, AnimatePresence)
- Emil Kowalski's animation writings — modern web motion taste

## Search queries

- `spring animation damping stiffness ui feel`
- `view transitions api shared element`
- `enter exit animation duration asymmetry`
- `css linear() easing spring`

## Related

[[visual-hierarchy]] (motion allocates attention), [[shimmer-sheen]] and
[[liquid-ripple]] (effects whose firing rate is a ceremony decision),
[[shape-language]] (geometry and motion must share a personality).
