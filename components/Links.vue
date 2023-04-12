<script setup lang="ts">
defineProps<{
	links: Array<{ href: string; name: string }>
}>()
</script>

<template>
	<section class="flex space-x-7 mt-7 text-lg">
		<NuxtLink :to="v.href" class="text-gray-800 block dark:text-light-900 hover:text-red-500 text-xl" v-for="v of links"
			:key="v.href" prefetch>
			{{ v.name }}
		</NuxtLink>
	</section>
</template>
