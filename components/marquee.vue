<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
	<div class="marquee">
		<div>
			<span class="text-[45px] whitespace-nowrap lg:text-[85px] grid place-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-1/2 lg:h-[50%] lg:translate-y-0 aspect-square"
					viewBox="0 0 24 24">
					<path fill="currentColor"
						d="M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z" />
				</svg>
			</span>
			<span class="text-[7vw] whitespace-nowrap lg:text-[3vw] grid place-items-center">{{ text }}</span>
			<span class="text-[35px] whitespace-nowrap lg:text-[85px] grid place-items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-1/2 lg:h-[50%] lg:translate-y-0 aspect-square"
					viewBox="0 0 24 24">
					<path fill="currentColor"
						d="M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z" />
				</svg>
			</span>
			<span class="text-[7vw] whitespace-nowrap lg:text-[3vw] grid place-items-center">{{ text }}</span>
		</div>
	</div>
</template>

<style scoped>
.marquee {
	height: 100px;
	width: 100%;

	overflow: hidden;
	position: relative;
}

.marquee div {
	display: block;
	width: 200%;
	height: 100px;

	position: absolute;
	overflow: hidden;

	animation: marquee 5s linear infinite;
}

.marquee span {
	float: left;
	width: 25%;
	height: 100px;
	/* font-size: 85px; */
	color: #E5B80B;
}

@keyframes marquee {
	0% {
		left: 0;
	}

	100% {
		left: -100%;
	}
}
</style>