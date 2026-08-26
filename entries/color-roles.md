---
name: color-roles
title: Color Roles
category: ui-foundations
aliases: [color system, palette, accent color, semantic colors, surface colors, brand color, muted, saturation, color tokens, theming]
media: [css]
---

# Color Roles

Color organized by *job* rather than by hue — surfaces, text levels, borders,
one accent, and semantic states — so the palette is a system, not a list of
colors you like.

## You know it when you see

- A UI that feels coherent even though you can't point at why
- One color clearly means "act here"; red/green/amber clearly mean states
- Or the failures: "the blue is too loud" (a *background* wearing accent
  saturation), rainbow soup (no accent budget), muddy sameness (no level contrast)

## Dials

- **role set** — surface (2-3 levels), foreground (2-3 levels), border (1-2), accent, semantic (success/warn/error/info); most UIs need ~12 tokens, not 40
- **saturation by role** — surfaces near-neutral (a *hint* of brand hue in grays is the pro move), accents saturated, semantics recognizable but tuned to the palette
- **accent budget** — how many things per view wear the accent ([[visual-hierarchy]]: ideally one)
- **value spacing** — enough lightness distance between surface levels to read as layers ([[elevation]] in dark mode *is* this dial)
- **temperature** — the warm/cool lean of the neutrals; sets the product's emotional register

## Techniques

- **Design tokens (CSS custom properties)** — name by role
  (`--surface-2`, `--fg-muted`, `--accent`), never by hue (`--blue-500` is a
  *primitive* that roles point at). Themes = swapping role values.
- **OKLCH color space** — define ramps in `oklch()` so lightness steps are
  perceptually even and hue doesn't drift; the current best practice for
  generating tint/shade scales.
- **Contrast checking** — WCAG/APCA contrast on every fg/surface pair is a
  build-time check, not a vibe.
- **Dark mode** — not inversion: surfaces lighten with elevation, saturation
  drops on large fields, semantics re-tuned.

## Starting points

- Radix Colors — the best-documented role-based scale system (12-step, each
  step has a defined job); worth reading even if unused
- Tailwind CSS v4 OKLCH palettes as primitives
- APCA / WCAG contrast tooling (verify current tooling)

## Search queries

- `radix colors scale steps semantic roles`
- `oklch color palette generation css`
- `design tokens semantic vs primitive colors`
- `apca contrast vs wcag`

## Related

[[visual-hierarchy]] (accent budget is hierarchy), [[elevation]] (surface
levels), [[duotone-gradient-map]] (imagery forced into the role system),
[[mesh-gradient]] (ambient color must obey the ceiling), [[typographic-voice]]
(the other half of identity).
