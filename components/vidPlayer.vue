<template>
	<div class="video-wrapper">
		<video playsinline autoplay loop muted key="video" id="avatarVideo" @loadeddata="isLoaded = true" :src="src"
			class="object-cover w-full h-full bg-white">
			<!-- the line causing the error is below -->
			<source id="videoSrc" src="https://www.youtube.com/watch?v=KSfDjLkLYmY">
		</video>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	src: String
})
const isLoaded = ref(false);
</script>

<style scoped>
.video-wrapper {
	/* Styles for the video container */
}
</style>