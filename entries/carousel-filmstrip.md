---
name: carousel-filmstrip
title: Carousel / Filmstrip
category: layout
aliases: [carousel, slider, filmstrip, horizontal scroll, swiper, gallery strip, card rail, scroll snap row, overflow scroll]
media: [css]
---

# Carousel / Filmstrip

**Coordinate:** horizontal · flow · tiled · egalitarian · linear/browse ·
single-surface.

Content extending off the right edge, moved through by swipe or button —
the filmstrip rail of cards, the hero slider, the media gallery. A layout
with a known honesty problem: off-screen content is half-invisible, so the
strip must *show* it exists and be worth the gesture.

```
┌────┬────┬────┬─┄
│    │    │    │  →
│    │    │    │
└────┴────┴────┴─┄
    ● ○ ○ ○
```

## You know it when you see

- A row of cards with one partially cut off at the edge (the peek)
- Snap-paging media galleries with dots/arrows; thumbnails as a filmstrip under a stage
- Netflix-style rails: category rows, each horizontally scrollable
- The failures: the auto-rotating hero carousel nobody sees slide 2 of, and strips whose clean edge hides that more exists

## Dials

- **the peek** — a partial item visible at the cut *is* the affordance ("more this way"); full items fitting exactly reads as complete and kills scrolling; peek width ~15-30% of an item
- **snap behavior** — free scroll (browse register, momentum — [[interaction-feel]] native physics) vs item-snap (cards land aligned) vs page-snap (galleries, one item = one view); snap strength per [[interaction-feel]]'s dial
- **navigation chrome** — arrows (desktop obligatory — trackpads hide horizontal scroll), dots (≤ ~7 items only), progress bar, or chrome-free (mobile rails); chrome states must reflect position (arrow disabled at ends)
- **item sizing** — uniform card width (rail), full-viewport (gallery/hero), or mixed-with-featured (first item wider — a [[visual-hierarchy]] hero in the strip)
- **autoplay** — default no; if the strip is a hero rotator, question the pattern itself (message 2 is effectively unpublished); any motion pauses on hover/focus and respects reduced motion ([[visible-accessibility]])

## Content contract

A set of peers where *sampling* is acceptable — browsing cards, gallery
images, category rails — and the count is honest (3-12; two items is a
[[split-screen]], twenty wants a grid with "view all"). Critical content
never goes past position ~3. If users must see *every* item, this is the
wrong layout ([[bento-grid]] or a grid shows all at once).

## Collapse behavior

Carousels are *born* mobile — the swipe is native there; the desktop
version is the adaptation (arrows + visible peek). Some strips should
*un-carousel* on wide screens into a plain grid (the rail was only ever a
narrow-viewport compromise — decide which master the layout serves).
Item width goes near-full-viewport minus peek on phones.

## Techniques

- **CSS scroll-snap** — the native engine: `overflow-x: auto;
  scroll-snap-type: x mandatory` + `scroll-snap-align` per item +
  `scroll-padding` for edge insets; momentum, accessibility, and
  [[interaction-feel]] physics for free. Default before any library.
- **Peek math** — item widths in `calc()`/`flex-basis` leaving the peek
  fraction; `scroll-padding-inline` aligns snaps with the peek.
- **Arrows + state** — buttons calling `scrollBy` (a page or item width);
  position observed via scroll events/IntersectionObserver driving
  disabled states and dots.
- **Gallery + filmstrip pairing** — stage image synced to a thumbnail
  strip (shared index, `scrollIntoView` on the strip).
- **Libraries** — embla/swiper-class when loop, autoplay, or complex
  responsive counts are truly required (verify currency); scroll-snap
  covers the honest 80%.

## Search queries

- `css scroll-snap carousel no javascript`
- `scroll-padding snap peek partial item`
- `embla carousel vs scroll snap`
- `hero carousel usability evidence`

## Related

[[interaction-feel]] (the physics), [[masonry]] + [[bento-grid]] (the
show-everything alternatives), [[timeline-feed]] (the vertical stream
sibling), [[split-screen]] (two-item honesty), [[scroll-choreography]]
(vertical page scroll driving horizontal strips — the hybrid),
[[loading-language]] (lazy-loading off-screen items),
[[visible-accessibility]] (keyboard reachability, autoplay rules).
