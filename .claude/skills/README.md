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
| `design-motion-principles` | Motion and interaction design, plus an audit mode for catching generic animation | [kylezantos/design-motion-principles](https://github.com/kylezantos/design-motion-principles) | MIT |
| `gsap-core` | The GSAP animation API, easing, stagger, reduced motion | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | MIT |
| `gsap-timeline` | Sequencing and choreographing animations | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | MIT |
| `gsap-scrolltrigger` | Scroll-linked animation, pinning, parallax | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | MIT |
| `gsap-performance` | Keeping animation at 60fps and avoiding jank | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | MIT |
| `gsap-plugins` | GSAP plugins — SplitText, Flip, Draggable, ScrollSmoother | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | MIT |
| `gsap-utils` | GSAP helpers — clamp, mapRange, random, snap | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | MIT |

`gsap-react` and `gsap-frameworks` were deliberately left out: this site is
Astro, with no React, Vue or Svelte.

## A note on animation and this site

The built site currently ships **no JavaScript files at all**, which is the
single biggest reason it loads quickly on a phone. GSAP core is roughly 23KB
gzipped, and ScrollTrigger adds about 11KB on top.

So the order of preference on this site is: do it in CSS first (transitions,
keyframes, `@starting-style`, scroll-driven animations), and only reach for
GSAP where CSS genuinely cannot do the job — complex sequenced timelines, or
scroll-scrubbed choreography. The motion on the site today — the seal's
entrance, the staggered mobile menu, the hover states — is all CSS and costs
nothing to download.

Whatever the technique, motion must respect `prefers-reduced-motion`; the
stylesheet already disables animation globally for visitors who ask for that.

## Adding another skill

Copy its folder in here, so that the file lands at
`.claude/skills/<skill-name>/SKILL.md`, then commit it.

**Read a skill before installing it.** A skill is a set of instructions that
changes how Claude behaves in this repository, so it deserves the same scrutiny
as a dependency: check what the `SKILL.md` tells it to do, and check any
bundled scripts for network calls, subprocess use or file writes.

## Removing one

Delete its folder and commit. Nothing else references them.
