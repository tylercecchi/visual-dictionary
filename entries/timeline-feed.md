---
name: timeline-feed
title: Timeline / Feed
category: layout
aliases: [feed layout, activity stream, chat layout, changelog, vertical timeline, news feed, message list, history view, log view]
media: [css]
---

# Timeline / Feed

**Coordinate:** vertical · flow · tiled · egalitarian · linear ·
single-surface.

A single column of time-ordered items — social feeds, chat threads,
changelogs, activity streams, illustrated timelines. The layout is trivial;
the design lives in item anatomy, time's visual presence, and the scroll's
direction of history.

```
│ ● 2024 ──────────
│ ┌─────────────┐
│ │ item        │
│ └─────────────┘
│ ● ────────────
│ ┌─────────────┐
│ │ item        │
│ └─────────────┘
```

## You know it when you see

- One column of repeating item cards/rows in time order
- A spine: the literal timeline line with node dots, or implicit (chat, feeds)
- Date headers grouping runs of items; sticky as you scroll
- The failure: every item identical in weight regardless of importance, so the feed becomes gray noise ([[visual-hierarchy]] absent at item scale)

## Dials

- **time's visibility** — implicit (feeds: relative timestamps in item chrome), grouped (date headers, sticky), or *drawn* (the spine-and-nodes register: changelogs, company-history pages — [[border-stroke]] line + node dots, optionally alternating sides on wide screens)
- **scroll direction of history** — newest-top (feeds, logs: arrivals push down) vs newest-bottom (chat: history above, anchored to the live edge); this decision drives everything about scroll anchoring and "new items" behavior
- **item anatomy & variance** — one item template (uniform: calm, scannable) vs typed items (posts vs replies vs system events, each with distinct weight — the variance *is* the hierarchy in an egalitarian flow); density per [[spacing-density]] register (chat dense, editorial timeline airy)
- **grouping & coalescing** — collapsing runs ("3 similar events", consecutive same-author messages merging) — the anti-noise dial; feeds die of ungrouped repetition
- **the live edge** — how new items arrive: appear-in-place (calm fade — [[motion-ceremony]] minimal), a "new items" pill preserving scroll position (the respectful default), or auto-scroll (chat at bottom only)

## Content contract

Time-ordered, open-ended, item-shaped content of broadly similar rank.
Items must tolerate truncation (expandable bodies) and the stream must
tolerate infinity (pagination/virtualization). If a few items are
*landmarks* (major releases in a changelog), give them a typed heavier
anatomy — but if most items are landmarks, this wants [[centered-stack]]
sections instead.

## Collapse behavior

Nearly collapse-proof — already a single column. Side-alternating spine
timelines drop to spine-left/content-right. Item chrome compresses
(metadata inline → stacked). The real mobile work is the live edge and
sticky date headers surviving small viewports.

## Techniques

- **Spine register** — a `::before` line on the list + absolutely
  positioned node dots per item (or CSS grid: `[spine] auto [content] 1fr`
  tracks); alternating sides via `:nth-child` ([[alternating-rows]]
  machinery on a spine).
- **Sticky date headers** — `position: sticky` on group headers; groups as
  wrappers so headers push each other off.
- **Scroll anchoring** — `overflow-anchor` and manual scroll-position
  preservation when prepending (newest-top infinite history); chat pinning
  via `flex-direction: column-reverse` or scroll-to-bottom logic with an
  "unread" break line.
- **Virtualization** — long feeds need windowing (virtuoso-class; verify
  currency); variable-height items make this the hard version — measure
  or estimate.
- **Coalescing logic** — group consecutive same-type/author items at
  render; summary rows expandable to the run.

## Search queries

- `css timeline spine line nodes pseudo element`
- `chat scroll anchoring column-reverse pattern`
- `feed virtualization variable height virtuoso`
- `sticky date headers list scroll`

## Related

[[masonry]] (its browse-register sibling; also its own single-column
collapse), [[centered-stack]] (landmark-heavy content's home),
[[alternating-rows]] (side-alternating spine kinship), [[spacing-density]]
(register), [[motion-ceremony]] (live-edge calm), [[loading-language]]
(skeleton items, infinite-scroll states), [[visual-hierarchy]] (typed-item
weights), [[terminal-aesthetic]] (log-view register).
