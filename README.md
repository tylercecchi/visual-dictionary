# Visual Attribute Dictionary

A UX/UI design-quality dictionary for AI agents: ~178 entries mapping vague
design language ("feels off", "make it frosted", "recipe card, but gothic")
to canonical terms, tunable **dials**, layout/surface **contracts**, and
vetted implementation paths.

**The fundamental model:** every page is two independent picks —
**structure** (editorial/layout entries) × **wardrobe** (aesthetic
registers) — resolved separately, composed freely, fine-tuned by dials.
The dictionary presents options; the designer decides.

## Contents

- `CLAUDE.md` — the agent protocol (resolution, diagnosis, stack rule, doctrine)
- `entries/` — one file per attribute; aliases + cues + dials + techniques
- `INDEX.md` — category index (incl. the editorial cluster)
- `LAYOUT.md` — the layout matrix + interaction-surface contracts
- `LIBRARIES.md` — resource registry (libraries / discovery / galleries) + failure policy
- `TEMPLATE.md` — entry format for growth
- `tools/findability-audit.py` — the alias regression harness
- `server.mjs` — the MCP server (npm-published as `visual-dictionary-mcp`)
- `tools/e2e-test.mjs` — end-to-end MCP test (`node tools/e2e-test.mjs`)
- `.claude/skills/visual-dictionary/` — the skill (auto-discovered in-project
  and by Managed Agents repo mounts)

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


**Claude Code skill (optional power-up for Claude Code users):** copy
`.claude/skills/visual-dictionary/SKILL.md` to
`~/.claude/skills/visual-dictionary/SKILL.md` and replace the
repo-relative paths with a local clone's absolute path. This adds
auto-triggering and the full protocol; the MCP alone already exposes
everything on demand.

**Claude Code (working in this repo):** clone; sessions here pick up
`CLAUDE.md` and the in-repo skill automatically.

**Managed Agents:** mount this repo as a `github_repository` resource —
the skill in `.claude/skills/` is discovered at session start.

## Maintenance

After adding entries: update `INDEX.md`, add expected phrasings to the
findability harness, run `python3 tools/findability-audit.py`, and fix
misses by adding aliases. Verify wiki-links resolve (see `CLAUDE.md`).
