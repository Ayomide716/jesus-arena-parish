// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/* -------------------------------------------------------------------
   This site is deployed on Vercel, which serves it from the root of a
   domain — so `base` stays "/".

   `site` is only used to build absolute URLs for the canonical link and
   the social sharing tags. Once the parish has its own domain, put it
   here (for example "https://www.jesusarenaparish.org") and redeploy.
   ------------------------------------------------------------------- */

export default defineConfig({
  site: "https://jesus-arena-parish.vercel.app",
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },
});
