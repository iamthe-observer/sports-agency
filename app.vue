<template>
	<div class="">
		<Loading v-if="if_loading" />

		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import navStore from './stores/nav'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const { curr_nav } = storeToRefs(navStore())
const if_loading = ref(false)
const breakpoints = useBreakpoints(breakpointsTailwind)
const if_sm = breakpoints.smaller('lg')
const if_md = breakpoints.smaller('md')

provide('if_sm', if_sm)
provide('if_md', if_md)

watchEffect(() => {
	if (if_sm.value) {
		console.log('smool')
	}
})


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