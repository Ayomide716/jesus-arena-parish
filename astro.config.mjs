// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/* -------------------------------------------------------------------
   IMPORTANT — these two lines decide where the site lives online.

   Hosting on GitHub Pages from this repository:
     site: "https://<your-github-username>.github.io"
     base: "/<the-repository-name>"

   Hosting on your own domain (or on Netlify / Vercel):
     site: "https://www.yourchurchdomain.org"
     base: "/"            <-- change this, or links will 404
   ------------------------------------------------------------------- */

export default defineConfig({
  site: "https://ayomide716.github.io",
  base: "/jesus-arena-parish",

  vite: {
    plugins: [tailwindcss()],
  },
});
