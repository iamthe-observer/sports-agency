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
						<NuxtImg :style="layer3" src="/gloves.jpg" alt="" class="object-cover w-full h-full" />
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
								<NuxtImg :style="layer3" :src="service.src" alt="" class="object-cover w-full h-full" />
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
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '/ballkick.jpg',
	}, {
		title: 'Player Management',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '/stuff.jpg',
	}, {
		title: 'Sports Marketing',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '/baseball.jpg',
	}, {
		title: 'Legal and Sports Consulting',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '/suit.jpg',
	}, {
		title: 'Sports Psychology',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '/motiv.jpg',
	}
])
const parallax = reactive(useParallax(target))

const layer3 = computed<CSSProperties>(() => ({
	transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 30
		}px) scale(1.33) rotateX(${parallax.roll * 30}deg) rotateY(${parallax.tilt * 20
		}deg)`,
	transition: 'all .7s ease-out',
}))
</script>

<style scoped>
.ball {
	animation-timing-function: cubic-bezier(0.57, 0.4, 0.55, 1.17);
}
</style>