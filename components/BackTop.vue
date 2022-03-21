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
		class="bg-white rounded-full flex h-10 shadow-xl right-5 bottom-5 animate-bounce w-10 items-center justify-center fixed"
		lg="cursor-pointer"
		dark="bg-gray-600 text-white"
		@click="backTop()"
	>
		<div class="text-xl i-ic:outline-arrow-upward"></div>
	</div>
</template>
