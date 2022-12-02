import presetIcons from "@unocss/preset-icons";
import { presetAttributify, presetUno } from "unocss";

export default defineNuxtConfig({
  modules: [
    [
      "@unocss/nuxt",
      {
        presets: [
          presetUno(),
          presetIcons(),
          presetAttributify(),
        ],
      },
    ],
    "@vueuse/nuxt",
  ],
  nitro: {
    preset: "deno",
  },
  typescript: {
    shim: false,
  },
});
