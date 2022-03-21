<script setup lang="ts">
	import { to } from '~/shared/base'
	import H1 from '~/components/H1.vue'
	import { lists } from '~/data/lists'
</script>

<template>
	<NuxtLayout name="content">
		<template #avatar>
			<img
				alt="avatar"
				src="/avatar.png"
				class="rounded-full shadow w-full"
			/>
		</template>

		<H1
			title="Projects"
			desc="已构建的开源项目列表"
			gitee="https://gitee.com/markthree"
			github="https://github.com/markthree"
		/>

		<List
			v-for="v of lists"
			:title="v.title"
			:projects="v.projects"
		/>

		<section class="text-right">
			<span
				class="rounded-md cursor-pointer bg-gray-100 py-2 px-3 transition transition-colors text-gray-800 hover:bg-gray-300"
				@click="to('https://github.com/markthree')"
				>🤗 更多开源进行中...</span
			>
		</section>
	</NuxtLayout>
</template>
