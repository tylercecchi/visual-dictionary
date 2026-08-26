---
name: eink-aesthetic
title: E-Ink / Paper Display
category: color-and-tone
aliases: [e-ink, eink, kindle look, e-reader, epaper, grayscale ui, page refresh flash, calm tech, digital paper, reMarkable look]
media: [css, canvas]
---

# E-Ink / Paper Display

The look of electrophoretic paper — warm-gray grayscale, no glow, no motion,
page-turn refreshes with their signature black flash. Borrowed on regular
screens as the *calm technology* register: reading-first, anti-dopamine.

## You know it when you see

- Grayscale (or barely-tinted) UI on a warm paper-white ground, matte and light-emitting-nothing
- Book typography carrying everything: serifs, justified columns, generous [[typographic-voice]] measure
- No animation — states *swap*; sometimes with a deliberate full-invert flash (the e-ink page refresh)
- [[dithering]] standing in for grays and images (the 16-level constraint worn proudly)
- Chunky, high-contrast controls (drawn for a display that can't afford subtlety)

## Dials

- **palette austerity** — true 1-bit (black/paper, everything dithered), 4-16 gray levels (authentic e-ink), or grayscale + one muted accent (the pragmatic register); the accent budget is the calm-tech line
- **paper warmth** — the ground: cool clinical white vs warm cream (`#f5f2ea` territory) with faint [[material-texture]] tooth; never pure `#fff` — paper isn't
- **refresh theater** — how state changes look: instant swap (honest), brief invert flash (the authentic artifact, used sparingly — [[motion-ceremony]] at its most austere), or ghosting (previous content faintly persisting, then a flash clears it)
- **image policy** — photos become [[dithering]] (Floyd-Steinberg or ordered) or [[halftone]]; the conversion *is* the aesthetic — full-color images break the spell instantly
- **contrast discipline** — e-ink has no backlight: mid-grays are precious, text is near-black, hierarchy leans on [[typographic-voice]] weight/size over color ([[visible-accessibility]] gets this for free)

## Techniques

- **Token austerity** — a grayscale [[color-roles]] set (4-6 stops) +
  paper ground + optional single accent; `filter: grayscale()` over
  imported content that can't be redesigned.
- **Dithered imagery** — build-time Floyd-Steinberg (sharp/ImageMagick) or
  runtime canvas/GLSL ([[dithering]] entry's techniques) locked to the gray
  levels; CSS `image-rendering: pixelated` to keep the dots honest.
- **Refresh flash** — a state-change wrapper: 80-120ms full-invert
  (`filter: invert(1)`) then swap; or ghost-then-clear for the deep cut.
  Gate to page-level transitions only.
- **Book layout** — reading measure (60-70ch), justified text with
  `hyphens: auto`, generous [[spacing-density]], page-turn pagination over
  infinite scroll ([[page-transitions]] as literal pages).
- **Real e-ink targets** — when actually shipping to e-paper (dashboards on
  Kindles/reMarkable): avoid mid-grays, no animation at all, big touch
  targets, server-rendered images pre-dithered.

## Starting points

- Kindle/Kobo/reMarkable UIs — the primary references
- "Calm technology" (Case/Weiser lineage) for the philosophy register
- E-ink dashboard hobbyist projects (searchable) for real-device constraints

## Search queries

- `e-ink aesthetic web design grayscale`
- `floyd steinberg dither image build sharp`
- `eink dashboard kindle server rendered`
- `calm technology design principles`

## Related

[[dithering]] + [[halftone]] (the image language), [[typographic-voice]]
(carries all hierarchy), [[material-texture]] (paper ground),
[[brutalism]] (kin in refusal), [[terminal-aesthetic]] (the other
constraint-as-identity display), [[motion-ceremony]] (near-zero register),
[[visible-accessibility]] (contrast discipline shared),
[[print-artifacts]] (actual-paper cousin).
