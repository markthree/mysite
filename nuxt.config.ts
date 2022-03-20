import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
	buildModules: ['@unocss/nuxt', '@vueuse/nuxt'],
	typescript: {
		shim: false
	}
})
