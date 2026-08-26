---
name: stories-format
title: Stories Format
category: layout
aliases: [stories, story viewer, instagram stories, reels, full screen cards, tap through, story progress bars, vertical video feed, snap stories]
media: [css]
---

# Stories Format

**Coordinate:** full-viewport sequential cards · horizontal flow (between
items) · layered chrome · egalitarian · linear-with-skipping ·
single-surface, immersive (chrome-minimal).

Full-screen media consumed one card at a time — segmented progress bars up
top, tap zones steering, content auto-advancing. The most rigidly
conventionalized layout of the mobile era: users arrive knowing the rules,
so deviations read as bugs.

```
┌▬▬▬▬┬▬▬▬▬┬────┬────┐  ← segments
│ ◉ name          ✕ │
│                   │
│   (full-bleed     │
│      media)       │
│                   │
│ [reply…]        ♡ │
└───────────────────┘
```

## You know it when you see

- Edge-to-edge media with thin segmented progress bars — one segment per item, the active one filling
- Tap right = next, tap left = back, hold = pause, swipe down = exit
- The failures: unskippable duration, invisible progress, chrome burying the media, gesture conventions remapped

## Dials

- **the gesture contract (non-negotiable)** — tap zones right/left ≈ 2/3 and 1/3 of width for next/back, press-and-hold pauses (and hides chrome), swipe down dismisses, swipe left/right moves between *authors/collections* (with a cube or slide [[page-transitions]] beat); this grammar is user-installed — implement it verbatim
- **progress anatomy** — equal segments in one top row, hairline height, active segment filling linearly over the item's duration ([[loading-language]] determinate honesty); segment count visibly caps (~15-20) before it's dust
- **timing** — images 5-7s, video runs natural length; auto-advance pauses on hold and on any interaction (reply focus, sheet open); [[visible-accessibility]]: auto-advance must be pausable and reduced-motion-tolerant
- **chrome layers** — over the media, minimum viable: author [[chips-badges-avatars]] + timestamp top, reply composer + reactions bottom, all on [[gradients]] scrims (top-down and bottom-up eased fades — [[progressive-blur]]'s scrim law) so media stays the hero; chrome hides during hold
- **content safety areas** — authored content keeps critical elements out of the top (progress/identity) and bottom (composer) bands; the format is a [[grid-systems]] contract for creators too
- **interactive overlays** — polls, links, stickers ([[stickers-badges]] energy) as tappable islands; each pauses auto-advance while engaged

## Content contract

Sequential, self-contained, full-bleed media items (9:16-native) that
tolerate *skipping* — every item must survive being tapped past. Ordered
within an author/collection, browseable across them. Long-form or
information-dense content breaks the contract (nobody reads a paragraph
against a 6-second timer) — that's a [[carousel-filmstrip]] or article.

## Collapse behavior

Born 9:16 mobile — desktop is the adaptation: the story renders in a
centered phone-proportioned stage on a dimmed ground ([[modal-dialog]]
posture), arrow keys join the gesture grammar, adjacent stories may
preview as smaller cards flanking the stage.

## Techniques

- **Stage** — a fixed full-viewport container (`100dvh`), media
  `object-fit: cover`; items preloaded one ahead ([[loading-language]]:
  the next story must open instantly).
- **Segments** — flex row of track/fill bars; fill via a
  transform-scaleX animation whose duration = item duration,
  play-state toggled by hold; completed segments pinned full.
- **Gestures** — pointer handlers with a tap-vs-hold threshold
  (~200ms); swipe-down via [[interaction-feel]] drag with dismissal
  velocity.
- **Between-collections transition** — the 3D cube (perspective +
  rotateY) or a plain slide; keep it under ~350ms.

## Search queries

- `stories ui tap zones hold pause implementation`
- `segmented progress bar story css animation`
- `swipe down dismiss gesture velocity`
- `instagram stories cube transition css`

## Related

[[carousel-filmstrip]] (the non-immersive sequential sibling),
[[page-transitions]] (between-collection moves), [[progressive-blur]] +
[[gradients]] (chrome scrims), [[chips-badges-avatars]] (identity row),
[[interaction-feel]] (hold/swipe physics), [[loading-language]]
(preload + determinate segments), [[media-chrome]] (the pausable-media
cousin with persistent controls), [[image-treatment]] (creator-side
safe areas).
