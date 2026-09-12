---
name: game-ui-registers
title: Game UI Registers
summary: "nine-slice frames, slot grids, segmented bars, rarity colors; fantasy to cozy"
category: wardrobe
aliases: [game ui, rpg menu, jrpg menu, fantasy ui, parchment ui, ornate frame, inventory grid, health bar, mana bar, arcade cabinet, retro console menu, cozy game ui, diegetic ui, quest log, pause menu, skill tree, loot rarity colors, gamified ui, video game look]
media: [css, svg, canvas, webgl]
---

# Game UI Registers

The interface languages of games as wardrobes for product UI — ornate
fantasy frames, slot-grid inventories, segmented bars, rarity color
codes, chunky pressable buttons — each register a complete costume with
its own frame, bar, and selection grammar.

## You know it when you see

- Panels framed by ornate corners (brass, gold, carved wood) over
  parchment or dark leather; nine-slice borders that stretch cleanly
- Grids of identical square slots holding icons, with tooltips on hover
  and a colored rim that says rarity (grey → green → blue → purple →
  orange)
- Bars that fill in segments, with a delayed "chip" trailing behind
  damage; big beveled buttons that visibly press
- A selection cursor that glows, scales, or brackets the focused item —
  navigation is focus-driven, not pointer-driven
- The failure: a "gamified" dashboard wearing frames and bars over data
  that has no stakes — costume without rules

## Dials

- **register** — *fantasy RPG* (parchment, ornament, serif display),
  *sci-fi* (→ [[fui]]), *arcade / cabinet* (marquee type, neon,
  attract-mode motion), *retro console* (pixel, bitmap fonts, 4-color
  windows → [[pixel-art-technique]]), *cozy / soft* (rounded, pastel,
  wobbly → [[cute-naive]], [[soft-aesthetics]]), *AAA minimal* (thin
  lines, translucent panels, cinematic type)
- **diegesis** — overlay HUD vs in-world panels (a map on a table, a
  screen on a wrist); diegetic UI trades legibility for immersion
- **frame ornament** — nine-slice weight and detail: hairline → carved
  corners; the frame is the register's signature
- **slot & grid grammar** — slot size, gap, stack counts, drag-to-move
  ([[interaction-feel]]), empty-slot treatment
- **bar language** — continuous vs segmented, delayed damage/heal chip,
  color by resource, numbers on or off
- **selection feedback** — glow, scale, bracket cursor, sound; one
  focused item at all times (controller-first)
- **semantic palette** — rarity tiers, faction colors, resource hues as
  a [[color-roles]] token set that never changes meaning
- **juice budget** — hit flash, shake, particles on reward; earned only
  by events ([[motion-ceremony]]); see INDEX's game-feel candidate

## Techniques

- **Nine-slice frames** — `border-image: url(frame.svg) 24 fill / 24px
  stretch` (or `round`); author the corner/edge/center once as SVG.
- **Parchment & leather** — [[material-texture]] paper/leather base +
  inset [[vignette]] + a slight warp mask for aged edges.
- **Bars** — two stacked fills: the real value transitions immediately,
  the "chip" layer follows after `transition-delay: 300ms`; segments via
  a repeating-linear-gradient mask.
- **Slot grid** — CSS grid of fixed cells, `aspect-ratio: 1`, rarity as a
  `box-shadow: inset 0 0 0 2px var(--rarity)`; tooltips via
  [[popover-menu]] rules.
- **Focus-driven navigation** — roving `tabindex`, arrow-key and Gamepad
  API handling, a single `[data-focused]` cursor style; pointer hover
  simply moves focus.
- **Pixel register** — `image-rendering: pixelated`, bitmap web fonts at
  integer scales, window frames drawn with box-drawing-like sprites.
- **Diegetic panels** — CSS 3D transforms for planes in a scene, or
  three.js `CSS3DRenderer` when the world is WebGL ([[scene-staging]]).

## Starting points

- Game UI Database (gameuidatabase.com) and Interface In Game — the
  reference galleries, filterable by genre and element
- Kenney UI packs (CC0) — frames, bars, icons for prototyping
- MDN `border-image` and Gamepad API docs
- Recent showcases: retro-console menus and cartridge carousels
  (recent.design)

## Search queries

- `css border-image nine slice frame`
- `health bar delayed damage chip css`
- `gamepad api focus navigation web ui`
- `game ui database inventory grid reference`
- `bitmap pixel font css image-rendering pixelated`

## Related

[[fui]] (the sci-fi register), [[pixel-art-technique]] + [[period-looks]]
(retro console), [[skeuomorphism]] (pressable, material buttons),
[[historical-ornate]] (fantasy ornament), [[material-texture]] (parchment,
leather), [[cute-naive]] + [[soft-aesthetics]] (cozy register),
[[interaction-feel]] + [[motion-ceremony]] (juice), [[color-roles]]
(rarity tokens), [[chips-badges-avatars]] (stat pills), [[disclosure]]
(skill trees, quest logs), [[loading-language]] (loading-screen lore),
[[particles]] + [[glow-bloom]] (reward moments), [[scene-staging]]
(diegetic panels).
