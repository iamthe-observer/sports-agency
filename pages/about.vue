<template>
	<div class="w-full h-full relative overflow-hidden">

		<!-- background graphics -->
		<div ref="target2" class="relative w-full h-screen border-t lg:border-l border-golden-three">

			<div class="h-screen w-full overflow-hidden perspectiv opacity-50 image">
				<img :style="layer4" src="https://live.staticflickr.com/65535/53534320538_e5d81e3fc7_o.jpg" alt=""
					class="image object-cover w-full h-full" />
			</div>

			<!-- logo and contact us -->
			<Logo v-if="!if_sm" v-motion-fade />
			<GetInTouch v-if="!if_sm" />
			<Socials v-if="!if_sm" />
			<TopNaviMobile />

			<div
				class="absolute bottom-1/2 translate-y-1/2 lg:translate-y-2/3 lg:right-10 right-1/2 translate-x-1/2 lg:translate-x-0 text-white lg:w-[40%] w-[90%] h-fit flex flex-col gap-5 visi">
				<span class="font-bold lg:text-4xl text-[8vw] drop-shadow-xl">
					ABOUT US
				</span>
				<span class="lg:text-[1.3rem] text-[3.5vw] drop-shadow-xl font-Outfit">
					In February 2024, EagleEye Sports Consults was founded as a company that represents athletes and provides them
					with comprehensive management. Our goal is to help athletes achieve their personal and athletic goals by
					designing their professional careers. Additionally, we provide our clients with a staff of professionals who are
					available around-the-clock, allowing them to concentrate just on the ball. Our services include: Sports
					Marketing & Events Management, Talent Scouting, Athlete Management & Career Development, Legal & Sports
					Consulting, Athlete Representation.
				</span>

				<BoxContainer @click="scrollTo" class="w-fit self-end font-semibold tracking-wider lg:text-xl text-[4vw]">Learn
					More
				</BoxContainer>
			</div>

		</div>

		<!-- about us -->
		<div ref="target" id="about"
			class="relative w-full lg:border-l border-golden-three flex flex-col items-center py-20 px-8">

			<div class="pb-10">
				<img v-motion-roll-visible-once-bottom src="/iconLogo.png" alt="" class="mx-auto w-20 aspect-square" />
			</div>

			<h2 v-motion-fade-visible class="text-center text-white w-full h-full font-semibold lg:text-4xl text-[5.5vw]">
				<span class="text-golden-three font-semibold pr-2">//</span>Our Mission
			</h2>
			<p v-motion-slide-visible-once-bottom
				class="text-[3.5vw] lg:text-2xl pt-4 text-white lg:w-4/5 w-full px-1 lg:px-0 text-center pb-12 font-Outfit">
				To empower athletes, sports organizations and businesses in the sports industry to achieve their full potential.
				Our dedication to the excellence, integrity and client-centric approach ensures that we deliver tailored
				strategies and actionable insights to maximum performance, enhance competitiveness and unlock new opportunities
				for our clients.
			</p>

			<h2 v-motion-fade-visible class="text-center text-white w-full h-full font-semibold lg:text-4xl text-[5.5vw]">
				<span class="text-golden-three font-semibold pr-2">//</span>Our Vision
			</h2>

			<p v-motion-slide-visible-once-bottom
				class="text-[3.5vw] lg:text-2xl pt-4 text-white lg:w-3/5 w-full text-center font-Outfit">
				To rise to the position of premier industry leader as a result of the sports community's increasing demand for
				representation.
			</p>

			<div class="lg:-translate-x-0 -translate-x-2 w-full max-w-[1000px] min-h-[500px] mx-auto mt-10 h-full">
				<div v-motion-fade-visible
					class="bg-golden-three bg-opacity-20 max-w-[1000px] min-h-[500px] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
					<div
						class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
						<img :style="layer3" src="https://live.staticflickr.com/65535/53533251352_6f151bfcf1_o.jpg" alt=""
							class="object-cover w-full h-full" />
					</div>
				</div>
			</div>

		</div>

		<div
			class="relative w-full border-y lg:border-l border-golden-three h-fit lg:h-[200px] lg:flex lg:items-center grid grid-cols-2 text-white">
			<div
				class="transition-all duration-150 ease-in-out lg:hover:w-[calc(125%)] lg:hover:bg-golden-three active:scale-105 active:shadow-lg bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black">
				<span class="lg:text-[4rem] text-[12vw]">12+</span>
				<span class="text-xl">Athletes</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out lg:hover:w-[calc(125%)] lg:hover:bg-golden-three active:scale-105 active:shadow-lg bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black">
				<span class="lg:text-[4rem] text-[12vw]">
				  <span class="data">24</span>+</span>
				<span class="text-xl">Affiliates</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out lg:hover:w-[calc(125%)] lg:hover:bg-golden-three active:scale-105 active:shadow-lg bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black lg:pb-0 pb-2">
				<span class="lg:text-[4rem] text-[12vw]">1k+</span>
				<span class="text-xl">active members</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out lg:hover:w-[calc(125%)] lg:hover:bg-golden-three active:scale-105 active:shadow-lg bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black lg:pb-0 pb-2">
				<span class="lg:text-[4rem] text-[12vw]">2024</span>
				<span class="text-xl">SINCE</span>
			</div>
		</div>

		<!-- owners -->
		<div class="text-white relative w-full lg:border-l border-golden-three flex flex-col px-4 lg:px-10 py-20">
			<h2 v-motion-fade-visible class="text-[8vw] lg:text-4xl font-bold">
				<span class="pr-1 text-golden-three">//</span>
				Our Team
			</h2>
			<p v-motion-slide-visible-once-bottom class="lg:text-xl text=[3.5vw] mb-8 font-Outfit">
				Meet the faces of EagleEye Sports Consults' corporate executive group, providing leadership to our teams and
				events around
				the world.
			</p>

			<div v-if="!if_sm" v-motion-fade-visible-once class="flex items-center justify-center gap-10">
				<FlipContainer src="https://live.staticflickr.com/65535/53541056275_bd04f734bd_o.jpg"
					text2="Co-Founder / Player Agent" text1="NANA A. K. LARBI" />
				<FlipContainer src="https://live.staticflickr.com/65535/53540633426_f94b2cc16c_o.jpg"
					text2="Co-Founder / Player Agent" text1="MORRISON AKOWUAH" />
				<FlipContainer src="https://live.staticflickr.com/65535/53540812068_63943e2af1_o.jpg" text2="Head of Operations"
					text1="LARBI RANSFORD" />
			</div>

			<div v-if="!if_sm" v-motion-fade-visible-once class="flex items-center justify-center gap-10 pt-10">
				<FlipContainer src="https://live.staticflickr.com/65535/53540959629_ecaa9285ac_o.jpg" text2="Chief Scout (Ghana)"
					text1="YAW OWUSU BANAHENE" />
				<FlipContainer src="https://live.staticflickr.com/65535/53541056280_c9558276c5_o.jpg" text2="Scout (Kenya)"
					text1="CHURCHILL CARLOS MASHETI" />
			</div>

			<div v-if="if_sm" v-motion-fade-visible-once class="grid grid-cols-2 gap-4 pt-10">
				<FlipContainer src="https://live.staticflickr.com/65535/53541056275_bd04f734bd_o.jpg"
					text2="Co-Founder / Player Agent" text1="NANA A. K. LARBI" />
				<FlipContainer src="https://live.staticflickr.com/65535/53540633426_f94b2cc16c_o.jpg"
					text2="Co-Founder / Player Agent" text1="MORRISON AKOWUAH" />
				<FlipContainer src="https://live.staticflickr.com/65535/53540812068_63943e2af1_o.jpg" text2="Head of Operations"
					text1="LARBI RANSFORD" />
				<FlipContainer src="https://live.staticflickr.com/65535/53540959629_ecaa9285ac_o.jpg" text2="Chief Scout (Ghana)"
					text1="YAW OWUSU BANAHENE" />
				<FlipContainer class="" src="https://live.staticflickr.com/65535/53546674051_51dd25c0de_z.jpg"
					text2="Scout (Kenya)" text1="CHURCHILL CARLOS MASHETI" classImg="" />
			</div>

		</div>

		<FooterEnd />
	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useTitle } from '@vueuse/core'

const if_sm = inject('if_sm', true)

onMounted(() => {
	useTitle('EagleEye Sports Consults | About Us')

const items = document.querySelectorAll(".data");

gsap.from(items, {
  textContent: 0,
  duration: 1,
  ease: "power1.in",
  ScrollTrigger:{
    trigger: "data",
    start: "top 6%",
  },
  snap: { textContent: 1 },
  stagger: {
    each: 1.0,
    onUpdate: function() {
      this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
    },
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

	gsap.fromTo('.visi', { opacity: 0 }, { opacity: 1, duration: 1, delay: 3 })
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