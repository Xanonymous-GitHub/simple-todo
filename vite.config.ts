import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [tailwindcss(), react(), createHtmlPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 50000,
    minify: true,
    cssMinify: true,
    sourcemap: false,
  },
  esbuild: {
    legalComments: "none",
    minifySyntax: true,
    minifyWhitespace: true,
    minifyIdentifiers: true,
    platform: "browser",
    include: "./src/**/*.{js,ts,jsx,tsx,css,json,text,base64,dataurl,file,binary}",
  },
});
