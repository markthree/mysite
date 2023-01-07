<script lang="ts" setup>
defineProps<{
	title: string
	projects: {
		title: string
		desc: string
		href: string
	}[]
}>()

function to(href: string) {
	window.open(href)
}

const { el, status } = useElInitialRenderStatus()
</script>

<template>
	<div class="px-3 min-h-500px" ref="el">
		<Transition name="fade" mode="out-in">
			<div v-if="status">
				<h2 class="text-#444" dark="text-gray-400">
					{{ title }}
				</h2>
				<section class="mb-15 grid gap-10" lg=" grid-cols-2" sm="grid-cols-1">
					<section v-for="v of projects"
						class="rounded-lg px-5 pb-5 transition-colors ease-in-out duration-250 projects" :key="v.title"
						:to="v.href" @click="to(v.href)">
						<h3 class="text-xl text-gray-800 dark:text-gray-300">{{ v.title }}</h3>
						<section class="text-lg text-gray-500 dark:text-gray-400">
							{{ v.desc }}
						</section>
					</section>
				</section>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.projects:hover {
	cursor: pointer;
	background-color: #f1f3f5;
}

.dark .projects:hover {
	color: white !important;
	background-color: rgba(0, 0, 0, 0.4);
}
</style>
