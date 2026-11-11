---
name: live-feedback
title: Live Feedback
summary: "inline validation timing, live preview, parse echo, optimistic UI with rollback"
category: behavior
aliases: [inline validation, live validation, realtime validation, validation timing, premature error, premature errors, error too early, live preview, preview as you type, wysiwyg, what you see is what you get, interpretation preview, parse preview, natural language date, smart input, optimistic update, optimistic updates, rollback, instant feedback, immediate feedback, password strength, character count, availability check, finish typing, errors while typing, show the change, see changes live]
media: [css]
---

# Live Feedback

The interface answering *while* the user acts — validating a field,
previewing the result of a setting, echoing how typed input was understood,
or showing an action as done before the server confirms. Progress
indicators for waits are [[loading-language]]; this entry is the
conversation that happens at the control itself.

## You know it when you see

- A field turning green with "Username available" a beat after you stop typing
- A preview pane or the real canvas updating as a slider moves, no Apply button
- Typing "lunch tomorrow 1pm" and the words "tomorrow 1pm" turning into a date chip
- A like/checkbox flipping instantly, quietly reverting with a note if the save fails
- The failures: "Invalid email" in red after the first letter; preview that lags the slider by a second; a "saved" state that silently wasn't

## What it does

Shortens the loop between act and consequence so users correct course
before committing. Validation reports problems at the moment they become
real; preview shows the outcome of a setting before it is kept;
interpretation preview reveals what the system *understood* so parse
errors surface before they cost anything; optimistic UI applies the result
locally and reconciles with the server afterward.

## When to use

- Fields with rules the user can't see (format, uniqueness, strength, length limits)
- Settings whose effect is visual or hard to predict (theme, crop, filters, typography, layout)
- Free-text input the system parses into structure (dates, amounts, addresses, search operators, AI prompts)
- Frequent, low-risk, usually-successful mutations (like, reorder, toggle, rename)

## When not to use

- Rules that can only be checked as a whole — validate on submit ([[form-grammar]])
- Expensive previews (>~1s to render) — use an explicit Preview/Apply step or a low-res draft preview
- Mutations that often fail or can't be reversed (payments, sends, deletes of shared data) — use a pending state ([[loading-language]]) or confirm ([[modal-dialog]]), with [[undo-recovery]] where possible
- Long-running async results — use [[loading-language]] progress, then [[toast-notification]]

## Dials

**Validation timing**
- **trigger** — on blur for format rules; on input (debounced ~300-500ms) only for live facts (availability, strength, remaining characters); on submit for cross-field rules
- **premature-error guard** — no error while the user is still typing the first time; once a field has erred, re-check on every input so the error clears instantly (punish late, reward early)
- **positive confirmation** — show a check only when it was in doubt (availability, strength met); silence otherwise

**Live preview**
- **preview latency** — target <100ms per adjustment (feels attached); throttle to animation frames while dragging, full-quality render on release
- **commit model** — auto-apply with undo for reversible settings; preview + Apply/Cancel when the change is costly or shared; before/after toggle for subtle changes
- **scope** — preview in place (the real object) beats a separate preview pane; pane only when in-place is impossible

**Interpretation preview**
- **echo form** — highlight recognized tokens in the text (dates, people, amounts) and/or show a parsed summary ("Fri 7 Nov, 13:00") below the field
- **override** — every recognized token can be clicked to correct, or reverted to plain text with one Backspace/Escape
- **ambiguity** — when parse confidence is low, show both readings ("3/4 → 3 Apr or 4 Mar?") rather than guessing silently

**Optimistic UI**
- **apply delay** — 0ms; the UI changes on the input event
- **pending marker** — subtle (reduced opacity, small clock glyph) only if confirmation takes >~1s ([[status-signals]])
- **rollback** — on failure, revert the exact item, keep the user's input where possible, explain at the item and offer retry; never fail silently

**Placement**
- **at the trigger** — feedback appears within ~1 line or ~200px of the control that caused it; distant banners only for page-level outcomes

## Techniques

- **Constraint Validation API + `:user-invalid`** — native
  `required`/`pattern`/`type`/`minlength`, `setCustomValidity()`, and
  `:user-invalid`/`:user-valid` styles that wait for interaction — the
  timing rule with no JS.
- **`<output>` + `input` events** — live values next to sliders; CSS
  custom properties updated on `input` for instant visual preview.
- **`aria-live="polite"`** regions for validation and parse echoes;
  `aria-invalid` + `aria-describedby` on fields ([[visible-accessibility]]).
- **Form libraries** — react-hook-form (`mode: "onTouched"`,
  `reValidateMode: "onChange"` = the timing rule), Formik, TanStack Form,
  zod/valibot schemas.
- **Parsing** — chrono-node (natural-language dates), Intl APIs for
  number/currency echo; editor decorations (Tiptap/ProseMirror marks) to
  highlight recognized tokens.
- **Optimistic state** — React `useOptimistic`, TanStack Query
  `onMutate`/`onError` rollback, SWR `optimisticData`, Apollo
  `optimisticResponse`.

## Starting points

- MDN: Constraint validation, `:user-invalid`
- TanStack Query "Optimistic Updates" guide
- https://interfacelineage.com/inline-validation, /live-preview,
  /interpretation-preview, /honest-vs-theater-progress — further reading

## Search queries

- `user-invalid pseudo-class inline validation timing`
- `react-hook-form mode onTouched reValidateMode`
- `chrono-node natural language date parsing highlight`
- `useOptimistic rollback error react`
- `live preview slider css custom properties`

## Related

[[form-grammar]] (error anatomy and form layout), [[loading-language]]
(progress for real waits), [[undo-recovery]] (pairs with auto-apply and
optimism), [[status-signals]] (pending/saved/sync markers),
[[toast-notification]] (async outcomes elsewhere),
[[autocomplete-typeahead]] (suggestion as feedback),
[[continuous-controls]] (sliders that drive previews),
[[ai-interaction]] (echoing how a prompt was read),
[[interaction-principles]] (feedback, response-time bands).
