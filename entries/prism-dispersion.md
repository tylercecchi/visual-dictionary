---
name: prism-dispersion
title: Prism / Dispersion
category: light-and-depth
aliases: [prism rainbow, spectrum, dispersion, rainbow projection, cd diffraction, spectral colors, light splitting, crystal rainbow, dark side of the moon]
media: [css, svg, canvas, webgl]
---

# Prism / Dispersion

White light unpacked into its spectrum — the rainbow cast by a prism or
crystal, the shifting spectral sheen on a CD, the colored fringe inside real
caustics. Distinct from [[iridescence]] (a surface's angle-shifting color)
and [[lens-flare]] (ghost artifacts): this is the *projected rainbow as an
object in the scene*.

## You know it when you see

- A beam entering glass and exiting as a fanned band of ordered color (the Pink Floyd diagram)
- Rainbow patches thrown on walls/floors by crystals, beveled glass edges, or water
- CD/vinyl-adjacent diffraction: full spectral bands sweeping across a fine-grooved surface
- Spectral edges on bright [[caustics]] filaments and thick-glass highlights

## Dials

- **spectral ordering & purity** — real dispersion is *ordered* (red→violet, always) and *spectral* (fully saturated, no pastels, no magenta-through-white); random rainbow gradients read as decoration, ordered spectra read as physics
- **fan angle & softness** — tight beam-split (prism diagram, graphic) vs wide soft patch (crystal rainbow on a wall — blurred, wobbly-edged, often broken by the surface it lands on)
- **carrier** — what the rainbow rides: a visible beam ([[volumetric-light]] entering the prism), a projected patch (a [[gobo-shadows]]-like light shape, spectral), an edge fringe (on [[refraction-displacement]] and [[caustics]] highlights), or a groove-sweep ([[lenticular]]'s diffraction cousin on media surfaces)
- **motion** — static (a moment of sun), slow drift/tremble (the living crystal-rainbow on a wall — sun moving, glass swaying), or interaction-driven (tilt/cursor sweeping the spectrum across a diffractive surface)
- **scene light contract** — dispersion implies a *strong single white source* ([[light-on-flat]]: one sun, one lamp); rainbows in diffuse light are physically wrong and read it

## Techniques

- **CSS spectral patches** — a `linear-gradient` through ordered spectral
  stops (use OKLCH hue interpolation for clean spectral paths —
  [[gradients]]' `longer hue` arc), heavily blurred, skewed, at
  screen/plus-lighter blend; edge-wobble via an SVG turbulence displacement.
  The wall-rainbow for hero sections.
- **SVG prism diagram** — the graphic register: beam polyline in, spectral
  fan out (stacked colored strokes diverging); crisp, iconic, animatable
  (draw-on via dash offset).
- **GLSL spectral sampling** — the real technique: refract per-channel with
  slightly different indices (3-sample [[chromatic-aberration]] machinery,
  amplified) or sample N wavelengths mapped through a spectral ramp for
  smooth spectra; apply at glass edges, caustic hotspots, or as a
  full-screen prism pass.
- **Diffraction sweep** — groove surfaces (CD, holo foil): spectral
  gradient position driven by view/cursor angle across a fine
  line-pattern mask ([[lenticular]] foil machinery with an ordered
  spectrum instead of hue-rotation).
- **three.js dispersion** — `MeshPhysicalMaterial` gained dispersion
  support (verify current API) for real refracting gems; drei transmission
  materials + high chromatic aberration approximate it cheaply.

## Starting points

- Spectral-ramp references (wavelength→RGB tables, searchable) for correct
  ordering
- Shadertoy: search "dispersion", "spectral refraction", "prism"
- three.js `MeshPhysicalMaterial` dispersion docs/examples

## Search queries

- `glsl spectral dispersion refraction wavelength`
- `three.js meshphysicalmaterial dispersion gem`
- `css rainbow light patch wall overlay blur`
- `wavelength to rgb spectral ramp`

## Related

[[refraction-displacement]] (the bending that splits), [[caustics]] (where
fringes live), [[chromatic-aberration]] (dispersion's accidental screen
cousin — 3 samples vs a full spectrum), [[iridescence]] (surface
interference vs projected spectrum), [[lenticular]] (groove diffraction),
[[volumetric-light]] (the visible entering beam), [[gradients]] (spectral
stop craft), [[stained-glass]] + [[ice-frost]] (surfaces that throw
rainbows), [[light-on-flat]] (the single-source contract).
