<template>
	<div class="w-full h-full relative">
		<div class="relative video-content w-full h-screen border-t border-l border-golden-three">
			<!-- background graphics -->
			<div class="h-screen w-full opacity-50">
				<video playsinline autoplay loop muted key="video" id="avatarVideo" src="~/assets/vid1.mp4"
					class="object-cover w-full h-full bg-white image">
				</video>
			</div>

			<!-- logo and contact us -->
			<Logo />

			<div class="absolute right-0 top-0">
				<BoxContainer class="absolute top-6 right-6 tracking-wide text-white font-bold text-xl">
					<span class="drop-shadow-md">Get In
						Touch
					</span>
				</BoxContainer>
			</div>

			<div class="absolute right-0 top-1/2 -translate-y-[30%] w-4/5 flex flex-col gap-5 pr-10">
				<div class="h-fit w-full bg-opacity-20 text-right flex flex-col items-end justify-center">
					<p class="font-bold text-[60px] text-  droping text-golden-three">EagleEye Sports Consults</p>
					<p class="font-bold text-2xl text-white droping italic font-Satisfy">Your Pathway to Sporting Greatness</p>
				</div>

				<div class="w-full flex justify-end gap-5">
					<BoxContainer link="/about" class="text-white font-bold tracking-wide text-xl"><span
							class="drop-shadow-md">About Us</span>
					</BoxContainer>
					<BoxContainer link="/athletes" class="text-white font-bold tracking-wide text-xl"><span
							class="drop-shadow-md">Our
							Athletes</span>
					</BoxContainer>

				</div>
			</div>
		</div>

		<!-- mission statement -->
		<div class="text-white w-full flex flex-col px-10 pt-40 border-l border-golden-three pb-36">
			<h1 class="the-container text-center w-full font-bold text-2xl mb-6">Welcome to EagleEye,</h1>
			<p class="text-[60px] font-bold text-center w-full">
				To empower atheletes, sports organisations and businesses in the sports industry to achieve their full potential.
			</p>

			<div class="text-white w-full flex flex-col px-10 pb-6">
				<div
					class="bg-golden-three bg-opacity-20 max-w-[1000px] mx-auto mt-10 min-h-[500px] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
					<div ref="target"
						class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
						<img :style="layer3" src="../assets/imgs/ballkick.jpg" alt="" class="object-cover w-full h-full">
						<div class="absolute bg-black opacity-40 translate-x- translate-y- top-0 left-0 w-full h-full"></div>
					</div>
				</div>

			</div>


			<p class="font-bold text-3xl text-center w-4/5 mx-auto tracking-wide">
				Our dedication to the excellence, intergrity and client-centric approach ensures that we deliver
				tailored
				strategies and actionable insights to maximum performance, enhance competitivesness and unlock new opportunities
				for our clients.
			</p>
		</div>

		<!-- services -->
		<Services />

		<!-- <div class="border-golden-three w-full h-[400px] flex border-l bg-golden-three p-5 gap-5 text-black">
			<div class="w-full h-full flex flex-col justify-between">
				<p class="font-bold text-[3rem] leading-[2.7rem]">Featured<br />Projects</p>
				<p
					class="w-fit  px-4 font-bold text-[1.5rem] leading-[2.7rem] transi duration-150 ease-in-out hover:bg-black hover:text-golden-three cover-container">
					See More</p>
			</div>
			<div class="w-full h-full bg-black"></div>
			<div class="w-full h-full bg-black"></div>
			<div class="w-full h-full bg-black"></div>
		</div> -->

		<div
			class="border-golden-three bg-golden-three bg-opacity-5 border-t w-full min-h-[600px] flex flex-col border-l gap-5 text-black relative justify-center items-center py-20 overflow-hidden">
			<NewsCarousel />
		</div>

		<FooterEnd />

	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const target = ref()
const parallax = reactive(useParallax(target))

const layer3 = computed<CSSProperties>(() => ({
	// ...layerBase,
	transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 30
		}px) scale(1.33) rotateX(${parallax.roll * 30}deg) rotateY(${parallax.tilt * 20
		}deg)`,
	transition: 'all .7s ease-out',
}))

onMounted(() => {
	let card_container = document.querySelectorAll('.card-container')
	// let flipcard = document.querySelectorAll('.flipcard')
	card_container.forEach((card) => {
		card.addEventListener('mouseenter', () => {
			// @ts-ignore
			card.firstChild!.classList.add('flipped')
		})
		card.addEventListener('mouseleave', () => {
			// @ts-ignore
			card.firstChild!.classList.remove('flipped')
		})
	})
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