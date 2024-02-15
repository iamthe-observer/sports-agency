<template>
	<div class="relative">

		<!-- <TresCanvas window-size clear-color="#4f4f4f">
			<TresPerspectiveCamera :position="[0, 8.3, 10.6]" :look-at="[0, 0, 0]" />
			<OrbitControls />
			<CameraControls />
			<TresPointLight :intensity="12">
				<Lensflare />
			</TresPointLight>
			<TresGridHelper />

			<Suspense>
				<StudioName />
			</Suspense>

		</TresCanvas> -->

	</div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();
const emit = defineEmits(['complete'])

onMounted(() => {
	emit('complete', true)

	console.log(document.querySelector('.dont'))
	console.log(document.querySelector('.move'))

	// gsap.to('.dont', {
	// 	opacity: 1,
	// 	duration: 1,
	// 	delay: 1,
	// 	ease: 'bounce.inOut'
	// })
	// gsap.to('.move', {
	// 	opacity: 1,
	// 	duration: 1,
	// 	delay: 2,
	// 	ease: 'bounce.inOut'
	// })
	// gsap.to('.dont', {
	// 	opacity: 0,
	// 	duration: .5,
	// 	delay: 3,
	// 	ease: 'bounce.inOut'
	// })
	// gsap.to('.move', {
	// 	opacity: 0,
	// 	duration: .5,
	// 	delay: 3,
	// 	ease: 'bounce.inOut',
	// 	onComplete: () => {
	// 		setTimeout(() => {
	// 			emit('complete', true)
	// 		}, 1000)
	// 	}
	// })



})
</script>

<style scoped></style>