---
name: liquid-metal
title: Liquid Metal
category: surface-and-material
aliases: [mercury, chrome blob, molten metal, ferrofluid, metal fluid, t-1000, liquid chrome, gallium, quicksilver, chrome liquid text]
media: [css, svg, canvas, webgl]
---

# Liquid Metal

Metal that flows — mercury beads, chrome blobs merging and splitting, molten
silver pours, ferrofluid spikes. [[specular-metallic]]'s finish on
[[liquid-ripple]]'s body: the T-1000/Y2K-revival material, currently
everywhere in type and hero design.

## You know it when you see

- Blobs with mirror-chrome surfaces — the environment smeared across a moving form
- Droplets that bead impossibly tight (mercury's ultra-high surface tension), merge on contact, split when shaken
- Chrome type melting, dripping, or assembling from droplets
- Ferrofluid: black gloss pulled into spike arrays by an invisible field
- The environment reflection *stretching and sliding* as the form deforms — the tell that it's liquid, not cast

## Dials

**Body (the liquid half)**
- **surface tension register** — mercury-tight (near-spherical beads, crisp merges — the classic) vs molten-loose (drips, strands, pours — [[liquid-ripple]] goo weights); tension sets silhouette curvature everywhere
- **merge/split choreography** — metaball smooth-min blending ([[sdf-rendering]]'s k) as blobs meet; splits leave satellite droplets; the merge moment is the effect's payoff beat ([[morphing]] topology freedom)
- **viscosity & settle** — quick wobble-settle (mercury) vs slow ooze (molten); response to interaction per [[interaction-feel]] (cursor as a repelling/attracting field is the standard showpiece)
- **field forces** (ferrofluid register) — spike arrays rising toward an attractor, hex-packed peaks ([[voronoi-cellular]] spacing), black gloss instead of chrome

**Skin (the metal half)**
- **reflection behavior** — the environment map *is* the surface ([[specular-metallic]]'s law), but on a deforming body: reflections slide, stretch, and pinch with curvature — static reflections on a moving blob are the giveaway; roughness stays near zero (any frost kills the liquid read)
- **environment choice** — what the chrome reflects sets the palette: studio softboxes (clean Y2K), sunset gradient ([[gradients]] as envmap — the cheap beautiful trick), the actual page content (screen-space sampling — blobs "in" the UI)
- **fresnel edge & dark core** — grazing edges bright, facing-center darker with a compressed environment; plus [[chromatic-aberration]] whispers at high-curvature rims for the premium render
- **tint** — silver-neutral (mercury), warm gold, oil-dark (ferrofluid), or iridescent film over chrome ([[iridescence]] — the holographic-liquid hybrid currently fashionable)

**Context**
- **contact behavior** — pooled contact with the ground ([[reflections]] + tight [[ambient-occlusion]] pad), droplet trails, climb-up-the-cursor moments
- **register** — Y2K revival ([[period-looks]]: chrome type + [[lens-flare]]), premium ambient (slow blob in a hero, [[scene-staging]] limbo), sci-fi menace (T-1000 assembly — [[dissolve-disintegration]] reversed with droplets)

## Techniques

- **SDF metaballs + matcap (GLSL)** — the standard build: 2D/3D smooth-min
  blob field ([[sdf-rendering]]), normals from the field gradient, shaded
  by a chrome **matcap** texture ([[specular-metallic]]'s cheapest
  convincing chrome) + fresnel term; cursor as a moving SDF component.
  This is the canonical hero-blob recipe.
- **three.js raymarched or marching-cubes blobs** — `MarchingCubes`
  (three.js addon) or raymarched SDFs with `MeshStandardMaterial`
  roughness≈0 + a real HDRI ([[scene-staging]]); drei helpers for
  environment; the reflective-deformation physics come free
- **Chrome liquid type** — text as SDF (MSDF — [[sdf-rendering]]) blended
  smooth-min with blob/drip components, matcap-shaded: melting chrome
  logotypes ([[type-composition]] + [[kinetic-type]] territory)
- **CSS/SVG approximation** — the gooey filter ([[liquid-ripple]]) over
  blobs filled with chrome-band gradients (hard gray/white stops —
  [[specular-metallic]]'s CSS chrome) + moving `background-position`;
  honest at small scale, no true reflection behavior
- **Ferrofluid** — spike fields as SDF cone arrays modulated by an
  attractor distance, or displacement on a dark glossy plane; audio-driven
  spikes are a beloved [[audio-reactive]] register

## Search queries

- `sdf metaballs matcap chrome shader webgl`
- `three.js marchingcubes reflective blob hdri`
- `liquid chrome text effect msdf`
- `ferrofluid spikes shader attractor`
- `y2k chrome blob design trend`

## Related

[[specular-metallic]] (the skin) + [[liquid-ripple]] (the body) — this
entry is their child; [[sdf-rendering]] (the geometry engine),
[[iridescence]] (holo-liquid hybrid), [[morphing]] (topology-free blending),
[[reflections]] + [[ambient-occlusion]] (grounding), [[period-looks]] (Y2K
native register), [[interaction-feel]] (cursor-field play),
[[audio-reactive]] (ferrofluid), [[type-composition]] + [[kinetic-type]]
(chrome type), [[scene-staging]] (the environment that IS the surface).
