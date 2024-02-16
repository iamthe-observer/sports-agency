<template>
	<div class="w-full h-full relative">

		<!-- background graphics -->
		<div ref="target" class="relative w-full h-screen border-y border-l border-golden-three">

			<div class="h-screen w-full overflow-hidden perspectiv opacity-50 image">
				<img :style="layer3" src="../assets/imgs/tennisCourt.jpg" alt="" class="image object-cover w-full h-full">
			</div>

			<!-- logo and contact us -->
			<Logo />

			<div class="absolute right-0 top-0">
				<BoxContainer class="absolute top-6 right-6 tracking-wide text-white font-semibold text-xl">
					<span class="drop-shadow-md">Get In
						Touch
					</span>
				</BoxContainer>
			</div>

			<div class="absolute bottom-1/2 translate-y-2/3 right-10 text-white w-[40%] h-fit flex flex-col gap-5">
				<span class="font-bold text-4xl drop-shadow-xl">
					EXPERTS ON HELPING SPORTS PROPERTIES BREAK INTO NEW MARKETS AND GENERATE NEW BUSINESS OPPORTUNITIES
				</span>
				<span class="text-lg drop-shadow-xl font-Outfit">
					EagleEye relies on its powerful network, experienced multicultural team, and comprehensive knowledge of the US
					and
					European markets to generate ongoing business opportunities for the most prominent sports organizations, brands,
					and athletes worldwide.
				</span>

				<BoxContainer @click="scrollTo" class="w-fit self-end font-semibold tracking-wider text-xl">Learn More
				</BoxContainer>
			</div>

		</div>

		<!-- about us -->
		<div id="about" class="relative w-full border-l border-golden-three flex flex-col items-center py-20">

			<div class="pb-10">
				<img src="../assets/imgs/iconLogo.png" alt="" class="mx-auto w-20 aspect-square">
			</div>
			<p class="text-[3rem] text-white w-4/5 text-center pb-6 font-Outfit">
				EagleEye Sports Consults is a Global Sport Management and Marketing Agency working
				with the world’s top organizations, brands and athletes.
			</p>

			<p class="text-xl text-white w-3/5 text-center font-Outfit">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sapiente quibusdam pariatur modi suscipit dignissimos
				nisi asperiores totam, nemo iusto nobis quod facilis hic atque maiores! A maiores laboriosam amet!
			</p>

			<div
				class="bg-golden-three bg-opacity-20 max-w-[1000px] mx-auto mt-10 min-h-[500px] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
				<div
					class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
					<img :style="layer3" src="../assets/imgs/braden-collum-9HI8UJMSdZA-unsplash.jpg" alt=""
						class="object-cover w-full h-full">
				</div>
			</div>

		</div>

		<div class="relative w-full border-y border-l border-golden-three h-[200px] flex items-center text-white">
			<div
				class="transition-all duration-150 ease-in-out hover:w-[calc(125%)] hover:bg-golden-three bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black">
				<span class="text-[4rem]">12+</span>
				<span class="text-xl">Athletes</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out hover:w-[calc(125%)] hover:bg-golden-three bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black">
				<span class="text-[4rem]">24+</span>
				<span class="text-xl">Affiliates</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out hover:w-[calc(125%)] hover:bg-golden-three bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black">
				<span class="text-[4rem]">1k+</span>
				<span class="text-xl">active members</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out hover:w-[calc(125%)] hover:bg-golden-three bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black">
				<span class="text-[4rem]">2024</span>
				<span class="text-xl">SINCE</span>
			</div>
		</div>

		<!-- owners -->
		<div class="text-white relative w-full border-l border-golden-three flex flex-col px-10 py-20">
			<h2 class="text-[4rem] font-bold">
				<span class="pr-1 text-golden-three">//</span>
				Co-Founders
			</h2>
			<p class="text-2xl mb-14 font-Outfit">
				Meet the faces of the EagleEye Sports Consults' corporate executive group, providing leadership to our teams and
				events around
				the world.
			</p>

			<div class="flex items-center justify-center gap-10">
				<FlipContainer src="/CF1.jpg" text="NANA A. K. LARBI" />
				<FlipContainer src="/CF2.png" text="MORRISON AKOWUAH" />
			</div>

		</div>

		<FooterEnd />
	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const { $gsap: gsap } = useNuxtApp()
const target = ref()
const parallax = reactive(useParallax(target))

const layer3 = computed<CSSProperties>(() => ({
	// ...layerBase,
	transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 10
		}px) scale(1.33) rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 10
		}deg)`,
	transition: 'all .7s ease-out',
}))

function scrollTo() {
	// document.querySelector('#about')!.scrollTo({ top: 0, behavior: 'smooth' });
	gsap.to(window, { duration: 1, scrollTo: '#about', ease: 'power2.inOut' })
}

</script>

<style scoped></style>