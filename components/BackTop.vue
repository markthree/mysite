<script lang="ts" setup>
	const backTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	const isScrollingRef = ref(false)
	onMounted(() => {
		const { arrivedState } = useScroll(window)
		watchEffect(() => {
			isScrollingRef.value = !arrivedState.top
		})
	})
</script>

<template>
	<div
		v-show="isScrollingRef"
		class="bg-white rounded-full cursor-pointer flex h-12 shadow-xl right-10 bottom-8 animate-bounce w-12 items-center justify-center fixed"
		dark="bg-gray-600 text-white"
		@click="backTop()"
	>
		<div class="text-xl i-ic:outline-arrow-upward"></div>
	</div>
</template>
