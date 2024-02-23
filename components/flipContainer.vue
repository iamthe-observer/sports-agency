<script setup lang="ts">
const props = defineProps<{
  src: string,
  text1: string,
  text2: string,
  classImg: string
}>()
</script>

<template>
	<div
		class="card text-inherit lg:w-[calc(35%-1rem)] mx-auto w-full lg:min-w-[calc(33% - 1rem)] h-[300px] lg:h-[500px] perspectiv relative group"
		href="#!">
		<div
			class="front flex justify-center items-center absolute w-full h-full back-face-v overflow-hidden border border-golden-three">
			<div class="w-full h-full lg:p-1 overflow-hidden">
				<img :src="src"
					:class="['object-cover w-full h-full opacity-100 gradiento transition-all duration-300 ease-in-out grayscale-0', classImg]" />
			</div>
		</div>

		<div
			class="back border-golden-three flex justify-center items-center absolute w-full h-full back-face-v bg-golden-three bg-opacity-5">
			<div
				class="absolute inset-0 w-full h-full  grid place-items-center translateZ transition-all duration-300 ease-in-out opacity-0">
				<p class="text-center font-bold text-golden-three flex flex-col gap-2">
					<span class="droping text-[1.9rem] lg:text-[2.8rem]">{{ text1 }}</span>
					<span class="droping font-normal lg:text-[1.5rem] text-[1rem] font-Outfit">{{ text2 }}</span>
				</p>
				<!-- <p class="text-[1.5rem] text-center text-golden-three">{{ text2 }}</p> -->
			</div>

			<img src="/iconLogo.png" class="opacity-10" alt="">

		</div>
	</div>
</template>

<style>
.perspectiv {
	perspective: 1000px;
}

.card:hover .front {
	transform: rotateY(180deg);
}

.card:hover .back {
	transform: rotateY(0deg);
}

.back {
	transform: rotateY(-180deg);
}

.back-face-v {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transition: .6s ease-out;
}

.gradiento {
	/* -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0))); */
	mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1));
}

.card:hover .front div img {
	opacity: 0;
}

.translateZ {
	transform: translateZ(100px);
	transform-style: preserve-3d;
}

.card:hover .translateZ {
	opacity: 1;
}
</style>