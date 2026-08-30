---
name: gaussian-splatting
title: Gaussian Splatting
category: light-and-depth
aliases: [3D gaussian splatting, 3DGS, splat, splats, splat scene, radiance field, NeRF-style capture, photogrammetry render, captured 3D scan, room scan, scanned room, point cloud, point cloud fuzz, fuzzy scan, volumetric photo scan, splat viewer, scanned scene]
media: [webgl]
---

# Gaussian Splatting

A captured (not modeled) 3D scene rendered as millions of soft, colored,
view-dependent ellipsoids instead of triangles — real-world photo
fidelity with a distinctly un-mesh-like fuzziness.

## You know it when you see

- Photoreal detail that turns to soft blur or fine fuzz at grazing angles
  and edges — no crisp polygon silhouette anywhere
- Floater artifacts: faint colored smudges hanging in empty space near
  reflective or thin geometry
- The scene reacts to camera angle the way a photo can't — specular
  highlights slide and hair/foliage keeps looking hair/foliage-like at
  any distance, because it was never simplified into geometry
- Editor/viewer chrome that gives it away even when the render is clean:
  a stray UV-map overlay, a bounding box, a "point cloud" density slider

## Dials

- **source** — phone/drone photo or video capture (Polycam, Scaniverse,
  Luma AI) vs. synthetic/rendered training data; capture quality sets the
  fuzz-vs-fidelity ceiling more than any render setting
- **splat density / LOD** — million-splat hero scenes vs. decimated,
  streamed levels of detail for web performance; PlayCanvas SuperSplat's
  streaming format targets this directly
- **compression format** — raw `.ply` (large, exact) vs. `.splat`/`.ksplat`
  vs. SOG (Self-Organizing Gaussians, heavily compressed for web delivery)
- **composability** — an isolated splat "object" (product, statue) staged
  over a normal background vs. a full environment splat you move a camera
  through; the former composites like [[reflections]]-era product shots,
  the latter behaves like a scene, not an asset
- **cleanup** — raw captures carry background floaters and blown geometry;
  editors (SuperSplat) crop, denoise, and relight before ship

## Techniques

- **Spark (three.js)** — the current best-integrated option: splats live
  alongside normal three.js meshes/lights in one scene graph, wide format
  support (ply/splat/ksplat/spz/sogs). Reach for this by default in a
  three.js/R3F project.
- **GaussianSplats3D (mkkellogg)** — an earlier, still-used three.js-based
  splat renderer; simpler API, narrower format support than Spark.
- **gsplat.js** — standalone, dependency-free splat renderer for projects
  not already on three.js; smallest footprint.
- **PlayCanvas native support** — first-class splat loading/rendering in
  the engine itself, plus SuperSplat, PlayCanvas's free browser-based
  editor for cropping/cleaning/compressing a capture before shipping it.
  The strongest choice when the project is already a PlayCanvas app or
  when the splat needs heavy pre-ship cleanup.
- **Babylon.js native support** — splats as a first-class scene node
  (shadows, multi-part composition, SOG loading as of Babylon v9); the
  right call inside an existing Babylon stack.
- **antimatter15/splat** — the original minimal WebGL viewer; useful as a
  from-scratch reference, not a dependency choice for production.

## Starting points

- sparkjs.dev — Spark's docs and live examples
- mkkellogg/GaussianSplats3D on GitHub
- PlayCanvas SuperSplat (superspl.at) — capture cleanup/compression editor
- Polycam, Luma AI, Niantic Scaniverse — consumer capture apps that export
  splat scenes from a phone scan
- Babylon.js Gaussian Splatting docs/forum threads for the v9 feature set

## Search queries

- `three.js gaussian splatting Spark renderer example`
- `gsplat.js standalone splat viewer npm`
- `playcanvas supersplat compress splat web`
- `babylon.js gaussian splatting v9 shadows`
- `.ply .splat .ksplat sog format compression comparison`

## Related

[[scene-staging]] (once cleaned, a splat "object" stages like any other 3D
asset — same HDRI/ground/camera rules), [[reflections]] (specular splat
surfaces behave like baked-in reflections, not live ones), [[procedural-noise]]
and [[voronoi-cellular]] (the failure mode to avoid confusing this with:
those are *generated* fuzz, this is *captured* fuzz), [[depth-of-field]]
(splat scenes composite well with a shallow-DOF hero shot since the source
capture usually already has real optical blur baked in).
