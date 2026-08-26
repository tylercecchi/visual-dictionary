---
name: cursor-effects
title: Cursor / Pointer Effects
category: motion
aliases: [custom cursor, cursor follower, magnetic buttons, hover spotlight, cursor trail, pointer glow, mouse effects]
media: [css, canvas, webgl]
---

# Cursor / Pointer Effects

The pointer as a design object — custom cursors, followers that lag behind,
elements that reach toward it, and surfaces that light up under it. High
signature-per-effort, and high risk of novelty tax.

## You know it when you see

- A dot/ring following the cursor with springy lag, morphing over targets
- Buttons that magnetically pull toward an approaching pointer
- A soft spotlight/glow on cards tracking the pointer (the hover-glow border)
- Trails: particles, smears, or ink following movement
- The failure: hidden native cursor + laggy replacement = broken-feeling site

## Dials

- **follower lag/spring** — the damping constant is the personality: tight (precise) vs floaty (dreamy); zero lag = pointless, too much = disconnected
- **context morphing** — how the follower transforms over links/images/text (grow, invert, label); this contract is the effect's information value
- **magnetism radius & strength** — how far buttons reach and how hard; subtle (2-6px) reads premium, strong reads gimmick
- **spotlight recipe** — radius, color, and what it reveals: plain glow, gradient border ([[border-stroke]]), or hidden texture
- **degradation** — touch devices get none of this; `prefers-reduced-motion` and keyboard users need everything to work without it

## Techniques

- **Lerped follower** — track pointer, ease a follower element toward it
  per frame (`pos += (target - pos) * 0.1`) with transforms; blend modes
  (`mix-blend-mode: difference`) for the inverting dot. Keep the native
  cursor visible unless the replacement is flawless.
- **Magnetic elements** — on pointermove near an element, translate it
  toward the pointer scaled by distance; spring back on leave (spring
  library, [[motion-ceremony]]).
- **Spotlight cards (CSS)** — pointer position into CSS custom properties,
  a `radial-gradient` at `var(--x) var(--y)` on an overlay or border layer.
  The famous glow-border card is this + masked gradient border.
- **Canvas/WebGL trails** — pointer as emitter for [[particles]], ink
  ([[fire-smoke]] fluid), or displacement ([[liquid-ripple]]); the pointer is
  the standard *input* to every showpiece shader.

## Starting points

- Spring libraries (framer-motion/GSAP) for followers/magnetism
- The spotlight-card pattern (widely documented; no library)
- codrops — the archive of cursor experiment references

## Search queries

- `custom cursor follower lerp spring`
- `magnetic button hover effect gsap`
- `css spotlight card radial-gradient custom properties`
- `mix-blend-mode difference cursor dot`

## Related

[[motion-ceremony]] (damping personality), [[particles]] +
[[liquid-ripple]] + [[fire-smoke]] (pointer-driven showpieces),
[[shimmer-sheen]] + [[border-stroke]] (glow borders), [[parallax]]
(pointer as depth input), [[glow-bloom]] (the spotlight's light).
