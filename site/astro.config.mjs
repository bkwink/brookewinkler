// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Static content site: builds to dist/ and ships as Cloudflare Workers
// static assets (see wrangler.jsonc). Zero client frameworks — interactivity
// is tiny vanilla scripts (role browser, scroll progress, reveal-on-scroll).
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
