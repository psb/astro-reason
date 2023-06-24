import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import resolve from "@rollup/plugin-node-resolve";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [resolve()],
    server: {
      watch: {
        ignored: ["**/_build/**", "**/_opam/**"],
      },
    },
  },
  output: "server",
  adapter: netlify(),
});
