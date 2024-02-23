<template>
	<div v-if="if_sm"
		class="absolute top-0 left-0 w-[calc(100%-80px)] h-[49px] backdrop-blur-md border-b border-l border-golden-three flex">
		<!-- logo -->
		<section class="w-24 grid place-items-center px-2 bg-black">
			<NuxtLink to="/">
				<img src="/iconLogo.png" alt="" class="h-10 w-10 items-contain">
			</NuxtLink>
		</section>

		<section class="flex bg-golden-three bg-opacity-10 w-full text-white">

			<a target="_blank" href="https://www.facebook.com/profile.php?id=61556099897439&mibextid=PtKPJ9"
				class="cursor-pointer hover:text-black hover:bg-golden-three active:text-black active:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-x border-golden-three grid place-items-center">
				<svg class="w-5 aspect-square drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="currentColor"
						d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2" />
				</svg>
			</a>

			<a target="_blank" href="https://www.instagram.com/eagleeye_sports_consults?igsh=cWl0aTM0bGJicXZt&utm_source=qr"
				class="cursor-pointer hover:text-black hover:bg-golden-three active:text-black active:bg-golden-three transition-all duration-150 ease-in-out w-full h-full grid place-items-center">
				<svg class="w-5 aspect-square drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g fill="currentColor">
						<path fill-rule="evenodd" d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-3 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0"
							clip-rule="evenodd" />
						<path d="M18 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
						<path fill-rule="evenodd"
							d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
							clip-rule="evenodd" />
					</g>
				</svg>
			</a>

			<a target="_blank" href="https://twitter.com/EagleEyeSpC"
				class="cursor-pointer hover:text-black hover:bg-golden-three active:text-black active:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-l border-golden-three grid place-items-center">
				<svg class="w-5 aspect-square drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path fill="currentColor"
						d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
				</svg>
			</a>

			<a target="_blank" href="https://youtube.com/@EagleEyeSportsConsults?si=pTw90oZicIL3Mow_"
				class="cursor-pointer hover:text-black hover:bg-golden-three active:text-black active:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-l border-golden-three grid place-items-center">
				<svg class="w-5 aspect-square drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
					<path fill="currentColor"
						d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5m2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48" />
				</svg>
			</a>
		</section>

		<section @click="goToContact"
			class="grid place-items-center px-4 text-golden-three font-bold cursor-pointer active:bg-golden-three select-none active:text-black border-l border-golden-three whitespace-nowrap bg-black text-[3.2vw]">
			Contact Us</section>
	</div>
</template>

<script setup lang="ts">
import appStore from '~/stores/app';

const if_sm = inject('if_sm', true)
function goToContact() {
	appStore().toggleContact(true)
	setTimeout(() => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
	}, 600)
}
</script>

<style scoped></style>