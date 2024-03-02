<template>
	<div class="w-full h-full relative flex flex-col overflow-hidden">
		<!-- head -->
		<div ref="target" class="border-t lg:border-l border-golden-three w-full h-screen relative">

			<div class="w-full h-full bg-black flex overflow-hidden image perspectiv">
				<img :style="layer3" :src="`${$link}${athletes?._src}`" class="object-cover flex-1 image scale-150" alt="" />
				<div class="absolute inset-0 bg-black bg-opacity-30"></div>
			</div>

			<Logo v-if="!if_sm" />

			<get-in-touch v-if="!if_sm"></get-in-touch>
			<socials v-if="!if_sm" />

			<TopNaviMobile />

			<div class="absolute bottom-1/2 translate-y-2/3 right-10 text-white w-fit h-fit flex flex-col gap-2">
				<span class="font-bold w-full text-left text-[8vw] lg:text-4xl drop-shadow-xl whitespace-nowrap">
					{{ athletes?.title }}</span>
				<span class="text-[4vw] lg:text-lg drop-shadow-xl font-Outfit text-right whitespace-nowrap pb-5">
					{{ athletes?.athl_txt }}
				</span>

				<BoxContainer @click="scrollTo"
					class="w-fit self-end font-semibold tracking-wider lg:text-sm text-[3.2vw] flex items-center gap-2 hover:gap-0">
					Featured
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
						<path fill="currentColor" d="M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4z" />
					</svg>
				</BoxContainer>
			</div>
		</div>

		<div id="athletes" class="w-full h-full lg:border-l border-golden-three pb-32 py-20 lg:py-32 px-4 lg:px-20">

			<h1 v-motion-slide-visible-once-bottom class="lg:text-4xl text-[6vw] text-white mb-6 font-semibold"><span
					class="text-golden-three pr-4">//</span>Featured Athletes</h1>

			<div class="grid grid-cols-2 lg:grid-cols-3 gap-14">
				<div v-for="(athl, i) in athletes?.athl_src" :key="i" class="players flex flex-col gap-4 items-center">
					<img :src="athl.src ? `${$link}${athl.src}` : ''" alt=""
						:class="`hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-105 scale-150 lg:scale-100`" />

					<span class="text-white mx-auto font-semibold lg:text-xl text-[4vw] tracking-wide w-full text-center">{{
					athl.name }}</span>
				</div>
			</div>

		</div>

		<FooterEnd />

	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useTitle } from '@vueuse/core'
import appStore from '~/stores/app';

const if_sm = inject('if_sm', true)
onMounted(() => {
	useTitle('EagleEye Sports Consults | Athletes')
})

const { data } = storeToRefs(appStore())
const athletes = computed(() => data.value?.routes.athletes)
const { $gsap: gsap } = useNuxtApp()
const target = ref()
const parallax = reactive(useParallax(target))

function scrollTo() {
	gsap.to(window, { duration: 1, scrollTo: '#athletes', ease: 'power2.inOut' })
}

const layer3 = computed<CSSProperties>(() => ({
	transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 10
		}px) scale(1.6) rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 10
		}deg)`,
	transition: 'all .7s ease-out',
}))

onMounted(() => {
	const players = document.querySelectorAll('.players')
	gsap.to(players, {
		opacity: 1,
		duration: 1,
		stagger: 0.5,
		scrollTrigger: {
			trigger: players,
			start: "top 80%",
			end: "bottom top",
			// scrub: true,
		}
	})
})
</script>

<style scoped>
.players {
	@apply opacity-0;
}
</style>