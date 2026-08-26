---
name: audio-reactive
title: Audio-Reactive Visuals
category: motion
aliases: [audio visualizer, music visualization, waveform, spectrum, sound reactive, beat detection, vu meter, oscilloscope, equalizer bars]
media: [canvas, webgl]
---

# Audio-Reactive Visuals

Graphics driven by sound — waveforms, spectrum bars, and any effect in this
dictionary with its dials wired to music. The visual admits it's listening.

## You know it when you see

- Spectrum bars/radial rings pulsing with music (the equalizer archetype)
- A live waveform scrolling or ringing (oscilloscope, voice memos)
- Scenes that flash, zoom, or [[glow-bloom]] on the beat
- Ambient blobs/[[particles]] that swell with loudness and shiver with treble

## Dials

- **feature → parameter mapping** — the craft *is* this wiring: bass/kick → scale and camera punch, mids/vocals → color or brightness, treble → fine detail (particle jitter, [[film-grain]]); loudness (RMS) → overall energy
- **smoothing & attack** — raw FFT is jittery: exponential smoothing per band; fast attack + slow decay reads "responsive but calm" (the VU-meter law)
- **beat gating** — continuous mapping (organic) vs onset-triggered events (choreographed hits: flashes, [[dissolve-disintegration]] bursts, palette swaps)
- **band resolution** — 3 bands (bass/mid/treble, robust) vs full spectrum (bars, detail); log-scale the frequency axis or bass eats everything
- **fallback animation** — without audio permission/signal, run on [[procedural-noise]] time so the visual never flatlines

## Techniques

- **Web Audio `AnalyserNode`** — the entire input layer:
  `getByteFrequencyData` (spectrum) / `getByteTimeDomainData` (waveform)
  per frame from mic, media element, or stream. No library needed.
- **Canvas 2D visualizers** — bars, radial spokes, scrolling waveforms
  drawn from the arrays; the classic register, trivial and robust.
- **Uniform wiring (GLSL/three.js)** — smoothed band values as shader
  uniforms driving *any* effect here: displacement ([[liquid-ripple]]),
  bloom strength, [[mesh-gradient]] drift, camera FOV punch. The premium
  register is an existing look + three well-chosen uniforms.
- **Onset detection** — spectral-flux beat detection in JS for event
  triggers; libraries exist (verify currency) but a simple flux threshold
  covers most cases.

## Starting points

- MDN Web Audio visualization guide — the AnalyserNode canon
- Shadertoy audio-input shaders (iChannel audio) — mapping ideas to steal
- butterchurn (Milkdrop port) — the maximalist reference/embeddable

## Search queries

- `web audio analysernode visualizer tutorial`
- `spectral flux beat detection javascript`
- `three.js audio reactive uniforms fft`
- `butterchurn milkdrop web`

## Related

Anything here can be audio-wired — most naturally [[particles]],
[[liquid-ripple]], [[glow-bloom]], [[mesh-gradient]], [[fire-smoke]],
[[kaleidoscope]]; [[fui]] (oscilloscope widgets), [[motion-ceremony]]
(attack/decay is easing for sound), [[dissolve-disintegration]] (beat-gated
bursts).
