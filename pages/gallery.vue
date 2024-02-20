<template>
	<div class="w-full h-full relative flex flex-col">
		<GetInTouch class="z-[500]" />
		<Socials />

		<div
			class="w-full h-screen text-[3rem] font-semibold flex justify-center items-center flex-col text-white relative border-t border-l border-golden-three z-5">
			<Logo class="z-[2]" />
			<div class="absolute inset-0">
				<img src="https://live.staticflickr.com/65535/53534142101_68648c04e4_o.jpg" alt=""
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
onMounted(() => {
	useTitle('EagleEye Sports Consults | Gallery')
})
</script>

<style scoped></style>