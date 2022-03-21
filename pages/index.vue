<script setup lang="ts">
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
	</NuxtLayout>
</template>
