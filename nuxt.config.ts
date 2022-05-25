import { defineNuxtConfig } from 'nuxt'
import presetIcons from '@unocss/preset-icons'
import { presetAttributify, presetUno } from 'unocss'

export default defineNuxtConfig({
	buildModules: [
		[
			'@unocss/nuxt',
			{
				presets: [
					presetUno(),
					presetIcons(),
					presetAttributify()
				]
			}
		],
		'@vueuse/nuxt'
	],
	typescript: {
		shim: false
	}
})
