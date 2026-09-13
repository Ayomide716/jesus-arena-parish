# RCCG Jesus Arena Parish

The website for the Redeemed Christian Church of God, **Jesus Arena Parish**.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
Astro ships the pages as plain HTML with almost no JavaScript, so the site loads
fast on a phone and on a slow connection — which matters more for a church
website than anything else.

## Running it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install     # once, to download the tools
npm run dev     # start the site at http://localhost:4321
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Live preview while you edit — changes appear instantly |
| `npm run build` | Builds the finished site into `dist/` |
| `npm run preview` | Views the built site exactly as it will be online |
| `npm run check` | Checks the pages for errors |

## Editing the content

**Almost everything you will want to change is in one file:
[`src/data/site.ts`](src/data/site.ts).**

Service times, ministries, events, sermons, giving details, the pastor's
welcome, contact details and the social media links all live there. Edit the
text between the quote marks, save, and every page updates itself.

Lines that still need the parish's real information are marked `TODO`:

| In `src/data/site.ts` | What to fill in |
| --- | --- |
| `church` | Street address, phone number, email address |
| `pastor` | The pastor's name and welcome message |
| `giving` | Bank name and account number |
| `sermons` | The link to each message (YouTube, Facebook, podcast) |
| `socials` | Your Facebook, YouTube and Instagram pages |
| `services` | Confirm the days and times are right |
| `events` | Keep the calendar up to date through the year |

## The pages

```
src/pages/index.astro       Home
src/pages/about.astro       About us, what we believe, the emblem
src/pages/ministries.astro  Ministries and fellowships
src/pages/events.astro      Weekly rhythm and the calendar
src/pages/sermons.astro     Sermons and teaching
src/pages/giving.astro      Giving and bank details
src/pages/contact.astro     Contact details and message form
src/pages/404.astro         Shown if a link is out of date
```

Shared pieces (the header, the footer, section headings) are in
`src/components/`, and the page shell is `src/layouts/Base.astro`.

## Colours and fonts

The palette is sampled directly from the parish emblem, and the church's own
meaning for each colour decides where it is used:

| Colour | Hex | On the emblem | Used on the site for |
| --- | --- | --- | --- |
| Indigo | `#28166F` | The disc — agape, the love of God | Backgrounds and headings |
| Green | `#00923F` | The lettering — fruitfulness | The living work of the parish |
| Red | `#DA251D` | The rings — the blood of Jesus | Ordinances and the main action |
| White | `#FFFFFF` | The dove — the Holy Spirit | Clear space |

Every value is defined once in [`src/styles/global.css`](src/styles/global.css)
under `@theme`. Change one there and it changes across the whole site.

Headings are set in Archivo, heavy and slightly expanded, which echoes the bold
lettering arced around the seal. Body text is Newsreader, a serif made for
reading on screen. Both are bundled with the site rather than loaded from
Google, so pages render immediately and no visitor data goes to a third party.

## The emblem

`public/rccg-emblem.png` is the official RCCG emblem, supplied by the parish.
`rccg-emblem-sm.png` and `favicon.png` are smaller copies of the same artwork
for the header, the footer and the browser tab. If you ever replace it,
regenerate all three so they stay consistent.

## Putting it online

The site is deployed on **Vercel**, connected to this repository.

Vercel rebuilds automatically on every push:

- pushing to `main` updates the **live site**;
- pushing to any other branch gives a **preview link** for that branch, so a
  change can be checked before it goes live.

[`vercel.json`](vercel.json) pins the build so it does not depend on the
project's dashboard settings:

```json
{ "framework": "astro", "buildCommand": "npm run build", "outputDirectory": "dist" }
```

> This repository previously held a Next.js app. If a Vercel build fails, check
> that the project's **Framework Preset** is *Astro* and not *Next.js* — the
> `vercel.json` above should already take care of it.

### Using the parish's own domain

Add the domain in Vercel under **Settings → Domains**, then put it in the `site`
field of [`astro.config.mjs`](astro.config.mjs) so that shared links and search
engines point at the right address. Leave `base` as `"/"`.

## The contact form

The form on the contact page opens the visitor's own email app with their
message ready to send. That works everywhere and needs no server or monthly fee.

If you would rather messages arrive straight in an inbox, a free service such as
Formspree or Netlify Forms can be connected: give the `<form>` in
`src/pages/contact.astro` an `action` pointing at the address they give you, and
delete the `<script>` block at the bottom of that file.
