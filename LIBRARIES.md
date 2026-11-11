# Cross-Cutting Libraries

Libraries that implement *many* entries at once live here, not in per-entry
Starting points (which stay for entry-specific libraries). After resolving
an entry, check this registry for a cross-cutting implementation before
hand-building. All registry entries are subject to the stack rule in
`CLAUDE.md` and to use-time verification: confirm currency, license, and
framework fit before recommending — this file records what a library *was*
when registered, not a guarantee of what it is now.

Registry format per library: what it is, install model, **stack-rule
class**, coverage map (its components → dictionary entries), caveats, and
when to prefer it over the entry's own techniques.

## Resilience & failure policy

The registry assumes libraries die, paywall, or drift — and is built so
none of that breaks the dictionary:

- **Entries are the durable layer.** Every coverage-map row points to an
  entry whose Techniques section teaches the effect *without* the
  library. A library is an accelerator over the entry's technique, never
  the only path. When strengthening the system, strengthen entry
  techniques — never copy library code into the dictionary (licensing,
  staleness, the pointer principle).
- **On a dead or unreachable library:** fall back to the entry's own
  techniques and search queries (which find successors); note the
  failure to the user.
- **On a paywall mid-task:** stop and surface it — the pay/build-manually
  decision is the user's. Never scrape or work around.
- **Tombstones, not deletions:** when a library is confirmed dead or
  paywalled-beyond-use, keep its block, mark it `☠ DEAD (date)` or
  `⚠ PAYWALLED (date)` at the heading, strike the recommendation, and
  add a successor pointer if one exists. The coverage map retains its
  value as a *vocabulary* map even when the code is gone.
- **Drift check:** the use-time currency verification (protocol step 4)
  is the mechanism that discovers all of the above — this file records
  registration-time truth only.

---

## Canvas UI — canvasui.dev (registered 2026-08)

**What:** ~40 framework-agnostic visual-effect components that layer
WebGL/canvas effects over *live HTML* — the content underneath stays
interactive. Six flavors (React, Solid, Preact, Vue, Svelte, vanilla TS),
one engine, same options per component. By David Haz; open source (verify
license at use time).

**Install model:** shadcn-style registry — each component is a single
standalone source file copied into the project. No npm dependency chain, no
three.js adoption. **Stack-rule class: moderate** (vendored file you own),
not structural — this makes WebGL-tier quality reachable in projects that
would refuse a rendering-stack adoption. Still confirm with the user when
it's the project's first canvas/WebGL code of any kind.

**Coverage map** (Canvas UI component → dictionary entries):

| Component | Entries |
|---|---|
| Glass, Glass Object | [[frosted-glass]], [[refraction-displacement]] |
| Frost | [[ice-frost]] |
| Liquid, Liquid Object, Ripple | [[liquid-ripple]] |
| Displacement | [[refraction-displacement]] |
| Magnify | [[hover-response]] (magnify register), [[cutaway-xray]] (lens) |
| Particle Object / Reveal / Scroll | [[particles]], [[dissolve-disintegration]], [[scroll-choreography]] |
| Glyph Rain | [[terminal-aesthetic]] / [[ascii-rendering]] (matrix rain) |
| ASCII Object | [[ascii-rendering]] |
| Dithered Object | [[dithering]] |
| Shatter | [[voronoi-cellular]] (shard webs), [[dissolve-disintegration]] |
| Glitch, VHS | [[glitch]], [[crt-scanlines]] |
| Peel | [[origami-fold]], [[page-transitions]] |
| Cloth | [[material-texture]] (fabric in motion) |
| Force Field | [[particles]], [[cursor-effects]] |
| Fire trails | [[fire-smoke]], [[motion-blur-trails]] |

(Not exhaustive — browse canvasui.dev/components for the current list; new
components ship regularly.)

**Caveats:**
- Built on the **html-in-canvas API — an experimental Chrome feature.**
  Runtime-adaptive degradation is built in (unsupported browsers get plain
  HTML plus whatever effect parts still run), which fits the dictionary's
  collapse philosophy — but this is **progressive-enhancement-only**
  territory: never route load-bearing content or interactions through the
  effect layer, and design the un-effected state as the real baseline.
- Some components are pure 3D/shader work (no HTML sampling) — those behave
  like conventional canvas components.
- Effect dials are component props; map the entry's dial vocabulary onto
  the component's options when reporting.
- **Manual fallback if unavailable:** the effects-over-live-HTML trick
  decomposes to (a) the html-in-canvas API directly where supported, or
  (b) the snapshot pipeline — render DOM to texture (html-to-image /
  html2canvas class) and run the entry's shader technique on it (see
  [[dissolve-disintegration]]'s DOM-to-particles pipeline for the worked
  example); interactivity of the underlying content is the part the
  fallback loses.

**When to prefer it:** the entry's look is wanted over *live HTML content*
(text, real DOM) rather than imagery/canvas scenes — the exact case where
the dictionary's own WebGL techniques are weakest, since they normally
require canvas-rendered content. When the target is an image, a background,
or a full 3D scene, the entry's own techniques usually stay preferable.

---

## React Bits — reactbits.dev (registered 2026-08)

**What:** 165+ animated React components across four categories — text
animations, UI components/effects, animated backgrounds, general
animations. Four variants per component (JS/TS × plain CSS/Tailwind);
official Vue and Svelte ports. Same creator as Canvas UI (David Haz) —
this is the mature, broad catalog (~45k stars); Canvas UI is the newer
experimental HTML-in-canvas line. MIT + Commons Clause (personal and
commercial use fine; verify at use time).

**Install model:** shadcn CLI / jsrepo / manual copy — vendored source you
own. **Stack-rule class: moderate, with a per-component dependency
check** — many components are dependency-light, but some pull three.js,
OGL, or GSAP as peer deps; inspect the chosen component's imports before
installing, and treat a three.js-pulling component as edging toward
structural in a project with no WebGL.

**Coverage map** (React Bits component families → dictionary entries):

| Component family | Entries |
|---|---|
| Split Text, Blur Text, Text Trail, Circular Text | [[kinetic-type]] (unit/stagger, blur-in arrival, textPath) |
| Decrypted Text, Scrambled Text | [[kinetic-type]] (decode-scramble), [[terminal-aesthetic]] |
| Shiny Text, Gradient Text | [[shimmer-sheen]], [[knockout-typography]] ([[gradients]] ink) |
| Aurora, Silk, Waves, Liquid Chrome | [[mesh-gradient]], [[liquid-ripple]], [[specular-metallic]] |
| Iridescence | [[iridescence]] |
| Letter Glitch, Glitch effects | [[glitch]], [[kinetic-type]] |
| Particles, Ballpit, Orb, Hyperspeed | [[particles]], [[motion-blur-trails]] |
| Dot Grid, Grid patterns | [[generative-art]] (pattern fields), [[blueprint]] (grids) |
| Magnet, Click Spark, Star Border | [[cursor-effects]], [[hover-response]], [[border-stroke]] (animated) |
| Metallic Paint | [[specular-metallic]], [[stone-veining]] (marbled paint) |
| Carousels, Stacks, Docks | [[carousel-filmstrip]], [[collage-scatter]], [[hover-response]] (dock magnify) |

(Not exhaustive — the catalog is large and grows; browse reactbits.dev.)

**Caveats:**
- React-first (Vue/Svelte ports exist); plain-CSS variants make it usable
  without Tailwind.
- Component quality is demo-calibrated: check [[motion-ceremony]] budgets,
  `prefers-reduced-motion` handling, and [[visible-accessibility]] before
  shipping — add the reduced-motion fallback yourself if a component lacks it.
- Commons Clause restricts *reselling the components themselves*, not using
  them in products — but verify the current license text at use time.

**Companions — smaller shadcn-registry motion collections.**
**beUI (beui.dev):** 110+ framer-motion/Tailwind components, MIT +
pro tier — its emphasis is the *surface family in motion* (Morphing
Modal, Toast Stack, Bottom Sheet, Dock, Dynamic Island, Command
Palette, Tilt Card), complementing React Bits' text/background depth;
reach for it when animating [[modal-dialog]]/[[sheet-drawer]]/
[[toast-notification]]/[[command-palette]] surfaces. **Rare UI
(rareui.com; verified 2026-09-11):** 19+ one-file React components
(Motion-animated, shadcn-registry install `npx shadcn@latest add
swamimalode07/rare-ui/<name>`, free/open source, ~1k stars, honors
`prefers-reduced-motion`), grouped as Display (Folder, Code Block,
Gravity Letters, GitHub activity, Step player, Animated counter →
[[animated-numbers]]), **AI kit** (Fluid Orb, Matrix orb, Grid Reveal →
[[ai-orb]]), Navigation (Bounce / Hook / Proximity sidebars, Scroll
Progress, Gooey nav → [[navigation-language]], [[liquid-ripple]]),
Inputs (Duration Picker, OTP Input, Delete button → [[control-language]]),
Feedback (Emoji reaction, Notification bell → [[toast-notification]],
[[chips-badges-avatars]]). A garnish source, browse-not-depend. Both
follow this entry's model and caveats (demo-calibrated; check
reduced-motion and ceremony budgets).

**When to prefer it:** React projects wanting a proven, tuned implementation
of a text/background/interaction effect faster than hand-building the
entry's technique — especially [[kinetic-type]] and background registers,
its deepest areas. Prefer the entry's own techniques when the project isn't
React, when the component's peer deps violate the stack rule, or when the
needed dial isn't exposed as a prop.

---

## Radiant — radiant-shaders.com (registered 2026-08)

**What:** ~87 curated, production-ready web shaders and effects — ~60
WebGL, ~27 Canvas 2D — each with live preview, **in-browser parameter
configuration**, and downloadable source. MIT licensed, free, by Paul
Bakaus. Organized by style tags (particles, physics, noise, organic,
geometric, full-canvas vs standalone) and by technique (WebGL vs
Canvas 2D).

**Install model:** download/vendor the source — standalone files, no
framework requirement. **Stack-rule class: trivial-to-moderate** — the
Canvas 2D entries are dependency-free and notable precisely because they
deliver shader-tier looks *without* WebGL adoption (they extend the
cheapest-medium-first ladder); WebGL entries are moderate.

**Coverage map** (examples — browse the gallery for the current list):

| Shader / tag family | Entries |
|---|---|
| Rain on Glass | [[weather-effects]] (the rain-on-glass register), [[refraction-displacement]] |
| Event Horizon | [[refraction-displacement]] (lensing), [[glow-bloom]] |
| Murmuration | [[particles]] (flocking/flow-field register) |
| Analog Drift | [[audio-reactive]] (oscilloscope), [[fui]] / [[terminal-aesthetic]] |
| Noise / Organic tags | [[procedural-noise]], [[mesh-gradient]], [[liquid-ripple]] |
| Geometric tag | [[generative-art]], [[kaleidoscope]] |
| Physics tag | [[particles]], [[liquid-ripple]], [[interaction-feel]] (pointer-driven) |

**The configurator is the standout feature:** parameters are tunable live
in the browser, which makes Radiant a *dial playground* — the user can
calibrate the exact look by hand and give the agent the settings, closing
the loop that reference galleries leave open (there the human can only
point; here they can tune). When using a Radiant shader, map its exposed
parameters onto the entry's dial names in your report.

**Caveats:** verify per-shader dependencies and the MIT text at use time;
"production-ready" still warrants the standard checks (perf budget,
`prefers-reduced-motion`, fallback for no-WebGL contexts) before shipping.

---

## ThreeUI — threeui.com (registered 2026-08; verified 2026-09-11)

**What:** copy-ready **three.js** components, WebGL backgrounds, hero
sections, and complete website templates — composed scenes, not just
single effects. By Meng To (DesignCode); repo `MengTo/threeui`;
"ThreeUI for React" variants; ships its own **MCP server** (threeui.com/mcp)
so an agent can query the catalog directly. Catalog is organized in nine
sections — Backgrounds, Buttons, CSS, Hero, Landing Pages, Motion
Design, Text Animation, Three.js, UI Elements — with technique tags
(glsl, shader, postprocessing, refraction, halftone, crt, isometric,
point-cloud, flow-field, fluid, particles, physics, parallax, scroll /
scrolltrigger, gsap, canvas2d, tailwind). ~500 sitemap URLs at
verification, many as variant sets under one item (e.g. `landscape/
{night,noon,rain,snow,storm,sunrise,sunset}`). **Freemium:** free items
alongside Pro (yearly / lifetime) — check the item's license and tier
before vendoring.

**Install model:** copy-ready source into an existing three.js project.
**Stack-rule class: structural-leaning** — everything presumes three.js;
in a project that already has three.js/R3F this is effectively moderate
(vendored components), but in a project without it, using ThreeUI *is*
the structural three.js adoption decision and must be surfaced to the
user, with a no-new-stack alternative offered (Canvas UI, Radiant, or
the entry's cheaper-medium techniques). Its **CSS section** (animated
top dock, performance gauges, koi studies, sketchbook, uplink loader)
is the exception — no three.js, moderate class.

**Coverage map** (catalog → dictionary entries):

| Catalog family | Entries |
|---|---|
| ASCII page transition, matrix-field, structure-flow fields | [[ascii-rendering]], [[terminal-aesthetic]], [[generative-art]] (flow/point fields), [[particles]] |
| Advanced Glass Material, liquid-form, liquid-clock | [[frosted-glass]], [[refraction-displacement]], [[liquid-ripple]] |
| Halftone sets (halftone-bloom, halftone-keyboard, predictive-arc/amber-halftone) | [[halftone]], [[glow-bloom]] |
| CRT / Cathode sets, retro-metallic | [[crt-scanlines]], [[specular-metallic]], [[period-looks]] |
| Elements (flame, lightning, water, condensation), emberline, warp-field | [[fire-smoke]], [[weather-effects]], [[motion-blur-trails]] |
| Landscape / sunset-valley / temple-night / nocturne / sylva | [[time-of-day]], [[scene-staging]], [[volumetric-light]] |
| Brand orbs, orb-gallery, energy-orb, thinking-button | [[ai-orb]], [[scene-staging]], [[iridescence]] |
| Isometric illustration / motion grid, iso-mail-lightshafts | [[long-shadow-isometric]], [[volumetric-light]] |
| Woven cloth, 3d-paper, wood icons, engraved certificate, holographic-glitter card | [[material-texture]], [[velvet-plush]], [[origami-fold]], [[hatching-sketch]], [[lenticular]] |
| Liquid-metal button, star-portal buttons, gradient-beam / spinning-border CTAs | [[liquid-metal]], [[control-language]], [[border-stroke]] (animated), [[glow-bloom]] |
| Text animation (particle/audio wordmarks, typography-vortex, semantic-bloom) | [[kinetic-type]], [[particles]], [[audio-reactive]] |
| Skeuomorphic toggle, performance gauges, diagnostics panel | [[skeuomorphism]], [[control-language]], [[fui]] |
| Hero sections, landing-page templates | [[scene-staging]], [[centered-stack]] (composed heroes — the full staging recipe pre-built) |

**When to prefer it:** the project already runs three.js/R3F and wants a
*composed scene* (hero, showcase, background) rather than a single
effect — it's the only registry resource at scene granularity. Prefer
Radiant/Canvas UI when there's no three.js and none is warranted; prefer
the entry's own techniques when the needed dials aren't exposed.
**Cautions:** paid items may block an agent mid-task (surface the paywall
to the user, as with 21st.dev); the site is a fully client-rendered
SPA (Supabase-backed) — plain fetches return an empty shell; use the
MCP server or `sitemap.xml` to enumerate the catalog.

---

## design.how Vault — design.how/vault (registered 2026-11)

**What:** 72 single-effect "visuals" by Arlan Marat (repo
`arla6ka/design.how`, folder `vault/`), **MIT licensed**. Each visual is
its own installable **agent skill**: a brief of what makes the effect,
a list of **FIXED** steps (the load-bearing technique — keep them), a
table of **VARIABLE** values (the safe knobs), a **React + TypeScript**
template in `skill/assets/template/`, a `references/perf.md`, and a
`scripts/check.mjs` that re-checks the copied code against the
performance contract. The vault is heavy on moving type (about 30 of
72); the rest is shader fields, print/pixel/glitch looks, materials and
a few interface pieces. Live previews at `design.how/vault/<slug>`.

**Install model:** `npx skills add https://design.how/vault/<slug>`
(or copy the folder from GitHub) — installs the skill; the agent then
copies the template into the project (vendored source you own, no npm
package). React/TS only; the engines are framework-light, so porting
off React means rewriting the card wrapper, not the effect.

**Stack-rule class — per medium:**
- **CSS/DOM, SVG, Canvas 2D, video (50 of 72): trivial** — no
  dependencies beyond React; dependency-free engines.
- **Raw WebGL / WebGL2 (19): trivial-to-moderate** — hand-written
  fragment shaders on one full-screen quad/triangle, **no three.js,
  no OGL/regl**; the cost is a WebGL code path and its no-WebGL
  fallback, not a dependency.
- **three.js (3: crystal-cluster, image-sphere, sandbox): check** —
  these import three.js; in a project without it this is the
  structural three.js decision (surface it to the user, as with
  ThreeUI), and the sandbox/crystal-cluster shaders port to raw WebGL
  if three.js isn't wanted.

**Shared guarantees (registration-time, per the repo README):** every
visual pauses off-screen and on a hidden tab, draws **one still frame
under `prefers-reduced-motion`**, caps devicePixelRatio at **2** (some
WebGL ones at 1.5), handles `webglcontextlost`, and disposes on
unmount; type falls back to a system stack in `fonts.css`
(`--visual-sans` etc. — put the project face first); photo/clip
visuals ship placeholder media at the paths they read. The skill's
`check.mjs` verifies the copy still honors this.

**Coverage map.** Medium: **bold = a true fragment shader** (21
visuals: 19 raw WebGL/WebGL2 + 2 three.js shaders); `three.js` alone =
scene graph without a custom shader. Technique lines are this
dictionary's summary, not the Vault's text.

**1. Kinetic type — motion in Canvas 2D / DOM / SVG (22)**

| Visual | Medium | Technique | Entries |
|---|---|---|---|
| [Stack type](https://github.com/arla6ka/design.how/tree/main/vault/stack-type) | Canvas 2D | Letters as columns stacked nine deep on a shallow drum, each column stepping to the solid middle row on its own beat; outer rows outlined and scrambled | [[kinetic-type]] |
| [Roll type](https://github.com/arla6ka/design.how/tree/main/vault/roll-type) | Canvas 2D | Words roll off an unseen cylinder with overshoot; moving words seen through a glass-rod bend with colour fringe | [[kinetic-type]], [[refraction-displacement]], [[chromatic-aberration]] |
| [Warp type](https://github.com/arla6ka/design.how/tree/main/vault/warp-type) | Canvas 2D | Each sentence's verb deforms its own glyphs (wave, echo stair, fold, sort) on hard half-second cuts | [[kinetic-type]], [[morphing]] |
| [Flip type](https://github.com/arla6ka/design.how/tree/main/vault/flip-type) | Canvas 2D | Per-letter row drop on an extreme in-out curve while each glyph flickers through random letters (split-flap logic) | [[kinetic-type]] |
| [Shutter type](https://github.com/arla6ka/design.how/tree/main/vault/shutter-type) | Canvas 2D | Rolling shutter: horizontal stripes each sample the scene slightly later, so moving type tears into bands and still type stays whole | [[kinetic-type]], [[glitch]], [[temporal-displacement]] |
| [Pop type](https://github.com/arla6ka/design.how/tree/main/vault/pop-type) | Canvas 2D | Gravity drop with damped-spring squash per letter, a bulge-field swell and a pop into dashes, stepped at 10 fps | [[kinetic-type]], [[inflatable]], [[frame-rate-aesthetics]], [[squash-and-stretch]] |
| [Verb type](https://github.com/arla6ka/design.how/tree/main/vault/verb-type) | Canvas 2D | Five verbs act out their meaning (move, skew, rotate, break, condense) with off-register ghosts and print mottle | [[kinetic-type]], [[print-artifacts]] |
| [Flood type](https://github.com/arla6ka/design.how/tree/main/vault/flood-type) | Canvas 2D | Letters turn to face front, then rush the camera at heavy-tailed angles and depths until they overrun the frame, with a flat speed smear | [[kinetic-type]], [[zoom-through]], [[motion-blur-trails]] |
| [Swing type](https://github.com/arla6ka/design.how/tree/main/vault/swing-type) | Canvas 2D | Pendulum row whose per-letter y-turn is proportional to screen x, faked with affine-sheared glyph bitmaps (3D letters with no WebGL), with detents | [[kinetic-type]], [[forced-perspective]] |
| [Bond type](https://github.com/arla6ka/design.how/tree/main/vault/bond-type) | Canvas 2D | Bitmap-face words unfold into a molecule chain joined by stair-stepped pixel bonds on the font's grid | [[kinetic-type]], [[pixel-art-technique]] |
| [Dash cascade](https://github.com/arla6ka/design.how/tree/main/vault/dash-cascade) | Canvas 2D | Glyphs built from rows of round-capped dashes scaling about one axis with a per-letter delay law, stepped at 10 fps | [[kinetic-type]], [[frame-rate-aesthetics]] |
| [Wild type](https://github.com/arla6ka/design.how/tree/main/vault/wild-type) | Canvas 2D | Live-font outlines traced to vectors and inflated through one Catmull-Rom warp mesh, then collapsed exactly home; registration slip and grain | [[kinetic-type]], [[morphing]], [[print-artifacts]] |
| [Loud burst](https://github.com/arla6ka/design.how/tree/main/vault/loud-burst) | Canvas 2D | Type-on with landing squash; one word's glyphs are scanned into ink runs that morph into flying darts with shockwave and camera kick | [[kinetic-type]], [[shatter]], [[squash-and-stretch]] |
| [Stamp type](https://github.com/arla6ka/design.how/tree/main/vault/stamp-type) | Canvas 2D | Highlight-bar lines hop along stepped 10 Hz tracks, stamping short-lived flat silhouettes where they just were | [[kinetic-type]], [[frame-rate-aesthetics]], [[motion-blur-trails]] |
| [Word carousel](https://github.com/arla6ka/design.how/tree/main/vault/word-carousel) | Canvas 2D | Four words on a slot conveyor that slams on fat-tailed eases, with velocity-proportional motion blur | [[kinetic-type]], [[carousel-filmstrip]], [[motion-blur-trails]] |
| [Sunset slam](https://github.com/arla6ka/design.how/tree/main/vault/sunset-slam) | Canvas 2D | Squash then slam into an extrusion made of copies converging on a vanishing point, coloured by a window sliding over a dawn ramp | [[kinetic-type]], [[retro-futurism]], [[long-shadow-isometric]], [[squash-and-stretch]] |
| [Kinetic typography](https://github.com/arla6ka/design.how/tree/main/vault/kinetic-typography) | Canvas 2D | One letter sliced into tiles, each sampling from an offset set by two crossed sine waves (cloth ripple); duotone, fringe, grain | [[kinetic-type]], [[duotone-gradient-map]], [[chromatic-aberration]] |
| [Spike type](https://github.com/arla6ka/design.how/tree/main/vault/spike-type) | Canvas 2D | Knockout word whose traced outline grows hundreds of hand-drawn spikes on length-dependent springs under the pointer | [[knockout-typography]], [[kinetic-type]] |
| [Reality split](https://github.com/arla6ka/design.how/tree/main/vault/reality-split) | Canvas 2D | Design-tool choreography: a selected word splits into letter objects with handles, is inspected letter by letter, pops back whole | [[kinetic-type]], [[layout-motion]] |
| [Typer](https://github.com/arla6ka/design.how/tree/main/vault/typer) | CSS/DOM | Per-character state flicker (pill, inverse block, outline) on a wave before settling; same-state neighbours merge into one bar | [[kinetic-type]], [[terminal-aesthetic]] |
| [Ransom note](https://github.com/arla6ka/design.how/tree/main/vault/ransom-note) | CSS/DOM | Each letter its own clip-path paper scrap with seeded face, ink, case and tilt, rising in one by one | [[kinetic-type]], [[collage-scatter]], [[paper-ephemera]], [[ransom-note-type]] |
| [Design tiles](https://github.com/arla6ka/design.how/tree/main/vault/design-tiles) | SVG | Words on colour fields made of one measured rect per glyph, so each field steps to the letters' real heights | [[type-composition]], [[kinetic-type]] |

**2. Shader type & reveals — WebGL (9, all true shaders)**

| Visual | Medium | Technique | Entries |
|---|---|---|---|
| [Smear type](https://github.com/arla6ka/design.how/tree/main/vault/smear-type) | **WebGL shader** | Small pre-traced layer sequences played a frame at a time: a ground-coloured cloud with a hot edge uncovers type that smears where half-hidden, over churning ribbons | [[kinetic-type]], [[liquid-reveal]], [[motion-blur-trails]] |
| [Cloud type](https://github.com/arla6ka/design.how/tree/main/vault/cloud-type) | **WebGL2 shader** | Letters arrive as soft noise puffs, sharpen one by one with a dithered edge, then dissolve back to cloud; pointer acts as breeze | [[kinetic-type]], [[procedural-noise]], [[dissolve-disintegration]] |
| [Rush type](https://github.com/arla6ka/design.how/tree/main/vault/rush-type) | **WebGL shader** | Word swings toward camera and stretches ~12x; per-channel averaging of many vertical-scale samples tears it into coloured light streaks | [[kinetic-type]], [[motion-blur-trails]], [[chromatic-aberration]] |
| [Glass type](https://github.com/arla6ka/design.how/tree/main/vault/glass-type) | **WebGL shader** | Serif type seen through a magnifier lens whose radius carries a sine ripple and whose rim fringes colour | [[refraction-displacement]], [[chromatic-aberration]], [[kinetic-type]] |
| [Blur glow](https://github.com/arla6ka/design.how/tree/main/vault/blur-glow) | **WebGL shader** | Downsampled multi-pass gaussian bloom behind a crisp word, mapped through a five-stop ramp; letter-by-letter cross-dissolve | [[glow-bloom]], [[duotone-gradient-map]], [[film-grain]] |
| [Chromatic glow](https://github.com/arla6ka/design.how/tree/main/vault/chroma-glow) | **WebGL shader** | Word blooms on a coloured wall and its halo splits into warm, cool and fringe copies that drift apart | [[chromatic-aberration]], [[glow-bloom]], [[vignette]] |
| [Fade motion](https://github.com/arla6ka/design.how/tree/main/vault/fade-motion) | **WebGL shader** | Long-exposure trail from ~200 faint overlapping copies (coverage 1-(1-a)^k), computed per pixel in one pass rather than blurred | [[motion-blur-trails]], [[pixel-art-technique]] |
| [Blur reveal](https://github.com/arla6ka/design.how/tree/main/vault/blur-reveal) | **WebGL shader** | Text dissolves in through a cloudy noise front, blurred at the front and sharp behind, with a faint edge glow | [[dissolve-disintegration]], [[depth-of-field]], [[procedural-noise]] |
| [Text reveal](https://github.com/arla6ka/design.how/tree/main/vault/text-reveal) | **WebGL shader** | Fractal-noise front sweeps diagonally, un-blurring text into focus as it uncovers it; pointer wipes clear | [[dissolve-disintegration]], [[depth-of-field]], [[film-grain]] |

**3. Fields, patterns & light (11)**

| Visual | Medium | Technique | Entries |
|---|---|---|---|
| [Ripple grid](https://github.com/arla6ka/design.how/tree/main/vault/ripple-grid) | **WebGL shader** | Gaussian blob lattice evaluated as separable row x column sums, displaced into rings and a spiral and back | [[generative-art]], [[liquid-ripple]] |
| [Voice wave](https://github.com/arla6ka/design.how/tree/main/vault/voice-wave) | **WebGL2 shader** | One glowing ribbon drawn four times slightly out of phase so it splits into colour where it bends; simulated voice or mic via WebAudio | [[audio-reactive]], [[ai-orb]], [[glow-bloom]] |
| [Crystal cluster](https://github.com/arla6ka/design.how/tree/main/vault/crystal-cluster) | **three.js + shader** | Flat-shaded crystal with constant-width screen-space outline in a beam made of summed gaussian columns with flicker and rising bands | [[volumetric-light]], [[toon-outline]], [[scene-staging]] |
| [Eclipse grid](https://github.com/arla6ka/design.how/tree/main/vault/eclipse-grid) | Canvas 2D | Eighty ring-over-disc cells parting into crescents on their own phases at 25 fps; pointer acts as a lamp | [[generative-art]], [[frame-rate-aesthetics]] |
| [Phase table](https://github.com/arla6ka/design.how/tree/main/vault/phase-table) | Canvas 2D | Grid of Lissajous curves (row = x frequency, column = y), shaded as steel wire from exact normals on one shared phase | [[generative-art]], [[specular-metallic]] |
| [Peak gradient](https://github.com/arla6ka/design.how/tree/main/vault/peak-gradient) | SVG | Row of heavily blurred columns sharing one vertical rainbow gradient, arranged tallest-in-centre and rising via scaleY | [[gradients]], [[mesh-gradient]], [[glow-bloom]] |
| [Dot cut](https://github.com/arla6ka/design.how/tree/main/vault/dot-cut) | Canvas 2D | Lattice of touching circles drawn as one even-odd path; letters and patterns appear as removed circles with wipe/ripple/scatter transitions | [[knockout-typography]], [[generative-art]] |
| [Dot globe](https://github.com/arla6ka/design.how/tree/main/vault/dot-globe) | Canvas 2D | Superquadric solids tiled with projected rounded squares, a bitmap symbol painted across tiles and passed along the row | [[pixel-art-technique]], [[generative-art]] |
| [Checker conveyor](https://github.com/arla6ka/design.how/tree/main/vault/checker-conveyor) | Canvas 2D | Nine checker rows each whip one screen width a beat after the row above, carrying the next scene in | [[page-transitions]], [[generative-art]] |
| [Slide stack](https://github.com/arla6ka/design.how/tree/main/vault/slide-stack) | Canvas 2D | Five blocks phase-offset into a travelling wave; the accent shape is their convex hull, plus motion blur | [[layout-motion]], [[motion-blur-trails]] |
| [Tile field](https://github.com/arla6ka/design.how/tree/main/vault/tile-field) | Canvas 2D | Wordmark sampled into tiny tiles that swell and tint under an interference wave and a trailing pointer brush | [[cursor-effects]], [[generative-art]] |

**4. Pixel, print & glitch (12)**

| Visual | Medium | Technique | Entries |
|---|---|---|---|
| [Spray burst](https://github.com/arla6ka/design.how/tree/main/vault/spray-burst) | **WebGL shader** | Three flat inks per pixel; every edge a dithered spray fringe re-rolled at 24 fps across six geometric scenes | [[print-artifacts]], [[dithering]], [[frame-rate-aesthetics]] |
| [Pixel threshold](https://github.com/arla6ka/design.how/tree/main/vault/pixel-threshold) | **WebGL shader** | Word thresholded into hard pixel blocks with staircased halo and block shadow on a printed moire/grain/dust plate; grid collapses between words | [[pixelation]], [[print-artifacts]], [[moire]] |
| [Pixel scan](https://github.com/arla6ka/design.how/tree/main/vault/pixel-scan) | **WebGL shader** | Diagonal scan band breaks a word into jittered two-colour block spray, leaving it solid behind | [[pixelation]], [[dissolve-disintegration]], [[cursor-effects]] |
| [Symbols effect (sandbox)](https://github.com/arla6ka/design.how/tree/main/vault/sandbox) | **three.js + shader** | Image/video snapped to cells, brightness bucketed into four bands, each band stamping its own tinted symbol | [[ascii-rendering]], [[halftone]], [[duotone-gradient-map]] |
| [Brick reveal](https://github.com/arla6ka/design.how/tree/main/vault/brick-reveal) | **WebGL shader** | Picture restyled as toy bricks, voxels or cartoon, melting back to the photo in merging rounded blocks along a pointer trail | [[pixelation]], [[mosaic-tile]], [[image-treatment]] |
| [Misprint type](https://github.com/arla6ka/design.how/tree/main/vault/misprint-type) | Canvas 2D | Fill, outline and foil prints of one word as tilting planes that never register; press-and-hold pulls them into register | [[print-artifacts]], [[iridescence]], [[kinetic-type]] |
| [Ink flood](https://github.com/arla6ka/design.how/tree/main/vault/ink-flood) | Canvas 2D | Width-breathing pen scribble zooms to flood the frame and becomes the next ground, under a fixed halftone screen | [[halftone]], [[illustration-style]] |
| [Pixel cycle](https://github.com/arla6ka/design.how/tree/main/vault/pixel-cycle) | Canvas 2D | Downscale-then-upscale with smoothing off along an eased ramp of block sizes (no shader); hover lifts blocks | [[pixelation]], [[pixel-art-technique]] |
| [Pixel fire](https://github.com/arla6ka/design.how/tree/main/vault/pixel-fire) | Canvas 2D | 16x16 flipbook generated from a tiny heat simulation; the pointer edits the live pixel buffer | [[pixel-art-technique]], [[fire-smoke]] |
| [Pixel brushes](https://github.com/arla6ka/design.how/tree/main/vault/pixel-brushes) | Canvas 2D | Square-cell stamps dropped along a path; spacing, jitter, scatter, follow and thinning make line vs ribbon vs spray, snapped to device pixels | [[pixel-art-technique]], [[illustration-style]] |
| [Glitch word](https://github.com/arla6ka/design.how/tree/main/vault/glitch-word) | CSS/DOM | Stacked copies clipped into horizontal bands and shoved sideways in stepped Web Animations bursts, with lookalike-glyph flicker | [[glitch]], [[chips-badges-avatars]] |
| [Datamosh](https://github.com/arla6ka/design.how/tree/main/vault/datamosh) | Canvas 2D | Falling colour columns stretched open through the centre and squeezed at the edges in a zig-zag — a stylised broken-decode loop, not real codec abuse | [[glitch]], [[video-feedback]] |

**5. Materials & surfaces (9)**

| Visual | Medium | Technique | Entries |
|---|---|---|---|
| [Liquid metal](https://github.com/arla6ka/design.how/tree/main/vault/liquid-metal) | **WebGL shader** | Word blurred into a two-scale height field; normals from its gradient look up a five-stop horizon ramp (matcap) tilted by the pointer | [[liquid-metal]], [[specular-metallic]], [[reflections]] |
| [Realistic emboss](https://github.com/arla6ka/design.how/tree/main/vault/emboss) | **WebGL shader** | CPU-blurred height field from text/SVG, normals from slope, one-light highlight and shadow over a real plaster texture and grunge | [[concrete-plaster]], [[skeuomorphism]], [[rubber-soft-touch]], [[relief-emboss]] |
| [Folder embroidery](https://github.com/arla6ka/design.how/tree/main/vault/folder-embroidery) | **WebGL shader** | Word-silhouette patches with satin lettering and merrowed border, lit through a fabric-weave bump and puff bevel; glint on hover, press-in | [[embroidery]], [[material-texture]], [[stickers-badges]] |
| [Word stickers](https://github.com/arla6ka/design.how/tree/main/vault/word-stickers) | **WebGL shader** + DOM | Die-cut stickers as subdivided quads; a peel shader curls the grabbed one, thrown with momentum and friction | [[stickers-badges]], [[origami-fold]], [[interaction-feel]] |
| [Holo](https://github.com/arla6ka/design.how/tree/main/vault/holo) | CSS/DOM (3D) | Pointer-tilted card with parallax rainbow foil layers that lag a beat, glare following the light, and a duotone image that flips polarity past a tilt | [[iridescence]], [[lenticular]], [[hover-response]] |
| [Colour depth](https://github.com/arla6ka/design.how/tree/main/vault/color-depth) | CSS/DOM | Depth from stacked gradients and inset shadows on one pill — ten recipes (glossy, glowing, brushed metal, foil, glass, satin) | [[skeuomorphism]], [[control-language]], [[light-on-flat]] |
| [Smooth corners (squircle)](https://github.com/arla6ka/design.how/tree/main/vault/squircle) | SVG | Superellipse path used as clip-path on a layered glossy button, so curvature ramps into the edge with no kink | [[shape-language]], [[control-language]] |
| [Liquid UI](https://github.com/arla6ka/design.how/tree/main/vault/liquid-ui) | SVG | Smooth-union SDF of rounded boxes traced by marching squares + Chaikin into one path behind real DOM; one knob from inverse-rounded joints to gooey | [[sdf-rendering]], [[liquid-ripple]], [[card]] |
| [Hover video button](https://github.com/arla6ka/design.how/tree/main/vault/hover-video) | Video (alpha WebM/HEVC) | Pill swaps to a pre-rendered transparent clip of its label inflating; a reversed clip rewinds from the same point on leave | [[inflatable]], [[hover-response]], [[control-language]] |

**6. Interface pieces & presence (6)**

| Visual | Medium | Technique | Entries |
|---|---|---|---|
| [AI lights](https://github.com/arla6ka/design.how/tree/main/vault/ai-lights) | CSS/DOM (+ canvas masks) | One body morphing between four agent surfaces; each change announced by a conic-gradient rim pulse on registered custom properties through blurred stroke masks | [[ai-orb]], [[border-stroke]], [[layout-motion]] |
| [Vector editor](https://github.com/arla6ka/design.how/tree/main/vault/vector-editor) | SVG | Self-drawing selection frame with corner handles and live size badge around any element, plus a draggable bezier path rig | [[spatial-canvas]], [[control-language]] |
| [Cursors](https://github.com/arla6ka/design.how/tree/main/vault/cursors) | CSS/DOM | Labelled collaborator cursors orbiting a frosted-glass word on slow ellipses, scattering from the real pointer | [[presence-collaboration]], [[frosted-glass]], [[cursor-effects]] |
| [Orbit](https://github.com/arla6ka/design.how/tree/main/vault/orbit) | Canvas 2D | 26 labelled cursors on an invisible sphere, depth shown by scale/fade/focus only; spin with inertia, throwable | [[presence-collaboration]], [[radial-orbital]], [[depth-of-field]] |
| [Badge trail](https://github.com/arla6ka/design.how/tree/main/vault/badge-trail) | CSS/DOM | Non-overlapping hue-walking badges slam in behind the pointer and flick out; ghost cursor when idle | [[cursor-effects]], [[chips-badges-avatars]] |
| [Code trail](https://github.com/arla6ka/design.how/tree/main/vault/code-trail) | CSS/DOM | Staircase of code fragments on coloured bars, each row easing toward the one above as it chases the pointer | [[cursor-effects]], [[terminal-aesthetic]] |

**7. Image & 3D galleries (3)**

| Visual | Medium | Technique | Entries |
|---|---|---|---|
| [Image sphere](https://github.com/arla6ka/design.how/tree/main/vault/image-sphere) | three.js | Camera-facing photo planes on an invisible drifting sphere; flick-to-spin, hover enlarge, click glides to a lightbox | [[spatial-canvas]], [[carousel-filmstrip]], [[zoom-through]], [[image-cloud]] |
| [Image galaxy](https://github.com/arla6ka/design.how/tree/main/vault/image-galaxy) | CSS/DOM (3D) | Photos at random depths under one perspective drift and wrap forever, fed by scroll and drag | [[parallax]], [[spatial-canvas]], [[image-cloud]] |
| [Ghosty reveal](https://github.com/arla6ka/design.how/tree/main/vault/ghosty-reveal) | CSS/DOM | Oversized feathered gradient mask slid with `mask-position` so images bleed in out of fog, staggered over a scattered layout | [[liquid-reveal]], [[collage-scatter]], [[image-treatment]] |

**Caveats:**
- **Demo-shaped, not component-shaped.** Most visuals are a fixed-aspect
  hero "card" playing a scripted loop (set words, scenes, colourways);
  the reusable part is the FIXED technique, not the composition. Map the
  VARIABLE table onto the entry's dials when reporting.
- **Type-heavy and loud.** Many loops cut every 0.5-3 s; check against
  [[motion-ceremony]] budgets — a vault loop belongs in a hero or empty
  state, rarely in working UI. Reduced motion yields a still, not a calm
  alternative layout.
- **React-only templates.** Non-React projects port the engine by hand.
- **WebGL fallback is on you.** The raw-WebGL visuals stop on context
  loss but don't ship a CSS fallback; supply the entry's cheaper-medium
  technique for no-WebGL contexts.
- Verify MIT text, three.js version (for the three three.js visuals) and
  the skill's current FIXED list at use time; this registry records
  registration-time truth.

**When to prefer it:** when the brief matches one of these specific
looks and the project is React — the FIXED list is a vetted recipe with
the perf contract already met, which beats hand-deriving a shader from
the entry. Especially strong over hand-building for the true shaders in
families 2, 4 and 5 ([[liquid-metal]], [[embroidery]], [[chromatic-aberration]],
[[motion-blur-trails]] long-exposure, [[ascii-rendering]] symbol halftone)
and for [[kinetic-type]], where it is the deepest registry source after
React Bits. Prefer the entry's own techniques when the look needs to be
a reusable component (not a hero loop), when the project isn't React,
when a CSS technique in the entry suffices (cheapest medium first), or
when the three.js visuals would introduce three.js. Prefer Radiant for
ambient full-canvas backgrounds; ThreeUI for composed three.js scenes.

---

## shadcn/ui — ui.shadcn.com (registered 2026-08) — the surface substrate

**What:** the canonical React/Tailwind component system — accessible
primitives (built on Radix) for the entire [[card]]/[[panel-well]]/
[[modal-dialog]]/[[sheet-drawer]]/[[popover-menu]]/[[toast-notification]]/
[[disclosure]]/[[command-palette]] surface family, plus blocks, charts,
and forms. Open source, open code.

**Role in this registry — substrate, not aesthetics.** Its copy-the-source
install model is the pattern half this registry distributes through
("shadcn registry" installs), and it is where the surface entries'
"use a maintained component" advice resolves by default in React: it
solves *semantics, keyboard behavior, and accessibility* — the parts of
the surface contracts that are laws. What it does **not** provide is
identity: the unmodified shadcn look is the mode-collapse baseline the
dictionary exists to push past. The division of labor: shadcn supplies
the contract-correct skeleton; the dictionary's systems ([[color-roles]],
[[shape-language]], [[elevation]], [[spacing-density]],
[[typographic-voice]], [[motion-ceremony]]) are what you restyle it with.
**Stack-rule class: moderate** in any React project; it is often already
present — inventory before adding anything that duplicates it.

---

## AI-native interface kits — beautifului.dev (registered 2026-08)

A small copy-paste library for the **AI-interface state language**:
streaming text, thinking/working states, tool-call traces, diff/records
tables, approval and recommendation cards, chat composers (beautifului.dev
— MIT, React, AI-product primitives). **Use as:** a reference
implementation when building AI-product UI; pairs with
[[ai-interaction]] (the behaviors), [[conversation-layout]],
[[loading-language]] (thinking/streaming states), [[kinetic-type]]
(streaming text), [[timeline-feed]] (tool traces). Its former sibling
transitions.dev now has its own section below. **Caution:** verify
currency — this space is young and moving fast.

---

## transitions.dev — transitions.dev (registered 2026-08; verified 2026-11-11)

**What:** Jakub Antalik's library of UI state transitions, 44 on the
site (36 free in the public skill, the rest Pro), each a namespaced
(`.t-*`) CSS snippet with a React variant, a `prefers-reduced-motion`
guard, and values read from one shared motion-token scale (durations,
easings, distances, scales, blurs). Around it: a coding-agent skill, a
Builder, an MCP server, and the **Motion Agent** (registered under Craft
Rules & Tuning Tools below). Repo: github.com/Jakubantalik/transitions.dev.

**Licence — read before using.** The transitions and skills are free for
unlimited personal and commercial use, including by agents, and may be
modified and shipped in products. The restriction: **never redistribute
the collection or a substantial part of it** as a library, pack, or kit.
For this dictionary that means link and route to it, never copy its
snippets into entries (the resilience policy's rule, enforced here by
licence). Tooling (`agent/`, `cli/`) is MIT. Pro transitions and paid
Agent features need a plan, and **company use of Pro requires Business,
not Pro**: surface that to the user rather than pick a tier for them.

**Install model:** copy-paste from a transition's code panel;
`npx transitions-dev add --free` writes the free set to
`./transitions/`; `npx skills add Jakubantalik/transitions.dev` installs
the free skill. **Stack-rule class: trivial** (CSS, no runtime deps).

**Coverage map** (free unless marked Pro):

| Family | Transitions | Entries |
|---|---|---|
| Controls & feedback | toggle, checkbox check, icon swap, success check, error state shake, like button, learn-more hover, spinner→check (Pro), Get Pro glow (Pro), confetti burst (Pro) | [[control-language]], [[live-feedback]], [[hover-response]], [[particles]], [[ui-state-transitions]] |
| Menus, overlays & panels | menu dropdown (origin-aware), dropdown morph, plus→menu morph, gooey plus menu (Pro), modal open/close, panel reveal, tooltip, accordion | [[popover-menu]], [[modal-dialog]], [[sheet-drawer]], [[disclosure]], [[pointer-intent]], [[morphing]], [[ui-state-transitions]] |
| Notifications & status | toast open/close, banner stacking, notification badge | [[toast-notification]], [[status-signals]] |
| Cards, images & lists | card resize, avatar group hover, 3D card tilt, card stack hover (Pro), image open tilt (Pro), smoky delete dissolve (Pro), drag & drop with physics (Pro) | [[layout-motion]], [[chips-badges-avatars]], [[hover-response]], [[dissolve-disintegration]], [[drag-and-drop]] |
| Text & numbers | text states swap, text morph, text swap soft, texts reveal, input clear with dissolve, shimmer text, organic shimmer (Pro), number pop-in, spinning counter, number subtle change, donut chart | [[animated-numbers]], [[kinetic-type]], [[shimmer-sheen]], [[chart-voice]], [[ui-state-transitions]] |
| Navigation | page side-by-side, tabs sliding | [[page-transitions]], [[navigation-language]], [[overview-navigation]] |
| Loaders & AI states | skeleton loader and reveal, matrix dot loader, thinking states, reasoning stream, streaming text, image generation placeholder (Pro) | [[loading-language]], [[ai-interaction]], [[ai-orb]] |

**Its decision rules are the useful part.** The skill routes by visible
element, then verb: shared letters between labels → text morph; nothing
shared → state swap; values changing under a view → soft swap; a
number's change as event vs quiet update vs noticed → spinning counter
vs subtle change vs pop-in. [[ui-state-transitions]] carries that
grammar in our own words, with the token scale as its reference values.

**When to prefer it:** any product UI needing open/close, swap, or
feedback transitions with calibrated, consistent values. Prefer an
entry's own technique when the project already has a motion system
(Motion/framer-motion springs) the snippets would fight.

---

## Libraries.dev — libraries.dev (registered 2026-09-11; verified 2026-11-11)

**What:** single-purpose effect libraries for AI interfaces by Jakub
Antalik (with Alexandr Brinza, Martin Petercak), built to be installed
by coding agents: every page has a **Copy prompt** button that hands the
agent the install line, usage, and full prop vocabulary. React 18+,
`theme="auto"` follows data-theme / dark class / `prefers-color-scheme`.
Since registration it has grown voice libraries, bot avatars, a SwiftUI
screen transition, and a **Models** section of on-device ML input.

**Libraries:**

| Package | Platforms | What it does | Entries |
|---|---|---|---|
| `border-beam` | React, SwiftUI, RN | rainbow glow riding any element's border | [[border-stroke]] |
| `thinking-orbs` | React, SwiftUI, RN | dotted thought-orb loaders, nine tuned states | [[ai-orb]], [[loading-language]] |
| `liquid-gooey` | React | gooey merge, jelly shape change, contact dissolve | [[liquid-ripple]], [[morphing]], [[shape-language]] |
| `metal-fx` | React | liquid-metal WebGL rings, buttons, text, badges | [[liquid-metal]], [[specular-metallic]], [[control-language]] |
| `img-fx` | React (peers on three) | WebGL image-generation loader for cards | [[loading-language]], [[dissolve-disintegration]], [[pixelation]] |
| `voice-glow` | React, SwiftUI | audio-reactive glow rising from a chat input's bottom edge; travelling beam while processing | [[voice-interaction]], [[audio-reactive]], [[glow-bloom]] |
| `voice-ring` | React (canvas + small WebGL lens pass), SwiftUI | voice-reactive ring: idle / listening / speaking / processing, eased between | [[voice-interaction]], [[ai-orb]], [[audio-reactive]] |
| `bot-avatars` | React (canvas 2D), SwiftUI, RN (in repo) | 18 plush agent avatars with default / working / sleeping states, fur shading, pointer-following eyes | [[ai-orb]], [[chips-badges-avatars]], [[velvet-plush]], [[squash-and-stretch]] |
| DistortionWavesKit | SwiftUI only (Metal); React "coming soon" | screen transition: a colour wave carries one screen into the next from the touched control | [[page-transitions]], [[liquid-reveal]], [[chromatic-aberration]] |

**Models (on-device input, new):**

| Model | Platforms | What it does | Entries |
|---|---|---|---|
| Magnetic UI (MagnetKit / `magnetkit`) | iOS 17+, Android 10+, RN dev builds; web only via the Magnet Bridge Android app | reads the magnetometer to locate a held magnet over the screen (position, height, presence, air taps) | [[spatial-input]] |
| Voice position (VoicePositionKit, beta) | iPhone, iOS 17+, tested on 15 Pro | which side a voice comes from (left / ahead / right) via the stereo mics | [[voice-interaction]], [[spatial-input]] |

**Install model:** `npm install <package>` (or paste the prompt); Swift
Package Manager for the SwiftUI kits. Model files (`.mfxl`) are a
separate download with a free account.

**Stack-rule class:** trivial for the zero-dep React packages; `img-fx`
is moderate-to-structural (three); the SwiftUI-only kits don't apply to
web projects at all. The Models are **structural**: a new input
paradigm and a native build.

**Licensing — two regimes.** Library code is MIT (stated for the five
originals and the Swift kits; the pages for `voice-glow` and
`bot-avatars` don't state one, so verify on npm). The **Models** use the
Libraries.dev Model License: free for development, prototypes, internal
tools and non-commercial apps; a **commercial release needs a Pro,
Business, or Enterprise plan**. That's a paywall at ship time, not at
build time: surface it before the user builds on a model. **Pro** also
unlocks the Studio (deeper config + export) and presets.

**Caveats:** same demo-calibration caveats as React Bits (check
ceremony budgets, reduced motion). `thinking-orbs`, `voice-ring` and
`bot-avatars` sit alongside Orbkit, Murmur, and `orbloom` in the
[[ai-orb]] implementation set; compare materials before picking.

**When to prefer it:** a React or SwiftUI project wanting exactly one
of these effects with a small footprint and an agent-friendly install;
prefer React Bits / Rare UI when the need is broader, and the entry's
own techniques when the project isn't React or Swift.

---

# Craft Rules & Tuning Tools

Not effect libraries — *quality-rule sets* and *dial-tuning tools*.
They don't implement an entry; they enforce the foundation entries'
laws or make an entry's dials adjustable live. Use them at the
implementation and iteration steps of the protocol, not at resolution.

## transitions.dev Motion Agent — a motion linter (registered 2026-11-11)

**What:** `npx transitions-agent` scans a codebase locally and
deterministically (no AI, no account) and prints a 0-100 motion score,
each finding mapped to a transitions.dev recipe. Findings seen in its
rules: overlays (modal, tooltip) appearing with no transition; hover
that snaps because the base state has no transition; `transition: all`
animating layout; hardcoded durations off the token scale; durations
over ~1s; no `prefers-reduced-motion` guard. Fix modes (polish, revamp)
open changes only after approval; a GitHub Action can gate PRs on a
minimum score. Tooling MIT; hosted fixes are metered (free tier 10/month).

**Use at:** the iteration step for [[motion-ceremony]] and
[[ui-state-transitions]]: run the scan to find motion that breaks the
grammar, then fix in dial vocabulary. **Stack-rule class: trivial**
(dev-only CLI). **Caution:** the score is calibrated to its own token
scale; a project with a deliberate different motion system will score
low for reasons that aren't defects. Treat findings as prompts, not verdicts.

---

## userinterface.wiki — a rules skill (registered 2026-09-11)

**What:** "A living manual for better interfaces" by Raphael Salaja —
articles with live demos (12 Principles of Animation, Laws of UX,
Animating Container Bounds, Morphing Icons, Mastering AnimatePresence,
Sounds on the Web, To Spring or Not To Spring, Pseudo Elements,
Generating Sounds with AI) distilled into **152 rules across 12
categories**, packaged as an Agent Skill (`npx skills add
raphaelsalaja/userinterface-wiki`; repo MIT, ~900 stars). Rule prefixes
map onto dictionary entries:

| Rule category (prefixes) | Entries it enforces |
|---|---|
| Animation Principles (`timing-`, `physics-`, `staging-`), Timing Functions (`spring-`, `easing-`, `duration-`, `none-`) | [[motion-ceremony]] (the 300ms law, ease-out entrance / ease-in exit, linear only for progress), [[interaction-feel]] (springs for gestures/interruptible motion) |
| Exit Animations (`exit-`, `presence-`, `mode-`, `nested-`), Container Animation (`container-`) | [[layout-motion]] (enter/exit, animated bounds), [[disclosure]] |
| Morphing Icons (`morphing-`) | [[morphing]], [[iconography-style]] |
| CSS Pseudo Elements (`pseudo-`, `transition-`, `native-`) | [[page-transitions]] (View Transitions), [[border-stroke]] (pseudo-element hit-area/rings) |
| Laws of UX (`ux-`), Predictive Prefetching (`prefetch-`) | [[visual-hierarchy]], [[spacing-density]] (proximity/common region), [[control-language]] (Fitts target sizing), [[loading-language]] (Doherty / perceived speed) |
| Typography (`type-`) | [[typographic-voice]] (tabular/oldstyle nums, optical sizing, `text-wrap: balance/pretty`, no font-synthesis) |
| Visual Design (`visual-`) | [[shape-language]] (concentric radii), [[elevation]] (layered shadows), [[border-stroke]] (alpha borders), [[spacing-density]] |
| Audio Feedback, Sound Synthesis (`a11y-`, `appropriate-`, `impl-`, `context-`, `envelope-`, `design-`, `param-`) | outside the dictionary's visual scope — the one place a UI *sound* language is codified; pair with [[interaction-feel]] and [[visible-accessibility]] (must have a visual equivalent and a toggle) |

**Use as:** the review/lint pass after implementing any motion or
typography entry — it catches the mechanical mistakes (missing `exit`
keys, linear easing, context-menu entrance animations, un-tabular data
numerals) the dictionary's dial vocabulary assumes are already right.
Install the skill when a project is motion-heavy; otherwise consult the
rule files as a checklist. **Cautions:** rules are Motion/Framer-Motion-
and React-flavored in their code examples (the principles port); the
sound categories have no dictionary counterpart, so don't invent one —
route them to the skill.

## DialKit — dialkit.dev (registered 2026-09-11)

**What:** MIT, open-source floating control panel for **live dial
tuning** — sliders, toggles, color pickers, spring editors, easing
curves, keyboard shortcuts, presets, and a Timeline feature, wired
directly to your UI values and auto-generated from a config object.
React, Solid, Svelte 5, Vue 3; depends on Motion. By Josh Puckett (ex
Wealthfront/Dropbox); his paid **Interface Craft** library
(interfacecraft.dev, $249 lifetime; 40+ articles, interactive
walkthroughs, videos, skill files — the "Means & Methods" and
"Interface Kit" collections; 3 previews free) is the education layer
around it.

**Use as:** the in-app counterpart to Radiant's configurator — the
mechanism that closes the dial loop for *any* entry: expose the entry's
dials (threshold, blur passes, spring stiffness, stagger) as DialKit
controls, let the designer tune in the running product, then bake the
exported values. Reach for it whenever the protocol's "report in dial
vocabulary" step turns into more than two rounds of guess-and-check.
**Stack-rule class: trivial** (dev-time panel; strip before ship; adds
Motion if absent — moderate then). **Cautions:** Interface Craft is
paywalled — surface it as a learning resource, never scrape; verify
DialKit's framework adapters at use time.

---

# Discovery Sources

Not libraries — *search surfaces* for finding component implementations.
Results are unvetted by definition: evaluate each find against the entry's
dials, check its license and accessibility individually, and never present
a marketplace result as a curated recommendation.

## 21st.dev (registered 2026-08)

Community marketplace of 12,000+ React/Tailwind components, templates,
shaders, and gradients from ~700 publishers, following shadcn conventions.
Install via "AI-ready prompt" (paste into the agent, which rebuilds the
component in-repo) or shadcn CLI — code arrives as owned source.

**Use as:** a search destination alongside npm/GitHub/Shadertoy in the
protocol's library-finding step, best for *component-shaped* requests
("a pricing section", "an animated hero") where seeing many community
takes helps. **Cautions:** freemium (2 free copies/day — a paywall may
block the agent mid-task; surface that to the user rather than working
around it), per-item licensing varies, quality varies widely — the
dictionary's dial vocabulary and content contracts are the evaluation
rubric for anything found here.

---

## builtbydesigners.com (registered 2026-09-11)

Curated directory of ~80 shipped products, tools, and experiments
**built by designers** (tagline "No Explanation Needed"), each with a
screenshot, one-paragraph description, maker attribution, platform, and
one of seven categories (Creative Tools, Development, Play, Lifestyle,
Productivity, Collections, Discovery). A React SPA — the catalog lives
in the JS bundle as plain object literals, not in the HTML, so a plain
fetch shows only the tagline.

**Use as:** two things. (1) A **discovery source for small effect
libraries and tools** that never reach npm's front page — at
registration its Development/Creative Tools rows included Orbkit and
Murmur ([[ai-orb]]), Drawably (hand-drawn React controls →
[[hatching-sketch]]'s napkin-UI register), ShaderGradient
([[mesh-gradient]] for Figma/Framer/React), Textures (25 tactile image
filters, Risograph to Cyanotype → [[print-artifacts]], [[blueprint]]),
Holo Sticker (Figma plugin → [[stickers-badges]] + [[iridescence]]),
ASCIInator ([[ascii-rendering]]), Design Your Sunset ([[time-of-day]]
CSS presets), Weather OS ([[weather-effects]] playground), Jelly Dice
([[inflatable]] + [[interaction-feel]]), FlipNote (split-flap display →
[[animated-numbers]]), DialKit and Toolcraft (tuning/tooling). (2) A
**whole-product craft reference** — the Play/Lifestyle rows are the
"designed with care" ceiling for small products, complementing
designspells at product rather than moment granularity. **Cautions:**
per-item licensing and maintenance vary (many are weekend projects);
evaluate each find against the entry's dials before recommending, and
treat the directory's own quality bar as curation, not vetting.

---

## godotshaders.com (registered 2026-08)

Community repository of thousands of single-effect shaders for the Godot
engine, categorized by type (canvas_item/2D, spatial/3D, sky, particles)
and sorted/tagged; each entry is full source with preview and author.
**The code is GDShader — Godot's shading language, not web GLSL** — so
nothing installs directly into a web project.

**Use as:** a reference-implementation source for *porting*, one step
beyond Shadertoy: when an entry's technique needs a worked example
(dissolve burn edges, outline variants, water, CRT stacks, toon ramps),
these shaders show the algorithm at exactly the dictionary's granularity,
with dials visible as `hint_range` uniforms. The algorithmic core (noise,
SDFs, thresholds, ramps) ports mechanically to GLSL/three.js; Godot
built-ins (`SCREEN_TEXTURE`, `TIME`, canvas-item machinery) must be mapped
to your own uniforms/scene texture — budget the port as writing the shader
with a reference open, not copy-paste. **Cautions:** licensing is
per-shader (site default has historically been permissive — verify the
shader's stated license before porting); community quality varies; if a
project actually targets Godot, this becomes a direct library instead.

---

## Awwwards collections — awwwards.com (registered 2026-08)

Awwwards (the web-design awards site) maintains curated *collections* by
theme/technology — e.g. the "WebGL Shaders + Code" collection: ~27 shader
demos with live links, creator attribution, and code (CodePen/GitHub).
**Use as:** a modest supplementary search surface for shader references —
with an age check: many collected demos are from the 2017–2019 era, so
treat their code as port-and-modernize material (verify against current
three.js APIs), not vendorable. The broader asset is Awwwards itself as a
**whole-site ceiling reference** — award-winning sites show complete craft
([[scene-staging]], [[scroll-choreography]], [[page-transitions]],
[[typographic-voice]] working together), complementing mesh3d's
experiment-level focus; and its winner credits are another maker
directory. Lower priority than the other sources here; reach for it when
the request is "make the whole page feel award-grade" rather than "build
this effect."

---

# Reference Galleries

Not code, not search — *visual references*. Their value is in the two
moments where words fail: **calibrating a look before implementation**
(shared visual target between human and agent, in place of an ambiguous
description) and **finding the ceiling** (what the state of the art
actually looks like, so an implementation is graded against it). Gallery
entries are read for their **dials and register**, then implemented from
the dictionary's own techniques or the libraries above. Attribute
inspiration to its maker; never present a gallery piece as something the
agent built.

## mesh3d.gallery (registered 2026-08)

Curated gallery of ~80+ interactive three.js / WebGL / WebGPU / R3F
experiments and ~sites, plus a Makers directory linking to creators'
portfolios. Entries carry title, maker, preview, and a link to the live
work — **no code, technique breakdowns, or tags**; source is occasionally
findable via the maker's portfolio/GitHub.

**Use as:**
- **The visual-target step for shader-tier requests.** When a user wants
  a "premium 3D hero" or "something like a real material study," find 1–2
  gallery pieces in the register, agree on one as the reference, then name
  its dials in dictionary vocabulary before building — the picture ends
  the description ambiguity faster than any prose. Cross-cutting fits:
  [[scene-staging]], [[specular-metallic]] / glass materials
  ([[frosted-glass]], [[refraction-displacement]]), [[particles]],
  [[liquid-ripple]], [[volumetric-light]], [[velvet-plush]] (cloth
  sims), [[iridescence]] — the whole light-and-material family.
- **The ceiling reference.** Before declaring a WebGL implementation done,
  compare it against the nearest gallery piece; the gap is usually in
  [[scene-staging]] (lighting/environment), [[ambient-occlusion]] and
  [[bounce-light]] (grounding), or post ([[glow-bloom]], [[film-grain]],
  [[depth-of-field]]) rather than in the core effect.
- **A maker directory** — creators here are the current practitioners of
  the shader-tier craft; their portfolios and repos are high-signal
  search targets for the entry's search-queries step.

**Cautions:** many pieces are heavy WebGPU/R3F showcases — inspiration for
the *look*, not evidence a project should adopt that stack (the stack rule
still governs); no license implied on visuals; the agent cannot view live
WebGL — it reads titles/previews and any maker write-ups, so the *human*
supplies the visual judgment in the calibration step.
## 60fps.design (registered 2026-08)

~2,000 recorded animation/interaction clips extracted from **real shipped
apps** (475 apps — Duolingo, WhatsApp, X, …), filterable by ~108
categories (Button, Loading, Scroll, Drag, Swipe, Parallax, Spring
Physics, Confetti, Mascot, …). Purely visual reference — no code.

**Use as:** the motion-side calibration gallery — the counterpart to
mesh3d for the motion entries: [[motion-ceremony]] (duration/easing
registers as actually shipped), [[interaction-feel]] (drag physics,
detents, rubber-band in production), [[hover-response]], [[kinetic-type]],
[[loading-language]], [[page-transitions]], [[scroll-choreography]],
[[toast-notification]], [[sheet-drawer]], [[disclosure]]. Its defining
property is **production provenance**: every clip survived a real
product's ceremony budget and shipping review — the corrective for
demo-calibrated component libraries (see React Bits caveat). When a
motion request needs calibrating ("how bouncy should this sheet be?"),
find 2–3 clips in the register, agree on one, then name its dials
(duration, overshoot, stagger) before building.

**Companion — spottedinprod.com:** the same production-provenance idea at
*flow* granularity and iOS-specific: community-curated clips of onboarding
sequences, scroll mashups, launch screens, and multi-screen choreography
from shipped iOS apps. Reach for it over 60fps when the question is
choreography-over-time ([[page-transitions]], [[scroll-choreography]],
[[loading-language]] arcs, [[disclosure]] sequences) or when the target
platform is iOS; community-contributed, so slightly less filtered. Same
usage laws as this entry.

**Cautions:** clips are recordings of other companies' products — use for
*register* calibration, never to clone a specific app's signature motion
wholesale (a brand's motion identity is theirs); the agent cannot watch
video — the human supplies the judgment in the calibration step, then
reports what they see in dial vocabulary; the small Snippets section
aside, treat it as zero-code.
## designspells.com (registered 2026-08; site resists automated fetch — details verified only by the human)

Curated gallery of "spells" — the small delightful details in shipped
software: easter eggs, playful empty states, celebratory moments,
whimsical micro-touches — as short clips/screenshots with tags. Visual
reference only; no code. **Blocks automated fetching** — the agent works
from the human's description of what they found there.

**Use as:** the **delight-register calibration gallery** — the third leg
beside mesh3d (visual craft) and 60fps (production motion). It informs
the judgment calls the dictionary frames but cannot settle alone: which
moments earn ceremony ([[motion-ceremony]]'s ceremonial budget), how
personality shows up in [[loading-language]] long waits and empty states,
[[illustration-style]] mascots, [[seasonal-theming]] depth,
[[cursor-effects]] and [[toast-notification]] charm, [[hover-response]]
surprises. Delight is where agent-built UIs are typically weakest —
competent but personality-free — so calibrate here when a product wants
warmth: find a spell in the register, describe it, name the entries and
dials it decomposes into.

**Cautions:** same reference-gallery laws as its siblings — register
inspiration, never cloning another product's signature moment; the human
supplies the eyes. Delight is also the easiest register to overdose:
every spell shown passed a real product's restraint filter — one
well-placed spell per surface, per [[motion-ceremony]]'s budget law.

## recent.design (registered 2026-08-30)

Daily-updated curated gallery of recently published design work — web,
app/interface, branding, illustration, motion, 3D, print, product, and
packaging — formerly "Godly." Each item carries maker attribution, a
written one-sentence description, and style tags (Dark/Minimal/Vibrant/
Experimental/Editorial/etc.), pulled from an embedded script payload
rather than rendered markup — plain fetches of the page return almost no
readable text, but the descriptions/tags are extractable from the page's
script-tag data if a naive read comes back empty (verify the payload
shape at use time; this is unversioned client-rendering internals, not a
stable API — it changed from escaped-JSON strings to plain JS object
literals between the 2026-08-30 and 2026-09-11 pulls).

**Use as:** the **broadest-breadth register calibration gallery** in this
registry — where mesh3d is 3D/WebGL-only, 60fps is production motion
only, and designspells is delight-only, this spans every wardrobe and
structural register the dictionary covers in one feed, refreshed daily.
Two distinct uses: (1) the same visual-target/ceiling-reference role as
its siblings (find 1-2 pieces in the target register, agree on one,
name its dials) — cross-cutting fits span nearly the whole dictionary,
notably [[scene-staging]] and [[gaussian-splatting]] (3D/captured-scene
work is a large share of the feed), [[iridescence]] / [[refraction-displacement]]
(glass and prismatic shader pieces recur), [[border-stroke]] (animated
borders as a current accent trend), [[kinetic-type]], and the full
wardrobe family under UI foundations; and (2) **trend-scouting for gaps
in the dictionary itself** — because item descriptions are real text
(unlike mesh3d/60fps/designspells' pure visuals), they can be scanned in
bulk for named techniques or registers with no matching entry, which is
how [[gaussian-splatting]] was found and added. Pull multiple category
filters (`?category=<slug>`; confirmed slugs include web, interface, 3d,
motion, illustration, print, branding, product, packaging, typography —
others 404 to an empty-state page of the same byte size, which is how to
tell a real category from a guess) rather than just the mixed front
page, for a representative sample.

**Cautions:** same reference-gallery laws as its siblings — attribute to
the maker, never present a showcased piece as the agent's own work; the
agent cannot see the screenshots themselves, only text metadata plus
thumbnail image URLs, so the human still supplies visual judgment for
the actual look. Text-scanning is a research/trend-scouting technique
described here for reproducibility, not a standing capability — its
JSON shape is internal and can change without notice.
