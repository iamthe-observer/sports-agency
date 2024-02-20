<template>
	<div class="w-full h-full relative">

		<!-- background graphics -->
		<div ref="target2" class="relative w-full h-screen border-t border-l border-golden-three">

			<div class="h-screen w-full overflow-hidden perspectiv opacity-50 image">
				<img :style="layer4" src="https://live.staticflickr.com/65535/53534320538_e5d81e3fc7_o.jpg" alt=""
					class="image object-cover w-full h-full" />
			</div>

			<!-- logo and contact us -->
			<Logo v-motion-fade />
			<GetInTouch />
			<Socials />

			<div class="absolute bottom-1/2 translate-y-2/3 right-10 text-white w-[40%] h-fit flex flex-col gap-5 visi">
				<span class="font-bold text-4xl drop-shadow-xl">
					ABOUT US
				</span>
				<span class="text-lg drop-shadow-xl font-Outfit">
					In February 2024, EagleEye Sports Consults was founded as a company that represents athletes and provides them
					with comprehensive management. Our goal is to help athletes achieve their personal and athletic goals by
					designing their professional careers. Additionally, we provide our clients with a staff of professionals who are
					available around-the-clock, allowing them to concentrate just on the ball. Our services include: Sports
					Marketing & Events Management, Talent Scouting, Athlete Management & Career Development, Legal & Sports
					Consulting, Athlete Representation.
				</span>

				<BoxContainer @click="scrollTo" class="w-fit self-end font-semibold tracking-wider text-xl">Learn More
				</BoxContainer>
			</div>

		</div>

		<!-- about us -->
		<div ref="target" id="about" class="relative w-full border-l border-golden-three flex flex-col items-center py-20">

			<div class="pb-10">
				<img v-motion-roll-visible-once-bottom src="/iconLogo.png" alt="" class="mx-auto w-20 aspect-square" />
			</div>

			<h2 v-motion-fade-visible class="text-center text-white w-full h-full font-semibold text-4xl">
				<span class="text-golden-three font-semibold pr-2">//</span>Our Mission
			</h2>
			<p v-motion-slide-visible-once-bottom class="text-[1.5rem] pt-4 text-white w-4/5 text-center pb-12 font-Outfit">
				To empower athletes, sports organizations and businesses in the sports industry to achieve their full potential.
				Our dedication to the excellence, integrity and client-centric approach ensures that we deliver tailored
				strategies and actionable insights to maximum performance, enhance competitiveness and unlock new opportunities
				for our clients.
			</p>

			<h2 v-motion-fade-visible class="text-center text-white w-full h-full font-semibold text-4xl">
				<span class="text-golden-three font-semibold pr-2">//</span>Our Vision
			</h2>

			<p v-motion-slide-visible-once-bottom class="text-xl pt-4 text-white w-3/5 text-center font-Outfit">
				To rise to the position of premier industry leader as a result of the sports community's increasing demand for
				representation.
			</p>

			<div v-motion-fade-visible
				class="bg-golden-three bg-opacity-20 max-w-[1000px] mx-auto mt-10 min-h-[500px] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
				<div
					class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
					<img :style="layer3" src="https://live.staticflickr.com/65535/53533251352_6f151bfcf1_o.jpg" alt=""
						class="object-cover w-full h-full" />
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
			<h2 v-motion-fade-visible class="text-[4rem] font-bold">
				<span class="pr-1 text-golden-three">//</span>
				Our Team
			</h2>
			<p v-motion-slide-visible-once-bottom class="text-xl mb-14 font-Outfit">
				Meet the faces of EagleEye Sports Consults' corporate executive group, providing leadership to our teams and
				events around
				the world.
			</p>

			<div v-motion-fade-visible-once class="flex items-center justify-center gap-10">
				<FlipContainer src="https://live.staticflickr.com/65535/53541056275_bd04f734bd_o.jpg"
					text2="Co-Founder / Player Agent" text1="NANA A. K. LARBI" />
				<FlipContainer src="https://live.staticflickr.com/65535/53540633426_f94b2cc16c_o.jpg"
					text2="Co-Founder / Player Agent" text1="MORRISON AKOWUAH" />
				<FlipContainer src="https://live.staticflickr.com/65535/53540812068_63943e2af1_o.jpg" text2="Head of Operations"
					text1="LARBI RANSFORD" />
			</div>

			<div v-motion-fade-visible-once class="flex items-center justify-center gap-10 pt-10">
				<FlipContainer src="https://live.staticflickr.com/65535/53540959629_ecaa9285ac_o.jpg" text2="Chief Scout (Ghana)"
					text1="YAW OWUSU BANAHENE" />
				<FlipContainer src="https://live.staticflickr.com/65535/53541056280_c9558276c5_o.jpg" text2="Scout (Kenya)"
					text1="CHURCHILL CARLOS MASHETI" />
			</div>

		</div>

		<FooterEnd />
	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useTitle } from '@vueuse/core'

onMounted(() => {
	useTitle('EagleEye Sports Consults | About Us')
})

const { $gsap: gsap } = useNuxtApp()
const target = ref()
const target2 = ref()
const parallax = reactive(useParallax(target))
const parallax2 = reactive(useParallax(target2))

const layer3 = computed<CSSProperties>(() => ({
	// ...layerBase,
	transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 10
		}px) scale(1.33) rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 10
		}deg)`,
	transition: 'all .7s ease-out',
}))
const layer4 = computed<CSSProperties>(() => ({
	// ...layerBase,
	transform: `translateX(${parallax2.tilt * 20}px) translateY(${parallax2.roll * 10
		}px) scale(1.33) rotateX(${parallax2.roll * 20}deg) rotateY(${parallax2.tilt * 10
		}deg)`,
	transition: 'all .7s ease-out',
}))

function scrollTo() {
	// document.querySelector('#about')!.scrollTo({ top: 0, behavior: 'smooth' });
	gsap.to(window, { duration: 1, scrollTo: '#about', ease: 'power2.inOut' })
}

</script>

<style scoped></style>