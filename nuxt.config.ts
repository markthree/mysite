export default defineNuxtConfig({
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/critters',
		'@nuxtjs/color-mode',
		'nuxt-simple-sitemap',
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
		// asyncEntry: true,
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
	},
	nitro: {
		minify: true,
		prerender: {
			routes: ['/'],
			crawlLinks: true
		},
		compressPublicAssets: {
			gzip: true,
			brotli: true
		}
	},
	sitemap: {
		hostname: 'https://mt3.netlify.app/'
	}
})
