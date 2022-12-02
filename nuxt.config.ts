export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
  ],
  // @ts-ignore
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
  },
  typescript: {
    shim: false,
  },
});
