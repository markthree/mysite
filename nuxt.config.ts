export default defineNuxtConfig({
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxt/image-edge'
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
