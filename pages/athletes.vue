<template>
	<div class="w-full h-full relative flex flex-col">
		<!-- head -->
		<div class="border-t border-l border-golden-three w-full h-screen relative">

			<div class="w-full h-full bg-black flex overflow-hidden image">
				<NuxtImg src="/teammanagement.jpg" class="object-cover flex-1 image scale-150" alt="" />
				<div class="absolute inset-0 bg-black bg-opacity-30"></div>
			</div>

			<Logo />

			<div class="absolute right-0 top-0">
				<BoxContainer class="absolute top-6 right-6 tracking-wide text-white font-semibold text-xl">
					<span class="drop-shadow-md">Get In
						Touch
					</span>
				</BoxContainer>
			</div>

			<div class="absolute bottom-1/2 translate-y-2/3 right-10 text-white w-[40%] h-fit flex flex-col gap-5">
				<span class="font-bold text-4xl drop-shadow-xl text-right">
					Our Players</span>
				<span class="text-lg drop-shadow-xl font-Outfit text-right">
					Sports agency for talented people.
				</span>

				<BoxContainer class="w-fit self-end font-semibold tracking-wider text-xl flex items-center gap-2 hover:gap-0">
					Featured
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
						<path fill="currentColor" d="M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4z" />
					</svg>
				</BoxContainer>
			</div>
		</div>

		<div class="w-full h-full border-l border-golden-three py-32 px-20">

			<h1 class="text-4xl text-white mb-10 font-semibold"><span class="text-golden-three pr-4">//</span>Featured</h1>

			<div class="grid grid-cols-3 gap-14">

				<div class="flex flex-col gap-4 items-center">
					<NuxtImg src="/P1.png" alt=""
						class="hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-105" />

					<span class="text-white mx-auto">Player Player</span>
				</div>

				<div class="flex flex-col gap-4 items-center">
					<NuxtImg src="/P2.png" alt=""
						class="hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-105" />

					<span class="text-white mx-auto">Player Player</span>
				</div>

				<div class="flex flex-col gap-4 items-center">
					<NuxtImg src="/P3.png" alt=""
						class="hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-105" />

					<span class="text-white mx-auto">Player Player</span>
				</div>

				<div class="flex flex-col gap-4 items-center">
					<NuxtImg src="/P4.png" alt=""
						class="hover:png-shadow transition-all duration-150 ease-out object-contain w-[300px] h-[400px] hover:scale-105" />

					<span class="text-white mx-auto">Player Player</span>
				</div>

			</div>

		</div>

		<FooterEnd />

	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>