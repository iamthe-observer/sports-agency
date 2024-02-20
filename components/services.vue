<template>
	<div ref="target"
		class="border-golden-three text-white w-full flex flex-col pb-20 border-l py-20 services overflow-y-hidden">

		<h2 class="text-center w-full h-full font-bold text-2xl mx-auto mb-20">
			<!-- <span class="">Our Services</span> -->
			<Marquee text="OUR SERVICES" />
		</h2>

		<section
			class="text-white max-h-full flex justify-between w-full py-8 px-10 min-h-[1900px] gap-3 bg-base900 relative isolate">
			<div class="image_container flex-1 relative w-1/2 pointer-events-none px-10">

				<div
					class="bg-golden-three bg-opacity-20 max-w-[1000px] mx-auto mt-4 h-[80vh] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
					<div
						class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
						<img :style="layer3" src="/gloves.jpg" alt="" class="object-cover w-full h-full image1" />
					</div>
				</div>

			</div>

			<div class="w-1/2 flex flex-col gap-10">

				<div v-motion-fade-visible-once v-for="(service, i) in services" :key="i"
					class="ball bg-golden-three bg-opacity-5 hover:bg-opacity-20 transition-all duration-[1s] ease-in-out flex flex-col items-center w-full h-fit border border-golden-three">
					<h1 class="border-b border-golden-three w-full text-center text-4xl py-2">
						{{ service.title }}
					</h1>
					<div class="flex flex-col items-center w-full p-10 gap-10">
						<span class="text-center text-xl font-Outfit">
							{{ service.description }}
						</span>

						<div
							class="bg-golden-three bg-opacity-20 mx-auto mb-7 min-h-[250px] w-4/5 relative -translate-x-4 -translate-y-4 border border-golden-three">
							<div
								class="w-full mx-auto h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
								<img :style="layer3" :src="service.src" alt="" class="object-cover w-full h-full" />
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>

	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const { $gsap: gsap } = useNuxtApp();

onMounted(() => {
	const container_height = document.querySelector('.image_container')!.clientHeight
	gsap.to('.image1', {
		scrollTrigger: {
			trigger: ".image_container",
			start: "top 6%",
			end: () => `+=${container_height * .804}`,
			scrub: 3,
			pin: true,
			immediateRender: true
		}
	})
})

const target = ref()
const services = reactive([
	{
		title: 'Athlete Representation',
		description: "On behalf of our athletes, our agents are in charge of negotiating professional activities and contracts. In addition, they handle correspondence between athletes and professional teams, the media, and brands or companies who are interested in them. The experience of our agents is essential because it enables them to select the leagues and teams that will best support our athletes' professional growth in light of their expertise, market knowledge, and analytical abilities.",
		src: '/athlete-rep.jpg',
	}, {
		title: 'Sports Marketing & Events Management',
		description: "The portfolio serves as an athlete's entry ticket into the professional ranks. We watch over them and give them presentation and communication tips. Together, our clients and our team build their own electronic portfolios, complete with a highlight reel and an in-depth athlete bio. These are invaluable resources that help us provide exceptional service, build our clients' brands, and raise their market value.",
		src: '/jersey.png',
	}, {
		title: 'Legal and Sports Consulting',
		description: "We assist our customers in adjusting to and overcoming the challenges of being a professional athlete by offering career counselling services. Through career plan development and goal-setting, our counselling sessions help our clients maximize their earning potential and achieve their career objectives.",
		src: '/suit.jpg',
	}, {
		title: 'Talent Scouting',
		description: "By working with different sports leagues and academies, we try to find athletes that have the potential to advance in their careers. Our goal is to expand and enhance our scouting network by means of club outreach, age-appropriate identification, and easily available and thorough education.",
		src: '/stuff.jpg',
	}, {
		title: 'Athlete Management & Career Development',
		description: "Even when the contract is signed, our job is not concluded. We continue to oversee our athletes and make sure their needs are met at their individual clubs. In addition to providing emotional support during the frequently demanding football seasons, we also offer financial, branding, and PR consultancy services.",
		src: '/career-dev.jpg',
	},
])
const parallax = reactive(useParallax(target))

const layer3 = computed<CSSProperties>(() => ({
	transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 30
		}px) scale(1.19) rotateX(${parallax.roll * 30}deg) rotateY(${parallax.tilt * 20
		}deg)`,
	transition: 'all .7s ease-out',
}))
</script>

<style scoped>
.ball {
	animation-timing-function: cubic-bezier(0.57, 0.4, 0.55, 1.17);
}
</style>