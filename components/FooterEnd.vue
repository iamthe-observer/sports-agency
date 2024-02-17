<template>
	<div class="border-golden-three w-full hfit flex flex-col border-l grad border-b relative">
		<div class="w-full h-[400px] border-t border-golden-three flex flex-col">
			<div class="w-full h-fit flex items-center justify-center">

				<a class="text-white border-x border-b border-golden-three px-10 py-6 text-center text-3xl group hover:bg-golden-three transition-all duration-150 ease-in-out cursor-pointer"
					@click="toScreenTop">
					<span
						class="text-golden-three font-semibold tracking-wider group-hover:text-black transition-all duration-150 ease-in-out">EagleEye</span>
					<br />
					<span class="tracking-wider drop-shadow-md">Sports Consults</span>
				</a>
			</div>
			<div class="w-full h-full text-white flex items-center justify-center gap-14 text-[3rem]">
				<NuxtLink v-motion-fade-visible to="/"
					class="outline outline-2 outline-transparent hover:outline-golden-three px-4 transition-all duration-150 ease-in-out cursor-pointer">
					HOME</NuxtLink>
				<NuxtLink v-motion-fade-visible to="/about"
					class="outline outline-2 outline-transparent hover:outline-golden-three px-4 transition-all duration-150 ease-in-out cursor-pointer">
					ABOUT US</NuxtLink>
				<NuxtLink v-motion-fade-visible to="/athletes"
					class="outline outline-2 outline-transparent hover:outline-golden-three px-4 transition-all duration-150 ease-in-out cursor-pointer">
					ATHLETES</NuxtLink>
			</div>
		</div>

		<div id="contact"
			class="h-[100px] w-full text-white flex flex-col items-center overflow-hidden px-8 border-golden-three border-t hover:bg-golden-three hover:bg-opacity-10">
			<h1 @click="toggleContact"
				class="text-3xl font-normal w-full min-h-[100px] grid place-items-center cursor-pointer relative text-center">
				Contact Us
				<div class="iconexpand absolute top-1/2 -translate-y-1/2 right-0 w-10 aspect-square">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path fill="currentColor"
							d="m19.25 21l-1.4-1.4l1.575-1.6H15.25v-2h4.175l-1.575-1.6l1.4-1.4l4 4zM10 15q1.4 0 2.525-.687T14.3 12.5q-.875-.725-1.975-1.112T10 11q-1.225 0-2.325.388T5.7 12.5q.65 1.125 1.775 1.813T10 15m0-5q.825 0 1.413-.587T12 8q0-.825-.587-1.412T10 6q-.825 0-1.412.588T8 8q0 .825.588 1.413T10 10m0 12q-4.025-3.425-6.012-6.362T2 10.2q0-3.75 2.413-5.975T10 2q3.175 0 5.588 2.225T18 10.2q0 .225-.012.463t-.063.487H15.9q.05-.25.075-.488T16 10.2q0-2.725-1.737-4.462T10 4Q7.475 4 5.738 5.738T4 10.2q0 1.775 1.475 4.063T10 19.35q.575-.5 1.063-1t.937-.975l.225.225l.488.488q.262.262.475.487l.212.225q-.725.775-1.575 1.575T10 22" />
					</svg>
				</div>
			</h1>

			<div class="w-full flex items-center justify-center">
				<div class="w-full h-full flex flex-col gap-5">
					<iframe class="w-full h-full outline-2 outline-golden-three"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.5325469549957!2d-0.0996213!3d5.6357886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8471a2f4a3dd%3A0x2809a7daebd9bf40!2s53L%20Beech%20St%2C%20Tema!5e0!3m2!1sen!2sgh!4v1708093866899!5m2!1sen!2sgh"
						allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
					</iframe>

					<div class="w-full flex gap-10">
						<p class="text-xs uppercase font-Outfit">
							<span class="text-golden-three italic font-Outfit font-bold">Ghana, Accra:</span> <br />
							L3 COASTAL ESTATES <br />
							SK DTD 4040<br />
							SPINTEX ROAD, ACCRA
						</p>
						<p class="text-xs uppercase font-Outfit">
							<span class="text-golden-three italic font-Outfit font-bold">Germany, Bremen:</span> <br />
							Appartement Nr. 9003<br />
							LUISENTAL 29F<br />
							28359<br />
							BREMEN<br />
							GERMANY
						</p>
					</div>
				</div>

				<div class="w-full h-full">
					<div class="px-10 h-full text-white flex flex-col gap-2 justify-center items-center">
						<p class="w-full text-xl">Send Us A Message</p>

						<div class="w-full h-10 bg-neutral-900 border border-golden-three flex gap-[2px] p-[2px]">
							<label for="Name" class="w-20 h-full flex justify-center items-center px-2 py-2 bg-golden-three"><span
									class="drop-shadow-xl font-semibold tracking-wider">Name</span></label>
							<input id="Name" type="text" class="w-full bg-transparent pl-5 focus:outline-none">
						</div>

						<div class="w-full h-10 bg-neutral-900 border border-golden-three flex gap-[2px] p-[2px]">
							<label for="Email" class="w-20 h-full flex justify-center items-center px-2 py-2 bg-golden-three"><span
									class="drop-shadow-xl font-semibold tracking-wider">Email</span></label>
							<input id="Email" type="text" class="w-full bg-transparent pl-5 focus:outline-none">
						</div>

						<div
							class="mt-4 w-full min-h-[40px] bg-neutral-900 border border-golden-three gap-[2px] p-[2px] flex flex-col">
							<label for="Message" class="text-golden-three text-right w-full px-2">Message</label>
							<textarea id="Message" class="w-full bg-transparent pl-5 focus:outline-none" />
						</div>

						<BoxContainer class="mt-2 text-xl tracking-wide">Send Message</BoxContainer>

					</div>

				</div>

			</div>

		</div>

		<div class="h-[100px] w-full border-t border-golden-three flex text-white">
			<div class="w-full h-full grid place-items-center">Email</div>
			<div class="w-[900px] flex">
				<a href="https://www.facebook.com/profile.php?id=61556099897439&mibextid=PtKPJ9"
					class="cursor-pointer hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-x border-golden-three grid place-items-center">
					<svg class="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<path fill="currentColor"
							d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2" />
					</svg>
				</a>

				<a href="https://www.instagram.com/eagleeye_sports_consults?igsh=cWl0aTM0bGJicXZt&utm_source=qr"
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

				<a href="https://x.com/eagleeyespc/status/1758181248097292575?s=46&t=TWkb0d7GRL-W9BrNlTL1Vw"
					class="cursor-pointer hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-l border-golden-three grid place-items-center">
					<svg class="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
						<path fill="currentColor"
							d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
					</svg>
				</a>

				<a href="https://youtube.com/@EagleEyeSportsConsults?si=pTw90oZicIL3Mow_"
					class="cursor-pointer hover:bg-golden-three transition-all duration-150 ease-in-out w-full h-full border-x border-golden-three grid place-items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="36.58" height="32" viewBox="0 0 16 14">
						<path fill="currentColor"
							d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5m2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48" />
					</svg>
				</a>

			</div>

			<div class="w-full h-full grid place-items-center">Phone Number</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const if_contact = ref(false)
const { $gsap: gsap } = useNuxtApp();

const toggleContact = () => {
	if_contact.value = !if_contact.value
	if (if_contact.value) {
		gsap.to('#contact', {
			height: '450px',
			duration: 0.5,
			ease: 'power4.out'
		})
	} else {
		gsap.to('#contact', {
			height: '100px',
			duration: 0.5,
			ease: 'power4.out'
		})
		// tl.reverse()
	}
}

function toScreenTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}


</script>

<style scoped>
.grad {
	background: linear-gradient(to bottom, #E5B80B11, transparent);
}
</style>