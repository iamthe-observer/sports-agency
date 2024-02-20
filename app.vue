<template>
	<div class="">
		<!-- <MouseEffect /> -->
		<!-- <Intro @complete="intro = true" v-if="!intro" /> -->

		<Loading v-if="if_loading" />

		<NuxtLayout>
			<NuxtPage />
			<!-- <NuxtPage v-if="intro" /> -->
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import navStore from './stores/nav'

const { curr_nav } = storeToRefs(navStore())
const if_loading = ref(false)

watch(curr_nav, () => {
	if_loading.value = true
	document.body.style.overflow = "hidden";
	setTimeout(() => {
		if_loading.value = false
		document.body.style.overflow = "auto";
	}, Math.floor(Math.random() * (3000 - 1000 + 1) + 1000))
})

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