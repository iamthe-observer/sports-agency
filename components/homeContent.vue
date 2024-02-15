<template>
	<div class="w-full bg-white text-black min-h-full bg-opacity-20 relative">

		<div class="flex h-40">
			<div class="video-content-title w-full bg-green-500">

			</div>

			<div class="logo w-36 bg-blue-500 flex justify-center items-center">Logo</div>
		</div>

		<div class="absolute bottom-0 right-0 h-60 w-4/5 bg-white bg-opacity-20">
			<!-- <VideoPlayer :options="videoOptions" /> -->
			<!--<VideoPlayer />-->
		</div>

	</div>
</template>

<script setup lang="ts">
// import VideoPlayer from 'nuxt-video-player'
// require('nuxt-video-player/src/assets/css/main.css')

const videoOptions = ref({
	autoplay: true,
	controls: true,
	sources: [
		{
			src:
				'/assets/fonts/LADY_40_MEN_-_LKB_COMMERCIAL-vimeo-782987372-dash-google_mediacdn_sep-video-a4f363af+dash-google_mediacdn.mp4',
			type: 'video/mp4'
		}
	]
})
</script>