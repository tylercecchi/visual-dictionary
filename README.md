# Visual Attribute Dictionary

A UX/UI design-quality dictionary for AI agents: ~192 entries mapping vague
design language ("feels off", "make it frosted", "recipe card, but gothic")
to canonical terms, tunable **dials**, layout/surface **contracts**, and
vetted implementation paths.

**The fundamental model:** every page is two independent picks —
**structure** (editorial/layout entries) × **wardrobe** (aesthetic
registers) — resolved separately, composed freely, fine-tuned by dials.
The dictionary presents options; the designer decides.

## Contents

- `CLAUDE.md` — the agent protocol (resolution, diagnosis, stack rule, doctrine, custom wardrobes)
- `entries/` — one file per attribute; summary + aliases + cues + dials + techniques
- `INDEX.md` — category index (foundations · components · editorial · wardrobe · layout · effects)
- `LAYOUT.md` — the layout matrix, interaction-surface contracts, structure × wardrobe tensions
- `LIBRARIES.md` — resource registry (libraries / rules & tuning tools / discovery / galleries) + failure policy
- `TEMPLATE.md` — entry format for growth
- `lib/resolve.mjs` — the shared resolver (server, audit, and site all use it)
- `server.mjs` — the MCP server: `resolve`, `get_entry`, `browse`, `compose`, `libraries_for`, `protocol`, `layout_system`, `libraries`
- `tools/lint.mjs` · `tools/findability-audit.mjs` · `tools/e2e-test.mjs` — `npm test` runs all three
- `tools/build-site.mjs` — builds `site/index.html`, a self-contained browsable site with a live resolve box (`npm run build:site`)

## Install

**MCP — one command, no clone, no npm (recommended).** Works in Claude
Code, Claude Desktop, Cursor, or any MCP client; requires only Node ≥18.

```sh
claude mcp add visual-dictionary -s user -- npx -y github:tylercecchi/visual-dictionary
```

Claude Desktop / Cursor — add to the MCP config instead:

```json
"visual-dictionary": { "command": "npx", "args": ["-y", "github:tylercecchi/visual-dictionary"] }
```

Notes:
- npx fetches the repo into its cache and runs `server.mjs` via the
  `bin` entry in `package.json` — the dictionary content ships inside.
- Untagged, users run the latest default branch. To pin a release, tag
  it and install `github:tylercecchi/visual-dictionary#v0.1.0`.


**Claude Code (working in this repo):** clone; sessions here pick up
`CLAUDE.md` automatically. The MCP tools expose the same protocol on
demand from any other project.

**Humans:** `npm run build:site` and open `site/index.html` — the whole
dictionary with a live resolve box (no server needed).

## Maintenance

After adding entries: update `INDEX.md`, add expected phrasings to
`tools/findability-audit.mjs`, then `npm test` (lint → audit → e2e). Fix
routing misses by adding aliases or a synonym rule in `lib/resolve.mjs`,
never by weakening the phrase. Lint flags dangling links, missing
summaries, entry-count drift, and registry entries not verified in six
months.
