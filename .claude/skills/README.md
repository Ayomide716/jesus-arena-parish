# Installed skills

Extra instructions that Claude Code loads automatically when this repository
is opened. They are **tooling for building the site** — they are not part of
the website and are not included in the Astro build or the Vercel deployment.

| Skill | What it helps with | Source | Licence |
| --- | --- | --- | --- |
| `frontend-design` | Visual direction, typography and layout that avoids templated defaults | [anthropics/skills](https://github.com/anthropics/skills) | Apache-2.0 |
| `webapp-testing` | Driving the built site in a real browser with Playwright to verify changes | [anthropics/skills](https://github.com/anthropics/skills) | Apache-2.0 |
| `theme-factory` | Ten ready-made colour and font themes, or generating a new one | [anthropics/skills](https://github.com/anthropics/skills) | Apache-2.0 |
| `ui-design-system` | Design tokens, colour palettes, type scales, component docs | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | MIT |
| `ux-researcher-designer` | Personas, journey maps, usability testing, research synthesis | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | MIT |

## Adding another skill

Copy its folder in here, so that the file lands at
`.claude/skills/<skill-name>/SKILL.md`, then commit it.

**Read a skill before installing it.** A skill is a set of instructions that
changes how Claude behaves in this repository, so it deserves the same scrutiny
as a dependency: check what the `SKILL.md` tells it to do, and check any
bundled scripts for network calls, subprocess use or file writes.

## Removing one

Delete its folder and commit. Nothing else references them.
