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

The palette comes from the RCCG emblem and its meaning:

| Colour | Used for | What the RCCG says it means |
| --- | --- | --- |
| Blue | Backgrounds, headings | Agape — the divine love of God |
| Red | Buttons and accents | The blood of Jesus, our covering |
| White | The dove, clear space | Purity and the Holy Spirit |
| Green | Supporting accents | Fruitfulness and increase |

Every colour is defined once, at the top of
[`src/styles/global.css`](src/styles/global.css), under `@theme`. Change a value
there and it changes across the whole site.

Fonts (Playfair Display for headings, Inter for body text) are bundled with the
site rather than loaded from Google, so pages render immediately and no visitor
data is sent to a third party.

## About the logo

`public/logo.svg` is an **interim emblem**, drawn for this site from the
elements and colours of the RCCG emblem — the blue world, the red rings, the
white dove and the green earth.

**Please replace it with the parish's official artwork before publishing.** Save
the official file as `public/logo.svg` (or as a PNG, updating the filename in
`src/components/Header.astro`, `src/components/Footer.astro` and the pages that
show it). `public/favicon.svg` is the small version shown in the browser tab.

## Putting it online

### GitHub Pages (free)

1. In this repository go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
2. Push to the `main` branch. The workflow in
   `.github/workflows/deploy.yml` builds and publishes the site automatically.
3. The site appears at `https://<username>.github.io/<repository-name>/`.

If you rename the repository, update `base` in
[`astro.config.mjs`](astro.config.mjs) to match the new name — otherwise the
links and images will break.

### Netlify or Vercel

Connect the repository, set the build command to `npm run build` and the
publish directory to `dist`. Then set `base: "/"` in `astro.config.mjs` and put
your real domain in `site`.

## The contact form

The form on the contact page opens the visitor's own email app with their
message ready to send. That works everywhere and needs no server or monthly fee.

If you would rather messages arrive straight in an inbox, a free service such as
Formspree or Netlify Forms can be connected: give the `<form>` in
`src/pages/contact.astro` an `action` pointing at the address they give you, and
delete the `<script>` block at the bottom of that file.
