<template>
	<div class="w-full h-full relative overflow-hidden">

		<!-- background graphics -->
		<div ref="target2" class="relative w-full h-screen border-t lg:border-l border-golden-three">

			<div class="h-screen w-full overflow-hidden perspectiv opacity-50 image">
				<img :style="layer4" :src="about?._src ? `${$link}${about?._src}` : ''" alt=""
					class="image object-cover w-full h-full" />
			</div>

			<!-- logo and contact us -->
			<Logo v-if="!if_sm" v-motion-fade />
			<GetInTouch v-if="!if_sm" />
			<Socials v-if="!if_sm" />
			<TopNaviMobile />

			<div
				class="absolute bottom-1/2 translate-y-1/2 lg:translate-y-2/3 lg:right-10 right-1/2 translate-x-1/2 lg:translate-x-0 text-white lg:w-[40%] w-[90%] h-fit flex flex-col gap-2 visi">
				<span class="font-bold lg:text-[2rem] text-[8vw] drop-shadow-xl">
					{{ about?.title }}
				</span>
				<span class="lg:text-[1.1rem] text-[3.5vw] drop-shadow-xl font-Outfit">
					{{ about?.about_txt }}
				</span>

				<BoxContainer @click="scrollTo"
					class="w-fit self-end font-semibold tracking-wider lg:text-sm text-[4vw] flex gap-2 hover:gap-0 items-center">
					{{ _.learn_more }}
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 aspect-square animate-bounce translate-y-8"
						viewBox="0 0 24 24">
						<path fill="currentColor" d="m12 18l-6-6l1.4-1.4l3.6 3.6V5h2v9.2l3.6-3.6L18 12z" />
					</svg>
				</BoxContainer>
			</div>

		</div>

		<!-- about us -->
		<div ref="target" id="about"
			class="relative w-full lg:border-l border-golden-three flex flex-col items-center py-20 px-8">

			<div class="pb-10">
				<img v-motion-roll-visible-once-bottom src="/iconLogo.png" alt="" class="mx-auto w-20 aspect-square" />
			</div>

			<h2 v-motion-fade-visible
				class="text-center text-white w-full h-full font-semibold lg:text-4xl text-[5.5vw]">
				<span class="text-golden-three font-semibold pr-2">//</span>{{ _.mission_head }}
			</h2>
			<p v-motion-slide-visible-once-bottom
				class="text-[3.5vw] lg:text-2xl pt-4 text-white lg:w-4/5 w-full px-1 lg:px-0 text-center pb-12 font-Outfit">
				{{ about?.mission }}
			</p>

			<h2 v-motion-fade-visible
				class="text-center text-white w-full h-full font-semibold lg:text-4xl text-[5.5vw]">
				<span class="text-golden-three font-semibold pr-2">//</span>{{ _.vision_head }}
			</h2>

			<p v-motion-slide-visible-once-bottom
				class="text-[3.5vw] lg:text-2xl pt-4 text-white lg:w-3/5 w-full text-center font-Outfit">
				{{ about?.vision }}
			</p>

			<div class="lg:-translate-x-0 -translate-x-2 w-full max-w-[1000px] min-h-[500px] mx-auto mt-10 h-full">
				<div v-motion-fade-visible
					class="bg-golden-three bg-opacity-20 max-w-[1000px] min-h-[500px] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
					<div
						class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
						<img :style="layer3" :src="about?.img_src ? `${$link}${about?.img_src}` : ''" alt=""
							class="object-cover w-full h-full" />
					</div>
				</div>
			</div>

		</div>

		<div
			class="statz relative w-full border-y lg:border-l border-golden-three h-fit lg:h-[200px] lg:flex lg:items-center grid grid-cols-2 text-white">
			<div
				class="transition-all duration-150 ease-in-out lg:hover:w-[calc(125%)] lg:hover:bg-golden-three active:scale-105 active:shadow-lg bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black">
				<span class="lg:text-[4rem] text-[12vw]">
					<span class="data">{{ about?.stats[0] }}</span>+</span>
				<span class="text-xl">{{ _.data[0] }}</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out lg:hover:w-[calc(125%)] lg:hover:bg-golden-three active:scale-105 active:shadow-lg bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black">
				<span class="lg:text-[4rem] text-[12vw]">
					<span class="data">{{ about?.stats[1] }}</span>+</span>
				<span class="text-xl">{{ _.data[1] }}</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out lg:hover:w-[calc(125%)] lg:hover:bg-golden-three active:scale-105 active:shadow-lg bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black lg:pb-0 pb-2">
				<span class="lg:text-[4rem] text-[12vw]"><span class="data">{{ about?.stats[2] }}</span>+</span>
				<span class="text-xl">{{ _.data[2] }}</span>
			</div>
			<div
				class="transition-all duration-150 ease-in-out lg:hover:w-[calc(125%)] lg:hover:bg-golden-three active:scale-105 active:shadow-lg bg-golden-three bg-opacity-10 hover:bg-opacity-100 w-full h-full border-golden-three flex justify-center items-center flex-col text-center font-bold uppercase hover:text-black lg:pb-0 pb-2">
				<span class="lg:text-[4rem] text-[12vw]"><span class="data">{{ about?.stats[3] }}</span></span>
				<span class="text-xl">{{ _.data[3] }}</span>
			</div>
		</div>

		<!-- Team Members -->
		<div class="text-white relative w-full lg:border-l border-golden-three flex flex-col px-4 lg:px-6 py-20">
			<h2 v-motion-fade-visible class="text-[8vw] lg:text-4xl font-bold">
				<span class="pr-1 text-golden-three">//</span>
				{{ _.team_head }}
			</h2>
			<p v-motion-slide-visible-once-bottom class="lg:text-xl text=[3.5vw] mb-8 font-Outfit">
				{{ about?.team_desc }}
			</p>

			<div v-if="!if_sm" v-motion-fade-visible-once class="grid grid-cols-3 gap-10 w-4/5 mx-auto mt-10">
				<FlipContainer v-for="(team, i) in about?.team_src" :key="i" class="w-full select-none"
					:src="team.src ? `${$link}${team.src}` : ''" :text2="team.pos" :text1="team.name" />
			</div>

			<div v-if="if_sm" v-motion-fade-visible-once class="grid grid-cols-2 gap-4 pt-10">
				<FlipContainer v-for="(team, i) in about?.team_src" :key="i" class="w-full select-none"
					:src="team.src ? `${$link}${team.src}` : ''" :text2="team.pos" :text1="team.name" />
			</div>

		</div>

		<FooterEnd />
	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useTitle } from '@vueuse/core'
import appStore from '~/stores/app';
import info from '~/assets/data/about.json'
const lang = useCookie('lang')
// lang data
const _ = ref()
watchEffect(() => {
	if (lang.value === 'fr') {
		_.value = info.fr
	} else if (lang.value === 'es') {
		_.value = info.es
	} else if (lang.value === 'de') {
		_.value = info.de
	} else {
		_.value = info.en
	}
})


const { data } = storeToRefs(appStore())
const about = computed(() => data.value?.routes.about)
const if_sm = inject('if_sm', true)
const { $gsap: gsap } = useNuxtApp()
const target = ref()
const target2 = ref()
const parallax = reactive(useParallax(target))
const parallax2 = reactive(useParallax(target2))

onMounted(() => {
	useTitle('EagleEye Sports Consults | About Us')

	const items = document.querySelectorAll(".data");

	gsap.from(items, {
		textContent: 0,
		duration: 1,
		ease: "power1.in",
		scrollTrigger: {
			trigger: ".statz",
			start: "top 80%",
		},
		snap: { textContent: 1 },
		stagger: {
			each: .5,
		}
	});

	gsap.fromTo('.visi', { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 })
})

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