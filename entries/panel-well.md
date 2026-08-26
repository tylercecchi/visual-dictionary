---
name: panel-well
title: Panel / Well
category: layout
aliases: [panel, well, inset, section container, group box, fieldset, callout box, aside box, sunken area, container styling, code block container]
media: [css]
---

# Panel / Well

**Surface contract:** inline · non-blocking · persistent · tier 0 (or
sunken below it).

The non-repeating grouping surfaces — settings panels, callout boxes,
form sections, code wells, sidebars' inner groups. Where [[card]] repeats
peers, panels *organize territory*: they say "these things belong
together" and sometimes "this area is different in kind."

```
┌─ Section ────────────┐
│ ┌──────────────────┐ │
│ │ ▒▒ well (sunken) │ │
│ └──────────────────┘ │
│ field ______________ │
│ field ______________ │
└──────────────────────┘
```

## You know it when you see

- Bounded regions grouping related controls or content, each appearing once
- Wells: areas *sunken below* the page surface (code blocks, drop zones, input groups) — the inverse of a card's float
- Callouts: tinted boxes flagging notes/warnings ([[color-roles]] semantic tints)
- The failures: boxes around everything (fence mania — [[border-stroke]]'s over-fenced warning at container scale), or nesting so deep the surfaces run out of distinguishable levels

## Dials

**Direction (the panel's defining axis)**
- **raised / flush / sunken** — a panel floats ([[elevation]] up: content), sits flush (a border or tint only: grouping), or sinks (inset shadow, darker/deeper surface: *input territory* — wells signal "things go in here": code, drops, editors); the raise/sink choice is semantic, not decorative
- **sunken grammar** — wells go darker in light mode, *darker still* in dark mode (never lighter — sunken means less light reaches it: [[light-on-flat]]'s physics), with a subtle top inner shadow

**Boundary & tint**
- **separation choice** — border, background shift, or spacing-only ([[border-stroke]]'s strategy dial); panels can afford quieter boundaries than cards because they don't compete with siblings
- **semantic tinting** — callout panels tinted by role (info/warn/danger/success at low-alpha [[color-roles]] semantics + a stronger left edge or icon); tint stays under ~8% opacity so content contrast survives ([[visible-accessibility]])
- **header integration** — the group's title: inside the panel (padded heading), on the boundary (fieldset-legend style, breaking the border line), or above it (the label outside — quietest); [[text-block-grammar]] proximity binds it either way

**Structure**
- **nesting budget** — two levels of visible containment max (page → panel → well); deeper grouping switches to dividers, headings, or [[spacing-density]] gaps instead of more boxes; every nesting level must change surface treatment or it's noise
- **density relationship** — panels inherit the region's [[spacing-density]]; a panel's internal padding relates to its boundary weight (heavy border + tight padding reads as a cage)
- **width behavior** — full-measure panels vs intrinsic (shrink-to-content callouts); text panels obey the measure ([[text-block-grammar]])

## Content contract

A *set* of related items used once — form sections, one code sample, one
warning, one settings group. Panels group; they don't summarize (that's
[[card]]) and don't interrupt (that's [[modal-dialog]]). If the same panel
repeats for peer items, it's a card collection now — switch grammars.

## Collapse behavior

Panels are collapse-resilient (they're flow content), but boundaries eat
precious mobile width: side padding lightens, borders may drop to
top/bottom rules or background-only separation, and deeply grouped forms
flatten a level (the panel becomes a heading + divider). Wells keep their
sunken treatment — input territory stays marked at every size.

## Techniques

- **Surface tokens by direction** — `--surface-raised/-flush/-sunken`
  triplets with matching shadow/inset tokens; the raise/sink semantic
  encoded once ([[elevation]]'s scale extended downward).
- **Callout component** — role variants from semantic tokens (tint +
  edge + icon), content slot obeying prose grammar; `role="note"`/
  `role="alert"` per severity ([[visible-accessibility]]).
- **Fieldset styling** — real `<fieldset>`/`<legend>` restyled (legend
  on the border via background matching), keeping the free a11y grouping
  semantics.
- **Well recipe** — slightly dark surface + `box-shadow: inset 0 1px 2px`
  + reduced radius (sunken surfaces read better slightly squarer —
  [[shape-language]] nuance).

## Search queries

- `sunken well inset surface css dark mode`
- `fieldset legend styling modern css`
- `callout admonition component semantic colors`
- `surface elevation tokens raised sunken`

## Related

[[card]] (the repeating sibling — the panel/card distinction is the
entry's core), [[elevation]] (raised and now sunken), [[border-stroke]]
(boundary strategies, over-fencing), [[color-roles]] (semantic tints),
[[light-on-flat]] (sunken physics), [[spacing-density]] (nesting budget
pressure), [[app-shell]] (panels' usual home), [[text-block-grammar]]
(header binding), [[terminal-aesthetic]] (code wells).
