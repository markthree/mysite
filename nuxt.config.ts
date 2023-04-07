import { env } from "process"

export default defineNuxtConfig({
  runtimeConfig: {
    GITHUB_TOKEN: env.GITHUB_TOKEN,
  },
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/critters",
    "@nuxtjs/fontaine",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap",
    "@nuxtjs/html-validator",
  ],
  critters: {
    pruneSource: true,
    preloadFonts: true,
    mergeStylesheets: true,
    reduceInlineStyles: true,
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
  },
  typescript: {
    shim: false,
  },
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
  },
  colorMode: {
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  nitro: {
    minify: true,
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  sourcemap: false,
  sitemap: {
    hostname: "https://mt3.netlify.app/",
  },
});
