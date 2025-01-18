<template>
	<Lang class="fixed top-16 right-3 z-[100]" />

	<!-- open -->
	<nav v-if="if_close_button" @click="toggleNav"
		class="fixed cursor-pointer w-[80px] h-[50px] bg-black top-0 right-0 z-[100] border border-golden-three flex items-center justify-center active:bg-golden-three group">
		<div class="droping w-5 h-fit flex flex-col gap-[2px]">
			<span class="w-full h-[2px] group-active:bg-black bg-golden-three"></span>
			<span class="w-full h-[2px] group-active:bg-black bg-golden-three"></span>
			<span class="w-full h-[2px] group-active:bg-black bg-golden-three"></span>
		</div>
	</nav>

	<!-- close -->
	<nav v-else @click="toggleNav"
		class="fixed cursor-pointer w-[80px] h-[50px] bg-black top-0 right-0 z-[10000] border border-golden-three flex items-center justify-center active:bg-golden-three group">
		<div class="w-5 aspect-square flex flex-col justify-between relative">
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-[2px] bg-golden-three">
			</div>
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-[2px] bg-golden-three">
			</div>
		</div>
	</nav>

	<section id="nav-content-M"
		class="fixed w-screen h-screen bg-black border border-golden-three translate-x-full z-[1000] overflow-x-hidden">

		<div
			class="flex flex-col w-full min-h-[80%] items-center justify-center gap-4 text-center text-white font-semibold tracking-wide text-4xl">
			<NuxtLink @click="onNavClick()" to="/"
				class="w-fit px-2 py-1 text-golden-three active:text-white linkzM uppercase home">
				{{ _.links[0] }}</NuxtLink>
			<NuxtLink @click="onNavClick('services')" to="/"
				class="w-fit px-2 py-1 text-golden-three active:text-white linkzM uppercase services">{{ _.links[1] }}
			</NuxtLink>
			<NuxtLink @click="onNavClick()" to="/about"
				class="w-fit px-2 py-1 text-golden-three active:text-white linkzM uppercase about">{{ _.links[2] }}
			</NuxtLink>
			<NuxtLink @click="onNavClick()" to="/athletes"
				class="w-fit px-2 py-1 text-golden-three active:text-white linkzM uppercase athletes">{{ _.links[3] }}
			</NuxtLink>
			<NuxtLink @click="onNavClick()" to="/gallery"
				class="w-fit px-2 py-1 text-golden-three active:text-white linkzM uppercase gallery">{{ _.links[4] }}
			</NuxtLink>
			<NuxtLink @click="onNavClick('news')" to="/"
				class="w-fit px-2 py-1 text-golden-three active:text-white linkzM uppercase gallery">{{ _.links[5] }}
			</NuxtLink>
		</div>

		<div
			class="flex flex-col w-full h-1/2 text-center text-white font-semibold tracking-wide text-4xl border-t border-golden-three">

			<div class="h-20 w-full border-b border-golden-three flex bg-golden-three bg-opacity-10">

				<a target="_blank" :href="data?.socials.facebook"
					class="cursor-pointer hover:text-black hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-x border-golden-three grid place-items-center">
					<svg class="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
						viewBox="0 0 24 24">
						<path fill="currentColor"
							d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2" />
					</svg>
				</a>

				<a target="_blank" :href="data?.socials.instagram"
					class="cursor-pointer hover:text-black hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full grid place-items-center">
					<svg class="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
						viewBox="0 0 24 24">
						<g fill="currentColor">
							<path fill-rule="evenodd"
								d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-3 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0"
								clip-rule="evenodd" />
							<path d="M18 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
							<path fill-rule="evenodd"
								d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
								clip-rule="evenodd" />
						</g>
					</svg>
				</a>

				<a target="_blank" :href="data?.socials.twitter"
					class="cursor-pointer hover:text-black hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-l border-golden-three grid place-items-center">
					<svg class="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
						viewBox="0 0 512 512">
						<path fill="currentColor"
							d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
					</svg>
				</a>

				<a target="_blank" :href="data?.socials.youtube"
					class="cursor-pointer hover:text-black hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-x border-golden-three grid place-items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="36.58" height="32" viewBox="0 0 16 14">
						<path fill="currentColor"
							d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5m2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48" />
					</svg>
				</a>
			</div>

			<div class="w-full h-full flex flex-col justify-center items-center gap-24">
				<span class="text-neutral-500 text-xl relative">
					<svg xmlns="http://www.w3.org/2000/svg"
						class="w-8 aspect-square absolute -left-10 top-1/2 -translate-y-1/2" viewBox="0 0 24 24">
						<path fill="currentColor"
							d="M11 11L3 6v10h10v2H1V2h20v7h-2V6zm0-2l8-5H3zm8 13q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11q1.05 0 1.775.725T20 13.5V18h-2v-4.5q0-.2-.15-.35T17.5 13q-.2 0-.35.15t-.15.35V18q0 .825.588 1.413T19 20q.825 0 1.413-.587T21 18v-4h2v4q0 1.65-1.175 2.825T19 22M3 6V4v12z" />
					</svg>
					{{ data?.email }}</span>

				<span class="text-neutral-500 text-xl relative">
					<svg xmlns="http://www.w3.org/2000/svg"
						class="w-8 aspect-square absolute -left-10 top-1/2 -translate-y-1/2" viewBox="0 0 24 24">
						<path fill="currentColor"
							d="M18.95 22q-3.125 0-6.187-1.35T7.2 16.8q-2.5-2.5-3.85-5.55T2 5.05V4h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T12.1 18l2.9-2.9l5 1.025V22zM5.025 10l1.65-1.65L6.25 6H4.025q.125 1.125.375 2.113T5.025 10m8.95 8.95q1 .425 2.013.675T18 19.95v-2.2l-2.35-.475zM12 4V2h10v2zm0 4V6h10v2zm0 4v-2h10v2z" />
					</svg>
					<div class="flex flex-col">
						<span v-for="num in data?.phone" class="">{{ num }}</span>
					</div>
					<!-- +491745969531<br />
					+4915216434754<br />
					+233537804885 -->
				</span>
			</div>

		</div>

	</section>
</template>

<script setup lang="ts">
import appStore from '~/stores/app';
import navStore from '~/stores/nav';
import info from '~/assets/data/nav.json'
const lang = useCookie('lang')
// lang data
const _ = ref()
watchEffect(() => {
	if (lang.value === 'fr') {
		_.value = info.fr
	} else if (lang.value === 'es') {
		_.value = info.es
	} else if (lang.value === 'de') {
		_.value = info.de
	} else {
		_.value = info.en
	}
})


const { $gsap: gsap } = useNuxtApp();
const { opened, data } = storeToRefs(appStore())
const { curr_nav } = storeToRefs(navStore())
const if_close_button = ref(true)

onMounted(() => {
	function removeClass() {
		document.querySelectorAll('.linkzM').forEach((link) => {
			link.classList.remove('selectedLinkM')
		})
	}
	function setClass(target: string) {
		document.querySelector(`.${target}`)!.classList.add('selectedLinkM')
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

const toggleNav = () => {
	const nav_content = document.getElementById('nav-content-M')!;
	if (!opened.value) {
		document.body.style.overflow = 'auto'
		if_close_button.value = true
		gsap.to(nav_content, {
			x: '100%',
			duration: 1,
			ease: 'power4.inOut',
		})
	} else {
		document.body.style.overflow = 'hidden'
		gsap.to(nav_content, {
			x: 0,
			duration: 1,
			ease: 'power4.inOut',
			onComplete: () => {
				if_close_button.value = false
			}
		})
	}
	appStore().$patch(() => opened.value = !opened.value)
}

function onNavClick(text?: string) {
	setTimeout(() => {
		// if (!opened.value) {
		// 	gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: 'power2.inOut' })
		// }
		toggleNav()
	}, 300)

	if (useNuxtApp()._route.path == '/') {
		if (text == 'services') {
			setTimeout(goToServices, 100)
		} else if (text == 'news') {
			setTimeout(goToNews, 100)
		} else return
	} else {
		if (text == 'services') {
			appStore().$patch({ serv_toggle: true })
		} else if (text == 'news') {
			appStore().$patch({ news_toggle: true })
		} else return
	}
}

function goToServices() {
	gsap.to(window, { duration: 1, scrollTo: '#serv', ease: 'power2.inOut' })
}

function goToNews() {
	gsap.to(window, { duration: 1, scrollTo: '#newz', ease: 'power2.inOut' })
}

</script>

<style scoped></style>