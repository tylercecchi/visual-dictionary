---
name: media-chrome
title: Media Player Chrome
category: layout
aliases: [video player, player controls, playback controls, scrubber, video ui, audio player, mini player, media overlay, play button, timeline scrubber]
media: [css]
---

# Media Player Chrome

**Surface contract:** overlaid on media · non-blocking · **auto-hide**
(the persistence mode this surface introduces: present on interaction,
gone during engagement) · tier above content only.

The controls that live *on* the thing they control — play/pause, a
scrubber, volume, fullscreen — appearing when summoned and dissolving so
the media owns the screen. A surface whose defining skill is knowing when
to disappear.

```
┌───────────────────────┐
│                       │
│      (video)      ▶   │
│                       │
│ ▶ ──●────────── 12:04 │  ← control bar on scrim
└───────────────────────┘
```

## You know it when you see

- A control bar over the media's bottom edge, on a soft scrim, fading out during playback
- A scrubber with buffered/played track states, hover preview thumbnails
- Mini-player and PiP states carrying playback across navigation
- The failures: controls that never hide (or hide while you're reaching for them), scrubbers too thin to grab, volume flyouts that trap the cursor

## Dials

- **auto-hide rhythm** — show on pointer move/tap, hide after ~3s of playback without interaction; *never* hide while paused, while the pointer is over the controls, or during keyboard focus ([[visible-accessibility]] — focus pins the chrome); fade at [[motion-ceremony]] micro timing
- **scrubber anatomy** — track with three states (rail / buffered / played — [[color-roles]]: played wears the accent), a thumb that grows on hover ([[hover-response]]) and drags with [[interaction-feel]] direct fidelity; time labels current/total in `tabular-nums`; hover preview (timestamp tooltip, thumbnail sprite at the premium tier); chapters as track segment marks
- **control hierarchy** — play/pause is the hero (center-stage tap target on mobile, bar-leading on desktop); one row covers transport, volume, time, settings, PiP, fullscreen — beyond that, overflow into a settings [[popover-menu]] (quality, speed, captions)
- **scrim discipline** — controls sit on a bottom-up [[gradients]] eased scrim (and top scrim if a title bar exists), per [[progressive-blur]]'s pairing law — never a full-media dim during playback
- **state ceremonies** — center-stage feedback pulses for tap-to-play/pause and double-tap-skip (±10s with ripple count), buffering as a centered spinner *only* when stalled ([[loading-language]] delay law), keyboard parity (space, arrows, f, m) throughout
- **detached states** — mini-player (corner-docked [[card]] with transport essentials, draggable, swipe-to-dismiss) and PiP (the OS version); playback continuity across navigation is the point — the mini-player is a [[toast-notification]]-positioned surface with a media heart
- **audio register** — no frame to overlay, so chrome *is* the surface: artwork + transport as a card or persistent bottom bar ([[app-shell]] dock logic); waveform scrubbers ([[audio-reactive]]) where seeking precision matters

## Content contract

Time-based media with meaningful seek — video, audio, screencasts. Short
looping ambient video (heroes, previews) explicitly *refuses* this
surface: no controls beyond an optional mute, per its decorative
contract. If users never seek, a play/pause toggle alone beats full
chrome.

## Collapse behavior

Mobile: tap toggles chrome, center transport cluster (back-10 / play /
fwd-10) over the media, scrubber full-width at the bottom edge with a
generous touch slop; volume defers to hardware; fullscreen rotates.
The auto-hide rhythm is identical — touch just replaces hover as the
summons.

## Techniques

- **`<video>` + custom chrome** — native element, controls suppressed,
  custom bar bound via the media element API; keep native controls as
  the no-JS fallback.
- **Media Chrome (media-chrome.org)** — the web-component suite for
  exactly this (scrubber states, PiP, airplay wired; verify currency) —
  the substrate before hand-building.
- **Scrubber previews** — sprite sheets or `preview` tracks sampled on
  hover position.
- **Auto-hide** — an idle timer reset by pointer/touch/key events,
  gated by `paused`, hover-over-controls, and `:focus-within`.

## Search queries

- `media-chrome web components player`
- `custom video scrubber buffered played states`
- `auto hide video controls idle timer focus`
- `video thumbnail preview sprite scrubber`

## Related

[[stories-format]] (the auto-advancing sibling; this one serves
deliberate viewing), [[interaction-feel]] (scrub physics),
[[hover-response]] (thumb/preview), [[gradients]] +
[[progressive-blur]] (scrims), [[loading-language]] (buffering delay
law), [[audio-reactive]] (waveform seeking), [[toast-notification]]
(mini-player positioning), [[color-roles]] (track states),
[[visible-accessibility]] (keyboard parity, focus pinning).
