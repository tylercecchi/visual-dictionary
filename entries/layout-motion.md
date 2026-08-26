---
name: layout-motion
title: Layout Motion / Reflow Choreography
category: motion
aliases: [flip animation, auto animate, layout animation, reorder animation, shared layout, list transitions, enter exit animations, items shifting, smooth reflow, magic move]
media: [css]
---

# Layout Motion / Reflow Choreography

The physics of layouts changing *themselves* — an item added, removed,
reordered, filtered, or resized, and every neighbor gliding to its new
place instead of teleporting. The connective motion that makes a layout
feel like matter rearranging rather than frames swapping.

## You know it when you see

- Deleting a card and watching the grid close the gap smoothly; a sorted list where rows trade places visibly
- A card expanding in place while siblings make room; filter results where survivors glide and departures fade
- The "magic move" — an element morphing from thumbnail to hero across two layout states
- The failures: everything teleporting on every change (no object permanence), or the opposite — 200 items individually animating a one-row change into a ballet

## Dials

- **the identity law** — layout motion only works when elements keep
  *identity* across states (stable keys): the engine animates *this item
  moving*, never *an item disappearing and a similar one appearing*;
  broken keys are why reorder animations mysteriously crossfade instead
  of glide
- **the event grammar** — four events, each with its own move: **move**
  (glide, transform-only), **enter** (fade/scale-in *after* neighbors
  have made room — space first, then occupant), **exit** (fade/collapse
  *before* neighbors close in — occupant first, then space), **resize**
  (the resizing element eases; neighbors respond as moves); enter/exit
  asymmetry follows [[motion-ceremony]]'s law (exits faster)
- **timing & scale caps** — moves at 200-300ms ease-out; stagger only
  when the change *is* the content (a shuffle feature) — routine reflow
  moves everything together; beyond ~20-30 affected items, animate the
  viewport's members and let off-screen items snap ([[motion-ceremony]]
  budget applied to crowds)
- **interruption & settling** — changes arrive mid-animation: targets
  update and elements re-aim from current positions (spring-based or
  re-measured FLIP), never queue or restart; a layout that hasn't
  settled must still accept the next change
- **shared-layout morphs** — one element continuous across two layouts
  (thumbnail→lightbox, card→detail, tab indicator between tabs): the
  [[page-transitions]] shared-element idea *inside* a page; crossfade
  content while the container morphs, per [[navigation-language]]'s
  sliding-indicator logic
- **when NOT to animate** — first paint and full data refreshes render
  statically (reflow motion narrates *changes*, not arrivals — see
  [[loading-language]]); text reflow from typing never animates;
  `prefers-reduced-motion` = instant with a brief highlight on changed
  items ([[visible-accessibility]] — the *what changed* signal survives,
  the motion doesn't)

## Techniques

- **FLIP** — First-Last-Invert-Play: measure before, measure after,
  transform back to the old position, transition to identity;
  transform-only so the browser never animates layout. The core
  technique behind every library here.
- **View Transitions API** — `document.startViewTransition()` +
  `view-transition-name` per keyed item: browser-native FLIP including
  enter/exit; verify support, fall back to static swap.
- **Auto-animate libraries** — @formkit/auto-animate (one-line parent
  wrapper) for the 80% case; framer-motion `layout` prop +
  `AnimatePresence` where springs, shared-layout (`layoutId`), and
  interruption matter; verify currency.
- **CSS-only slots** — grid/flex with transitioned `grid-template-*`
  or flex-basis handles resize choreography without JS; `interpolate-
  size` / `calc-size()` for height-to-auto (verify support).
- **Exit plumbing** — DOM removal must wait for the exit animation
  (AnimatePresence-style deferred unmount); the classic bug is items
  vanishing because React removed them before the animation ran.

## Search queries

- `flip animation technique measure invert play`
- `view transitions api list reorder`
- `formkit auto-animate`
- `framer motion layout animatepresence exit`

## Related

The connective tissue under [[board-kanban]] (drop settling),
[[faceted-browse]] (result diffs), [[masonry]] (inserts), [[timeline-feed]]
+ [[toast-notification]] (stack reflow), [[disclosure]] (push honesty),
[[table-design]] (sort/filter), [[comparison-columns]] (toggle),
[[navigation-language]] (the sliding indicator is a shared-layout morph);
[[interaction-feel]] (physics of *your* manipulation; this is the
layout's own), [[motion-ceremony]] (timing law), [[page-transitions]]
(the between-pages sibling), [[animated-numbers]] (the same
change-narration idea for values), [[visible-accessibility]] (reduced-
motion highlight).
