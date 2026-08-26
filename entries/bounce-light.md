---
name: bounce-light
title: Bounce Light / Color Bleed
category: light-and-depth
aliases: [indirect light, radiosity, color bleed, reflected light, fill light, global illumination, gi, light spill, ambient bounce, screen glow room]
media: [css, svg, canvas, webgl]
---

# Bounce Light / Color Bleed

Light's second hop — surfaces re-emitting what falls on them, tinting their
neighbors: a red wall warming the shelf beside it, grass greening the
underside of a chin, a monitor washing a dark room in blue. The subtlest
realism layer; scenes without it feel lit by math, scenes with it feel
*inhabited* by light.

## You know it when you see

- The color of one surface faintly appearing on nearby surfaces (color bleed)
- Shadow sides that aren't dead gray — they're filled with the environment's tint
- The "watching TV in the dark" register: one emissive source painting the whole room its color, flickering with content
- In UI: a glowing element's color softly staining its card, or neighbors ([[glow-bloom]]'s halo behaving like *illumination* rather than decoration)

## Dials

- **bounce strength** — how much color transfers: physical subtlety (5-15% tint, felt not seen) vs stylized radiosity (heavy bleed, the warm animated-film look); past ~30% it reads as colored light, not bounce
- **distance falloff** — bleed hugs proximity: strongest in the near gap between surfaces (where it overlaps [[ambient-occlusion]] — real crevices are dark *and* tinted), fading fast; uniform tinting reads as a wash, not a bounce
- **source hierarchy** — what bounces: the dominant ground/wall (one global fill tint — cheapest), key surfaces near the subject (per-neighbor bleed), or emissive content (screens, [[neon-signage]], UI glows — bounce with a *behavior*: flicker, hue shifts with content)
- **shadow fill temperature** — the systemic version: shadows filled with sky-blue outdoors, warm interior tints inside ([[time-of-day]] and [[light-on-flat]] decide the fill color; "shadows are never black, they're the environment")
- **animation coupling** — static bleed (scene realism) vs live (screen-glow flicker tracking content, a passing [[stage-lighting]] wash re-tinting the room); live bounce is what makes emissive sources feel physically present

## Techniques

- **CSS neighbor tinting** — a glowing element casts: a soft
  `box-shadow`/radial-gradient in its color onto its container, *and*
  neighbors within reach pick up a faint background-tint (custom property
  set by proximity); the systemized version is a `--ambient` hue that
  active/glowing components write and surfaces read.
- **Screen-glow room** — one emissive rect + a huge soft radial gradient
  in its color over everything else (multiplied dark first, then the tint
  screened on); flicker by animating the tint layer's opacity/hue with
  layered noise ([[firelight-flicker]]'s driver, colder palette).
- **Illustration bounce pass** — in SVG/flat art: a low-opacity tint layer
  on shadow sides in the neighbor's color (the animation-studio discipline;
  one pass, biggest realism jump in [[illustration-style]] work).
- **GLSL fake GI** — cheap tricks that read as bounce: hemisphere lighting
  (sky color from above, ground color from below — two-tone ambient),
  per-object "ground tint" mixed by downward-facing normal amount;
  emissive-neighbor sampling (blur the scene, use it as ambient — the
  feedback-adjacent trick).
- **Real GI (three.js)** — baked lightmaps (Blender bakes) for static
  scenes; `LightProbe`/environment-based ambience; realtime GI remains
  expensive — verify current library state before promising it.

## Starting points

- Hemisphere-light docs (three.js `HemisphereLight` — two-tone bounce in
  one object)
- Animation color-script / bounce-pass literature (searchable: "bounce
  light color script")
- Blender lightmap-baking-to-three.js pipelines

## Search queries

- `three.js hemispherelight ground sky color`
- `fake global illumination tricks realtime`
- `screen glow dark room effect css flicker`
- `bounce light illustration shading pass`

## Related

[[light-on-flat]] (the contract this deepens), [[ambient-occlusion]] (the
darkening twin — AO subtracts, bounce adds, same crevices),
[[glow-bloom]] (decorative halo vs illuminating bounce),
[[firelight-flicker]] (a bounce source with a signature),
[[time-of-day]] (shadow-fill colors), [[reflections]] (specular bounce vs
this diffuse bounce), [[scene-staging]] (fill cards are bounce),
[[stage-lighting]] (washes re-tinting rooms), [[color-roles]] (ambient
tints must not break semantics).
