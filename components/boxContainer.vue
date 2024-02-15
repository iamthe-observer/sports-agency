<template>
	<NuxtLink :to="link"
		class="relative bg-golden-three bg-opacity-20 hover:text-black hover:bg-opacity-100 cursor-pointer px-6 py-2 outline outline-1 outline-offset-2 outline-golden-three before:content-[''] before:h-full before:absolute before:w-full before:bg-golden-three before:bg-opacity-30 before:top-2 before:left-2 before:-z-10  hover:before:top-0 hover:before:left-0 before:transition-all before:duration-250 before:ease-in-out hover:outline-offset-0 transition-all duration-250 ease-in-out hover:outline-0 z-[1]">
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
	link?: string
}>()
</script>