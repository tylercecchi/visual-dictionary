---
name: mono-infra
title: Mono Infra (Ruled, Square, One Yellow Action)
summary: "sharp ruled infra/data tool: mono caps labels, zero radius, one yellow action"
category: wardrobe
aliases: [sodium, sodium design system, design.how sodium, mono infra, infrastructure tool look, data tool look, ops console, ruled ui, square corners ui, zero radius, mono caps labels, sharp and mono, one yellow action, yellow primary button, instrument panel ui, pipeline dashboard look]
media: [css, svg]
---

# Mono Infra

The sharp, compact register for infrastructure and data tools: white (or
warm near-black) grounds, 1 px rules as the entire layout language, mono
capitals for every interface word, a display sans for headlines and prose,
zero radius everywhere, and one sodium-yellow slab marking the thing to act
on. A terminal's *discipline* without the terminal's costume. Captures
design.how's Sodium system as an aesthetic + behaviour bundle.

## You know it when you see

- Hard square corners on everything; regions boxed once and split by thin rules, like an instrument panel or ledger
- Buttons, tabs, table heads and axis labels in small tracked mono capitals; headlines and sentences in a tight, light sans
- Exactly one bright yellow button per view — the screen's single "do this"
- Status as a small *square* mark plus a word (ok green, warn orange, fail red); warnings are orange, never yellow
- Text that types in once, labels that scramble-resolve once, meter fills that wipe along their rule, connectors that draw hop by hop
- No shadow, no blur, no gradient behind content, no grid-paper backdrop

## Dials

- **[[color-roles]]** — light: page `#ffffff`, panel `#fafaf7`, text `#161512`, rules `#e2dfd5` (faint `#efede6`); dark: page `#141412`, panel `#1c1b19`, text `#f5f3ee`. Accent sodium yellow `#ffd400` as a *fill only* (1.4:1 on white) — yellow-family text uses `#7a5d00`, the slab's edge `#c9a700`. Status: ok `#2c6a3a`, warn `#c25e00`, fail `#b3261e`, each with a pale tint and always paired with its word. Yellow is spent on the one primary, checked small controls and one chart series — nothing else.
- **[[typographic-voice]]** — three voices chosen by what the words are: *labels* in mono capitals through roles (11–14 px, +0.04–0.06 em tracking; source text stays sentence case, CSS sets the caps); *values* (IDs, counts, durations, sizes) in mono as written, 13 px; *prose* and headlines in Inter Display (body 15/24, title 32 at −0.035 em, display 56 at −0.04 em). One weight, 400, in both faces — hierarchy by size, case and colour; mono inside a sentence drops to 0.85×.
- **[[shape-language]]** — radius 0, no exceptions (avatars included); status marks are squares, not dots
- **[[border-stroke]]** — 1 px rules carry the layout: a region's single frame, then row/column dividers; never box-in-box, never a cell grid or dot field behind the page
- **[[elevation]]** — none. Overlays are the panel fill with a 1 px rule edge; dialogs get a scrim (ink 32 % light / black 64 % dark). The only box-shadow is a flush 1 px halo under the pointer on buttons.
- **[[spacing-density]]** — compact: 4 px grid, 32 px controls (26 / 36), 40 px rows; several numbers sit in a ruled *status strip* (micro label over a mono value), never stat cards
- **[[iconography-style]]** — Lucide-class line icons at 16 px, squared off to match the corners
- **[[motion-ceremony]]** — mechanical; see Behaviors

## Behaviors

- **Motion budget** — "move like a machine": a cut for a state flip, a linear wipe along a rule (240 ms), typing at ~18 ms per character for a new label or headline, a 400 ms glyph scramble once when a mono label appears or its value changes, connectors drawing 300 ms per hop and ending in a square. Ease-out `cubic-bezier(0.2, 0.8, 0.2, 1)` only for moves across the screen; no springs, overshoot or press scale. Never type or scramble a value someone is reading or editing.
- **Press / hover / focus** — the one soft moment: a button's fill and edge *lighten* under the pointer (240 ms, soft ease) with a light-from-below that follows a beat later (320 ms); press steps the fill to its held colour in 80 ms and the light goes out — nothing scales. A 2 px focus ring on every control; fields show focus on their own edge.
- **State signalling** — the only loop is the pending mark: one lit square stepping along four (800 ms, `steps(4)`), frozen under reduced motion. Status = square mark + word. Selected row = a wash, never an edge bar. A caret shows only while text types, then goes.
- **Errors** — orange warn / red fail with their words and tints; a destructive action may take the single primary slot instead of yellow
- **AI turns** — an agent's steps render as ruled boxes joined by drawn connectors *beside or under* the frame, never inside it; brackets mark only machine actions and tool calls, never a person's button, so who acted stays legible. Streamed answers arrive paced, not typed for show.
- **Copy voice** — sentence case in source, verb + object on actions, no emoji, no em dash, no hype (seamless, blazing, supercharge); believable sample data, never Lorem or 1,234.
- **Reduced motion** — zeroes wipes, draws, typing, scrambles and the button light; text, lines and colour are simply there.

## Bans (anti-slop, in brief)

Any rounded corner · shadows, blur, gradients, glows, blobs · grid or dot backgrounds · terminal costume (green/amber on black, scanlines, `>` prompts, ASCII boxes) · yellow text or icons on light, yellow warnings, a second slab, yellow headers or borders · equal stat cards · box in a box · edge rails · round status dots · eyebrow labels above headlines · sentences or headlines in mono caps · bold weights · emoji · blinking caret at rest · scroll-reveal fades · `transition: all`.

## Structural pressure

Wants ruled frames with a header row, status strips for numbers, dense tables and logs, swimlane and stem charts. Resists [[card]] hierarchies and [[bento-grid]] (cards become rules), elevation-based layering, and airy density; square corners clash with any borrowed rounded component.

## Techniques

- **Label roles carry the caps** — `text-transform: uppercase` + tracking + mono live in the role class; source strings stay sentence case so screen readers and translation read real words.
- **Rules as layout** — one `border` on the region, `border-block-start` dividers on children; CSS grid with `gap: 1px` over a rule-coloured background is the cheap ruled-table trick.
- **Mechanical motion** — `clip-path: inset()` animated linearly for wipes; `steps(4)` keyframes for the pending mark; a small scramble routine that resolves left to right once, keyed to value changes.
- **Yellow contrast guard** — yellow only ever sits under ink text; a separate dark-yellow token for any yellow-family text.

Effects it reaches for: [[kinetic-type]] (typing/scramble, once), drawn connectors, [[animated-numbers]] sparingly. Never: [[crt-scanlines]], [[glow-bloom]], [[frosted-glass]], [[gradients]], [[shimmer-sheen]], [[ai-orb]].

## Starting points

- design.how Sodium docs — https://design.how/systems/sodium (foundations incl. `/foundations/anti-slop.md`, `/foundations/motion.md`)
- Source: https://github.com/arla6ka/design.how/tree/main/systems/sodium — by Arlan Marat, MIT licensed; credit design.how when borrowing
- Install: `npx shadcn@latest add https://design.how/r/sodium/theme.json`
- Fonts: Inter Display + Commit Mono (both open-licensed)

## Search queries

- `design.how sodium design system`
- `css clip-path wipe animation linear`
- `text scramble effect resolve once`
- `zero border radius ui ruled layout`
- `inter display commit mono pairing`

## Related

[[calm-console]] (the softer-cornered, kind-hued sibling), [[terminal-aesthetic]]
(the costume whose discipline this keeps and whose look it bans),
[[engineering-datasheet]] (mono-data/grotesque-prose kin), [[brutalism]]
(also square and ruled, but raw), [[bauhaus-swiss]], [[table-design]],
[[chart-voice]], [[status-signals]], [[live-feedback]], [[ai-interaction]],
[[kinetic-type]], [[border-stroke]], [[spacing-density]].
