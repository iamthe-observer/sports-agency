<template>
	<div
		:class="['collapse collapse-plus join-item border border-golden-three rounded-none hover:scale-[101%] hover:text-white bg-black transition-all duration-150 ease-in-out']">
		<input type="radio" name="my-accordion-4" :checked="checked" />
		<div class="collapse-title text-xl font-medium text-white">
			<slot name="title" />
		</div>

		<div class="collapse-content">
			<slot name="content" />
		</div>
	</div>
</template>

<script setup lang="ts">
const checked = ref(false)
</script>

<style scoped></style>