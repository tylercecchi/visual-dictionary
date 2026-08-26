---
name: card
title: Card
category: layout
aliases: [card component, content card, tile, card anatomy, card design, clickable card, media card, card hover, card grid item]
media: [css]
---

# Card

**Surface contract:** inline · non-blocking · persistent · tier 0-1.

The fundamental content container — a bounded surface holding one unit of
content, repeated to form collections. The most-designed component in UI,
and the one where a product's [[shape-language]], [[elevation]], and
[[spacing-density]] decisions all become visible at once.

```
┌─────────────────┐
│ ███ media ████  │
│─────────────────│
│ Title           │
│ supporting text │
│ meta      [act] │
└─────────────────┘
```

## You know it when you see

- Bounded rectangles each holding one item, arranged in grids/rails/feeds
- A consistent internal anatomy repeated across every instance
- Hover lift, pressed states, whole-surface clickability
- The failures: cards-in-cards-in-cards (container nesting noise), or "everything is a card" (boundaries where no grouping exists)

## Dials

**Boundary**
- **separation strategy** — how the card exists against its ground: [[elevation]] shadow (floating), [[border-stroke]] hairline (flat/technical), background shift (quietest), or *none until hover* (the borderless list-card — boundary appears on interaction); one strategy per collection
- **shape & padding contract** — radius per [[shape-language]] (with the nested-radius law for media inside), padding per [[spacing-density]]; padding-to-content ratio is where premium/cramped is decided
- **media bleed** — imagery edge-to-edge (bleeding to the card's radius — the modern default) vs inset with its own radius; full-bleed media + [[image-treatment]] overlay for text-on-image cards

**Anatomy**
- **slot grammar** — the internal template: media / eyebrow / title / body / meta / actions; which slots exist and their order is *fixed per collection* ([[text-block-grammar]] proximity: meta attaches to title, actions separate); ragged anatomies across siblings read as broken
- **information ceiling** — cards summarize, they don't contain: title + 1-2 support elements + 1-2 actions; a card needing "read more" inside it wants to be a page ([[bento-grid]]'s croppability law)
- **density variants** — the same anatomy at compact/comfortable sizes (list-card vs grid-card) rather than different anatomies

**Behavior**
- **click target model** — whole-card clickable (one action, the standard; inner links via the pseudo-element stretch trick with real link semantics — [[visible-accessibility]]) vs actions-only (multiple operations); mixing models across a collection is disorienting
- **hover ceremony** — lift (+shadow deepen, the [[elevation]] beat), border/boundary reveal, media zoom-within ([[image-treatment]] crop room), or none (dense tools); [[interaction-feel]] press-down on click; one ceremony per collection ([[motion-ceremony]] budget)
- **state faces** — selected (accent [[border-stroke]] ring), dragging ([[interaction-feel]] lift + tilt), skeleton ([[loading-language]] matching the anatomy exactly), empty/error variants

## Content contract

One self-contained unit per card — summarizable, croppable, comparable to
its siblings. Cards demand *peer content* (collections of the same kind);
a lone card is just a panel wearing card styling. If the content is a
continuous narrative, cards fragment it ([[centered-stack]] serves better).

## Collapse behavior

Grid-cards become full-width list-cards (anatomy reflows: media shrinks to
a thumbnail beside text, or stays full-bleed on top); hover ceremonies
disappear (touch has no hover — boundaries must be visible by default on
mobile, breaking the borderless-until-hover pattern); tap targets grow.
The anatomy survives; the boundary strategy may have to change register.

## Techniques

- **The stretched-link trick** — whole-card click with real semantics:
  the title's `<a>` gets a `::after` covering the card
  (`position: absolute; inset: 0`), inner actions raised above it via
  `z-index` and `position: relative`.
- **Anatomy as component slots** — one card component, slotted; enforce
  order and spacing in the component, not per-instance.
- **Container queries** — cards restyle by *their own* width
  (`@container`), not the viewport — the component-level responsive
  answer for grid-vs-list anatomy.
- **Hover lift tokens** — a shared `--lift` transition (shadow + 1-2px
  translate) so every collection lifts identically.
- **`:has()` state styling** — selected/invalid states from inner
  controls without JS.

## Search queries

- `stretched link card clickable accessibility`
- `container queries card component responsive`
- `card anatomy design system slots`
- `borderless card hover boundary pattern`

## Related

[[elevation]] + [[border-stroke]] + [[shape-language]] +
[[spacing-density]] (the four systems a card makes visible),
[[bento-grid]] + [[masonry]] + [[carousel-filmstrip]] + [[timeline-feed]]
(the collections cards populate), [[panel-well]] (the non-repeating
sibling), [[text-block-grammar]] (slot proximity), [[loading-language]]
(skeletons), [[image-treatment]] (media slots), [[interaction-feel]]
(press/drag), [[lenticular]] + [[stickers-badges]] (cards as collectible
objects — the showpiece registers).
