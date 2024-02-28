<template>
	<div
		class="loader-container fixed z-[100000] w-full h-screen bg-black pointer-events-auto select-none inset-0 flex flex-col justify-center items-center">
		<img src="/iconLogo.png" alt="" class="w-[80px] aspect-auto loader">

		<span @click="if_pass = true" v-if="!if_pass" class="pt-5 font-semibold text-lg tracking-wide text-golden-three">
			LOADING...
		</span>

		<span class="mt-5 font-semibold text-lg flex items-center gap-2 tracking-wide text-golden-three font-Outfit" v-else>
			<span @click="appStore().$patch({ if_loading: false })" class="">
				<div class="w-5 aspect-square flex flex-col justify-between relative">
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-[2px] bg-golden-three">
					</div>
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-[2px] bg-golden-three">
					</div>
				</div>
			</span>
			<input @dblclick="if_pass = false" type="password" v-model="pass"
				class="text-center focus:outline-none bg-golden-three text-black">
			<button @click="goToDash" class="hover:bg-golden-three hover:text-black px-1">ENTER</button>
		</span>
	</div>
</template>

<script setup lang="ts">
import appStore from '~/stores/app'
import { createClient } from '@supabase/supabase-js'

const { $gsap: gsap } = useNuxtApp()
const if_pass = ref(false)
const pass = ref('')
const supabase = createClient('https://dblmoqabperngqprlrjw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibG1vcWFicGVybmdxcHJscmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMTA3NzAsImV4cCI6MjAyNDU4Njc3MH0.YdYbtgmpXMxTfzpJkN6353d781hQ-e6pId8OdWe8Kjo')


async function userLogin() {
	try {
		let { error } = await supabase.auth.signInWithPassword({
			email: 'eagleeyespc@gmail.com',
			password: pass.value
		})
		if (error) throw error
		useNuxtApp().$router.push('/dashboard')
	} catch (error) {
		alert(`Bad Login: ${error}`);
	}
}

const goToDash = async () => {
	await userLogin()
	appStore().$patch({ if_loading: false })
}

onMounted(() => {
	gsap.to('.loader', {
		rotateZ: 360,
		// opacity: 0,
		duration: 1,
		ease: 'power3.inOut',
		repeat: -1,
	})
})
</script>

<style scoped></style>