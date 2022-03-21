<script lang="ts" setup>
	defineProps<{
		title: string
		desc: string
		gitee: string
		github: string
	}>()
</script>

<template>
	<h1 class="text-5xl text-#555555" dark="text-light-50">{{
		title
	}}</h1>
	<section class="text-xl">{{ desc }}</section>
	<section class="flex space-x-7 mt-7 text-lg">
		<NuxtLink
			:to="gitee"
			class="text-gray-800 block dark:text-light-900 hover:text-red-500"
			>Gitee</NuxtLink
		>
		<NuxtLink
			:to="github"
			class="text-gray-800 block dark:text-light-900 hover:text-red-500"
			>Github</NuxtLink
		>
	</section>
</template>
