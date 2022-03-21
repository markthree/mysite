<template>
	<div class="px-5 pt-5 pb-10" lg="flex">
		<section class="mr-12 w-80">
			<slot name="profile" />
		</section>
		<section class="flex-1">
			<slot />
		</section>
		<Theme class="top-5 right-4 fixed" />
		<BackTop />
	</div>
</template>
