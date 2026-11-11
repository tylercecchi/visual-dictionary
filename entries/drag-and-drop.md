---
name: drag-and-drop
title: Drag and Drop
summary: "carry, drop-target feedback, drop-to-invoke, handle reorder, auto-scroll, keyboard path"
category: behavior
aliases: [drag and drop, drag n drop, dnd, drag to reorder, reorder, reordering, sortable, sortable list, drag handle, grab handle, drop zone, drop zones, dropzone, drop target, drop indicator, insertion line, drag preview, drag ghost, file drop, drop files, drag to upload, drag to trash, auto scroll, drag feels broken]
media: [css, canvas]
---

# Drag and Drop

Moving or acting on an object by picking it up with the pointer or finger,
carrying it, and releasing it over a destination — the destination
deciding what the drop means.

## You know it when you see

- An item lifting on grab (shadow deepens, slight scale or tilt) and following the cursor
- A faded ghost or placeholder holding the item's old slot while neighbors slide apart
- Drop zones lighting up as you carry something over them; a line showing where it will land
- Files dragged from the desktop onto a dashed "Drop files here" region
- The failures: no indication where it will land, the list refusing to scroll when you reach its edge, drag being the *only* way to reorder

## What it does

Turns spatial movement into a command: the source is the noun, the drop
target is the verb (move here, upload, delete, assign). The interface
keeps three things visible throughout — what is being carried, which
targets accept it, and exactly where it will land — so the release is
never a surprise. A non-drag path (keyboard, menu) carries the same
command for users who can't or won't drag.

## When to use

- Reordering items whose order matters (playlists, priorities, layers, kanban columns)
- Moving items between containers that are visible together (folders, board columns, calendar slots)
- Bringing external files into the page (upload zones, attachments)
- Spatial arrangement where position is the content (canvases, layouts, seating charts)
- Drop-onto-target shortcuts as an accelerator beside an explicit command

## When not to use

- Moving to a destination that isn't on screen: use a "Move to…" picker ([[popover-menu]] or [[modal-dialog]])
- Long lists where the target is hundreds of rows away: offer "Move to top/position" or sortable fields instead of a long auto-scroll drag
- As the sole path for any action: add keyboard reorder (arrow keys / move up-down menu items) — required for [[visible-accessibility]]
- Small touch targets in scrolling content where drag fights scroll: use long-press-to-lift or an explicit edit/reorder mode
- Choosing a value along a range: use [[continuous-controls]]

## Dials

- **lift threshold** — pointer must move 3-8px (mouse) or hold 150-300ms (touch long-press) before a drag starts, so clicks and scrolls aren't hijacked
- **carry representation** — the item itself, a translucent ghost (opacity ~0.5-0.8), or a compact token ("3 items"); keep the grab point under the cursor (preserve offset — no snapping the item's corner to the pointer)
- **lift feedback** — [[elevation]] jump + scale 1.02-1.05 or 1-3° tilt on pickup; the origin slot shows a placeholder or gap
- **drop-target feedback** — valid targets subtly marked on drag start; the hovered target highlighted (fill/outline); invalid targets dimmed or show a not-allowed cursor; insertion line (2px accent) or opening gap for ordered lists
- **displacement motion** — neighbors slide to make room (150-200ms, [[layout-motion]]) vs a static insertion line; motion is clearer, a line is cheaper and calmer in dense lists
- **auto-scroll zone** — scroll when the pointer is within ~40-80px of a scroll container's edge; speed ramps with depth into the zone
- **drop resolution** — on release the item settles into place (spring 150-250ms); on invalid drop or Escape it returns to origin; the move is undoable ([[undo-recovery]])
- **handle vs whole-item** — a dedicated grip (⋮⋮) when the item also has clickable content; whole-item drag when it doesn't

## Techniques

- **HTML Drag and Drop API** — `draggable`, `dragstart`/`dragover`/`drop`, `dataTransfer`; required for files from the OS and cross-window drags; weak at custom previews and absent on many touch browsers.
- **Pointer events** — `pointerdown` + `setPointerCapture` + `pointermove` with `transform: translate`; full control of preview, thresholds, and touch; you own hit-testing (`document.elementsFromPoint`) and auto-scroll.
- **pragmatic-drag-and-drop** — Atlassian's small, framework-agnostic layer over the native API (with drop-indicator and auto-scroll add-ons); good when native semantics and external files matter.
- **dnd-kit** (React) — pointer/keyboard sensors, sortable presets, collision strategies, built-in screen-reader announcements; the usual React choice.
- **Accessible path** — focusable handle; Space/Enter to pick up, arrows to move, Space to drop, Escape to cancel; announce "Picked up X, position 3 of 8" via `aria-live`.
- **Motion** — framer-motion `Reorder` / `layout` for displacement animation when already installed.

## Starting points

- dnd-kit, pragmatic-drag-and-drop, SortableJS — verify currency
- MDN "HTML Drag and Drop API"
- Interface Lineage (further reading): https://interfacelineage.com/drag-and-drop-interaction-pattern, https://interfacelineage.com/drop-zone-hover-highlight-feedback, https://interfacelineage.com/drop-onto-target-to-invoke, https://interfacelineage.com/grab-handle-reorder

## Search queries

- `pragmatic drag and drop drop indicator`
- `dnd-kit sortable keyboard accessibility`
- `pointer events drag setPointerCapture auto scroll`
- `accessible drag and drop reorder aria-live`
- `file drop zone dragover highlight`

## Related

[[interaction-feel]] (the physics of the carry), [[elevation]] (the lift),
[[board-kanban]] (the canonical cross-column drag), [[table-design]] (row
reorder), [[layout-motion]] (neighbors making room), [[snap-and-guides]]
(where free drags land), [[selection-model]] (dragging a multi-selection),
[[undo-recovery]] (moves must undo), [[cursor-effects]] (grab/grabbing
cursors), [[spatial-canvas]] (free placement), [[visible-accessibility]]
(the keyboard path).
