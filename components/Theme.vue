<script lang="ts" setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)

const icon = computed(() => {
	const sun =
		'i-line-md:moon-to-sunny-outline-loop-transition'
	const moon =
		'i-line-md:sunny-outline-to-moon-alt-loop-transition'
	return isDark.value ? moon : sun
})
</script>

<template>
	<div
		:class="icon"
		@click="toggleDark()"
		class="cursor-pointer text-2xl"
	></div>
</template>
