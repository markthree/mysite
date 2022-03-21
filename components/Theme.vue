<script lang="ts" setup>
	const isDark = useDark()
	const toggleDark = useToggle(isDark)

	const icon = computed(() => {
		return isDark.value
			? 'i-ic:outline-dark-mode'
			: 'i-ic:outline-wb-sunny'
	})
</script>

<template>
	<div
		:class="icon"
		@click="toggleDark()"
		class="cursor-pointer text-2xl"
	></div>
</template>
