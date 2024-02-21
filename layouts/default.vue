<template>
	<div v-if="!if_sm" class="min-h-screen max-w-screen w-full bg-black flex">
		<slot />
		<div class="w-[108px] h-full"></div>
		<navigation />

	</div>

	<!-- mobile -->
	<div v-else class="min-h-screen max-w-screen w-full bg-black flex overflow-x-hidden">
		<slot />
		<NavigationMobile />
	</div>
</template>

<script setup lang="ts">
const if_sm = inject('if_sm', true)
</script>

<style scoped></style>