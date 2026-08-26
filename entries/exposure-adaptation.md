---
name: exposure-adaptation
title: Exposure / Adaptation
category: light-and-depth
aliases: [overexposure, blown highlights, eye adaptation, auto exposure, hdr, tone mapping, blinding light, tunnel exit, brightness adjustment, camera exposure, washed out, tenebrism, chiaroscuro, low-key dramatic lighting]
media: [css, canvas, webgl]
---

# Exposure / Adaptation

The camera's (or eye's) response to light as an effect — highlights blowing
out to white, the blinding wash when stepping from dark to bright that
settles as vision adjusts, auto-exposure hunting between subjects. The
*temporal* light story: not how the scene is lit, but how the observer copes.

## You know it when you see

- Bright regions clipping to pure detail-less white (blown highlights), often with [[glow-bloom]] at the clip edge
- The tunnel-exit moment: the view floods white, then detail fades in as exposure settles
- Its inverse: entering darkness, seeing nothing, shadows slowly resolving (dark adaptation)
- Exposure *hunting*: brightness visibly re-balancing as the view moves between bright and dark subjects
- The deliberate overexposed aesthetic: washed, high-key imagery with lifted floors and clipped skies

## Dials

- **clip point & rolloff** — where whites blow: hard digital clip (harsh, video) vs soft shoulder rolloff (filmic tone mapping — highlights compress before clipping, the "expensive camera" look); this dial is what tone-mapping curves *are*
- **adaptation speed & asymmetry** — the temporal signature: light adaptation fast (a second), dark adaptation slow (many seconds, physiologically minutes); getting the asymmetry right is what reads as *eyes* rather than a brightness tween
- **overshoot choreography** — transitions overshoot then settle: entering brightness = flood white *past* target, ease back; the settle curve is the drama ([[motion-ceremony]] applied to luminance); one-shot events (a flash, a door opening) vs continuous auto-exposure
- **what meters** — full-frame average (calm), spot-metering the subject (moving between subjects re-exposes the world around them — the attention-follows-exposure trick, [[visual-hierarchy]] via luminance), or authored per-zone
- **key register** — the static aesthetic wing: high-key (deliberately overexposed: lifted blacks, clipped whites, airy — editorial/dreamy) vs low-key (underexposed: crushed, one bright pool — noir); a [[gradients]]/curve recipe rather than a behavior

## Techniques

- **CSS transition moments** — the tunnel-exit as a page transition: a
  white (or black) overlay at full opacity easing out with an overshoot
  curve + a simultaneous `filter: brightness/contrast` settle on content;
  the dark-room entrance inverts it (content starts crushed-dark, resolves).
  Right for [[page-transitions]] between "environments" and reveal moments.
- **Scroll-driven exposure** — [[scroll-choreography]]: sections metered
  differently — scrolling from a dark hero into a bright section runs the
  adaptation flood/settle on the boundary.
- **Tone mapping (GLSL/three.js)** — the real machinery: exposure uniform ×
  filmic curve (ACES et al. — three.js `toneMapping` +
  `toneMappingExposure`); auto-exposure = average scene luminance (mipmap
  the frame to 1×1) driving exposure with asymmetric lerp speeds; blown
  highlights + [[glow-bloom]] threshold interact — clip feeds bloom.
- **High-key grade** — the static look: lift blacks, clip whites early,
  desaturate slightly ([[duotone-gradient-map]]/curve pass);
  [[film-stock]] overexposed registers (and its halation) compose here.
- **Flash & hunting events** — camera-flash: one 2-frame white +
  slow decay ([[stage-lighting]]'s one-shot kit); AE hunting: small
  continuous exposure oscillation when "metering" ambiguous scenes — a
  believability texture for camera-POV fictions ([[fui]], found-footage).

## Starting points

- three.js tone-mapping docs (`ACESFilmicToneMapping`,
  `toneMappingExposure`)
- Auto-exposure/eye-adaptation implementations (game post-processing
  literature — "luminance adaptation")
- High-key photography references for the aesthetic wing

## Search queries

- `three.js tone mapping exposure aces filmic`
- `auto exposure luminance adaptation shader mipmap`
- `css white flash transition overlay ease`
- `high key overexposed photography grade`

## Related

[[glow-bloom]] (clipped highlights feed it), [[time-of-day]] (the
environments being adapted between), [[page-transitions]] +
[[scroll-choreography]] (where the moments deploy), [[film-stock]]
(overexposure + halation), [[vignette]] (low-key's frame),
[[duotone-gradient-map]] (grades), [[motion-ceremony]] (the settle curve),
[[stage-lighting]] (flash events), [[visual-hierarchy]] (spot-metering as
emphasis), [[visible-accessibility]] (full-screen luminance swings need
reduced-motion respect).
