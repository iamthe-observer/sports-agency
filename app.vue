<template>
	<div class="">
		<!-- <MouseEffect /> -->
		<!-- <Intro @complete="intro = true" v-if="!intro" /> -->

		<NuxtLayout>
			<NuxtPage />
			<!-- <NuxtPage v-if="intro" /> -->
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cursor-dot {
	box-shadow: 0px 0px 5px 2px black;
}
</style>