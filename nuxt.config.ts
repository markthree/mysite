export default defineNuxtConfig({
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxt/image-edge',
		'@nuxtjs/html-validator'
	],
	unocss: {
		uno: true,
		icons: true,
		attributify: true
	},
	typescript: {
		shim: false
	},
	experimental: {
		asyncEntry: true
	}
})
