<template>
	<div
		class="loader-container fixed z-[100000] w-full h-screen bg-black pointer-events-none select-none inset-0 flex flex-col justify-center items-center">
		<img src="/iconLogo.png" alt="" class="w-[200px] aspect-auto loader">

		<span class="pt-5 font-semibold text-3xl tracking-wide text-golden-three">LOADING...</span>
	</div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp()

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