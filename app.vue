<template>
	<div class="">
		<Loading v-if="if_loading" />
		<NuxtLayout>
			<NuxtPage v-if="!if_loading" />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import navStore from './stores/nav'
import appStore from './stores/app'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://dblmoqabperngqprlrjw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibG1vcWFicGVybmdxcHJscmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMTA3NzAsImV4cCI6MjAyNDU4Njc3MH0.YdYbtgmpXMxTfzpJkN6353d781hQ-e6pId8OdWe8Kjo')

const { curr_nav } = storeToRefs(navStore())
const { if_loading } = storeToRefs(appStore())

const breakpoints = useBreakpoints(breakpointsTailwind)
const if_sm = breakpoints.smaller('lg')
const if_md = breakpoints.smaller('md')

provide('if_sm', if_sm)
provide('if_md', if_md)

async function getAppData() {
	try {

		const { data: dataz, error } = await supabase
			.from('info')
			.select('data')
			.order('created_at', { ascending: false }) // Descending order
			.limit(1)
		if (error) throw error
		console.log(dataz[0]);
		// @ts-ignore
		appStore().$patch({ data: dataz[0].data })
	} catch (error) {
		console.log(error);
	}
}

supabase.auth.onAuthStateChange((event: string) => {
	if (event === 'SIGNED_OUT') {
		useNuxtApp().$router.push('/')
	}
})

onBeforeMount(async () => {
	await getAppData()
	setTimeout(() => {
		appStore().$patch({ if_loading: false })
	}, 2000)
})

watch(curr_nav, () => {
	if_loading.value = true
	document.body.style.overflow = "hidden";
	setTimeout(() => {
		// if_loading.value = false
		appStore().$patch({ if_loading: false })
		document.body.style.overflow = "auto";
	}, Math.floor(Math.random() * (1500 - 1000 + 1) + 1000))
})

useServerSeoMeta({
	description: 'Your Pathway to Sporting Greatness',
	ogDescription: 'Your Pathway to Sporting Greatness',
})

</script>

<style scoped>
.cursor-dot {
	box-shadow: 0px 0px 5px 2px black;
}
</style>