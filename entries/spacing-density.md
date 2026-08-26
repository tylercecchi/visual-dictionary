---
name: spacing-density
title: Spacing / Density
category: ui-foundations
aliases: [whitespace, padding, breathing room, cramped, airy, compact, dense, negative space, spacing scale, gutters]
media: [css]
---

# Spacing / Density

The system of empty space — how much air surrounds and separates things, and
how consistently. Density is a register (dashboard vs editorial), consistency
is craft.

## You know it when you see

- Luxury/editorial pages that are mostly empty space
- Data tools packing maximum information per screen without chaos
- The failures: "cramped" (no air), "sparse but messy" (air without system), or seams — the same gap size meaning different things in different places

## Dials

- **spacing scale** — the allowed values (4/8-based, or a geometric scale); ad-hoc pixel values are how seams happen
- **density register** — compact / comfortable / spacious; some products ship it as a user setting, every product should *choose* one deliberately
- **proximity grouping** — space *within* a group must be visibly smaller than space *between* groups; this ratio (aim ~2×) is most of layout legibility
- **padding-to-content ratio** — generous padding reads calm/premium; tight reads utilitarian; must track [[shape-language]] (big radius wants big padding)
- **edge tension** — how close content sits to container/viewport edges; margins are the frame

## Techniques

Spacing is pure system — the techniques are tokens and rules:

- **Spacing tokens** — a single scale (`--space-1..8`) used for *all* gaps,
  padding, margins; delete arbitrary values in review.
- **Gap-based layout** — flex/grid `gap` over margins wherever possible;
  margins leak and collapse, gaps state the relationship.
- **The proximity audit** — screenshot, mark every gap size; if within-group
  ≥ between-group anywhere, hierarchy is broken regardless of type/color.
- **Density theming** — expose the scale through a multiplier custom
  property to ship compact/comfortable modes cheaply.
- **Optical adjustment** — icons and asymmetric glyphs sometimes need ±1-2px
  off-token to *look* centered; deliberate optical corrections beat blind
  token faith.

## Starting points

- Refactoring UI — "start with too much white space" and proximity chapters
- 8pt grid literature (any current write-up; the idea is stable)
- Radix/Tailwind spacing scales as reference token sets

## Search queries

- `8pt spacing scale design tokens`
- `proximity gestalt grouping whitespace ui`
- `css gap vs margin layout spacing`
- `density compact comfortable spacious setting ui`

## Related

[[visual-hierarchy]] (space is emphasis without ink), [[shape-language]]
(radius and padding must agree), [[typographic-voice]] (line-height and
measure are type's spacing), [[elevation]] (dense UIs lean on borders,
airy ones on space), [[color-roles]] (borders vs space as separators).
