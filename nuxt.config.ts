import { env } from "process"

const hour = 60 * 60

export default defineNuxtConfig({
  runtimeConfig: {
    GITHUB_TOKEN: env.GITHUB_TOKEN,
  },
  experimental: {
    crossOriginPrefetch: true
  },
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/devtools",
    '@nuxtjs/robots',
    "@nuxtjs/critters",
    "@nuxtjs/fontaine",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap"
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
    routeRules: {
     '/': {
      swr: 6 * hour,
      prerender: true
     },
     '/api/**': {
      swr: 6 * hour,
     } 
    },
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
