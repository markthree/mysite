<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
</script>

<template>
	<Transition name="rotate" mode="out-in">
		<div
			v-if="isDark"
			@click="toggleDark()"
			class="cursor-pointer text-2xl i-line-md:sunny-outline-to-moon-alt-loop-transition">
		</div>
		<div
			v-else
			@click="toggleDark()"
			class="cursor-pointer text-2xl i-line-md:moon-to-sunny-outline-loop-transition">
		</div>
	</Transition>
</template>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
	transition: all 0.25s ease-out;
}

.rotate-enter-from {
	opacity: 0;
	transform: rotate(-180deg);
}

.rotate-leave-to {
	opacity: 0;
	transform: rotate(180deg);
}
</style>
