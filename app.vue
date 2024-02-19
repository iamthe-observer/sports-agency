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
import navStore from './stores/nav'

const { curr_nav } = storeToRefs(navStore())

useServerSeoMeta({
	title: 'EagleEye Sports Consults',
	ogTitle: 'EagleEye Sports Consults',
	description: 'Your Pathway to Sporting Greatness',
	ogDescription: 'Your Pathway to Sporting Greatness',
})

</script>

<style scoped>
.cursor-dot {
	box-shadow: 0px 0px 5px 2px black;
}
</style>