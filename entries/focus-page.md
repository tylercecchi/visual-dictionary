---
name: focus-page
title: Focus Page
category: layout
aliases: [login page, signup page, auth layout, 404 page, error page, checkout page, paywall, maintenance page, verification page, single task page, centered card page]
media: [css]
---

# Focus Page

**Coordinate:** centered single column/card · grid · tiled · hero (the one
task) · linear · single-surface — with the defining move being *chrome
removal*.

The one-job page — login, signup, 404, checkout, verify-your-email,
paywall, maintenance. Everything a normal page uses to offer options is
deliberately taken away, so the remaining task is the only exit.

```
┌───────────────────────┐
│         ◆ logo        │
│    ┌─────────────┐    │
│    │  Sign in    │    │
│    │  [email   ] │    │
│    │  [password] │    │
│    │  [Continue] │    │
│    └─────────────┘    │
└───────────────────────┘
```

## You know it when you see

- A lone card floating in generous space; nav, sidebar, and footer gone
- One clear action, one or two quiet escape hatches ("Forgot password?", "← Back")
- Error pages that explain in plain language and offer routes home
- The failures: a login page wearing the full app shell, a 404 that's a dead end, a checkout with tempting exits everywhere

## Dials

- **chrome subtraction** — no nav, no sidebar, minimal footer (legal links at whisper contrast); the logo remains as the sole wayfinding anchor (linking home — except mid-checkout, where even that gets a confirm); subtraction *is* the focus mechanism, not a style choice
- **composition register** — *carded* (the task in a [[panel-well]]-raised [[card]] on a distinct ground — the default), *bare* (fields directly on the page, airier, needs stronger [[visual-composition]] discipline), or *split-brand* ([[split-screen]]: task pane + brand pane — the enterprise-auth costume)
- **the brand moment** — focus pages are where decoration is *safe*: nothing competes, so a [[mesh-gradient]] ground, [[illustration-style]] spot art, or one showpiece effect earns its place here more than anywhere in the product; the task card stays quiet regardless ([[visual-hierarchy]]: decoration on the ground, never in the card)
- **task anatomy** — one primary action ([[control-language]] rank law at its purest), minimal fields ([[form-grammar]]'s length honesty — auth is 1-2 fields + SSO buttons), escape hatches present but tertiary
- **error-page anatomy** (404/500/offline) — the code (styled as a display moment — [[type-composition]] license), a plain-language line ("This page doesn't exist"), and *recovery routes*: home, search, back, popular destinations; tone per brand ([[illustration-style]] empty-state art, humor calibrated — a paying-customer outage page jokes carefully)
- **checkout strictness** — the highest-stakes register: progress via [[navigation-language]] stepper, distractions maximally removed, trust signals present (totals honest and instant — [[animated-numbers]]' honesty law), exits guarded by [[modal-dialog]] confirms only where money is mid-flight

## Content contract

Exactly one task or one message, completable/readable in under a minute
(auth, confirmation, error, gate). If the page needs navigation to serve
its purpose, it isn't a focus page. Every focus page must answer "how do
I leave?" with at least one deliberate route — focus is not a trap.

## Collapse behavior

Nearly collapse-proof: the card goes full-width (bare register), split-
brand drops the brand pane (or shrinks it to a header band), spacing
compresses. The mobile risk is keyboard overlap — the active field and
primary action must stay visible above the keyboard.

## Techniques

- **The centering** — `min-height: 100dvh; display: grid;
  place-items: center` on a dedicated layout route with its own (chrome-
  free) shell — auth/error layouts as first-class layout components, not
  the app shell with parts hidden.
- **Card recipe** — `max-width: 24-28rem`, [[elevation]] level-1,
  [[spacing-density]] comfortable padding; ground treatment carries the
  brand moment.
- **Auth plumbing** — correct `autocomplete` attributes
  (`username`/`current-password`/`new-password`/`one-time-code`),
  autofocus on the first field, SSO buttons as equal-width
  [[control-language]] secondaries.
- **Error routes** — real HTTP status + designed body; offline pages
  via service worker for the premium touch.

## Search queries

- `auth page layout centered card best practices`
- `404 page design recovery links`
- `autocomplete attributes login one-time-code`
- `checkout page distraction removal conversion`

## Related

[[centered-stack]] (the multi-section sibling; this is one-section),
[[split-screen]] (the brand-pane variant), [[card]] + [[panel-well]]
(the vessel), [[form-grammar]] + [[control-language]] (the task),
[[mesh-gradient]] + [[illustration-style]] (the safe decoration slot),
[[type-composition]] (404 display codes), [[navigation-language]]
(checkout steppers), [[modal-dialog]] (exit guards),
[[visual-hierarchy]] (subtraction as emphasis).
