# Layout Matrix

Any layout is a coordinate across seven variables. For layout requests:
resolve the coordinate first (from the named archetype, or from content
intent), check the tension table, then read the matching entry in
`entries/`. Layout entries carry three extra sections: an ASCII diagram, a
**content contract** (what the layout demands of its content), and
**collapse behavior** (how it degrades at narrow widths).

## The seven variables

1. **Flow** — the primary direction content runs
   `vertical` (scroll narrative) · `horizontal` (panes, filmstrip) · `2d` (field)

2. **Placement system** — what decides where things go. THE key axis.
   "Off-grid" means swapping the grid for another organizing system, never
   removing organization.
   - `grid` — cells on shared tracks
   - `flow` — items pour and wrap (masonry is flow, not grid)
   - `anchored` — elements positioned relative to each other (callouts, satellites)
   - `scattered` — freeform coordinates with deliberate randomness, held together by [[visual-composition]] balance
   - `radial` — positions on arcs/orbits around a center
   - `semantic` — position IS meaning (canvas apps, node graphs); moving an item changes what it says

3. **Overlap** — `tiled` (never touch) · `touching` (shared edges; collapse
   double borders) · `layered` (deliberate overlap with z-order doing
   compositional work)

4. **Hierarchy shape** — `hero` (one dominant + supporters) · `tiered`
   (clear 1st/2nd/3rd bands) · `egalitarian` (peers)

5. **Reading contract** — `linear` (an order exists; layout must honor it) ·
   `scannable` (enter anywhere, compare) · `browse` (no order; grazing)

6. **Pane persistence** — `single-surface` (one scroll) · `framed` (fixed
   chrome panes, independent scroll regions)

7. **Density** — `airy` · `comfortable` · `dense` (continuous; this is
   [[spacing-density]]'s register imported)

## Archetype coordinates

| Entry | Flow | Placement | Overlap | Hierarchy | Reading | Panes |
|---|---|---|---|---|---|---|
| [[app-shell]] | — | grid | tiled | — | — | framed (wraps another coordinate) |
| [[bento-grid]] | 2d | grid | tiled | tiered | scannable | single |
| [[masonry]] | 2d | flow | tiled | egalitarian | browse | single |
| [[dashboard-tiles]] | 2d | grid | tiled/touching | tiered | scannable | framed |
| [[split-screen]] | horizontal | grid | tiled | hero or 50/50 | linear | single |
| [[magazine-spread]] | 2d | grid | layered | hero | linear | single |
| [[centered-stack]] | vertical | grid | tiled | tiered | linear | single |
| [[alternating-rows]] | vertical | grid | tiled | egalitarian | linear | single |
| [[timeline-feed]] | vertical | flow | tiled | egalitarian | linear | single |
| [[carousel-filmstrip]] | horizontal | flow | tiled | egalitarian | linear/browse | single |
| [[collage-scatter]] | 2d | scattered | layered | hero or browse-field | browse | single |
| [[radial-orbital]] | 2d | radial | tiled/layered | hero (center wins) | scannable | single |
| [[spatial-canvas]] | 2d | semantic | layered | egalitarian | browse | framed |
| [[type-composition]] | 2d | anchored/scattered | layered | hero | linear-entry | single |
| [[board-kanban]] | horizontal×vertical | grid + semantic (column=status) | tiled | egalitarian | scannable | single/framed |
| [[calendar-timegrid]] | 2d | semantic (position=time) | tiled/layered | egalitarian | scannable | single/framed |
| [[comparison-columns]] | horizontal | grid | tiled | hero (recommended) | scannable | single |
| [[focus-page]] | vertical (one card) | grid | tiled | hero (the task) | linear | single (chrome removed) |
| [[conversation-layout]] | vertical | flow | tiled | egalitarian | linear | single (framed host) |
| [[stories-format]] | full-viewport sequential | flow | layered chrome | egalitarian | linear-with-skipping | single (immersive) |
| [[faceted-browse]] | framed rail + field | grid | tiled | egalitarian | scannable-browse | framed |
| [[product-detail]] | horizontal top, vertical tail | grid | tiled | hero (the decision) | linear-then-scannable | single |
| [[profile-header]] | vertical, layered band | grid + layered | layered (avatar overlap) | hero (identity) | scannable | single |
| [[map-list-sync]] | framed list + map | grid + semantic (position=geography) | tiled | egalitarian | scannable-browse | framed |
| [[comics-panels]] | 2d rows | grid (narratively broken) | tiled-to-layered | egalitarian + splash heroes | linear (strictest) | single |

Coordinates that match no named archetype are still valid layouts — derive
from content intent and build from the nearest entry's techniques.

## Interaction surfaces

Containers content lives in — cards, panels, modals, sheets, popovers,
toasts. Each is defined by a four-variable **surface contract**:

1. **Attachment** — `inline` (in the layout flow) · `anchored` (positioned
   to a trigger element) · `edge` (slides from a viewport edge) ·
   `centered` (floats free, viewport-centered)
2. **Blocking** — `blocking` (scrim + focus trap; the page waits) ·
   `non-blocking` (the page stays live)
3. **Persistence** — `persistent` (part of the layout) · `dismissed`
   (stays until explicitly closed) · `ephemeral` (until outside-click/
   escape) · `transient` (auto-dismisses on a timer)
4. **Elevation tier** — the [[elevation]] level it occupies; higher tiers
   are rarer and more interruptive

| Entry | Attachment | Blocking | Persistence | Tier |
|---|---|---|---|---|
| [[card]] | inline | non-blocking | persistent | 0-1 |
| [[panel-well]] | inline | non-blocking | persistent | 0 (or sunken) |
| [[modal-dialog]] | centered | blocking | dismissed | top |
| [[sheet-drawer]] | edge | either | dismissed | high |
| [[popover-menu]] | anchored | non-blocking | ephemeral | mid |
| [[toast-notification]] | edge-corner | non-blocking | transient | high |
| [[disclosure]] | inline | non-blocking | persistent (revealed/concealed state) | 0 |
| [[command-palette]] | centered (top-third) | lightly blocking | ephemeral (query-driven, keyboard-first) | top |
| [[coach-marks]] | anchored + scrim cutout | semi-blocking | dismissed (once, remembered) | top |
| [[media-chrome]] | overlaid on media | non-blocking | auto-hide (present on interaction, gone during engagement) | above content |

Composite surfaces resolve as combinations: a radial menu is
[[popover-menu]]'s contract wearing [[radial-orbital]]'s placement system.

Contract law: interruption must be proportionate — `blocking` is reserved
for decisions that genuinely halt the task; tier tracks interruption, not
importance; only one surface above tier 1 at a time (stacked modals and
toast-storms are contract violations, not designs).

## Tension table — illegal and dishonest combos

- `linear` reading + `flow`/`scattered` placement — the masonry-for-articles
  mistake: order matters but the placement destroys it. Use only when order
  genuinely doesn't matter.
- `hero` hierarchy + `uniform` grid cells — the flagship buried in an equal
  grid. If content has a hero, the placement must give it area or position.
- `egalitarian` hierarchy + wildly mixed cell sizes — the inverse lie: size
  implies rank the content doesn't have.
- `framed` panes + `airy` density — chrome overhead without content to
  justify it; framed shells earn their pixels with density.
- `scattered` placement without [[visual-composition]] balance — not a
  layout, a mess. Scatter always needs the weight-balance system active.
- `semantic` placement + imposed reading order — canvas position already
  means something; forcing sequence contradicts it.
- `layered` overlap + `dense` — overlap needs breathing room to read as
  intentional; dense layering reads as broken rendering.

## Couplings (not illegal, just linked)

- `radial` implies `hero` — the center always wins.
- `semantic` implies `browse` reading and usually `framed` (canvas tools).
- `broken grid` (see [[grid-systems]]) is NOT `scattered` — the grid stays
  the placement system, violated for tension. "More organic" usually means
  moving to `scattered`+balance, not loosening the grid; name which one is
  being asked for.
- Collapse pressure: at narrow widths most coordinates converge on
  `vertical`+`grid`+`linear` — the entry's collapse-behavior section says
  what survives.
