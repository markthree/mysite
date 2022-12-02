<script setup lang="ts">
import { projectLists, links } from '~/config'
</script>

<template>
	<div>
		<Title>markthree</Title>
		<Link rel="icon" href="/logo.svg" />
	</div>

	<div class="px-5 pt-5 pb-10" lg="flex">
		<section class="mr-15 w-75">
			<img
				src="/avatar.png"
				alt="markthree-avatar"
				class="rounded-full shadow w-full"
			/>
		</section>

		<section class="flex-1">
			<Tip
				title="markthree"
				desc="一个喜欢听萨克斯的男人 🎷"
			/>

			<Links title="Links" :links="links" />

			<h2
				class="mt-25 text-4xl text-#555555"
				dark="text-light-50"
			>
				Projects
			</h2>
			<List
				v-for="v of projectLists"
				:title="v.title"
				:projects="v.projects"
			/>
		</section>

		<Theme class="top-5 right-4 fixed" />
		<BackTop />
	</div>
</template>

<style>
body {
	transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.dark > body {
	color: #adbac7;
	background-color: #22272e;
}

/*
* 全局滚动条
*/
::-webkit-scrollbar {
	width: 7px;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
}

::-webkit-scrollbar-track {
	border-radius: 10px;
}

@media screen and (min-width: 720px) {
	::-webkit-scrollbar {
		background-color: rgb(246, 247, 248);
	}

	::-webkit-scrollbar-thumb {
		background-color: rgb(229, 231, 235);
	}
}

/*
* 全局滚动条(暗黑模式)
*/
html.dark ::-webkit-scrollbar,
html.dark ::-webkit-scrollbar-track {
	background-color: #212529;
}

html.dark ::-webkit-scrollbar-thumb {
	background-color: #343a40;
}
</style>
