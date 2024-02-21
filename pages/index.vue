<template>
	<div class="w-full h-full relative overflow-x-hidden">
		<div
			:class="['relative video-content w-full h-screen border-golden-three', if_sm ? 'border-t' : 'border-t border-l']">
			<!-- background graphics -->
			<div class="h-screen w-full opacity-90">
				<video playsinline autoplay loop muted key="video" id="avatarVideo" src="/vid1.mp4"
					class="object-cover w-full h-full bg-black image">
				</video>
			</div>

			<!-- logo and socials -->
			<Logo v-if="!if_sm" v-motion-fade />
			<GetInTouch v-if="!if_sm" />
			<Socials v-if="!if_sm" />

			<!-- for mobile -->
			<div v-else
				class="absolute top-0 left-0 w-[calc(100%-80px)] h-[49px] backdrop-blur-md border-b border-l border-golden-three flex">
				<!-- logo -->
				<section class="w-24 grid place-items-center px-2 bg-black">
					<img src="/iconLogo.png" alt="" class="h-10 w-10 items-contain">
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

				<section
					class="grid place-items-center px-4 text-golden-three font-bold cursor-pointer active:bg-golden-three select-none active:text-black border-l border-golden-three whitespace-nowrap bg-black">
					Contact Us</section>
			</div>


			<div v-motion-fade class="absolute right-0 top-1/2 -translate-y-[30%] w-4/5 flex flex-col gap-5 pr-10">
				<div class="h-fit w-full bg-opacity-20 text-right flex flex-col items-end justify-center">
					<p class="font-semibold text-[60px] text-  droping text-golden-three">EagleEye Sports Consults</p>
					<p class="font- tracking-wide text-3xl text-white droping italic font-Satisfy">Your Pathway to Sporting
						Greatness</p>
				</div>

				<div class="w-full flex justify-end gap-5">
					<BoxContainer link="/about" class="text-white tracking-wide text-xl"><span class="drop-shadow-md">About
							Us</span>
					</BoxContainer>
					<BoxContainer link="/athletes" class="text-white tracking-wide text-xl"><span class="drop-shadow-md">Our
							Athletes</span>
					</BoxContainer>

				</div>
			</div>
		</div>

		<!-- mission statement -->
		<div class="text-white w-full flex flex-col px-10 pt-40 border-l border-golden-three pb-36">
			<h1 v-motion-slide-visible-bottom class="the-container text-center w-full font-bold font-Outfit text-2xl mb-6">
				Welcome to
				<span class="text-golden-three">EagleEye</span>,
			</h1>
			<p v-motion-slide-visible-bottom class="text-[30px] text-center w-[90%] mx-auto">
				EagleEye strives to identify and sign gifted athletes and expand its networks by thinking out of the box. Our goal
				is to give value to professional sport organizations by utilizing our global network and a contemporary approach
				to the beautiful game. In order to enhance player value, we run a cutting-edge sports consultancy and agency on
				behalf of teams and athletes.
			</p>

			<div v-motion-fade-visible class="text-white w-full flex flex-col px-10 pb-6">
				<div
					class="bg-golden-three bg-opacity-20 max-w-[1000px] mx-auto mt-10 min-h-[500px] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
					<div ref="target"
						class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
						<img :style="layer3" src="https://live.staticflickr.com/65535/53534456724_916713d4ee_o.jpg" alt=""
							class="object-cover w-full h-full" />
						<div class="absolute bg-black opacity-40 translate-x- translate-y- top-0 left-0 w-full h-full"></div>
					</div>
				</div>

			</div>

			<h1 class="text-center w-full font-semibold text-4xl pt-4 pb-3">
				<span class="text-golden-three">//</span>
				Mission Statement
			</h1>

			<p class=" text-2xl text-center w-4/5 mx-auto tracking-wide font-Outfit">
				To empower athletes, sports organizations and businesses in the sports industry to achieve their full potential.
				Our dedication to the excellence, integrity and client-centric approach ensures that we deliver tailored
				strategies and actionable insights to maximum performance, enhance competitiveness and unlock new opportunities
				for our clients.
			</p>
		</div>

		<!-- services -->
		<Services />

		<div
			class="border-golden-three bg-golden-three bg-opacity-5 border-t w-full min-h-[600px] flex flex-col border-l gap-5 text-black relative justify-center items-center py-20 overflow-hidden">
			<NewsCarousel />
		</div>

		<FooterEnd />

	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useTitle } from '@vueuse/core'

const target = ref()
const parallax = reactive(useParallax(target))
const if_sm = inject('if_sm', true)

const layer3 = computed<CSSProperties>(() => ({
	// ...layerBase,
	transform: `translateX(${parallax.tilt * 20}px) translateY(${parallax.roll * 20
		}px) scale(1.33) rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20
		}deg)`,
	transition: 'all .7s ease-out',
}))

onMounted(() => {
	useTitle('EagleEye Sports Consults | Home')

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