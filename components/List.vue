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
	<h2 class="mt-15 text-#555555">{{ title }}</h2>
	<section class="mb-20 grid gap-10 grid-cols-2">
		<section
			v-for="v of projects"
			class="rounded-lg px-5 pb-5 transition transition-colors projects"
			:key="v.title"
			@click="to(v.link)"
		>
			<h3 class="text-xl">{{ v.title }}</h3>
			<section class="text-lg text-gray-500">{{
				v.desc
			}}</section>
		</section>
	</section>
</template>

<style scoped>
	.projects:hover {
		cursor: pointer;
		background: #f1f3f5;
	}
</style>
