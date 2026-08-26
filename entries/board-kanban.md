---
name: board-kanban
title: Board / Kanban
category: layout
aliases: [kanban, kanban board, trello board, columns of cards, pipeline view, stage board, swimlanes, drag and drop board, status columns]
media: [css]
---

# Board / Kanban

**Coordinate:** horizontal columns × vertical stacks · grid + *semantic*
(column position = status) · tiled · egalitarian cards in tiered columns ·
scannable · single-or-framed.

Work as geography — cards in columns where the column *means* something
(stage, status, owner) and moving a card *is* the state change. The
matrix's semantic-placement axis in its most domesticated form.

```
┌ To do ─┐ ┌ Doing ─┐ ┌ Done ──┐
│ ┌────┐ │ │ ┌────┐ │ │ ┌────┐ │
│ │card│ │ │ │card│ │ │ └────┘ │
│ └────┘ │ │ └────┘ │ │        │
│ ┌────┐ │ │        │ │        │
└────────┴─┴────────┴─┴────────┘
```

## You know it when you see

- Columns headed by stage names with counts; cards dragged between them
- Left-to-right reading as *progress* (backlog → done)
- The failures: columns so tall they're unscannable lists, drag with no drop preview, a board used for content that has no mutable stage

## Dials

- **column semantics** — what a column encodes (workflow stage, assignee, priority); left→right should read as *progression* where one exists; column count 3-6 visible (more = horizontal scroll with [[carousel-filmstrip]] peek); optional WIP limits surfaced in the header (count/limit, warning tint at breach — [[color-roles]])
- **card anatomy** — the compact [[card]] register: title, 1-2 metadata chips ([[chips-badges-avatars]] — assignee avatar, labels, due), optional cover; a board card summarizes harder than any other card (details live in a click-through [[sheet-drawer]]/[[modal-dialog]])
- **drag grammar** — the full [[interaction-feel]] contract: lift on grab ([[elevation]] + slight tilt), a placeholder gap showing the drop position, columns highlight as targets, auto-scroll at edges, spring-settle on drop; drop *is* a state mutation — failed saves must visibly return the card
- **column chrome** — header (name, count, add-card, overflow menu), collapsible columns (rotate to slim vertical bars — [[disclosure]] logic), add-card inline at top or bottom (pick one; bottom preserves reading order)
- **swimlanes** — a second grouping axis as horizontal bands crossing all columns; expensive to scan — reserve for genuinely two-dimensional workflows and make lanes collapsible
- **scale behavior** — long columns virtualize; board-wide filters ([[table-design]]'s chip feedback) shrink to relevance rather than paginating

## Content contract

Items with **one mutable categorical dimension** that a team moves things
through — statuses, stages, buckets. Cards must be peer-shaped and
summarizable. If the category never changes, it's a grouped list, not a
board; if position should encode *two* free dimensions, that's
[[spatial-canvas]] territory.

## Collapse behavior

Columns don't fit phones: either one column at a time (column switcher as
[[navigation-language]] tabs/select, swipe between — the standard), or the
board degrades to a grouped [[timeline-feed]] list with status headers.
Drag on touch needs long-press initiation plus a no-drag fallback (move
via card menu — [[visible-accessibility]]: every drag needs a button path).

## Techniques

- **Drag substrate** — a maintained dnd library (dnd-kit-class for React;
  verify currency) for sensors, keyboard dragging, and a11y
  announcements; hand-rolled HTML5 DnD fails keyboard users.
- **Optimistic moves** — mutate locally on drop, reconcile with the
  server, visibly revert on failure ([[toast-notification]] with undo).
- **Column layout** — flex row of fixed-width columns, each an
  independent scroll container ([[app-shell]] pane logic at column
  scale); `scroll-snap` for the mobile column switcher.

## Search queries

- `dnd-kit kanban accessibility keyboard`
- `kanban wip limit ui`
- `optimistic drag drop revert pattern`

## Related

[[card]] (the unit), [[interaction-feel]] (drag physics),
[[spatial-canvas]] (two free dimensions), [[timeline-feed]] (the list
collapse), [[carousel-filmstrip]] (column overflow),
[[chips-badges-avatars]] (card metadata), [[table-design]] (the same
data as records), [[dashboard-tiles]] (fellow work surface),
[[visible-accessibility]] (drag button-paths).
