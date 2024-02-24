<template>
	<div class="min-h-screen max-w-screen w-full bg-black flex relative">
		<slot />

	</div>
</template>

<script setup lang="ts">
const if_sm = inject('if_sm', true)
</script>

<style scoped></style>