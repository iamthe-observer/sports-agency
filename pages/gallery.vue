<template>
	<div class="w-full h-full relative overflow-hidden flex flex-col">
		<GetInTouch class="z-[2]" v-if="!if_sm" />
		<Socials class="z-[2]" v-if="!if_sm" />

		<div
			class="w-full h-screen font-semibold flex justify-center items-center flex-col text-white relative border-t lg:border-l border-golden-three z-5">
			<Logo v-if="!if_sm" class="z-[2]" />
			<TopNaviMobile class="z-[2]" />


			<div class="absolute inset-0">
				<img src="/playerStand.jpg" alt="" class="object-cover w-full h-full opacity-25 image z-0">
			</div>
			<span class="lg:text-[3rem] text-[8vw] text-white z-[100] droping">Gallery</span>
			<span class="lg:text-2xl text-[3vw] text-golden-three z-[100] droping">Coming Soon...</span>
		</div>

		<FooterEnd />
	</div>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core'
const if_sm = inject('if_sm', true)

onMounted(() => {
	useTitle('EagleEye Sports Consults | Gallery')
})
</script>

<style scoped></style>