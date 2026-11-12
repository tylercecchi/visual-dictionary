---
name: ai-interaction
title: AI Interaction Patterns
summary: "prompt-first home, streaming, artifacts beside chat, inline AI edit, tool approval"
category: behavior
aliases: [ai ux, ai patterns, ai interface, llm ui, llm interface, prompt box, prompt first, input first, suggested prompts, prompt suggestions, prompt starters, streaming response, streaming responses, stop generating, regenerate, artifacts, side canvas, canvas mode, inline ai, ai edit, edit with ai, accept reject, diff view, tool approval, tool calls, human in the loop, approve action, thinking indicator, reasoning trace, citations, sources, copilot, agent ui, chatgpt, chatgpt style, ai assistant, ai agent]
media: [css]
---

# AI Interaction Patterns

The behaviours specific to products where a model is a participant —
how you ask, how the answer arrives, where its output lives, and where
the human stays in control.

## You know it when you see

- A near-empty home screen with one large prompt box and a few suggestion chips
- Text pouring in word by word, with a Stop button that becomes Regenerate
- The chat on the left and a document/code/preview panel on the right that the AI writes into
- Selecting a paragraph, typing "make it shorter", seeing red/green changes, then Accept / Reject
- "The assistant wants to run `delete_files` — Allow once / Always allow / Deny"
- A collapsible "Thinking…" or "Searched 6 sites" activity line; numbered citation chips linking to sources
- The failures: blank box with no hint what it can do, a wall of text with no way to stop it, irreversible actions taken silently, confident claims with no sources

## What it does

It turns an open-ended model into a controllable tool. The input box
becomes the primary entry point, suggestions teach capability, streaming
shows progress and lets the user interrupt, long-lived outputs move out of
the scrolling chat into an editable artifact, edits are proposed as diffs
rather than applied, and actions with side effects pause for explicit
approval — with reasoning and sources exposed so output can be checked.

## When to use

- **Input-first launch**: general assistants and tools whose capability is open-ended
- **Suggested/inferred prompts**: first run, empty states, and after a response (next-step chips)
- **Streaming + stop**: any generation longer than ~1 s
- **Artifact beside chat**: outputs that get iterated on (documents, code, diagrams, apps)
- **In-place AI edit**: writing and code tools where the content already exists
- **Tool approval**: agents that write, send, spend, delete, or touch external systems
- **Reasoning/citations**: research, factual answers, multi-step agent work

## When not to use

- Narrow, well-defined tasks — use a normal form or button ([[form-grammar]]) with AI behind it, not a chat box
- Frequent known commands — use a [[command-palette]] or [[inline-commands]], not free-text prompting
- Short answers that are read once — keep them in the thread ([[conversation-layout]]); don't open an artifact panel
- Read-only or trivially reversible tool calls — auto-run with an activity log and [[undo-recovery]]; approval prompts for everything train users to click Allow blindly
- Surfacing raw chain-of-thought as the answer — show a short activity summary via [[loading-language]] and keep detail collapsible

## Dials

**Entry**
- **prompt box prominence** — centred, ~600-760 px wide, autofocused, auto-growing to ~6-8 lines; placeholder states a concrete capability, not "Ask anything"
- **suggestion count** — 3-4 chips at launch; 2-3 follow-ups after a response; infer from context (open file, selection, history) rather than generic examples; clicking fills the box (editable) for complex prompts, sends directly for simple ones

**Generation**
- **time to first token** — show an activity state within ~200 ms; target first token < ~1 s; if longer, show what it's doing ("Searching…")
- **stream cadence** — render in small chunks (word/line) at a steady pace; auto-scroll only while the user is at the bottom ([[conversation-layout]] live edge)
- **stop / regenerate** — Stop always visible during streaming (Esc shortcut), keeps partial output; Regenerate and Edit-prompt afterwards; keep prior versions as `< 2/3 >`
- **activity disclosure** — one-line live status ("Reading 3 files"), expandable into steps; collapsed by default once done

**Output & control**
- **artifact trigger** — open the side panel when output exceeds ~15-20 lines or is a runnable/editable type; versions per turn; user edits in the artifact feed back into context
- **edit granularity** — diff at word/line level for prose, hunk level for code; per-hunk Accept / Reject plus Accept all; Esc discards; original kept until accepted
- **approval tiers** — auto (read-only) · ask once per session · ask every time (destructive, external, paid); dialog states action, target, and consequence in one sentence; Deny returns a reason to the agent
- **citation density** — inline numbered chips at claim level, hover preview of source title + snippet; a sources list at the end; no citation → no sourced-sounding claim

## Techniques

- **Native streaming** — `fetch` + `ReadableStream` / Server-Sent Events
  (`EventSource`) render tokens into the last message; `AbortController`
  implements Stop. No library needed.
- **Prompt box** — `<textarea>` with `field-sizing: content`, Enter to send
  / Shift+Enter newline; suggestion chips as `<button>`s.
- **Diff rendering** — a word/line diff library (jsdiff-class) with
  `<ins>`/`<del>` styling; CSS Custom Highlight API for proposed ranges.
- **Artifact panel** — a resizable split ([[panes-and-tiling]]); sandboxed
  `<iframe srcdoc>` for runnable previews.
- **Vercel AI SDK** (`useChat`, tool calls, approval/human-in-the-loop
  hooks, generative UI) or provider SDKs — moderate dependency when the
  project is already React/Next; assistant-ui-class component kits for
  chat chrome (verify currency).
- **Editor-integrated AI** — Tiptap/BlockNote/Lexical AI extensions, Monaco
  inline suggestions for in-place edit ([[block-editor]]).

## Starting points

- Vercel AI SDK docs (streaming, tool calling, human-in-the-loop)
- MDN Streams API and Server-Sent Events
- Further reading: https://interfacelineage.com/input-first-launch,
  https://interfacelineage.com/inferred-prompts,
  https://interfacelineage.com/artifact-beside-the-chat,
  https://interfacelineage.com/in-place-ai-edit

## Search queries

- `vercel ai sdk useChat tool approval human in the loop`
- `streaming llm response abortcontroller stop button`
- `inline ai edit diff accept reject editor`
- `ai chat artifact side panel canvas ui`
- `llm citations inline ui pattern`

## Related

[[conversation-layout]] (the chat surface itself), [[ai-orb]] (the AI's
visual presence), [[loading-language]] (thinking and activity states),
[[kinetic-type]] (streaming arrival), [[panes-and-tiling]] (artifact
split), [[block-editor]] (in-place edit hosts), [[modal-dialog]]
(approval prompts), [[undo-recovery]] (reverting AI changes),
[[autocomplete-typeahead]] (inline completions), [[inline-commands]]
(slash-invoked AI), [[status-signals]] (agent run state).
