export default defineNuxtConfig({
	modules: ['@unocss/nuxt', '@vueuse/nuxt'],
	unocss: {
		uno: true,
		icons: true,
		attributify: true
	},
	typescript: {
		shim: false
	}
})
