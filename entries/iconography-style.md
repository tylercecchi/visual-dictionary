---
name: iconography-style
title: Iconography Style
category: ui-foundations
aliases: [icons, icon set, icon style, stroke icons, filled icons, glyph, pictogram, icon weight, emoji style, rebus, pictogram wordplay]
media: [css, svg]
---

# Iconography Style

The drawing rules icons share — stroke weight, corner treatment, fill
strategy, and detail level. A mixed icon set is one of the fastest ways a UI
reads as unfinished.

## You know it when you see

- Every icon looks drawn by the same hand: same line weight, same corners
- Outline icons flipping to filled as their "active" state
- Or the failure: one screen mixing thin-line, chunky-filled, and detailed
  icons from three different sets

## Dials

- **stroke vs fill** — outlined (light, technical, current default) vs filled (solid, legible at tiny sizes, heavier) vs duotone (filled + tinted layer)
- **stroke weight** — 1.5px hairline (elegant) vs 2px (standard) vs bold (friendly/chunky); must harmonize with the type's weight ([[typographic-voice]])
- **corner & cap treatment** — round caps/joins (soft) vs miter (technical); must match [[shape-language]] radius
- **detail level / grid** — 16px icons need brutal simplification; 24px is the standard grid; decorative spot icons can afford interior detail
- **metaphor consistency** — one visual language for the same concept everywhere (one "settings" gear, one "delete")

## Techniques

- **Pick one set and configure it** — current major sets (lucide-class
  stroke sets, heroicons, phosphor, material symbols) cover 90% of needs;
  phosphor/material expose weight variants, material symbols is a *variable
  font* with weight/fill/grade axes.
- **SVG discipline** — `currentColor` for fills/strokes so icons obey
  [[color-roles]] tokens; consistent viewBox; `stroke-width` preserved (watch
  non-uniform scaling).
- **State via fill** — outline→fill on active/selected is a system rule worth
  adopting; animate it with path/opacity, not a swap flash ([[morphing]] for
  hero cases).
- **Custom icons** — when drawing your own, write the grid + stroke + corner
  rules down first; match the chosen set's rules if extending one.

## Starting points

- Icon set galleries change; evaluate current options by *configurability*
  (weight axes, fill pairs) not just coverage
- Material Symbols variable-axes docs — the most systematic model to learn from
- Icon grid/keyline references (any current major design system's icon docs)

## Search queries

- `icon set stroke weight variants comparison <year>`
- `material symbols variable font fill weight axes`
- `svg icon currentColor stroke-width best practices`
- `icon grid keylines 24px design`

## Related

[[shape-language]] (icons are its purest expression), [[typographic-voice]]
(stroke weight ↔ font weight), [[color-roles]] (currentColor discipline),
[[visual-hierarchy]] (filled state = emphasis), [[morphing]] (icon state
transitions).
