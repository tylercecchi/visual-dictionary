---
name: snap-and-guides
title: Snap and Guides
summary: "snap-to-grid, smart alignment guides, magnetic edges, constrained placement"
category: behavior
aliases: [snap, snapping, snap to grid, snap to guides, snap to edges, smart guides, alignment guides, alignment lines, guides, guide lines, magnetic, magnetic edges, magnetic snapping, sticky edges, nudge, nudging, increments, axis lock, shift to constrain, constrain proportions, constrained placement, things won't line up, hard to align, stick to the grid, stick to grid, grid snapping]
media: [css, svg, canvas]
---

# Snap and Guides

Pulling free-moving objects toward meaningful positions — grid lines,
other objects' edges and centers, valid slots — so precise placement is
easy and imprecise placement is corrected.

## You know it when you see

- A pink/red line flashing as an object's edge or center aligns with another's
- Objects jumping in grid-sized steps while dragging, or "sticking" briefly at an edge
- Distance labels ("24") and equal-spacing markers appearing between objects
- Holding Shift locks movement to horizontal/vertical, or keeps aspect ratio on resize
- The failures: snaps so strong you can't place something 1px off a guide, or no snapping so nothing ever lines up

## What it does

During a drag or resize, the system compares the object's candidate
position against a set of targets (grid, sibling edges and centers,
container bounds, allowed slots). When the candidate falls within a
threshold of a target, the position is pulled onto it and the alignment
is shown as a guide. Modifier keys switch snapping off for freeform
work or add constraints (axis lock, aspect lock, angle steps).

## When to use

- Design, diagramming, slide, and layout tools where alignment is the point
- Window and panel arrangement (edge snapping, tiling zones)
- Timeline and calendar editors where times should land on increments (15 min, frames, beats)
- Any placement where only certain positions are valid (slots, cells, seats): constrain rather than suggest
- Resizing and rotating (angle steps of 15°, size steps of the grid unit)

## When not to use

- Freeform, expressive input (sketching, handwriting, painting): no snapping, or opt-in only
- Ordered lists and stacks: use [[drag-and-drop]] insertion indicators, not geometric snap
- Precise numeric needs: give a numeric field or scrubbable value ([[continuous-controls]]) beside the canvas
- Swipe/scroll resting points: CSS scroll snap and detents ([[interaction-feel]]) rather than guide snapping

## Dials

- **snap threshold** — distance (screen pixels, not document units) within which a snap captures: 4-8px typical; scale-independent so zoom doesn't change feel
- **target set** — what can be snapped to: grid, object edges, centers, spacing (equal gaps), container/artboard bounds, baseline; more targets = more help and more noise — prioritize nearest and limit simultaneous guides
- **grid increment** — the step size (4/8px UI grids, 15-minute time slots, 15° angles); keyboard nudge matches (arrow = 1 unit, Shift+arrow = 10)
- **snap strength / hysteresis** — hard snap (position jumps to target) vs magnetic (pulls within threshold and needs extra travel to release, ~2x threshold); hysteresis prevents flicker at the boundary
- **guide visibility** — guides shown only while dragging, in a high-contrast accent (1px), with optional distance/spacing labels; cleared instantly on release
- **bypass & constrain modifiers** — hold Cmd/Ctrl (or Alt) to disable snapping temporarily; Shift to lock axis / aspect / 15° rotation; release returns to normal (a quasimode — [[pointer-intent]])
- **constrained placement** — invalid positions aren't merely discouraged: the preview only shows valid slots and drops elsewhere revert

## Techniques

- **CSS scroll snap** — for scroll resting positions only (`scroll-snap-type`, `scroll-snap-align`); free, but not object placement.
- **Quantize on move** — `Math.round(x / step) * step` in the pointer-move handler; the cheapest grid snap; apply after converting screen to document coordinates.
- **Candidate-matching guides** — collect edge/center coordinates of nearby objects per axis (sorted, or a spatial index for many objects), find the closest within threshold, offset the drag, render matched lines as SVG/canvas overlays.
- **Library behaviors** — interact.js `modifiers.snap`/`restrict`, Moveable (snappable, guidelines), tldraw/Konva snapping; reuse what the canvas stack already has.
- **Accessibility** — keyboard nudge with arrow keys and numeric position fields give precise placement without fine motor control ([[visible-accessibility]]).

## Starting points

- interact.js snap & restrict modifiers; Moveable (daybrush) snappable guidelines — verify currency
- Interface Lineage (further reading): https://interfacelineage.com/snap-to-constraint, https://interfacelineage.com/constrained-spatial-placement

## Search queries

- `smart guides alignment snapping algorithm canvas`
- `interact.js snap modifier grid`
- `moveable snappable guidelines`
- `snap threshold hysteresis drag`

## Related

[[drag-and-drop]] (the carry that snapping refines), [[spatial-canvas]]
(the usual home), [[interaction-feel]] (snap points in scroll and
gesture physics), [[calendar-timegrid]] (time increments),
[[continuous-controls]] (stepping on sliders), [[pointer-intent]]
(modifier quasimodes), [[selection-model]] (bounding boxes being
aligned), [[cursor-effects]] (magnetic cursor is snap applied to hover).
