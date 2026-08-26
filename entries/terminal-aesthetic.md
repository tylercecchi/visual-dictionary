---
name: terminal-aesthetic
title: Terminal / Code Aesthetic
category: ui-foundations
aliases: [terminal ui, tui, command line look, hacker aesthetic, monospace ui, code editor look, ncurses, box drawing, man page, developer tool design]
media: [css, canvas]
---

# Terminal / Code Aesthetic

UI that speaks fluent terminal — monospace grids, box-drawing borders, prompt
markers, syntax-highlight palettes. As a *system* it's the developer-tool
dialect; distinct from [[crt-scanlines]] (the display) and
[[ascii-rendering]] (the image technique): this is layout and typography.

## You know it when you see

- Everything on a character grid: monospace type, columns that align by character count
- Box-drawing characters (─ │ ┌ ┐) or ASCII (`+--+`) as borders and trees
- Prompt furniture: `$`, `>`, `❯`, blinking block cursors, `[Y/n]` affordances
- Syntax-highlighting colors used as the *product's* palette; status conveyed in badge-words like `[ OK ]`, `WARN`
- Dense, keyboard-first layouts; man-page/README typography as marketing design

## Dials

- **grid strictness** — true character grid (everything aligns, TUI-faithful) vs monospace-flavored (mono type on normal layout); half-committing shows
- **chrome vocabulary** — box-drawing weight (single/double/rounded/heavy), or borderless whitespace-only (modern CLI minimalism); title-in-border (`┤ title ├`) as the signature detail
- **palette source** — a named terminal theme (Solarized, Dracula, Gruvbox class) or 16-color ANSI discipline; the ANSI constraint *is* the [[color-roles]] system — 8 colors + brights, semantic by convention (red=error, green=ok)
- **prompt & cursor personality** — prompt glyph choice, block vs bar cursor, blink or steady; typewriter reveal ([[motion-ceremony]]: use once, not everywhere)
- **era register** — phosphor-mono retro (green/amber + [[crt-scanlines]]) vs modern developer-tool (crisp, themed, no CRT nostalgia)

## Techniques

- **CSS character-grid** — `ch` units are the tool: widths/paddings in
  `ch`, `line-height` as the row unit; box-drawing glyphs render reliably in
  good mono fonts (verify the font ships them — Nerd Font patches fill gaps).
- **Font choice** — the mono face is the entire [[typographic-voice]]
  decision: humanist (readable warmth), grotesk mono (design-forward),
  bitmap-style (retro); ligature sets for the code register.
- **Syntax-highlight theming** — highlight libraries (Shiki-class) accept
  theme JSON — align it to the product palette rather than defaulting;
  ANSI-to-HTML converters for rendering real terminal output.
- **TUI-in-browser** — xterm.js for real terminal emulation; or "fake
  terminal" DOM components (typed reveals, prompt lines) for marketing —
  keep output honest-looking (real command syntax, plausible timing).
- **Details that sell it** — `::selection` styled like terminal selection,
  `caret-color` + a block-caret trick, `[ OK ]`-style status badges, tabular
  everything (`font-variant-numeric: tabular-nums`).

## Starting points

- Terminal theme collections (iTerm2-Color-Schemes repo class) — hundreds of
  palettes in portable formats
- xterm.js for real emulation; Shiki for code highlighting
- Charm (charm.sh) TUI ecosystem — the modern-pretty-terminal reference
- classic `man` page / README typography as layout reference

## Search queries

- `css ch unit character grid layout`
- `box drawing characters font support nerd font`
- `iterm color schemes repository ansi`
- `xterm.js embed terminal web`
- `shiki custom theme json`

## Related

[[crt-scanlines]] (the optional display costume), [[ascii-rendering]]
(images in this world), [[typographic-voice]] (mono maximal),
[[color-roles]] (ANSI as a role system), [[brutalism]] (kin in rawness),
[[fui]] (the fictional cousin), [[chart-voice]] (sparklines in block
characters ▁▃▆█ — the native dataviz).
