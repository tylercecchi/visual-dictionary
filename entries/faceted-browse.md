---
name: faceted-browse
title: Faceted Browse
category: layout
aliases: [filter sidebar, search results page, facets, filter panel, ecommerce category page, refine results, filter chips, sort dropdown, search layout]
media: [css]
---

# Faceted Browse

**Coordinate:** framed (filter rail + results field) · grid · tiled ·
egalitarian results · scannable-browse · the workhorse of finding.

The finding machine — a filter rail carving a large result set, applied
filters echoed as chips, a sort control, and a results grid that answers
every carve instantly. E-commerce categories, search results, asset
libraries, job boards: one layout.

```
┌ Filters ┬ 1,204 results  [Sort ▾] ┐
│ Brand   │ [× red] [× under $50]   │
│ ☐ Acme  │ ┌────┐ ┌────┐ ┌────┐    │
│ ☑ Bolt  │ │item│ │item│ │item│    │
│ Price   │ └────┘ └────┘ └────┘    │
│ ●───○   │ ┌────┐ ┌────┐ ┌────┐    │
└─────────┴──────────────────────────┘
```

## You know it when you see

- A left rail of filter groups with counts; results re-rendering as boxes tick
- Applied filters as removable chips above the grid; a result count that never lies
- The failures: filters that require a "Apply" pilgrimage for every change, zero-result dead ends with all filters silently active, the rail and chips disagreeing

## Dials

- **rail anatomy** — filter groups as [[disclosure]] sections (common groups open, long tails collapsed), controls per facet type ([[control-language]]: checkboxes for multi-select, radios for exclusive, range sliders for price, search-within for huge facets); per-option result counts are the rail's honesty layer
- **application timing** — instant apply per change (the modern default — with results updating under a brief [[loading-language]] soft state) vs batch apply (only for expensive queries; the button shows pending count); never mix modes
- **the applied-chips law** — every active filter appears as a removable chip ([[chips-badges-avatars]] chip species) above the results plus "Clear all"; the chips are the *single source of visible truth* — rail state, chips, URL, and count must always agree
- **count & sort bar** — result count stated plainly ("1,204 results" — updating via [[animated-numbers]] crossfade register), sort as a [[popover-menu]] select with the active sort named; density/view toggles (grid ↔ [[table-design]] rows) live here too
- **results field** — a [[card]] grid or list per content type ([[masonry]] for image-led, uniform grid for products); pagination per [[navigation-language]]'s choice rule (position matters here — paginate or load-more, rarely infinite)
- **zero-result rescue** — the dead-end is designed: state which filters caused it, offer one-tap removal of the most restrictive, suggest alternatives ([[illustration-style]] empty state + recovery, [[focus-page]] error-anatomy thinking)
- **URL truth** — filters, sort, and page serialize to the URL: shareable, back-button-honest, refresh-stable — the layout is a *query interface* and the URL is the query

## Content contract

A large, homogeneous, attribute-rich result set (hundreds+) where
narrowing beats scrolling. Facets must be real attributes with sane
cardinality — a facet with one option or four thousand unclustered ones
is data work the layout can't fix. Under ~30 items, filters are ceremony:
sort alone serves.

## Collapse behavior

The rail becomes a full-height filter [[sheet-drawer]] behind a "Filters"
button badged with the active count; applied chips stay visible above
results (they're the mobile truth); sort joins the same bar. Batch-apply
inside the sheet is acceptable on mobile even when desktop is instant —
the sheet's close *is* the apply.

## Techniques

- **State model** — one serializable filter-state object ↔ URL params
  (the single source); rail, chips, and query all render from it.
- **Async smoothness** — debounced queries, previous results dimmed
  (not blanked) while loading ([[loading-language]]: keep the old truth
  visible), request cancellation on rapid changes.
- **Counts** — facet counts from the search backend (aggregations);
  options with zero results dim rather than vanish (stability beats
  minimalism — options that jump around punish exploration).
- **Substrate** — search-UI kits (Algolia InstantSearch-class; verify
  currency) own the facet/query plumbing when the backend matches.

## Search queries

- `faceted search ui best practices counts`
- `filter state url serialization pattern`
- `zero results page recovery design`
- `instantsearch facet widgets`

## Related

[[table-design]] (the rows view; shared filter-chip law), [[card]] +
[[masonry]] (result fields), [[disclosure]] (rail groups),
[[control-language]] (facet controls), [[chips-badges-avatars]]
(applied chips), [[sheet-drawer]] (mobile rail), [[navigation-language]]
(pagination choice), [[animated-numbers]] (counts), [[loading-language]]
(soft refresh states), [[map-list-sync]] (the geographic variant),
[[command-palette]] (the keyboard path to the same corpus).
