<template>
	<div class="w-full h-full relative overflow-hidden">
		<div :class="['relative video-content w-full h-screen border-golden-three border-t lg:border-l']">
			<!-- background graphics -->
			<div class="h-screen w-full opacity-90">
				<video playsinline autoplay loop muted key="video" id="avatarVideo"
					:src="home?.vid_src ? `${$link}${home?.vid_src}` : ''"
					class="object-cover w-full h-full bg-black image">
				</video>
				<!-- <video playsinline autoplay loop muted key="video" id="avatarVideo" src="/vid1.mp4"
					class="object-cover w-full h-full bg-black image">
				</video> -->
			</div>

			<!-- logo and socials -->
			<Logo v-if="!if_sm" v-motion-fade />
			<GetInTouch v-if="!if_sm" />
			<Socials v-if="!if_sm" />

			<!-- for mobile -->
			<TopNaviMobile />

			<div v-motion-fade class="absolute right-0 top-1/2 -translate-y-[30%] w-4/5 flex flex-col gap-5 pr-10">
				<div class="h-fit w-full bg-opacity-20 text-right flex flex-col items-end justify-center">
					<p class="font-semibold text-[8vw] lg:text-[40px] droping text-golden-three flex flex-col">
						<span class="">EagleEye</span>
						<span class="block whitespace-nowrap">Sports Consults</span>
						<!-- <span class="">{{ home?.title }}</span> -->
					</p>
					<p
						class="tracking-wide text-[4vw] lg:text-2xl text-white droping italic font-Satisfy whitespace-nowrap">
						{{
			home?.slogan }}</p>
				</div>

				<div class="w-full flex justify-end gap-5">
					<BoxContainer link="/about" class="text-white tracking-wide text-[3vw] lg:text-sm droping">
						<span class="drop-shadow-md whitespace-nowrap">About Us</span>
					</BoxContainer>
					<BoxContainer link="/athletes" class="text-white tracking-wide text-[3vw] lg:text-sm droping">
						<span class="drop-shadow-md whitespace-nowrap">Our Athletes</span>
					</BoxContainer>

				</div>
			</div>
		</div>

		<!-- mission statement -->
		<div ref="target"
			class="text-white w-full flex flex-col lg:px-10 px-4 lg:pt-40 pt-32 lg:border-l border-golden-three pb-36">
			<h1 v-motion-slide-visible-once-bottom
				class="the-container text-center w-full font-bold font-Outfit text-2xl mb-6">
				Welcome to
				<span class="text-golden-three">EagleEye</span>,
			</h1>
			<p v-motion-slide-visible-once-bottom
				class="lg:text-[25px] text-[4vw] text-center w-full lg:w-[90%] mx-auto">
				{{ home?.opening.opener }}
			</p>

			<div v-motion-fade-visible class="text-white w-full flex flex-col px-4 lg:px-10 pb-6">
				<div
					class="bg-golden-three bg-opacity-20 max-w-[1000px] mx-auto mt-10 min-h-[500px] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
					<div
						class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
						<img :style="layer3" :src="home?.opening.src ? `${$link}${home?.opening.src}` : ''" alt=""
							class="object-cover w-full h-full" />
						<div class="absolute bg-black opacity-40 translate-x- translate-y- top-0 left-0 w-full h-full">
						</div>
					</div>
				</div>

			</div>

			<h1 class="text-center w-full font-semibold lg:text-4xl text-2xl pt-4 pb-3">
				<span class="text-golden-three">//</span>
				Mission Statement
			</h1>

			<p class="text-[4.4vw] lg:text-[22px] text-center w-[90%] mx-auto tracking-wide font-Outfit">
				{{ home?.opening.mission_statement }}
			</p>
		</div>

		<!-- services -->
		<Services />

		<div class="border-golden-three bg-golden-three bg-opacity-5 border-t w-full min-h-[600px] flex flex-col lg:border-l gap-5 text-black relative justify-center items-center py-20 overflow-hidden"
			id="newz">
			<NewsCarousel :news="data?.routes.home.news" />
		</div>

		<FooterEnd />

	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useTitle } from '@vueuse/core'
import appStore from '~/stores/app';

const target = ref()
const parallax = reactive(useParallax(target))
const if_sm = inject('if_sm', true)

const { data, news_toggle, serv_toggle } = storeToRefs(appStore())
const { $gsap: gsap } = useNuxtApp()
const home = computed(() => data.value?.routes.home)

const layer3 = computed<CSSProperties>(() => ({
	transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 30
		}px) scale(1.19) rotateX(${parallax.roll * 30}deg) rotateY(${parallax.tilt * 20
		}deg)`,
	transition: 'all .7s ease-out',
}))

function goToServices() {
	gsap.to(window, {
		duration: 1, scrollTo: '#serv', ease: 'power2.inOut', onComplete: () => {
			appStore().$patch({ serv_toggle: false })
		}
	})
}

function goToNews() {
	gsap.to(window, {
		duration: 1, scrollTo: '#newz', ease: 'power2.inOut', onComplete: () => {
			appStore().$patch({ news_toggle: false })
		}
	})
}
function toScreenTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
	toScreenTop()

	setTimeout(() => {
		if (news_toggle.value) {
			goToNews()
		}
		if (serv_toggle.value) {
			goToServices()
		}
	}, 2000);

	useTitle('EagleEye Sports Consults | Home')

})

</script>

<style>
.image {
	-webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.perspectiv {
	perspective: 1000px;
}

.droping {
	filter: drop-shadow(0px 10px 10px #000);
}
</style>