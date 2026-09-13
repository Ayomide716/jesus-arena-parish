# RCCG Jesus Arena Parish — Church Website

The website for the Redeemed Christian Church of God, Jesus Arena Parish.

It is a plain HTML, CSS and JavaScript site. There is nothing to install and
nothing to build — open `index.html` in a browser and the site runs.

## What's in here

```
index.html            The whole website (one page, with sections)
assets/css/styles.css All the colours, fonts and layout
assets/js/main.js     Mobile menu, contact form, small touches
```

## Viewing it on your computer

Double-click `index.html`, or run a small local server from this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Things to fill in

The site is complete, but a few details are placeholders. Each one is marked in
`index.html` with a comment that says `EDIT ME`. Search for that phrase and
you will find them all:

| Section | What to change |
| --- | --- |
| Service times | The days, service names and times |
| About | The pastor's name and welcome message |
| Events | Add, edit or remove the upcoming events |
| Sermons | Paste the link to each message (YouTube, Facebook, podcast) |
| Giving | The parish bank name and account number |
| Contact | The street address, phone number and email |
| Footer | The Facebook, YouTube and Instagram links |

One more is in `assets/js/main.js`: change `PARISH_EMAIL` at the top of the
file to the address the contact form should send to.

## Changing the colours

Every colour lives at the top of `assets/css/styles.css`, under `:root`.
Change `--navy` and `--gold` there and the whole site follows.

## Putting it online

The site is static, so it can be hosted free in several ways:

- **GitHub Pages** — in this repository, go to *Settings → Pages*, choose
  *Deploy from a branch*, pick the main branch and the `/ (root)` folder.
  The site appears at `https://<username>.github.io/<repository>/`.
- **Netlify or Vercel** — connect the repository and deploy; no build command
  is needed and the publish directory is the repository root.
- **Any web host** — upload `index.html` and the `assets` folder by FTP.

## Collecting contact messages automatically

Right now the contact form opens the visitor's own email app with the message
ready to send. That works everywhere and needs no server. If you would rather
have messages arrive in an inbox or a spreadsheet without the visitor needing an
email app, a free form service such as Formspree, Netlify Forms or Google Forms
can be connected to the same form — set the form's `action` to the address the
service gives you and remove the submit handler in `assets/js/main.js`.
