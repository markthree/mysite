<template>
	<div class="flex px-5 pt-5 pb-20">
		<section class="mr-12 w-80">
			<slot name="avatar" />
		</section>
		<section class="flex-1">
			<slot />
		</section>
		<Theme />
	</div>
</template>
