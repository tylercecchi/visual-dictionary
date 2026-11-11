---
name: calm-console
title: Calm Console (Cold Ink, Warm Is Trouble)
summary: "cold, quiet agent/dev-tool console; hue names a kind, warm means trouble"
category: wardrobe
aliases: [quartz, quartz design system, design.how quartz, calm console, calm dev tool, agent console, ai agent console, operator console, cold and calm, warm is trouble, color only for errors, colour only for errors, quiet developer tool, frost palette, monochrome dev tool, linear style console]
media: [css, svg]
---

# Calm Console

The cold, quiet register for AI agent consoles and developer tools: navy
ink on icy paper, nothing decorated, and colour spent on exactly two jobs —
naming what *kind* of thing something is (a muted cold hue plus its word)
and saying what *went wrong* (amber and red, reserved). Captures design.how's
Quartz system as an aesthetic + behaviour bundle.

## You know it when you see

- A near-white, faintly blue page where almost everything is ink at 100 / 80 / 66 % — the screen reads as black-and-white until something fails
- The only warm marks on the page are warnings and failures; a run that went wrong jumps out because nothing else is amber or red
- Small tinted *words* ("agent", "key", "deploy") instead of coloured cards, icon tiles or status dots
- Status written as a word with a tiny turning arc while running — no pulsing dots, no shimmer, no glow
- One dark, slightly bevelled ink button per view; everything else is flat paper or a grey well
- Menus and dialogs simply *appear* (opacity only); panels open with a cut, never a height tween

## Dials

Preset settings across the foundations:

- **[[color-roles]]** — ink `oklch(20% 0.024 262)` on paper `oklch(99.7% 0.001 250)`, canvas a cool fog `oklch(99.1% 0.002 250)`, cards a grey field `oklch(95.6% 0.004 255)`. Text tiers are ink alphas (100 / 80 / 66 %; 66 % is the 5:1 floor). Five *kind* hues, all cold and muted — cyan 195, orchid 320, blue 250, violet 290, green 160 — each with mark / field / wash / line / label steps; hue lives only in a label, a chart line or the selected row's wash. Reserved trouble: warn amber at hue 68, fail red at hue 26. **Warm is trouble** is the load-bearing rule: no kind, series, tag or decoration is ever warm.
- **ink-fill budget** — ink fills only the primary button (one per view) and checked controls; headers, tiles and second buttons never go ink
- **[[typographic-voice]]** — one neutral sans for every word, a mono *only* for what a person copies (IDs, keys, paths, commands, hashes). Hierarchy by size, not weight: headings 400, body 340 (a light-ish body), body 14/20, code 13/20; tabular figures + slashed zero via a "data" utility, not mono. Sentence case everywhere, slight negative tracking on display sizes; never caps, never tracked-out labels.
- **[[shape-language]]** — 4 px inner, 6 px controls, 10 px frames; fully round is reserved for avatars, radios and switches — tags and filters are never pills
- **[[border-stroke]]** — separate with grey *fields* first, hairlines (ink at 8 %) only where a field can't; no box-in-box; no side rails or edge stripes
- **[[elevation]]** — everything flat; only overlays get one short shadow (`0 12px 24px -12px` at 20 %) with its 1 px frame line built in. Dialogs are a grey shell holding one white card 4 px in, actions on the grey. Controls sit a single pixel above the page.
- **[[spacing-density]]** — compact-calm: 4 px scale, 32 px controls, 40 px rows, 1120 px container, 248 px sidebar
- **[[iconography-style]]** — a few solid icons, only on actions found by shape; never an icon on every label
- **[[motion-ceremony]]** — near zero: see Behaviors

## Behaviors

- **Motion budget** — every state change in 60–180 ms on one curve, `cubic-bezier(0.2, 0, 0, 1)`: press 60 ms, hover 120, menus/toasts in 160 (opacity only, never grow), dialogs/sheets 180 with an 8 px sheet shift; exits faster than entries. Collapse is a cut. Hue and status changes *cut* — never eased, so a run never passes through another kind's colour mid-tween.
- **Press / hover / focus** — hover is a 5 % ink wash; press settles to 0.98 scale and an inset shadow on the ink key; focus is a 2 px ink outline at 2 px offset on everything. Transitions name their properties (colour, background, border, outline, shadow, opacity) — never `transition: all`.
- **State signalling** — status is a word; colour only for warn/fail. Running = a ¾ arc turning once per second before the word, paused offscreen and frozen (not hidden) under reduced motion. Selection = a wash that persists under hover. Loading = skeleton only after 150 ms and held at least 400 ms; reloading content stays readable at 60 % opacity. Toasts stay for a computed reading time (3 s + 60 ms/char, 4–12 s).
- **Errors** — framed alert with a status icon and a title that names the failure, never a tinted Bootstrap block; destructive buttons carry the fail edge and fail text, never a red fill.
- **AI turns** — one turn = tool-call list, response, footer; only the running tool row shows the arc (one live indicator per thread). Thinking folds when done. Streaming stays pinned to bottom until the person scrolls. Destructive agent actions stop on an Allow / Deny approval; typed confirmation is saved for deleting containers, so people don't learn to type through it. After a choice, focus moves to the outcome.
- **Copy voice** — sentence case, verb + object ("Create key", never "Submit"), no em dash for empty values (write "None"), no middle-dot joins, no "Learn more →", no filler adjectives (seamless, robust, effortless).

## Bans (anti-slop, in brief)

Capitals and tracked labels · eyebrow labels above titles · status dots · pills on tags · icon tiles · equal stat-card rows (use one stats strip or a table) · box in a box · edge rails for selection · tinted alert blocks · red-filled delete buttons · hue-filled sections · glass/blur on any surface · gradients and shadows on flat things · decorative loops (pulse, ping, glow, sweep) · shimmer text for "thinking" · terminal cosplay (prompt signs, bracket labels, fake cursors) · centred empty states with art · grey 12 px prose.

## Structural pressure

Wants a sidebar + top bar [[app-shell]], list pages with one h1, a filter bar and a table, and list-detail with a docked non-modal sheet. Resists [[dashboard-tiles]] / [[bento-grid]] (card grids of numbers are banned — use a stats strip), and any hero or marketing ceremony. Empty states sit top-left, not centred.

## Techniques

- **Token the roles, not the hues** — expose `data-kind` / `data-status` on a container and let it set `--accent-wash` / `--accent-line`; components never name a hue, so a kind swap or dark theme recomputes.
- **oklch ramps** — one lightness/chroma recipe per step (mark, field, wash, line, label) applied to five hue angles keeps kinds equal-weight; the line step is the only one that clears 3:1 as a stroke.
- **Reserved-warm lint** — a lint rule that fails any amber/red class outside warn/fail usage enforces the doctrine better than review.
- **Running arc** — a ¾ circle SVG rotated with a 1000 ms linear animation; `IntersectionObserver` sets `data-offscreen` to pause it; `prefers-reduced-motion` stops rotation but keeps the mark.
- **Skeleton anti-flicker** — delay show 150 ms, minimum hold 400 ms ([[loading-language]]).

Effects it reaches for: almost none — a bevelled sheen on the single ink key is the only "material". Never: [[frosted-glass]], [[glow-bloom]], [[shimmer-sheen]], [[gradients]], [[ai-orb]], [[crt-scanlines]].

## Starting points

- design.how Quartz docs — https://design.how/systems/quartz (foundations incl. `/foundations/anti-slop.md`, `/foundations/motion.md`, `/foundations/color.md`)
- Source: https://github.com/arla6ka/design.how/tree/main/systems/quartz — by Arlan Marat, MIT licensed; credit design.how when borrowing
- Install: `npx shadcn@latest add https://design.how/r/quartz/theme.json` (agent skill only: `npx skills@latest add arla6ka/design.how/systems/quartz`)

## Search queries

- `design.how quartz design system`
- `oklch semantic color kind hues status reserved`
- `agent console ui tool call approval design`
- `developer tool ui anti patterns status dots`
- `prefers-reduced-motion spinner pause offscreen`

## Related

[[mono-infra]] (the sharper, ruled, yellow-action sibling), [[pressable-glass]]
(same ink-and-paper base, glass on the one action), [[warm-consumer]] (the
warm consumer counterpart), [[terminal-aesthetic]] (the costume it bans),
[[engineering-datasheet]] (shared data-type discipline), [[color-roles]],
[[status-signals]], [[live-feedback]], [[ai-interaction]],
[[conversation-layout]], [[toast-notification]], [[loading-language]],
[[table-design]], [[undo-recovery]], [[motion-ceremony]].
