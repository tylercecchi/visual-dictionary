---
name: selection-model
title: Selection Model
summary: "click/shift/cmd selection, marquee and lasso, select-then-act, bulk action bars"
category: behavior
aliases: [selection, select, multi select, multiselect, multi-select, select all, shift click, cmd click, ctrl click, range selection, toggle selection, marquee, marquee selection, rubber band selection, lasso, lasso select, bounding box, selection handles, bulk actions, bulk action bar, batch actions, contextual actions, contextual toolbar, selected count, checkboxes in rows, noun then verb, select a bunch, select rows, select multiple, bulk delete, delete at once]
media: [css, svg, canvas]
---

# Selection Model

The rules for choosing *which* objects an action will apply to —
single, range, toggle, and region selection — and the convention of
selecting first, then acting on the selection.

## You know it when you see

- Click selects one; Shift+click selects the range; Cmd/Ctrl+click adds or removes one
- Dragging on empty space draws a dashed rectangle (marquee) or freehand loop (lasso) that selects what it touches
- Selected objects get a tinted fill, outline, or bounding box with resize handles
- A bar appears with "3 selected" and actions (Move, Delete, Export), plus "Select all"
- The failures: losing a 40-item selection to one stray click, no way to tell what's selected after scrolling, actions that silently apply to only the focused item

## What it does

Separates *what* from *what to do*: the user first builds a selection
(the noun) with consistent gestures, and the interface then offers
actions that fit it (the verbs) — in a contextual toolbar, bulk action
bar, context menu, or keyboard shortcut. The selection is persistent,
visible state with a clear anchor, so it can be extended, trimmed, and
acted on repeatedly.

## When to use

- Lists, tables, file browsers, galleries, inboxes where batch actions are common
- Canvases and editors where objects are moved, aligned, grouped, styled
- Whenever one action must apply to many objects at once
- When available actions depend on the type of object chosen (contextual toolbars)

## When not to use

- Items with one dominant action (open, navigate): make the row a link; selection adds a dead click
- Choosing one value from a set in a form: use radio buttons, select, or segmented control ([[form-grammar]])
- Filtering a collection: use facets/filter chips ([[chips-badges-avatars]]) — filters are queries, not selections
- Touch-first lists without a reason for batch work: per-item swipe or overflow menus; if batch is needed, add an explicit "Select" mode instead of hidden modifiers

## Dials

- **selection gestures** — click = replace; Shift+click = range from anchor; Cmd/Ctrl+click = toggle; Cmd/Ctrl+A = all; Escape = clear; arrow keys move focus, Shift+arrow extends; keep platform conventions exactly
- **anchor & focus** — the anchor (where a range starts) vs focus (the current end); Shift-range extends from the anchor, not from the last click
- **region mode** — marquee (rectangle) vs lasso (freehand); touch-intersect (any overlap) vs fully-contained; drag threshold 3-5px before a marquee starts; Shift/Cmd-marquee adds to selection
- **selection affordance** — fill tint (accent at 8-15% opacity) + outline for lists; bounding box with 8 handles (6-8px squares, larger hit area) for canvas objects; checkboxes appear on hover or in select mode, always visible once anything is selected
- **count & scope readout** — "3 selected" with Clear; for paginated data, "All 50 on this page selected — Select all 1,240" (scope must be explicit before bulk destructive actions)
- **action surface** — contextual toolbar near the selection (canvas), sticky bulk-action bar (lists/tables, top or bottom), context menu on right-click; actions disabled or hidden when they don't apply to every selected item
- **persistence** — selection survives scrolling, filtering (with a note if items are hidden), and sorting; clicking empty space clears it only in canvases, not in long lists

## Techniques

- **Native semantics** — `<select multiple>`, checkbox lists, `aria-selected` on `role="listbox"`/`grid` options with `aria-multiselectable="true"`; the ARIA listbox/grid keyboard patterns define the key bindings.
- **Selection set in state** — store selected IDs (a `Set`) plus anchor ID; derive range from the current sorted/filtered order, not DOM order.
- **Marquee** — pointer-capture drag drawing an absolutely positioned rect (or SVG rect); intersect against item rects (`getBoundingClientRect`, or a spatial index for thousands); throttle to animation frames.
- **Lasso** — record the path as a polygon; select items whose center (or any corner) passes point-in-polygon.
- **Libraries** — Viselect / selecto for DOM region selection; TanStack Table row selection; canvas frameworks (tldraw, Konva Transformer, Fabric) ship handles.

## Starting points

- WAI-ARIA Authoring Practices: Listbox and Grid patterns (multi-select keys)
- Viselect, Selecto (daybrush), TanStack Table row selection — verify currency
- Interface Lineage (further reading): https://interfacelineage.com/region-selection, https://interfacelineage.com/noun-then-verb

## Search queries

- `aria multiselectable listbox shift click keyboard`
- `marquee selection javascript library`
- `bulk action bar select all pages table ux`
- `lasso selection point in polygon canvas`

## Related

[[table-design]] (row selection and bulk bars), [[board-kanban]]
(multi-card moves), [[spatial-canvas]] (marquee and handles),
[[drag-and-drop]] (dragging a selection), [[snap-and-guides]] (aligning
selected bounds), [[popover-menu]] (context menus as the verb list),
[[command-palette]] (verbs applied to the current selection),
[[undo-recovery]] (bulk actions as one undo step), [[visible-accessibility]]
(keyboard selection and announced counts).
