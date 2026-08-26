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

**Claude Code (project):** clone; sessions in the repo pick up `CLAUDE.md`
and the in-repo skill automatically.

**Claude Code (everywhere):** copy `.claude/skills/visual-dictionary/SKILL.md`
to `~/.claude/skills/visual-dictionary/SKILL.md` and replace repo-relative
paths with your clone's absolute path.

**MCP — no clone required (Claude Code / Desktop / Cursor / any client):**

```sh
claude mcp add visual-dictionary -s user -- npx -y visual-dictionary-mcp
```

Claude Desktop (`claude_desktop_config.json`):

```json
"visual-dictionary": { "command": "npx", "args": ["-y", "visual-dictionary-mcp"] }
```

The npm package bundles the full dictionary; content updates ship as
package versions. (Developing against a clone instead? `node server.mjs`
serves your working copy live.)

**Managed Agents:** mount this repo as a `github_repository` resource —
the skill in `.claude/skills/` is discovered at session start.

## Maintenance

After adding entries: update `INDEX.md`, add expected phrasings to the
findability harness, run `python3 tools/findability-audit.py`, and fix
misses by adding aliases. Verify wiki-links resolve (see `CLAUDE.md`).
