<script lang="ts" setup>
	import { to } from '~/shared/base'

	defineProps<{
		title: string
		projects: {
			title: string
			desc: string
			link: string
		}[]
	}>()
</script>

<template>
	<h2 class="mt-15 text-#555555" dark="text-light-50">{{
		title
	}}</h2>
	<section class="mb-20 grid gap-10 grid-cols-2">
		<section
			v-for="v of projects"
			class="rounded-lg px-5 pb-5 transition-colors ease-in-out duration-250 projects"
			:key="v.title"
			@click="to(v.link)"
		>
			<h3 class="text-xl">{{ v.title }}</h3>
			<section
				class="text-lg text-gray-500 dark:text-gray-400"
				>{{ v.desc }}</section
			>
		</section>
	</section>
</template>

<style scoped>
	.projects:hover {
		cursor: pointer;
		background-color: #f1f3f5;
	}

	.dark .projects:hover {
		color: white !important;
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>
