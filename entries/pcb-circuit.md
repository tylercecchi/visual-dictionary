---
name: pcb-circuit
title: Circuit Board / PCB Traces
category: pattern-and-texture
aliases: [circuit board, pcb, traces, circuitry, motherboard, chip, tech pattern, circuit lines, electronic pattern, data flow lines]
media: [css, svg, canvas, webgl]
---

# Circuit Board / PCB Traces

The etched geography of electronics — copper traces running in disciplined
45° routes between pads and vias, solder-mask green (or matte black), silk-
screen labels. Says "technology" more literally than any other pattern, and
loves to light up.

## You know it when you see

- Thin parallel lines routing across a surface, bending only at 45°/90°, ending in circular pads
- Via dots, IC rectangles, and cryptic silkscreen labels (R12, C7) as texture
- Solder-mask palettes: PCB green, matte black + gold (the premium tech look), purple/blue boutique boards
- Animated pulses of light traveling along the traces ("data flowing") — the marketing-site staple

## Dials

- **routing grammar** — the authenticity core: traces run parallel in buses, bend at 45°, never cross (they *via* to another layer — a dot and a resumption), keep uniform clearance; freeform curvy lines read as "abstract network," not PCB
- **component density** — sparse traces-only (elegant backdrop) vs populated (pads, ICs, silkscreen — the literal register); density maps to [[fui]]-style "competence texture"
- **palette & finish** — mask color + copper/gold traces + white silkscreen; matte black + gold is the premium brand register ([[color-roles]]: one metallic accent); bare-copper on fiberglass for the raw register
- **pulse choreography** — light packets traveling traces: speed, direction (fan-out from a "chip" = the hero pattern), frequency (sparse pulses read as alive; constant flow reads as screensaver — [[motion-ceremony]] budget), glow ([[glow-bloom]] on the moving segment)
- **depth & light** — flat print vs physical: trace relief (tiny emboss), mask sheen ([[light-on-flat]]), gold pad glints ([[specular-metallic]])

## Techniques

- **SVG trace networks** — paths obeying the routing grammar (a small
  generator: grid route with 45° bends between random pad pairs beats
  hand-drawing); pads/vias as circles, silkscreen as mono microtext
  ([[typographic-voice]]).
- **Pulse animation** — `stroke-dasharray` with a short bright dash
  animated along the path (`stroke-dashoffset`), a glow filter on the dash
  layer; multiple staggered pulses per trace via duplicated paths with
  delays. The whole marketing effect in ~20 lines.
- **CSS pattern backdrop** — a repeating SVG tile of trace geometry at low
  contrast; cheap texture for tech sections.
- **GLSL procedural PCB** — grid-hash routing (truchet-like tiles
  constrained to 45° trace segments — [[generative-art]]'s truchet with
  a routing tileset), pulse as a moving bright parameter along the
  connectivity; infinite animated boards.
- **Real-board register (three.js)** — normal-mapped board texture
  ([[material-texture]] with authored trace relief), gold [[specular-metallic]]
  pads, macro [[depth-of-field]]: the "beautiful hardware photography" look.

## Starting points

- Real PCB design imagery (any board house gallery) for routing grammar
- The SVG dash-pulse recipe (widely documented; no library)
- Truchet-tile literature for the procedural routing approach

## Search queries

- `svg animated pulse along path stroke-dashoffset glow`
- `pcb trace pattern generator svg`
- `truchet tiles circuit routing shader`
- `matte black gold pcb aesthetic`

## Related

[[fui]] (the fictional-tech sibling — FUI is freeform, PCB is routed),
[[generative-art]] (truchet routing), [[glow-bloom]] (pulses),
[[blueprint]] (the schematic ancestor — traces are its manufactured
descendant), [[typographic-voice]] (silkscreen mono microtext),
[[specular-metallic]] + [[material-texture]] (physical boards),
[[terminal-aesthetic]] (fellow literal-tech register), [[particles]]
(pulses as constrained particles).
