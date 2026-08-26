---
name: page-transitions
title: Page Transitions
category: motion
aliases: [route transitions, view transitions, navigation animation, page swipe, wipe, curtain, page load animation, spa transitions, jarring page change, abrupt navigation, route change animation, smooth page change]
media: [css, canvas, webgl]
---

# Page Transitions

How a product moves between views — cut, fade, slide, shared-element
continuity, or a full curtain wipe. The system-level cousin of [[morphing]]:
navigation as choreography.

## You know it when you see

- Clicking a card and watching it *become* the next page (shared element)
- Curtain/wipe reveals between routes (agency-site drama)
- Directional slides that encode hierarchy (drill in →, back ←)
- Or the failures: white-flash hard cuts in an otherwise polished app, or transitions long enough to feel like loading

## Dials

- **register** — cut (instant, honest) → crossfade (soft) → directional slide (spatial model) → shared-element (continuity) → curtain/wipe (theatrical); pick per navigation *type*, not globally
- **spatial grammar** — do transitions encode a consistent geography (forward drills right, up is parent)? Once implied, never contradict it
- **duration ceiling** — navigation is the hottest path: 200-350ms max for standard moves; theatrical wipes only on rare ceremonial routes ([[motion-ceremony]] budget)
- **enter/exit asymmetry** — outgoing view leaves faster than incoming arrives; overlap them, never animate sequentially
- **persistence** — what *doesn't* move (nav bars, players) anchors the transition; full-screen wipes sacrifice this anchor deliberately

## Techniques

- **View Transitions API** — browser-native snapshot crossfades +
  `view-transition-name` shared elements, now including cross-*document*
  (MPA) support — verify current browser coverage for targets. The default
  choice going forward.
- **Framework animation presence** — framer-motion `AnimatePresence` +
  `layoutId` (React), or the router's transition hooks (Vue/Svelte
  equivalents) when you need spring physics and interruption the native API
  doesn't give.
- **Curtain/wipe overlays** — a full-screen element animates in, route swaps
  under it, animates out; hides loading honestly. `clip-path` wipes for
  shaped reveals.
- **WebGL crossfades** — both views as textures, blended by a shader mask
  ([[procedural-noise]] dissolves, displacement warps — gl-transitions is
  the catalog). Agency register; heavy but unmatched.

## Starting points

- View Transitions API docs/examples (same-document and cross-document)
- framer-motion `AnimatePresence` / `layoutId`
- gl-transitions.com — the open catalog of shader crossfades
- GSAP for curtain choreography

## Search queries

- `view transitions api shared element cross document support`
- `framer-motion AnimatePresence route transition layoutId`
- `gl-transitions webgl crossfade catalog`
- `clip-path wipe page reveal animation`

## Related

[[morphing]] (element-level continuity; this entry is the system),
[[motion-ceremony]] (duration and budget law), [[progressive-blur]] +
[[gradients]] (soft edges during moves), [[glitch]] (a cut *as* a statement),
[[parallax]] (depth grammar during slides).
