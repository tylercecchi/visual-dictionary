---
name: form-grammar
title: Form Grammar
category: ui-foundations
aliases: [form design, form layout, form validation, error messages, field errors, label placement, form ux, inline validation, required fields, success feedback]
media: [css]
---

# Form Grammar

How fields assemble into forms and how forms talk back — layout, grouping,
validation timing, and error/success language. Forms are conversations
with rules; the grammar is what keeps them from becoming interrogations.

## You know it when you see

- A single calm column, labels above fields, related fields visibly grouped
- Errors appearing at the right *moment*, attached to the right field, saying what to do
- Or the failures: two-column field soup, errors firing on the first keystroke, a red banner at the top pointing at nothing, "invalid input" with no cure

## Dials

**Layout**
- **the single-column law** — fields stack in one column (multi-column form layouts measurably slow completion and break scan order); the exception is *genuinely paired* micro-fields (city/state/zip, card expiry/CVC) sharing one logical row
- **label placement** — top-aligned above the field (fastest, most scannable, i18n-safe — the default per [[control-language]]); left-aligned labels only for dense settings panels ([[table-design]]-like scanning); never placeholder-only
- **grouping** — related fields cluster with [[text-block-grammar]] proximity (within < between), section headings or [[panel-well]] fieldsets for real sections; one topic per group
- **length honesty** — field widths hint expected content (zip short, address long); form length matches the ask — every field is a cost, and optional-field accretion is a product disease the layout can't hide

**Marking & help**
- **required vs optional** — mark the *minority*: mostly-required forms mark optional ("(optional)"), mostly-optional forms mark required (asterisk + legend); never mark both
- **help text** — persistent hint below the field (before the error slot) for format guidance; [[popover-menu]] tooltip only for genuinely secondary detail; help that everyone needs belongs in the label

**Validation timing (the core dial)**
- **the reward-early-punish-late rule** — validate a field on *blur* (or on submit), never on first keystroke; once a field has erred, re-validate on *input* so the error clears the moment it's fixed (punish late, reward instantly); live-validate only genuinely live things (username availability, password strength meters)
- **submit behavior** — keep the submit button *enabled*; on invalid submit, validate all, move focus to the first error, and summarize when errors are off-screen (error count + links); a disabled submit button explains nothing ([[control-language]]'s disabled law)

**Error & success language**
- **error anatomy** — inline, directly below its field, color + icon + text (never color alone — [[visible-accessibility]]), field border shifts to danger [[color-roles]]; message says *what to do* ("Enter the code from the back of your card"), not what's wrong internally ("invalid CVC format")
- **error ceremony** — a single subtle shake on the erring field or submit (translate ±4px, ~300ms, once — [[motion-ceremony]] micro budget; transitions.dev's error-shake register) plus the persistent inline message; the shake announces, the text explains
- **success moments** — per-field: a quiet check on expensive validations only (availability confirmed); form-level: the submit button's [[loading-language]] arc (spinner → check draw-on, ~600ms) then navigate or [[toast-notification]]; don't celebrate every field ([[motion-ceremony]] ceremony budget)

**Flow**
- **multi-step** — long forms chunk into steps with a [[navigation-language]] stepper: one topic per step, progress honest, back never loses data; review step before any consequential submit
- **persistence courtesy** — drafts survive accidents (local persistence on long forms); destructive navigation away from dirty forms gets a [[modal-dialog]] confirm per its earned-blocking law

## Techniques

- **Platform validation, styled** — native `required`/`type`/`pattern`
  with `:user-invalid` (styles only after interaction — the timing rule
  in one pseudo-class) + custom messages via the Constraint Validation
  API; don't rebuild what the platform times correctly.
- **Wiring** — every error `aria-describedby`-linked to its field,
  `aria-invalid` on the control, focus management to first error on
  submit; error summaries as `role="alert"`.
- **Input types & autofill** — correct `type=`/`inputmode`/`autocomplete`
  attributes are the highest-ROI form polish (right keyboards, working
  autofill).
- **Substrate** — shadcn Form (react-hook-form + zod pattern) or
  equivalent: schema-driven validation with the timing dial configured
  once.

## Search queries

- `form validation timing blur reward early punish late`
- `user-invalid css pseudo class`
- `single column form research conversion`
- `error message writing guidelines actionable`

## Related

[[control-language]] (the words this grammar arranges),
[[text-block-grammar]] (label/help attachment), [[panel-well]]
(fieldsets), [[navigation-language]] (steppers), [[color-roles]] +
[[visible-accessibility]] (error semantics), [[motion-ceremony]] (shake
and check budgets), [[loading-language]] (submit arcs),
[[modal-dialog]] (dirty-form guards), [[toast-notification]]
(form-level success), [[spacing-density]] (field rhythm).
