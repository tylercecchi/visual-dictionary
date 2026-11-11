---
name: voice-interaction
title: Voice Interaction
summary: "listen, think, speak states; push-to-talk vs open mic, interruption, transcript echo"
category: behavior
aliases: [voice ui, voice interface, voice interfaces, voice mode, voice input, voice assistant, voice chat, talk to the assistant, speech input, speech to text, dictation, push to talk, push-to-talk, hold to talk, tap to talk, open mic, hands free, barge in, interrupt the assistant, listening state, speaking state, voice visualizer, mic button, microphone button, voice glow, voice ring, waveform while talking, live transcript]
media: [css, canvas, webgl]
---

# Voice Interaction

The behavior of speaking to an interface and hearing or seeing it
answer: how the mic opens and closes, how the system shows it is
listening, thinking or speaking, how the user interrupts, and how speech
becomes visible text.

## You know it when you see

- A mic button that becomes a glowing orb, ring, or edge glow reacting to
  your voice
- Distinct looks for *listening* (follows your level), *thinking*
  (travelling beam or spinning highlight) and *speaking* (follows the
  assistant's audio)
- Words appearing as you say them, then settling into a final transcript
- The failures: you can't tell whether it's still listening, it cuts you off
  mid-sentence, or it keeps talking over you

## What it does

Voice removes the keyboard but also removes the screen's usual feedback,
so the interface has to carry state the user can't otherwise see: is the
mic open, did it hear me, is it working, may I talk now. The pattern is a
small state machine (idle → listening → processing → speaking → idle),
each state with its own unmistakable visual and timing, plus rules for who
may interrupt whom.

## When to use

- Hands or eyes are busy (driving, cooking, accessibility needs)
- Input is long or conversational and typing is slow (dictation, AI chat)
- Mobile and wearable surfaces where a keyboard is costly
- As a parallel input beside text, never the only route

## When not to use

- Shared or quiet spaces, or private content: offer text input as the
  default and voice as an option
- Precise or structured input (codes, emails, numbers in forms): use typed
  fields with [[autocomplete-typeahead]]
- Browsing and comparison tasks: a visual list beats hearing options read
  aloud ([[interaction-principles]]: working memory)
- When there's no visible state machine yet: build the states first, and
  don't ship a mic that only says "on"

## Dials

- **mic model**: push-to-talk (hold; explicit, private, no end-of-speech
  guessing) vs tap-to-toggle vs open mic with voice activity detection
  (hands-free; needs a good end-of-turn detector)
- **end-of-turn silence**: how long a pause ends the user's turn. ~500-
  800ms feels responsive; longer avoids cutting off people who pause to
  think. Expose a "hold on" by keeping the mic open while the level stays above threshold
- **barge-in**: whether the user's voice interrupts the assistant
  mid-reply (it should, by default, in conversational modes); duck the
  output on detected speech
- **state visuals**: listening follows the *user's* input level;
  speaking follows the *output* level; processing has its own non-audio
  motion. Never reuse one animation for two states
- **level response**: sensitivity, threshold (noise floor), attack/release
  smoothing. Fast attack, slower release reads as alive, not jittery
- **transcript echo**: none, live interim text, or final text only;
  interim words should be visibly provisional (lighter) until confirmed
- **earcons & haptics**: a short tone or tick on mic open/close, so the
  state is known without looking

## Techniques

- **Platform audio**: `getUserMedia({ audio: true })` (requires https or
  localhost, and start it from a user gesture) → `AudioContext` +
  `AnalyserNode` for a 0-1 level to drive visuals.
- **Speech-to-text**: the Web Speech API's `SpeechRecognition` for
  quick prototypes (browser support varies); a streaming STT service or a
  realtime voice API for production, which also gives end-of-turn and
  barge-in events.
- **Visualizers**: a CSS glow scaled by a level custom property is the
  cheapest; canvas rings/waves for richer motion; WebGL for shader orbs
  ([[ai-orb]], [[audio-reactive]]). Keep the same component across states
  and change only its behavior.
- **Accessibility**: mirror every state in text (`aria-live` "Listening",
  "Thinking"), keep a keyboard/text path, and respect reduced motion by
  replacing level-driven motion with a steady state indicator.

## Starting points

- libraries.dev — `voice-glow` (edge glow + processing beam) and
  `voice-ring` (idle/listening/speaking/processing ring); see LIBRARIES.md
- design.how Vault — [Voice wave](https://github.com/arla6ka/design.how/tree/main/vault/voice-wave)
  (WebGL2 ribbon that can listen to the mic; MIT)
- MDN: Web Speech API, `AnalyserNode`

## Search queries

- `voice activity detection end of turn silence threshold`
- `react microphone level visualizer analysernode`
- `push to talk vs open mic voice assistant ux`
- `barge-in interrupt tts voice agent`
- `web speech api speechrecognition interim results`

## Related

[[ai-orb]] (the visual presence of the voice), [[audio-reactive]]
(level-driven visuals), [[ai-interaction]] (the text-side AI behaviors),
[[conversation-layout]] (where transcripts land), [[status-signals]]
(mic-open indicators), [[spatial-input]] (other non-touch input),
[[loading-language]] (the processing state).
