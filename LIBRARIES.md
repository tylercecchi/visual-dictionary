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
(rareui.com):** ~14 one-file novelty components (Fluid Orb, Gravity
Letters, Folder) — a garnish source, browse-not-depend. Both follow
this entry's model and caveats (demo-calibrated; check reduced-motion
and ceremony budgets).

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

## ThreeUI — threeui.com (registered 2026-08)

**What:** copy-ready **three.js** components, WebGL backgrounds, hero
sections, and complete website templates — composed scenes, not just
single effects. Catalog samples: ASCII fields, glass materials, halftone
blooms, CRT/cathode sets, particle & audio wordmarks, brand orbs, planet
globes, product/book showcases. **Freemium:** MIT-licensed free items
alongside paid "pro" items — check the item's license and tier before
vendoring.

**Install model:** copy-ready source into an existing three.js project.
**Stack-rule class: structural-leaning** — everything presumes three.js;
in a project that already has three.js/R3F this is effectively moderate
(vendored components), but in a project without it, using ThreeUI *is*
the structural three.js adoption decision and must be surfaced to the
user, with a no-new-stack alternative offered (Canvas UI, Radiant, or
the entry's cheaper-medium techniques).

**Coverage map** (samples → dictionary entries):

| Catalog family | Entries |
|---|---|
| ASCII Field variants | [[ascii-rendering]] |
| Advanced Glass Material | [[frosted-glass]], [[refraction-displacement]] |
| Halftone sets (Amber, Bloom) | [[halftone]], [[glow-bloom]] |
| CRT / Cathode Workstation | [[crt-scanlines]] |
| Particle / Audio Wordmarks | [[kinetic-type]], [[particles]], [[audio-reactive]] |
| Brand Orbs, Globes | [[scene-staging]], [[specular-metallic]], [[iridescence]] |
| Product/book showcases, templates | [[scene-staging]] (composed heroes — the full staging recipe pre-built) |

**When to prefer it:** the project already runs three.js/R3F and wants a
*composed scene* (hero, showcase, background) rather than a single
effect — it's the only registry resource at scene granularity. Prefer
Radiant/Canvas UI when there's no three.js and none is warranted; prefer
the entry's own techniques when the needed dials aren't exposed.
**Cautions:** creator/maintenance unverified at registration — apply the
standard currency check; paid items may block an agent mid-task (surface
the paywall to the user, as with 21st.dev).

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

## AI-native interface kits — beautifului.dev + transitions.dev (registered 2026-08)

Two small copy-paste libraries for the **AI-interface state language**
(see INDEX candidates): streaming text, thinking/working states, tool-call
traces, diff/records tables, approval and recommendation cards, chat
composers (beautifului.dev — MIT, React, AI-product primitives); and
state-transition micro-animations tagged for agent UIs — skeleton
reveals, text swaps, success/error feedback, with performance notes
(transitions.dev — freemium, CSS/React; notably ships its own coding-agent
skill). **Use as:** the reference implementations when building AI-product
UI, and the corpus to draw from when the AI-interface entry gets written;
until then they pair with [[loading-language]] (thinking/streaming states
are its newest register), [[kinetic-type]] (streaming text),
[[timeline-feed]] (tool traces), [[motion-ceremony]]. **Cautions:**
transitions.dev's pro tier paywall (surface it, per registry law);
verify currency — this space is young and moving fast.

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
Experimental/Editorial/etc.), pulled from an embedded JSON payload
rather than rendered markup — plain fetches of the page return almost no
readable text, but the descriptions/tags are extractable from the page's
script-tag data if a naive read comes back empty (verify the payload
shape at use time; this is unversioned client-rendering internals, not a
stable API).

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
