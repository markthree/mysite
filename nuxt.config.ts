export default defineNuxtConfig({
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/color-mode',
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
		asyncEntry: true,
		reactivityTransform: true
	},
	vite: {
		define: {
			__VUE_OPTIONS_API__: false
		}
	},
	colorMode: {
		classSuffix: '',
		storageKey: 'nuxt-color-mode'
	}
})
