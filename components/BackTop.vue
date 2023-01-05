<script lang="ts" setup>
const { backtop, visible } = useBackTop()
</script>

<template>
	<Transition name="fade" mode="out-in">
		<div
			v-show="visible"
			@click="backtop()"
			lg="cursor-pointer"
			class="rounded-full flex h-10 shadow-xl right-5 bottom-5 w-10 items-center justify-center fixed"
			dark="text-white shadow-gray-600">
			<div
				class="i-line-md:arrow-small-left rotate-90"></div>
		</div>
	</Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.25s ease-out;
}

.fade-enter-from {
	opacity: 0;
	transform: translateZ(1);
}

.fade-leave-to {
	opacity: 0;
	transform: translateZ(-1);
}
</style>
