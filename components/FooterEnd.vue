<template>
	<div class="border-golden-three w-full hfit flex flex-col border-l grad border-b relative">
		<div class="w-full h-[400px] border-t border-golden-three flex flex-col">
			<div class="w-full h-fit flex items-center justify-center">
				<a class="text-white border-x border-b border-golden-three px-10 py-6 text-center text-3xl group hover:bg-golden-three transition-all duration-150 ease-in-out cursor-pointer"
					@click="toScreenTop">
					<span
						class="text-golden-three font-bold tracking-wider group-hover:text-black transition-all duration-150 ease-in-out">EagleEye</span>
					<br />
					<span class="tracking-wider drop-shadow-md">Sports Consults</span>
				</a>
			</div>
			<div class="w-full h-full text-white flex items-center justify-center gap-14 text-[3.5rem]">
				<NuxtLink to="/"
					class="outline outline-2 outline-transparent hover:outline-golden-three px-4 transition-all duration-150 ease-in-out cursor-pointer">
					Home</NuxtLink>
				<NuxtLink to="/about"
					class="outline outline-2 outline-transparent hover:outline-golden-three px-4 transition-all duration-150 ease-in-out cursor-pointer">
					About
					Us</NuxtLink>
				<NuxtLink to="/athletes"
					class="outline outline-2 outline-transparent hover:outline-golden-three px-4 transition-all duration-150 ease-in-out cursor-pointer">
					Athletes</NuxtLink>
			</div>
		</div>

		<div class="h-[100px] w-full border-t border-golden-three flex text-white">
			<div class="w-full h-full grid place-items-center">Email</div>
			<div class="w-[900px] flex">
				<a
					class="cursor-pointer hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-x border-golden-three grid place-items-center">
					<svg class="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<path fill="currentColor"
							d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2" />
					</svg>
				</a>

				<a
					class="cursor-pointer hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full grid place-items-center">
					<svg class="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
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

				<a
					class="cursor-pointer hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-x border-golden-three grid place-items-center">
					<svg class="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
						<path fill="currentColor"
							d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
					</svg>
				</a>
			</div>
			<div class="w-full h-full grid place-items-center">Phone Number</div>
		</div>
	</div>
</template>

<script setup lang="ts">
function toScreenTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
.grad {
	background: linear-gradient(to bottom, #E5B80B11, transparent);
}
</style>