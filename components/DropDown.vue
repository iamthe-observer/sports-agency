<template>
	<div class="relative">
		<div class="dropdown w-full relative">
			<label tabindex="0" role="button"
				class="input text-neutral-600 rounded-none border border-neutral-800 bg-neutral-900 flex items-center gap-2">
				{{ title }}
				<input v-model="model" type="text" class="grow text-white" />
			</label>

			<!-- image -->
			<div class="dropdown-content z-[100001] w-[200px] backdrop-blur-lg p-4 h-[200px] translate-x-64">
				<img :src="src ? src : `${$link}iconLogo.png`" alt="" class="w-full h-full object-cover">
			</div>

			<ul tabindex="0"
				class="dropdown-content max-h-[200px] flex flex-col flex-nowrap w-fit overflow-y-auto z-[100000] menu p-2 shadow bg-black bg-opacity-10 backdrop-blur-md border border-golden-three relative">
				<li v-for="(name, i) in names" :key="i">
					<a @click="model = name" ref="item" @mouseover="src = `${$link}${name}`" class="rounded-none">{{ i + 1 }}. {{
					name }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
const model = defineModel<string>();
const props = defineProps<{ names?: string[], title?: string }>()
const src = ref<string>('')
</script>

<style scoped></style>