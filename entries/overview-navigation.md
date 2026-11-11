---
name: overview-navigation
title: Overview ↔ Detail Navigation
summary: "semantic zoom, A–Z scrubbers, Miller columns, filter-in-place, priority+ nav"
category: behavior
aliases: [overview detail, overview and detail, overview plus detail, zoom in for detail, semantic zoom, level of detail, index scrubber, alphabet scrubber, a-z rail, alphabet rail, timeline scrubber, fast scroll, jump to letter, miller columns, cascading columns, column view, finder columns, filter in place, live filter, filter as you type, shared element transition, hero transition, priority plus, priority navigation, more menu, overflow menu, nav overflow, drill down]
media: [css, svg, canvas]
---

# Overview ↔ Detail Navigation

The moves that let people travel between the whole and the part without
losing their bearings — zooming into meaning, jumping by index, walking a
hierarchy, or narrowing the set in place.

## You know it when you see

- Zooming out turns items into dots or clusters; zooming in reveals labels, then full cards
- A thin A–Z strip down the edge of a contacts list; dragging it flies through the list with a big letter bubble
- A photo library's date scrubber you drag to jump years
- macOS Finder column view: each click opens the next column to the right
- Typing in a filter box and the list shrinking right there, no new page
- A tapped thumbnail growing into the detail view, and shrinking back on close
- A nav bar that tucks the items that don't fit into "More ▾"

## What it does

It keeps an overview and its details in one continuous space instead of
separate screens. Each variant answers "where am I relative to
everything?": semantic zoom changes *what* is drawn per scale, index
scrubbers give random access along a sorted key, cascading columns show
the whole path at once, filter-in-place narrows without navigating away,
shared-element transitions carry the tapped object into its detail, and
priority collapse keeps the most important nav visible at any width.

## When to use

- **Semantic zoom**: maps, canvases, timelines, large graphs where scale changes what matters
- **Index scrubber**: long lists sorted by a scannable key (names, dates) of ~200+ items
- **Miller columns**: browsing deep hierarchies (file trees, taxonomies, settings) on wide screens
- **Filter-in-place**: collections under a few thousand items where the user knows a word or attribute
- **Shared-element transitions**: list → detail where object identity must survive the jump
- **Priority+ nav**: horizontal nav with more items than every width can hold

## When not to use

- Shallow hierarchies (≤ 2 levels) — use tabs or a sidebar from [[navigation-language]], not Miller columns
- Narrow/mobile screens for deep trees — use drill-down push navigation with a back stack, not columns
- Unsorted or relevance-ranked lists — a scrubber has no axis; use search or [[faceted-browse]]
- Filters needing many combined attributes — use a [[faceted-browse]] panel, not a single in-place box
- Navigation where items are equally critical — show a full menu ([[menu-design]]) or [[sheet-drawer]]; don't hide half in "More"
- Pure geometric scaling that never changes the content's meaning — use plain zoom on [[spatial-canvas]] / [[zoom-through]]

## Dials

- **zoom thresholds** — 2-4 discrete levels of detail with hysteresis (~10-15% overlap) so content doesn't flicker at a boundary; crossfade ~150-200 ms between representations
- **label density** — collide/cull labels by priority at each zoom; aim for no overlap rather than full coverage
- **scrubber feedback** — big index bubble beside the thumb, haptic tick per letter/section; scrubber appears on scroll and auto-hides after ~1-1.5 s idle; hit target ≥ 44 px wide
- **scrubber mapping** — linear by item count (smooth) vs by section (every letter equal height, empty letters greyed or omitted)
- **column width & preview** — ~200-260 px per column, the last column may be a preview pane; keep the selected path highlighted in every ancestor column; arrow keys move between columns
- **filter latency** — filter on every keystroke for client-side data (≤ ~16 ms per pass), debounce ~150-250 ms for server queries; show live count ("23 of 410") and highlight matched text; empty result offers "Clear filter"
- **filter persistence** — reflect in the URL so Back and share preserve it
- **transition duration** — shared-element morph ~250-350 ms, reversed on Back; skip under `prefers-reduced-motion`
- **collapse order** — items carry explicit priority; overflow drops the lowest first into "More"; the active item never hides

## Techniques

- **Native browser primitives** — View Transitions API
  (`view-transition-name` on the shared element; works cross-document in
  supporting browsers) for continuity; CSS container queries or a
  ResizeObserver for priority+ collapse; a `<input type="search">`
  filtering a rendered list; `scrollIntoView` for scrubber jumps.
- **Semantic zoom on SVG/canvas** — read the current scale from the pan/zoom
  transform and switch render functions per level (d3-zoom, or the
  canvas transform stage from [[spatial-canvas]]).
- **Index scrubber** — a vertical rail of section anchors with pointer
  capture; map pointer y to section, scroll the list (works with a
  virtualized list's `scrollToIndex`).
- **Miller columns** — a horizontally scrolling flex row of lists;
  selecting truncates columns to the right and appends one; auto-scroll
  the newest into view.
- **Libraries** — Framer Motion `layoutId` for shared elements in React;
  fuzzy matching (fuse.js-class) for filter-in-place; map engines own
  semantic zoom for geodata (structural — confirm before adding).

## Starting points

- MDN View Transitions API; Chrome developer docs on cross-document view transitions
- d3-zoom documentation
- Further reading: https://interfacelineage.com/semantic-zoom,
  https://interfacelineage.com/random-access-index,
  https://interfacelineage.com/columns-into-the-hierarchy,
  https://interfacelineage.com/filter-in-place,
  https://interfacelineage.com/shared-element-transition,
  https://interfacelineage.com/collapse-by-priority

## Search queries

- `view transitions api shared element list detail`
- `alphabet index scrubber list component`
- `miller columns component keyboard navigation`
- `priority plus navigation resizeobserver overflow more`
- `semantic zoom level of detail d3`

## Related

[[spatial-canvas]] + [[zoom-through]] (zoom as navigation),
[[page-transitions]] + [[layout-motion]] (the visual side of shared-element
continuity), [[map-list-sync]] (overview and detail on screen together),
[[faceted-browse]] (heavy filtering), [[navigation-language]] +
[[menu-design]] (the nav being collapsed), [[feed-pagination]] (long lists
the scrubber jumps through), [[cartographic-style]] (zoom-dependent
rendering), [[panes-and-tiling]] (master-detail in panes).
