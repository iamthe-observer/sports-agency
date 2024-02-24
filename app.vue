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
import appStore from './stores/app'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://wepsovihexcnzicbdmst.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlcHNvdmloZXhjbnppY2JkbXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2MjM5MDUsImV4cCI6MjAwNDE5OTkwNX0.iLAnYWIPS-lYtt5lQXObuUFRw91E4BTh8iY5qJ5nANs')

const data = ref()

async function getAppData() {
	try {
		const { data: dataz, error } = await supabase.from('eagleeyespc').select().single()
		if (error) throw error
		data.value = dataz
	} catch (error) {
		console.log(error);
	}
}


const { curr_nav } = storeToRefs(navStore())
const { if_loading } = storeToRefs(appStore())

// const if_loading = ref(true)
const breakpoints = useBreakpoints(breakpointsTailwind)
const if_sm = breakpoints.smaller('lg')
const if_md = breakpoints.smaller('md')

provide('if_sm', if_sm)
provide('if_md', if_md)
provide('data', data)

onMounted(() => {
	setTimeout(async () => {
		await getAppData()
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
	}, Math.floor(Math.random() * (3000 - 1000 + 1) + 1000))
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