---
name: radial-orbital
title: Radial / Orbital
category: layout
aliases: [circular layout, orbit layout, radial menu, hub and spoke, ring layout, ecosystem diagram, satellite layout, pie menu, circular nav]
media: [css, svg, canvas]
---

# Radial / Orbital

**Coordinate:** 2d · radial · tiled/layered · hero (center wins) ·
scannable · single-surface.

Elements on arcs around a center — the hub-and-spoke ecosystem diagram,
orbiting feature satellites, radial menus, ring charts. The coordinate
system *is* the statement: everything relates to the one thing in the
middle.

```
        ┌──┐
   ┌──┐ └──┘ ┌──┐
   └──┘┌────┐└──┘
       │HUB │
   ┌──┐└────┘┌──┐
   └──┘ ┌──┐ └──┘
        └──┘
```

## You know it when you see

- A central element with satellites arranged on a ring (or several rings)
- Ecosystem/integration diagrams: your product in the middle, partners orbiting
- Radial/pie menus blooming from a press point; watch faces; ring dashboards
- Slow orbital rotation as ambient motion
- The failure: radial form imposed on content with no real center — geometry claiming a relationship that doesn't exist

## Dials

- **ring structure** — one ring (peers around a hub) vs multiple radii (tiers of relationship: inner = core, outer = periphery — distance *means* something, the radial [[visual-hierarchy]]); ring capacity is small (5-9 per ring before crowding)
- **angular distribution** — even spacing (formal, diagram) vs weighted/clustered (organic, [[visual-composition]] balance on a circle) vs semantic angles (top = primary; compass meanings); start angle matters — the 12 o'clock slot is the second-most-important position
- **spoke visibility** — connecting lines from hub to satellites: drawn ([[border-stroke]]/[[blueprint]] linework, optionally animated flows — [[pcb-circuit]] pulse machinery bent into arcs), implied (proximity only), or orbital rings drawn as tracks
- **motion register** — static (diagram), slow orbit (ambient: satellites creep along tracks — [[motion-ceremony]] whisper; counter-rotate content to stay upright!), or interactive bloom (radial menus: satellites spring out on invoke — [[interaction-feel]])
- **center gravity** — the hub's visual mass must dominate ([[visual-composition]] weight law: it's fighting N satellites); size + [[glow-bloom]]/[[rim-light]] emphasis, or the inverse register — an empty center the ring frames (the void as hub)

## Content contract

One genuine center + 4-9 items whose *relationship to the center* is the
message (integrations, features of a core, team around a mission). Items
must be compact (icons/avatars/short labels — satellites can't carry
paragraphs). If items relate more to *each other* than to the hub, that's a
network ([[spatial-canvas]]); if there's no hub, it's a ring of peers
forcing a center that isn't there — use a grid.

## Collapse behavior

Radial geometry rarely survives phones. Graceful paths: (1) shrink to a
compact badge-ring (icons only, tighter radius) if the count is small;
(2) unroll — the ring becomes a vertical list with the hub as header
(spokes become indentation; distance-tiers become sections); (3) the
hub-first [[carousel-filmstrip]] of satellites. The *relationship* survives
as hierarchy; the circle is sacrificed. Decide the unroll order (clockwise
from 12) in advance.

## Techniques

- **CSS ring placement** — per-satellite
  `transform: rotate(θ) translate(r) rotate(-θ)` (the counter-rotation
  keeps items upright); θ from index; radius as a custom property for
  responsive shrink.
- **SVG diagram register** — satellites + spokes as real geometry
  (`<line>`/arc paths from center), label placement per quadrant; animated
  spoke flows via `stroke-dashoffset` ([[pcb-circuit]]'s pulse).
- **Orbit animation** — a rotating container + counter-rotating items
  (both `animation: spin` with one reversed), or per-item angle driven by
  time in JS/GLSL for varying speeds per ring.
- **Radial menus** — a composite surface: [[popover-menu]]'s contract
  (anchored, ephemeral, light-dismiss) wearing this entry's placement —
  items spring from the press point along their angles
  (staggered [[motion-ceremony]]); hit areas as wedges, not just the icon
  (pie-menu ergonomics); full keyboard fallback ([[visible-accessibility]]).
- **Conic scaffolds** — `conic-gradient` for ring tracks, progress rings,
  and wedge backgrounds ([[gradients]] conic register).

## Search queries

- `css circular menu rotate translate counter-rotate`
- `svg hub spoke diagram animated lines`
- `orbit animation css counter rotation upright`
- `pie menu wedge hit areas ux`

## Related

[[visual-composition]] (radial balance, center gravity), [[kaleidoscope]]
(radial symmetry as pattern vs layout), [[spatial-canvas]] (when relations
outgrow the hub), [[pcb-circuit]] + [[blueprint]] (spoke linework),
[[fui]] (ring-gauge kinship), [[chart-voice]] (ring charts border this),
[[interaction-feel]] + [[motion-ceremony]] (bloom and orbit registers),
[[carousel-filmstrip]] (a collapse path).
