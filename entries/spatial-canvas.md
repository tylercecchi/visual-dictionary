---
name: spatial-canvas
title: Spatial Canvas
category: layout
aliases: [infinite canvas, node graph, mind map, whiteboard layout, node editor, graph layout, figma style canvas, flowchart canvas, pan zoom canvas]
media: [css, svg, canvas, webgl]
---

# Spatial Canvas

**Coordinate:** 2d · semantic · layered · egalitarian · browse · framed.

An infinite pannable surface where *position is meaning* — nodes, edges,
clusters that the user (or an algorithm) arranges: whiteboards, mind maps,
node editors, network graphs. The layout isn't designed once; it's a
*space* the content inhabits, with rules instead of positions.

```
  ┌────┐        ┌────┐
  │ A  │───────▶│ B  │
  └────┘        └─┬──┘
     ▲            ▼
  ┌──┴─┐  ┌────┐┌────┐
  │ C  │  │ D  ││ E  │
  └────┘  └────┘└────┘
```

## You know it when you see

- A pan/zoom surface with items at freeform positions, often connected by edges
- Figma/Miro/whiteboard energy: spatial arrangement as the user's own thinking
- Node editors (shader graphs, workflow builders) with typed ports and routed wires
- Auto-laid network graphs (force-directed clusters, hierarchical trees)
- The failure: hairball graphs (every node connected, nothing readable) and infinite canvases with no wayfinding

## Dials

- **position authority** — who places nodes: the user (whiteboard — positions are *authored meaning*, never reflow them), an algorithm (force-directed/layered/tree layout — positions encode structure), or hybrid (auto-layout on demand, user tweaks preserved); this decision defines the product
- **edge language** — straight lines (diagram-fast), orthogonal routes ([[pcb-circuit]]/[[blueprint]] grammar: 45°/90°, avoids nodes), or beziers (node-editor standard: horizontal tangents from ports); arrowheads, labels, and edge weight as data ([[chart-voice]] rules apply to edges)
- **zoom semantics** — what zoom levels *mean*: geometric scaling only, or semantic zoom (far = clusters and labels, near = full node detail — the map discipline, [[cartographic-style]]'s zoom-dependent rendering applied to nodes)
- **wayfinding kit** — the framed chrome earning its panes: minimap, zoom-to-fit, search-and-fly-to, and a visible origin/home; an infinite canvas without wayfinding loses its users ([[app-shell]] provides the frame)
- **spatial ceremony** — pan/zoom physics ([[interaction-feel]]: momentum, pinch, rubber-band at content bounds), fly-to transitions (eased camera moves — [[motion-ceremony]] at camera scale), and node-drop/connect feedback

## Content contract

Item-shaped content whose *relationships or arrangement carry meaning* —
ideas being organized, systems with dependencies, networks. Nodes must be
compact-renderable (a card face) with detail behind interaction. Requires
tolerance for user mess (or an auto-layout guarantee). If positions don't
mean anything, a grid serves better; if there's one hub, that's
[[radial-orbital]].

## Collapse behavior

The canvas *interaction* survives on touch (pan/zoom are native gestures)
but authoring shrinks: mobile is usually a viewing register (navigate,
inspect, comment) with editing deferred to wide screens. The alternative
collapse is structural: render the graph as an indented outline/list
(tree flattening — positions traded for hierarchy). Ship one of these
deliberately; a desktop canvas crammed on a phone serves no one.

## Techniques

- **The transform stage** — one container div/SVG/canvas with
  `transform: translate(pan) scale(zoom)`; screen↔world coordinate
  conversion helpers; wheel/pinch/drag handlers with [[interaction-feel]]
  physics. The 100-line core of every canvas app.
- **Rendering tiers** — DOM nodes (rich, ~hundreds), SVG (edges + moderate
  nodes), canvas/WebGL (thousands+ — required for big graphs); cull
  off-viewport nodes at every tier.
- **Graph layout engines** — force-directed (d3-force), layered/DAG
  (dagre/elkjs — elk is the serious one), tree layouts; run layout, then
  *freeze* positions (stability beats re-simulation; verify library
  currency).
- **Node-editor stack** — libraries own the port/wire/minimap plumbing
  (React Flow-class; verify currency) — use one unless the canvas *is* the
  product's differentiation.
- **Edge routing** — beziers from port tangents; orthogonal via simple
  channel routing or the layout engine's edges; edge bundling for dense
  graphs (the hairball medicine, with clustering).

## Search queries

- `pan zoom canvas transform screen world coordinates`
- `react flow node editor library`
- `elkjs dagre layered graph layout compare`
- `d3-force freeze positions after layout`
- `semantic zoom level of detail nodes`

## Related

[[radial-orbital]] (the one-hub special case), [[collage-scatter]]
(authored positions without edges), [[pcb-circuit]] + [[blueprint]] (edge
grammars), [[cartographic-style]] (zoom semantics, minimaps),
[[app-shell]] (the frame), [[interaction-feel]] + [[motion-ceremony]]
(camera physics), [[chart-voice]] (edges/nodes as data), [[grid-systems]]
(optional snap-to-grid inside the freedom).
