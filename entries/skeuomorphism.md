---
name: skeuomorphism
title: Skeuomorphism / Neumorphism
category: ui-foundations
aliases: [skeuomorphic, neumorphism, soft ui, realistic controls, physical buttons, embossed, debossed, 3d buttons, claymorphism]
media: [css, webgl]
---

# Skeuomorphism / Neumorphism

UI that claims physical existence — controls rendered as real objects
(skeuomorphism), or surfaces extruded from a single material by light alone
(neumorphism's soft emboss). Object-realism as a *system*, not an effect.

## You know it when you see

- Buttons that look pressable: highlights on top, shadow below, travel when clicked
- Neumorphism: same-color surface raised/recessed purely by paired light+dark shadows
- Claymorphism: chunky rounded inflated shapes, toy-like
- Dials, switches, and sliders drawn as their hardware ancestors

## Dials

- **realism depth** — hint-of-physicality (modern tactile buttons) → full material rendering (leather, brushed metal); pick the register deliberately
- **light-source contract** — one global light direction; every highlight and shadow must obey it or the illusion collapses
- **press behavior** — physical UI *must* respond physically: emboss inverts to deboss, travel distance, [[motion-ceremony]] spring on release
- **emboss contrast** — neumorphism's core dial: shadow/highlight offset and blur against the shared surface color; its known trap is accessibility (contrast is structurally low — verify against WCAG)
- **inflation** (clay) — radius + inner shadows that make shapes read as soft-filled

## Techniques

- **Layered box-shadows (CSS)** — the whole toolkit: outer dark + opposite
  light shadow (raise), inset pair (recess), tight inner highlights (bevel
  lips). Neumorphism generators output these values.
- **Gradient bevels** — subtle top-to-bottom luminance gradients on the
  element + a 1px lighter top border read as machined edges ([[elevation]]'s
  counter-light rule, amplified).
- **Pressed states** — swap outer to `inset` shadows + 1-2px translate;
  spring back on release. The state change carries the physicality.
- **Real materials** — [[material-texture]] fills + normal-mapped lighting
  (WebGL) for full skeuomorphic surfaces where CSS runs out.

## Starting points

- Neumorphism.io-class shadow generators — dial values to steal
- Apple's pre-iOS7 HIG and current visionOS materials — the two poles of
  Apple physicality to reference
- Josh Comeau's shadow/3D-button articles — the tasteful middle register

## Search queries

- `neumorphism css box-shadow generator`
- `3d button press css inset shadow travel`
- `claymorphism css inner shadow inflated`
- `neumorphism accessibility contrast problems`

## Related

[[elevation]] (the shared light-source physics), [[material-texture]] (what
full skeuomorphism is made of), [[shape-language]] (clay = radius maxed),
[[motion-ceremony]] (press springs), [[specular-metallic]] +
[[frosted-glass]] (hardware finishes), [[border-stroke]] (bevel lips).
