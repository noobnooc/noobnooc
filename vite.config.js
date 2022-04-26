// @ts-check

import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(async () => {
  return {
    root: "src",
    plugins: [svgr()],
    build: {
      outDir: "../dist",
      manifest: true,
      emptyOutDir: true,
    },
  };
});
