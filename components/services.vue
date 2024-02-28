<template>
	<div ref="target"
		class="border-golden-three text-white w-full flex flex-col lg:border-l py-5 pb-20 lg:py-20 services overflow-y-hidden">

		<h2 class="text-center w-full h-full font-bold mx-auto mb-5 lg:mb-20">
			<!-- <span class="">Our Services</span> -->
			<Marquee text="OUR SERVICES" />
		</h2>

		<section
			class="text-white max-h-full flex justify-between w-full py-8 px-4 lg:px-10 min-h-[1900px] gap-3 bg-base900 relative isolate">

			<div v-if="!if_sm" class="image_container flex-1 relative w-1/2 pointer-events-none px-10">
				<div
					class="bg-golden-three bg-opacity-20 max-w-[1000px] mx-auto mt-4 h-[80vh] w-full relative -translate-x-4 -translate-y-4 border border-golden-three">
					<div
						class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
						<img :style="layer3" :src="services.left.src ? services.left.src : ''" alt=""
							class="object-cover w-full h-full image1" />
					</div>
				</div>
			</div>

			<div class="lg:w-1/2 w-full flex flex-col gap-10">

				<div v-motion-fade-visible-once v-for="(service, i) in services.right.serv" :key="i"
					class="ball bg-golden-three bg-opacity-5 hover:bg-opacity-20 transition-all duration-[1s] ease-in-out flex flex-col items-center w-full h-fit border border-golden-three">
					<h1 class="border-b border-golden-three w-full text-center text-[5vw] lg:text-4xl py-2 px-2 font-bold">
						{{ service.title }}
					</h1>
					<div class="flex flex-col items-center w-full p-4 lg:p-10 gap-10">
						<span class="text-center text-[3.5vw] lg:text-xl font-Outfit">
							{{ service.content }}
						</span>

						<div
							class="bg-golden-three bg-opacity-20 mx-auto mb-7 min-h-[250px] w-[90%] lg:w-4/5 relative -translate-x-3 -translate-y-4 border border-golden-three">
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
import appStore from '~/stores/app';

const { $gsap: gsap } = useNuxtApp();
const if_sm = inject('if_sm', true)
const { data } = storeToRefs(appStore())
const services = computed(() => data.value!.routes.home.services)

function animate() {
	if (document.querySelector('.image_container') === null) return
	const container_height = document.querySelector('.image_container')!.clientHeight
	gsap.to('.image1', {
		scrollTrigger: {
			trigger: ".image_container",
			start: "top 6%",
			end: () => `+=${container_height - document.querySelector('.image1')!.clientHeight - 18}`,
			// end: () => `+=${container_height * .804}`,
			scrub: 1,
			pin: true,
			immediateRender: true
		}
	})
}

let idx = ref(0)

watchEffect(() => {
	if (!if_sm && idx.value > 0) {
		animate()
		++idx.value
	}
})

onMounted(() => {
	setTimeout(() => {
		animate()
	}, 500)
})

const target = ref()
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