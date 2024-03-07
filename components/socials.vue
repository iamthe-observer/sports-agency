<template>
	<div class="absolute right-1/2 translate-x-1/2 top-4 flex gap-4">
		<BoxContainer target="_blank" :link="data?.socials.facebook"
			v-motion-fade class="droping tracking-wide text-white text-xl">
			<span class="drop-shadow-md">
				<svg class="drop-shadow-lg w-5 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="currentColor"
						d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2" />
				</svg>
			</span>
		</BoxContainer>

		<BoxContainer target="_blank"
			:link="data?.socials.instagram" v-motion-fade
			class="droping tracking-wide text-white text-xl">
			<span class="drop-shadow-md">
				<svg class="drop-shadow-lg w-5 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g fill="currentColor">
						<path fill-rule="evenodd" d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-3 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0"
							clip-rule="evenodd" />
						<path d="M18 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
						<path fill-rule="evenodd"
							d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
							clip-rule="evenodd" />
					</g>
				</svg>
			</span>
		</BoxContainer>

		<BoxContainer target="_blank" :link="data?.socials.twitter" v-motion-fade
			class="droping tracking-wide text-white text-xl">
			<span class="drop-shadow-md">
				<svg class="drop-shadow-lg w-5 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path fill="currentColor"
						d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
				</svg>
			</span>
		</BoxContainer>

		<BoxContainer target="_blank" :link="data?.socials.youtube" v-motion-fade
			class="droping tracking-wide text-white text-xl">
			<span class="drop-shadow-md">
				<svg class="drop-shadow-lg w-5 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
					<path fill="currentColor"
						d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5m2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48" />
				</svg>
			</span>
		</BoxContainer>
	</div>
</template>

<script setup lang="ts">
import appStore from '~/stores/app'

const {data} = storeToRefs(appStore())
</script>

<style scoped></style>