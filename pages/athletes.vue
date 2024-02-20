<template>
	<div class="w-full h-full relative flex flex-col">
		<!-- head -->
		<div ref="target" class="border-t border-l border-golden-three w-full h-screen relative">

			<div class="w-full h-full bg-black flex overflow-hidden image perspectiv">
				<img :style="layer3" src="https://live.staticflickr.com/65535/53541058015_a62d10d291_o.jpg"
					class="object-cover flex-1 image scale-150" alt="" />
				<div class="absolute inset-0 bg-black bg-opacity-30"></div>
			</div>

			<Logo />

			<get-in-touch></get-in-touch>
			<socials />

			<div class="absolute bottom-1/2 translate-y-2/3 right-10 text-white w-[40%] h-fit flex flex-col gap-5">
				<span class="font-bold text-4xl drop-shadow-xl text-right">
					Our Athletes</span>
				<span class="text-lg drop-shadow-xl font-Outfit text-right">
					Sports agency for talented people.
				</span>

				<BoxContainer @click="scrollTo"
					class="w-fit self-end font-semibold tracking-wider text-xl flex items-center gap-2 hover:gap-0">
					Featured
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
						<path fill="currentColor" d="M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4z" />
					</svg>
				</BoxContainer>
			</div>
		</div>

		<div id="athletes" class="w-full h-full border-l border-golden-three py-32 px-20">

			<h1 v-motion-slide-visible-once-bottom class="text-4xl text-white mb-6 font-semibold"><span
					class="text-golden-three pr-4">//</span>Featured Athletes</h1>

			<div class="grid grid-cols-3 gap-14">

				<div class="players flex flex-col gap-4 items-center">
					<img src="~/assets/P1.png" alt=""
						class="hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-105" />

					<span class="text-white mx-auto font-semibold text-xl tracking-wide">Michael Ofori</span>
				</div>

				<div class="players flex flex-col gap-4 items-center">
					<img src="~/assets/P4.png" alt=""
						class="hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-105" />

					<span class="text-white mx-auto font-semibold text-xl tracking-wide">Samuel Lartey</span>
				</div>

				<div class="players flex flex-col gap-4 items-center">
					<img src="~/assets/P2.png" alt=""
						class="hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-100 scale-90" />

					<span class="text-white mx-auto font-semibold text-xl tracking-wide">Christopher Okonkwo</span>
				</div>

				<div class="players flex flex-col gap-4 items-center col-span-3">
					<img src="~/assets/P3.png" alt=""
						class="hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-100 scale-90" />

					<span class="text-white mx-auto font-semibold text-xl tracking-wide">Abubakar Sadick</span>
				</div>

			</div>

		</div>

		<FooterEnd />

	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useTitle } from '@vueuse/core'

onMounted(() => {
	useTitle('EagleEye Sports Consults | Athletes')
})

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
	gsap.from(players, {
		opacity: 0,
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

<style scoped></style>