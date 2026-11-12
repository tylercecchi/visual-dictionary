---
name: touch-gestures
title: Touch Gestures
summary: "swipe-as-command, pull thresholds, long-press, pinch; gesture grammar"
category: behavior
aliases: [swipe to delete, swipe to archive, swipe actions, swipe gesture, swipe gestures, row swipe, leading swipe, trailing swipe, pull to dismiss, long press, long-press, press and hold, pinch to zoom, pinch zoom, rotate gesture, edge swipe, back swipe, gesture conflict, hidden gestures, gesture discoverability, touch gestures, mobile gestures, fighting the scroll, swipe fights scroll, scroll conflict, swipe]
media: [css]
---

# Touch Gestures

The command grammar of a touch surface — directional swipes that act on a
row, pulls that arm an action past a threshold, presses held long enough to
mean something else, and two-finger transforms. How the gesture *feels*
(mass, rubber-band, snap) lives in [[interaction-feel]]; this entry is what
the gesture *means* and when it fires.

## You know it when you see

- A list row sliding sideways to reveal a colored action (Archive, Delete) underneath
- A short swipe that parks the row open; a long swipe that commits the action in one motion
- Pulling down past a point until something "arms" (a spinner, a sheet that lets go)
- Holding a finger on an item until a menu blooms or the item lifts to be dragged
- The failures: swipes that fire while you were trying to scroll, gestures nobody knew existed, a back-swipe that steals the carousel's swipe

## What it does

Maps a direction, distance, or duration of touch onto a command so frequent
actions skip the menu. Each gesture has an *arming* stage (visible
progress toward a threshold) and a *commit* stage (release past it), so the
user can always back out mid-gesture. Gestures are accelerators: every
gestured action must also exist as a visible control.

## When to use

- High-frequency triage on lists (mail, tasks, notifications) — swipe-to-archive pays off on the 50th row
- Refreshing or dismissing a whole surface where the content itself is the handle (feeds, sheets)
- Direct transforms of spatial content: pinch/rotate on maps, photos, canvases
- Secondary actions on an item where a hold is a natural "more" (context menu, pick-up-to-drag)

## When not to use

- As the only path to an action — pair with a visible button or [[popover-menu]]; gestures are invisible by default
- Inside horizontally scrolling content ([[carousel-filmstrip]], wide [[table-design]]) — direction conflict; use a row menu or [[selection-model]] bulk actions instead
- Destructive full-swipe with no recovery — use partial-swipe-plus-tap, or full swipe with [[undo-recovery]]
- Desktop/pointer-first products — use hover-revealed row actions ([[hover-response]]) and keyboard shortcuts ([[inline-commands]])

## Dials

**Swipe-as-command**
- **direction map** — leading (left-to-right) = positive/reversible (archive, mark read); trailing = negative/destructive (delete); never swap per screen
- **partial vs full threshold** — partial swipe (~25-40% row width or ~80px) reveals and parks action buttons; full swipe (~60-70%) commits the outermost action on release; a velocity fling (>~0.5px/ms) may commit early
- **action count** — 1-3 actions per side; only the outermost is full-swipe-able
- **arming feedback** — background color saturates and icon scales/slides once past threshold, plus a haptic tick; crossing back un-arms with the same cues

**Pull-past-threshold**
- **trigger distance** — ~60-80px of *resisted* travel (pull-to-refresh) or ~25-35% of sheet height / fast downward fling (pull-to-dismiss)
- **state progression** — idle → pulling (indicator tracks) → armed (indicator completes, tick) → released (action runs; [[loading-language]] takes over)

**Long-press & transforms**
- **hold duration** — ~400-500ms to fire; show progress (scale-down/darken) from ~150ms so it reads as intentional; movement >~10px cancels
- **pinch/rotate** — scale anchored at the midpoint between fingers; min/max scale clamps with rubber-band; rotation snaps near 0/90° (~5-8° tolerance)

**Conflict & discovery**
- **axis lock** — decide the gesture's axis in the first ~10px of travel (dominant axis wins at ~1.5-2:1); the other axis is then ignored for that gesture
- **edge reserve** — leave ~16-20px screen edges to the OS back-swipe; never bind app gestures there
- **discoverability** — one-time hint (row peeks open on first view), [[coach-marks]], or visible buttons that teach the gesture

## Techniques

- **Native scroll mechanics first** — CSS `scroll-snap` on a horizontally
  scrollable row (actions in the overflow) gives a no-JS partial swipe;
  `overscroll-behavior` stops pull gestures leaking to the page;
  `touch-action: pan-y` lets your JS own horizontal swipes without
  breaking vertical scroll.
- **Pointer Events** — `pointerdown/move/up` + `setPointerCapture`; track
  velocity over the last ~100ms; one code path for touch, pen, mouse.
- **Platform components** — iOS `swipeActions`, Android `ItemTouchHelper`,
  Ionic `ion-item-sliding` — use when native or hybrid.
- **Gesture libraries** — use-gesture (`useDrag` with `axis`, `threshold`,
  `filterTaps`, `swipe.distance`), framer-motion `drag` + `onDragEnd`
  velocity; Hammer.js-era recognizers only for legacy (verify currency).
- **Haptics** — `navigator.vibrate(10)` where supported at arm/commit.

## Starting points

- Apple HIG "Gestures" and Material "Gestures" guidance
- use-gesture docs (options: axis, threshold, swipe, filterTaps)
- https://interfacelineage.com/directional-swipe-as-command,
  /pull-past-threshold-trigger, /pull-to-refresh-gesture,
  /momentum-rubber-band-physics, /direct-pointing — further reading

## Search queries

- `swipe to delete list row pointer events touch-action`
- `use-gesture swipe threshold axis lock`
- `pull to refresh implementation web overscroll-behavior`
- `long press web pointer events cancel on move`
- `pinch zoom rotate gesture web midpoint`

## Related

[[interaction-feel]] (the physics: resistance, snap, fling),
[[undo-recovery]] (makes full-swipe delete safe), [[drag-and-drop]]
(long-press is its touch entry), [[sheet-drawer]] (pull-to-dismiss home),
[[spatial-input]], [[pointer-intent]], [[coach-marks]] (teaching hidden
gestures), [[loading-language]] (after the refresh fires),
[[interaction-principles]] (discoverability, mapping),
[[popover-menu]] (long-press context menu).
