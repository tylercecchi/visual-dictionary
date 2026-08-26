---
name: conversation-layout
title: Conversation Layout
category: layout
aliases: [chat ui, chat layout, message bubbles, chat interface, messaging app, chat thread, ai chat, chatbot ui, dm layout, composer]
media: [css]
---

# Conversation Layout

**Coordinate:** vertical · flow · newest-*bottom* anchored · linear ·
single-surface (often inside a framed shell) — [[timeline-feed]]'s chat
register grown into its own archetype: sender-semantic alignment, a
pinned composer, and a live bottom edge.

```
│ ┌──────────┐          │
│ │ theirs   │          │
│ └──────────┘          │
│          ┌──────────┐ │
│          │   mine   │ │
│          └──────────┘ │
│ ● ● ●  (typing)       │
├───────────────────────┤
│ [ message…      ] [➤] │
```

## You know it when you see

- Bubbles alternating by sender — theirs left, mine right (accent-filled)
- A composer pinned to the bottom, growing as you type; the thread anchored to its newest message
- Typing indicators, read receipts, date separators
- The failures: every message carrying its own avatar+timestamp (no grouping), scroll yanked to bottom while reading history, an AI chat cosplaying as SMS when full-width would read better

## Dials

- **alignment register** — *dialogue* (bubbles: mine right + accent fill, theirs left + neutral — [[color-roles]] doing speaker identity) vs *document* (full-width rows, speaker labels/avatars in a gutter — the register most AI chats should use once responses run long: bubbles are for utterances, rows are for essays); choose by message length, not habit
- **bubble anatomy** — radius per [[shape-language]] with the *tail corner* flattened on the last-of-group; max-width ~70-75% ([[text-block-grammar]] measure — full-width bubbles read as walls); metadata (time, status ticks) whisper-quiet inside or below the group
- **grouping & separators** — consecutive same-sender messages coalesce (one avatar, one timestamp, tight intra-group gaps — [[timeline-feed]]'s coalescing law with [[spacing-density]] within<between doing the speaker rhythm); date separators as centered quiet chips
- **the live edge** — anchored to bottom; incoming messages while scrolled-up surface a "new messages ↓" pill, never a scroll yank ([[timeline-feed]]'s respectful default); history loads upward with preserved position
- **composer contract** — pinned bottom, textarea auto-growing to a cap (~5-6 lines) then scrolling internally, send affordance + Enter policy stated, attachments/actions as leading icons; the keyboard must never cover it ([[focus-page]]'s mobile law); drafts persist per-thread
- **presence & process** — typing indicator (the three-dot bubble, [[motion-ceremony]] ambient micro), delivery/read states ([[chips-badges-avatars]] dot logic); in AI register: streaming text token-flow ([[kinetic-type]]'s calmest arrival), thinking/tool states (the AI-interface language — see INDEX candidates), stop/regenerate affordances
- **rich stream content** — cards, images, code blocks, tool results *inside* the flow inherit the thread's width discipline; interactive embeds ([[card]] anatomy) sit as full-width rows regardless of register

## Content contract

Turn-based utterances between identified speakers, time-ordered,
open-ended. The register dial is the contract's hinge: short
multi-party turns → dialogue bubbles; long single-counterpart responses
(AI, support macros) → document rows. Mixed products (short user turns,
long AI turns) legitimately mix: bubbles for the user, rows for the
assistant.

## Collapse behavior

Born mobile — the phone *is* the native form. The desktop adaptation is
the choice: centered column at reading measure (the AI-chat standard) or
a [[app-shell]] master-detail (thread list + conversation). Composer and
live-edge behavior are identical at every size.

## Techniques

- **Anchoring** — `flex-direction: column` with scroll-to-bottom logic
  guarded by an "is user at bottom" check; `overflow-anchor` for
  prepended history ([[timeline-feed]]'s machinery, bottom-anchored).
- **Auto-grow composer** — `field-sizing: content` where supported;
  otherwise the hidden-replica technique; cap + internal scroll.
- **Streaming** — append tokens into the last row without per-token
  reflow of neighbors; scroll-follow only while anchored; render
  markdown progressively ([[loading-language]]: the stream *is* the
  progress indicator — no spinner beside it).
- **Virtualization** — long threads window upward (variable-height —
  the hard version; virtuoso-class, verify currency).

## Search queries

- `chat scroll anchoring new messages pill`
- `field-sizing content textarea autogrow`
- `streaming text chat ui react`
- `chat bubble grouping consecutive messages`

## Related

[[timeline-feed]] (the parent pattern; this adds speakers + composer),
[[kinetic-type]] (streaming arrival), [[chips-badges-avatars]]
(avatars, presence, status ticks), [[color-roles]] (speaker identity),
[[text-block-grammar]] (measure inside bubbles), [[app-shell]]
(master-detail hosting), [[card]] (rich embeds), [[loading-language]]
(thinking states), [[motion-ceremony]] (typing ambience),
[[command-palette]] (the power-user layer above chat products).
