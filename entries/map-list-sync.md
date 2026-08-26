---
name: map-list-sync
title: Map–List Sync
category: layout
aliases: [map and list, airbnb layout, map results, split map view, listings map, geo search, pins and cards, store locator, map browse]
media: [css]
---

# Map–List Sync

**Coordinate:** framed (list pane + map pane) · grid + *semantic* (map
position = geography) · tiled · egalitarian · scannable-browse · the
two-representation layout: one result set, two synchronized views.

The where-and-what machine — result cards in one pane, the same results
as pins in the other, hover and scroll linking them. Airbnb made it the
convention; lodging, real estate, store locators, and anything
location-decided uses it.

```
┌ results ────┬ map ───────┐
│ ┌─────────┐ │    ⦿$120   │
│ │ card A ●─┼──→ ⦿$95     │
│ └─────────┘ │  ⦿$210     │
│ ┌─────────┐ │      ⦿$95  │
│ │ card B  │ │ [search    │
└─────────────┴──this area]┘
```

## You know it when you see

- A scrollable card list beside a pin-covered map; hovering a card lights its pin (and vice versa)
- Price-labeled pins; "search this area" appearing after a pan
- The failures: panes showing *different* result sets, map refetching on every pixel of pan, pins with no route back to their card

## Dials

- **the sync contract (the layout's law)** — both panes render *one*
  result set: hover a card → its pin lifts ([[hover-response]] applied
  cross-pane); hover/tap a pin → its card highlights and scrolls into
  view (or opens a map-anchored preview [[card]]); list order may be
  relevance while the map is position — but membership is identical,
  always
- **viewport-as-query** — the map bounds *are* a filter ([[faceted-browse]]'s state model with geography as a facet): either live-refetch on settle (debounced, with a "N results in view" count) or the explicit **"search this area"** button after movement (the honest mode when refetches are heavy); moving the map must never silently mean nothing
- **pin language** — [[cartographic-style]]'s data-layer rules: labeled pins (price chips — the decision datum on the map itself) vs dot markers; states for rest/hover/selected/visited ([[color-roles]] + scale shift); clustering with counts at low zoom, expanding on approach
- **pane balance** — list ~40-45% / map the rest ([[split-screen]] ratio logic); the map pane is `position: sticky`/fixed against the list's scroll ([[app-shell]] pane independence); a list⇄map full-width toggle serves map-first or list-first users
- **preview surfaces** — tapping a pin opens a compact card anchored to it ([[popover-menu]] placement over a map), with the full card/detail one step away; the preview is the bridge between representations
- **density honesty** — hundreds of pins cluster; thousands mean the zoom level *is* the message ("zoom in to see results") — the map degrades to a heatmap/choropleth before it degrades to soup

## Content contract

Results where **location is a deciding attribute** — the user is
trading off *what* against *where*. Each item needs real coordinates and
a compact card face plus a pin-label datum (price, rating). If geography
is mere metadata (a filter, not a decision axis), plain
[[faceted-browse]] with a location facet serves better and costs half
the viewport.

## Collapse behavior

One pane at a time: list view with a persistent "Map" toggle (a
floating pill — [[toast-notification]] positioning), map view with a
bottom [[sheet-drawer]] of results that peeks, half-expands, and
full-expands ([[sheet-drawer]] detents doing the pane balance
dynamically — the mobile-native version of the split). Pin tap → sheet
peeks with that card.

## Techniques

- **Sync plumbing** — shared state keyed by result id: `hoveredId`,
  `selectedId`, `visibleBounds`; both panes subscribe; list scroll-to
  via element refs, map flyTo restrained ([[motion-ceremony]]: pan
  gently, never teleport per hover).
- **Map substrate** — MapLibre-class per [[cartographic-style]] (a
  structural stack decision — the stack rule applies); marker layers
  from GeoJSON with cluster expansion.
- **Bounds queries** — debounced `moveend` → bounds → query; results
  diffed, not replaced (cards persist identity for smooth reorder).
- **Sticky map** — the map pane fixed within the split while the list
  scrolls; resize observer keeps the map canvas honest.

## Search queries

- `map list sync hover highlight pattern`
- `search this area button bounds query`
- `maplibre marker cluster react`
- `mobile map bottom sheet results detents`

## Related

[[faceted-browse]] (the parent finding machine; this adds the second
representation), [[cartographic-style]] (the map pane's own entry),
[[split-screen]] + [[app-shell]] (pane mechanics), [[card]] (result
faces), [[sheet-drawer]] (the mobile pane balance), [[popover-menu]]
(pin previews), [[hover-response]] (cross-pane linking),
[[spatial-canvas]] (fellow semantic-position layout),
[[product-detail]] (where a result click lands).
