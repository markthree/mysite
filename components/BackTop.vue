<script lang="ts" setup>
	const backTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
</script>

<template>
	<div
		class="bg-white rounded-full cursor-pointer flex h-12 shadow-xl right-10 bottom-8 w-12 items-center justify-center fixed"
		dark="bg-gray-600 text-white"
		@click="backTop()"
	>
		<div class="text-xl i-ic:outline-arrow-upward"></div>
	</div>
</template>
