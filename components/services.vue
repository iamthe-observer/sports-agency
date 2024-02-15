<template>
	<div ref="target" class="border-golden-three text-white w-full flex flex-col pb-20 border-l py-20 services">

		<h2 class="text-center w-full h-full font-bold text-2xl mx-auto mb-20">
			<!-- <span class="">Our Services</span> -->
			<Marquee text="Our Services" />
		</h2>

		<div class="flex justify-between mx-auto px-10 mt-10 max-w-full w-full gap-12">
			<!-- left -->
			<div class="w-full h-full">
				<div
					class="bg-golden-three bg-opacity-20 mx-auto mb-7 min-h-[550px] w-4/5 relative -translate-x-4 -translate-y-4 border border-golden-three">
					<div
						class="w-full mx-auto h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
						<img :style="layer3" src="../assets/imgs/gloves.jpg" alt="" class="object-cover w-full h-full">
					</div>
				</div>
			</div>

			<!-- right -->
			<div class="w-full h-fit flex flex-col items-center gap-10">
				<!-- 1 -->
				<div
					class="ball bg-golden-three bg-opacity-5 hover:bg-opacity-20 transition-all duration-[1s] ease-in-out flex flex-col items-center w-full h-fit border border-golden-three">
					<h1 class="border-b border-golden-three w-full text-center text-4xl py-2">
						Athlete Representation
					</h1>
					<div class="flex flex-col items-center w-full p-10 gap-10">
						<span class="text-center text-xl">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi culpa corrupti et repellendus,
							illo vel corporis laboriosam deserunt nihil!
						</span>

						<div
							class="bg-golden-three bg-opacity-20 mx-auto mb-7 min-h-[250px] w-4/5 relative -translate-x-4 -translate-y-4 border border-golden-three">
							<div
								class="w-full mx-auto h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
								<img :style="layer3" src="../assets/imgs/ballkick.jpg" alt="" class="object-cover w-full h-full">
							</div>
						</div>
					</div>

				</div>

				<!-- 2 -->
				<div
					class="ball bg-golden-three bg-opacity-5 hover:bg-opacity-20 transition-all duration-[1s] ease-in-out flex flex-col items-center w-full h-fit border border-golden-three">
					<h1 class="border-b border-golden-three w-full text-center text-4xl py-2">
						Player Management
					</h1>
					<div class="flex flex-col items-center w-full p-10 gap-10">
						<span class="text-center text-xl">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi culpa corrupti et repellendus,
							illo vel corporis laboriosam deserunt nihil!
						</span>

						<div
							class="bg-golden-three bg-opacity-20 mx-auto mb-7 min-h-[250px] w-4/5 relative -translate-x-4 -translate-y-4 border border-golden-three">
							<div
								class="w-full mx-auto h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
								<img :style="layer3" src="../assets/imgs/stuff.jpg" alt="" class="object-cover w-full h-full">
							</div>
						</div>
					</div>

				</div>

				<!-- 3 -->
				<div
					class="ball bg-golden-three bg-opacity-5 hover:bg-opacity-20 transition-all duration-[1s] ease-in-out flex flex-col items-center w-full h-fit border border-golden-three">
					<h1 class="border-b border-golden-three w-full text-center text-4xl py-2">
						Sports Marketing and Event Management
					</h1>
					<div class="flex flex-col items-center w-full p-10 gap-10">
						<span class="text-center text-xl">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi culpa corrupti et repellendus,
							illo vel corporis laboriosam deserunt nihil!
						</span>

						<div
							class="bg-golden-three bg-opacity-20 mx-auto mb-7 min-h-[250px] w-4/5 relative -translate-x-4 -translate-y-4 border border-golden-three">
							<div
								class="w-full mx-auto h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
								<img :style="layer3" src="../assets/imgs/baseball.jpg" alt="" class="object-cover w-full h-full">
							</div>
						</div>
					</div>

				</div>

				<!-- 4 -->
				<div
					class="ball bg-golden-three bg-opacity-5 hover:bg-opacity-20 transition-all duration-[1s] ease-in-out flex flex-col items-center w-full h-fit border border-golden-three">
					<h1 class="border-b border-golden-three w-full text-center text-4xl py-2">
						Legal and Sports Consulting
					</h1>
					<div class="flex flex-col items-center w-full p-10 gap-10">
						<span class="text-center text-xl">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi culpa corrupti et repellendus,
							illo vel corporis laboriosam deserunt nihil!
						</span>

						<div
							class="bg-golden-three bg-opacity-20 mx-auto mb-7 min-h-[250px] w-4/5 relative -translate-x-4 -translate-y-4 border border-golden-three">
							<div
								class="w-full mx-auto h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
								<img :style="layer3" src="../assets/imgs/suit.jpg" alt="" class="object-cover w-full h-full">
							</div>
						</div>
					</div>

				</div>

				<!-- 5 -->
				<div
					class="ball bg-golden-three bg-opacity-5 hover:bg-opacity-20 transition-all duration-[1s] ease-in-out flex flex-col items-center w-full h-fit border border-golden-three">
					<h1 class="border-b border-golden-three w-full text-center text-4xl py-2">
						Sports Psychology and Career Development
					</h1>
					<div class="flex flex-col items-center w-full p-10 gap-10">
						<span class="text-center text-xl">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi culpa corrupti et repellendus,
							illo vel corporis laboriosam deserunt nihil!
						</span>

						<div
							class="bg-golden-three bg-opacity-20 mx-auto mb-7 min-h-[250px] w-4/5 relative -translate-x-4 -translate-y-4 border border-golden-three">
							<div
								class="w-full mx-auto h-full absolute top-0 left-0 overflow-hidden translate-x-4 translate-y-4 border border-golden-three perspectiv">
								<img :style="layer3" src="../assets/imgs/motiv.jpg" alt="" class="object-cover w-full h-full">
							</div>
						</div>
					</div>

				</div>


			</div>
		</div>


	</div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const target = ref()
const info = reactive([
	{
		title: 'Athlete Representation',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '~/assets/imgs/braden-collum-9HI8UJMSdZA-unsplash.jpg',
	}, {
		title: 'Player Management',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '~/assets/imgs/braden-collum-9HI8UJMSdZA-unsplash.jpg',
	}, {
		title: 'Sports Marketing',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '~/assets/imgs/braden-collum-9HI8UJMSdZA-unsplash.jpg',
	}, {
		title: 'Legal and Sports Consulting',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '~/assets/imgs/braden-collum-9HI8UJMSdZA-unsplash.jpg',
	}, {
		title: 'Sports Psychology',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem fuga at eligendi rerum voluptatibus nihil doloribus vel optio unde!',
		src: '~/assets/imgs/braden-collum-9HI8UJMSdZA-unsplash.jpg',
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