---
name: elevation
title: Elevation / Depth
category: ui-foundations
aliases: [shadows, layering, depth, floating, raised, lifted, z-axis, card shadow, neumorphism]
media: [css, webgl]
---

# Elevation / Depth

The system by which UI communicates *what floats above what* — shadow, light,
overlap, and blur standing in for a physical z-axis.

## You know it when you see

- Cards and menus that appear to hover above the page
- A consistent "light source": shadows all falling the same way
- Modals that push the page "back" (scrims, background blur/scale)
- Or the absence: flat design where hierarchy comes from color/border instead

## Dials

- **shadow softness & distance** — tight/close = slightly raised, soft/far = floating high; layered small+large shadows read most physical
- **shadow color** — pure black at low alpha (neutral) vs tinted toward the surface or brand hue (richer, avoids muddiness on color)
- **depth source** — shadow-based vs *color-based* (dark themes elevate by lightening the surface, not by shadow)
- **elevation scale** — how many levels exist and how big the jumps are (a tight 3-level system reads calmer than ad-hoc shadows)
- **counter-light** — a subtle top border/highlight on raised surfaces sells the light source ([[frosted-glass]] does this)

## Techniques

- **CSS layered `box-shadow`** — 2-3 shadows per level (one tight, one
  ambient). Define levels as design tokens, never inline one-offs.
- **Dark-mode elevation** — raise surface lightness per level; shadows barely
  read on dark. This is a *system rule*, not an effect.
- **Scrim + `backdrop-filter`** on overlays — depth by pushing the background
  away (dim, blur, slightly scale down).
- **Real 3D (WebGL)** — actual z-offsets with a shadow-casting light, for
  scenes where UI lives in canvas.

## Starting points

- Material Design elevation docs — the canonical leveled system
- Josh Comeau "Designing Beautiful Shadows in CSS" — layered/tinted shadow method
- No library: elevation is tokens + discipline

## Search queries

- `layered box-shadow design tokens elevation scale`
- `dark mode elevation surface lightness`
- `tinted shadows css hsl`

## Related

[[frosted-glass]] (a depth language of its own), [[glow-bloom]] (glow can
replace shadow as the elevation cue in dark/neon systems),
[[visual-hierarchy]] (elevation is hierarchy on the z-axis),
[[shape-language]] (radius and elevation must agree on physicality).
