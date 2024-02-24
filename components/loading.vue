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
			<input @dblclick="if_pass = false" type="text" class="text-center focus:outline-none bg-golden-three text-black">
			<button @click="goToDash" class="hover:bg-golden-three hover:text-black px-1">ENTER</button>
		</span>
	</div>
</template>

<script setup lang="ts">
import appStore from '~/stores/app'
const { $gsap: gsap } = useNuxtApp()
const if_pass = ref(false)

const goToDash = () => {
	useNuxtApp().$router.push('/dashboard')
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