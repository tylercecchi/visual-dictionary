---
name: visual-hierarchy
title: Visual Hierarchy
category: ui-foundations
aliases: [emphasis, weight, dominance, what pops, focal point, contrast, scannable, flat, everything looks the same]
media: [css]
---

# Visual Hierarchy

The ranking of attention — which element the eye lands on first, second,
third — created by deliberate contrast in size, weight, color, and space.

## You know it when you see

- You know instantly where to look and what to do on the screen
- Or its failure: "everything looks the same," "it feels flat," "busy"
- One clearly dominant action per view; secondary things visibly recede
- Headlines that are unmistakably headlines, not just slightly bigger text

## Dials

- **size contrast** — the ratio between levels of the type/element scale; timid ratios (16→18px) read as noise, committed ones (16→28px) read as structure
- **weight & color contrast** — bold+full-contrast foreground vs regular+muted; *de-emphasizing* the secondary is usually more effective than amplifying the primary
- **saturation budget** — how many elements get the accent color; one is a focal point, five is camouflage
- **spatial isolation** — whitespace around an element is emphasis without ink
- **levels count** — a hierarchy deeper than ~3 visible levels per view stops being legible

## Techniques

Hierarchy is a *system property*, not an effect — the technique is auditing
and tokens, not a library:

- **Squint test / blur audit** — blur the screen (or screenshot at 10% size);
  what still reads is the actual hierarchy. Compare against the intended one.
- **Type scale tokens** — a committed modular scale with paired weights, so
  levels are picked, not invented per-screen.
- **Muted-foreground tokens** — dedicated secondary/tertiary text colors;
  most flat-feeling UIs are missing the *quiet* levels, not the loud one.
- **Single-accent rule** — one high-saturation action per view; everything
  else neutral or outline.

## Starting points

- Refactoring UI (Wathan/Schoger) — the canonical hierarchy playbook
- practical-typography.com — type scale and weight discipline

## Search queries

- `refactoring ui visual hierarchy de-emphasize`
- `modular type scale ratio ui`
- `squint test design hierarchy`

## Related

[[vignette]] (hierarchy via light), [[elevation]] (hierarchy via z),
[[glow-bloom]] (glow = emphasis; budget it like accent color),
[[shape-language]], [[motion-ceremony]] (motion is an attention channel too —
the most-animated thing is read as the most important).
