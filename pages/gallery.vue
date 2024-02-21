<template>
	<div class="w-full h-full relative overflow-hidden flex flex-col">
		<GetInTouch v-if="!if_sm" class="z-[100]" />
		<Socials v-if="!if_sm" />

		<div
			class="w-full h-screen font-semibold flex justify-center items-center flex-col text-white relative border-t lg:border-l border-golden-three z-5">
			<Logo v-if="!if_sm" class="z-[2]" />
			<TopNaviMobile class="z-[2]" />


			<div class="absolute inset-0">
				<img src="https://live.staticflickr.com/65535/53540906021_0c289c79e0_b.jpg" alt=""
					class="object-cover w-full h-full opacity-25 image z-0">
			</div>
			<span class="text-[3rem] text-white z-[100] droping">Gallery</span>
			<span class="text-2xl text-golden-three z-[100] droping">Coming Soon...</span>
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