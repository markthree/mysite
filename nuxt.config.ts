export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/critters",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap",
    "@nuxtjs/html-validator",
  ],
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
