<script setup lang="ts">
import type { ILinks } from '~/config'

defineProps<{
	links: ILinks
}>()
</script>

<template>
	<section class="flex space-x-7 mt-7 text-lg">
		<NuxtLink
			:to="v.href"
			target="_blank"
			class="text-gray-800 block dark:text-light-900 hover:text-red-500 text-xl"
			v-for="v of links"
			:key="v.href"
		>
			{{ v.name }}
		</NuxtLink>
	</section>
</template>
