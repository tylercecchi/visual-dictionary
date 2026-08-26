---
name: cartographic-style
title: Cartographic Style
category: ui-foundations
aliases: [map style, map design, basemap, terrain map, vintage map, transit map, choropleth style, map labels, hillshade, contour lines]
media: [css, svg, canvas, webgl]
---

# Cartographic Style

The visual identity of maps — basemap voice, label discipline, terrain
rendering, and the recognizable genres from vintage atlas to transit diagram
to dark-mode fleet dashboard. Maps are charts with geography's rules.

## You know it when you see

- Basemaps you could attribute: muted grey utility, warm paper atlas, dark ops dashboard with neon data
- Terrain speaking through hillshade relief, hypsometric tints, or contour lines
- Transit-map abstraction: geography bent to 45° grid, stations as ticks
- Label craft: typography hierarchies, haloed text, curved along features
- The failure: default-provider basemap under a brand that styled everything else

## Dials

- **basemap volume** — how loud the base is under the data: near-white/near-black utility (data-forward, the [[chart-voice]] rule applied) vs the map *as* the content (atlas, story maps)
- **abstraction level** — geographic truth → simplified → schematic (transit); straightening geometry trades accuracy for legibility
- **terrain treatment** — flat fills, hillshade (lit relief — a [[material-texture]] normal-map cousin), hypsometric elevation ramps ([[gradients]] with conventions: green-brown-white), contour linework ([[generative-art]] adjacent)
- **label system** — the hardest craft: size/weight/case hierarchy by feature class ([[typographic-voice]]), halos or masks for legibility, density thresholds per zoom
- **genre wardrobe** — vintage atlas (paper [[material-texture]], engraved [[hatching-sketch]] relief, serif labels), blueprint, neon-dark ops ([[fui]] kinship), watercolor; each is a fixed costume

## Techniques

- **Style the vector basemap** — MapLibre/Mapbox style JSON is the map's
  design-token file: every road class, fill, and label spec lives there;
  never ship the default. Existing open styles (Positron/Dark Matter class)
  as starting skeletons.
- **Data layers** — choropleths and symbols follow [[chart-voice]] palette
  rules (sequential/diverging ramps in OKLCH; classed vs continuous);
  deck.gl for heavy/3D data over the basemap.
- **SVG maps** — for fixed regions (countries, floor plans): full
  [[shape-language]]/filter control, D3-geo projections; the illustration
  register.
- **Terrain** — raster hillshade tiles or client-side terrain
  (MapLibre terrain, three.js heightfields); exaggeration is a dial.
- **Vintage/textured** — base vectors + paper texture overlay + muted ramp
  + engraved-style linework; blend-mode composition like [[print-artifacts]].

## Starting points

- MapLibre GL (open) + Maputnik (visual style editor) — the styling toolchain
- CARTO Positron/Dark Matter styles — the canonical quiet basemaps
- Transit-map design literature (Beck's London Underground lineage)
- Daniel Huffman / somethingaboutmaps and cartography blogs for craft depth

## Search queries

- `maplibre style json maputnik editor`
- `carto positron dark matter basemap style`
- `hillshade hypsometric tint terrain map`
- `map label halo hierarchy zoom`
- `transit map 45 degree schematic design`

## Related

[[chart-voice]] (the sibling discipline — maps are data displays),
[[typographic-voice]] (labels), [[gradients]] (elevation/choropleth ramps),
[[material-texture]] + [[hatching-sketch]] + [[print-artifacts]] (the vintage
costume), [[fui]] (ops-dashboard register), [[color-roles]] (basemap must
join the product's system).
