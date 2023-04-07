<script lang="ts" setup>
defineProps<{
	title: string
	slogan: string
}>()
</script>

<template>
	<h1 class="text-5xl text-#555555" dark="text-light-50">
		{{ title }}
	</h1>
	<section class="text-xl">{{ slogan }}</section>
</template>
