<template>
	<div
		class="fixed w-[100px] hover:w-[200px] transition-all duration-500 ease-in-out bg-black h-screen right-0 border-l border-golden-three hover:drop-shadow-xl cursor-pointer z-[10000]">

		<div class="w-full h-full grid place-items-center relative group " @click="toggleNav">

			<div class="droping w-5 h-fit flex flex-col gap-[2px]">
				<span class="w-full h-[2px] bg-golden-three"></span>
				<span class="w-full h-[2px] bg-golden-three"></span>
				<span class="w-full h-[2px] bg-golden-three"></span>
			</div>

			<!-- <img src="../assets/imgs/united2.jpg"
				class="absolute w-full h-full object-cover z-[-5] opacity-0 group-hover:opacity-30 transition-all duration-500 ease-in-out" /> -->
			<!-- <div
				class="absolute w-full h-full bg-golden-three group-hover:opacity-0 opacity-0 transition-all duration-500 ease-in-out">
			</div> -->

			<video playsinline autoplay loop muted key="video" id="avatarVideo" src="~/assets/vid2.mp4"
				class="object-cover w-full h-full bg-black absolute opacity-0 group-hover:opacity-40 transition-all duration-150 ease-in-out">
			</video>

		</div>

	</div>

	<!-- navigation content -->
	<div id="nav-content" class="fixed w-screen h-screen bg-black border border-golden-three translate-x-full z-[10000]">

		<div class="w-full h-full flex relative">

			<!-- content -->
			<div class="w-full h-full pr-[100px] flex">

				<!-- graphics -->
				<section class="w-full">
					<!-- <img src="../assets/imgs/gloves.JPG" alt="" class="object-cover w-full h-full"> -->
					<video src="/eagle.mp4" class="w-full h-full object-cover bg-black" playsinline autoplay loop
						muted></video>
				</section>

				<!-- contact us -->
				<section class="w-[1000px] border-l border-golden-three flex flex-col justify-center items-center group">

					<div class="px-10 h-full text-white flex flex-col gap-2 justify-center items-center">
						<h1 class="text-white w-full text-[2rem] font-semibold">Contact Us</h1>
						<p class="w-full text-xl">Send Us A Message</p>

						<div class="w-full h-10 bg-neutral-900 border border-golden-three flex gap-[2px] p-[2px]">
							<label for="Name" class="w-20 h-full flex justify-center items-center px-2 py-2 bg-golden-three"><span
									class="drop-shadow-xl font-bold tracking-wider">Name</span></label>
							<input id="Name" type="text" class="w-full bg-transparent pl-5 focus:outline-none">
						</div>

						<div class="w-full h-10 bg-neutral-900 border border-golden-three flex gap-[2px] p-[2px]">
							<label for="Email" class="w-20 h-full flex justify-center items-center px-2 py-2 bg-golden-three"><span
									class="drop-shadow-xl font-bold tracking-wider">Email</span></label>
							<input id="Email" type="text" class="w-full bg-transparent pl-5 focus:outline-none">
						</div>

						<div
							class="mt-4 w-full min-h-[40px] bg-neutral-900 border border-golden-three gap-[2px] p-[2px] flex flex-col ">
							<label for="Message" class="text-golden-three text-right w-full px-2">Message</label>
							<textarea id="Message" class="w-full bg-transparent pl-5 focus:outline-none" />
						</div>

						<!-- <button class="mt-2 w-full h-10 bg-golden-three">Send Message</button> -->
						<BoxContainer class="mt-2 text-xl tracking-wide">Send Message</BoxContainer>
						<div class="italic text-xl font-Outfit pt-3 text-white hover:text-golden-three font-semibold">
							eagleeyespc@gmail.com
						</div>

						<NuxtLink href="https://maps.app.goo.gl/6H1wYmEfxw5DFBQV7"
							class="italic text-xs font-Outfit pt-3 text-golden-one hover:text-golden-three font-semibold cursor-pointer">
							Find Our
							Location</NuxtLink>
					</div>


					<div
						class="w-full border-t group-hover:bg-golden-three group-hover:bg-opacity-15 transition-all duration-150 ease-in-out border-golden-three text-white px-5 py-10 flex flex-col">
						<!-- <span class="">telephone</span>
						<span class="">company email</span> -->
					</div>

				</section>

				<!-- links -->
				<section class="text-white w-full border-l border-golden-three flex flex-col group">
					<div
						class="w-full h-24 border-b border-golden-three group-hover:bg-golden-three group-hover:bg-opacity-15 transition-all duration-150 ease-in-out">
					</div>
					<div class="flex flex-col h-full w-full pl-10 justify-center font-semibold text-[2.7rem] gap-5 group">
						<NuxtLink @click="onNavClick(false)" to="/"
							class="hover:text-golden-three linkz home border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2">
							HOME</NuxtLink>
						<NuxtLink @click="onNavClick(false)" to="/about"
							class="hover:text-golden-three linkz about border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2">
							ABOUT US</NuxtLink>
						<NuxtLink @click="onNavClick(true)" to="/"
							class="hover:text-golden-three linkz home border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2">
							SERVICES</NuxtLink>
						<NuxtLink @click="onNavClick(false)" to="/athletes"
							class="hover:text-golden-three linkz athletes border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2">
							OUR ATHLETES</NuxtLink>
						<NuxtLink @click="onNavClick(false)" to="/gallery"
							class="hover:text-golden-three linkz gallery border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2">
							GALLERY</NuxtLink>
						<!-- <NuxtLink @click="()=>{setTimeout(toggleNav(),1000)}" to="/"
							class=" hover:text-golden-three border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2">Projects</NuxtLink> -->
					</div>
				</section>
			</div>

			<!-- close nav -->
			<div
				class="w-[100px] h-full grid place-items-center border-l border-golden-three absolute right-0 top-0 hover:bg-golden-three hover:bg-opacity-10 transition-all duration-500 ease-in-out "
				@click="toggleNav">
				<div class="w-5 aspect-square flex flex-col justify-between relative -translate-x-2">
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-[2px] bg-golden-three">
					</div>
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-[2px] bg-golden-three">
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import appStore from '~/stores/app';
import navStore from '~/stores/nav';

const { $gsap: gsap } = useNuxtApp();
const { opened } = storeToRefs(appStore())
const { curr_nav } = storeToRefs(navStore())
const nav_target = ref()
const parallax = reactive(useParallax(nav_target))

onMounted(() => {
	function removeClass() {
		document.querySelectorAll('.linkz').forEach((link) => {
			link.classList.remove('selectedLink')
		})
	}
	function setClass(target: string) {
		document.querySelector(`.${target}`)!.classList.add('selectedLink')
	}
	watchEffect(() => {
		if (curr_nav.value == '/') {
			removeClass()
			setClass('home')
		} else if (curr_nav.value == '/about') {
			removeClass()
			setClass('about')
		} else if (curr_nav.value == '/athletes') {
			removeClass()
			setClass('athletes')
		} else if (curr_nav.value == '/gallery') {
			removeClass()
			setClass('gallery')
		}
	})

})

function onNavClick(bool?: boolean) {
	setTimeout(() => {
		if (!opened.value) {
			gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: 'power2.inOut' })
		}
		toggleNav()
	}, 300)

	if (bool) {
		setTimeout(goToServices, 400)
	} else { }
}

function goToServices() {
	gsap.to(window, { duration: 1, scrollTo: '.services', ease: 'power2.inOut' })
}

const toggleNav = () => {
	const nav_content = document.getElementById('nav-content')!;
	if (!opened.value) {
		gsap.to(nav_content, {
			x: '100%',
			duration: 1,
			ease: 'ease-in-out'
		})
	} else {
		gsap.to(nav_content, {
			x: 0,
			duration: 1,
			ease: 'ease-in-out'
		})
	}
	appStore().$patch(() => opened.value = !opened.value)
}

</script>


<style>
.selectedLink {
	@apply text-golden-three bg-golden-three bg-opacity-10 border border-golden-three;
}
</style>