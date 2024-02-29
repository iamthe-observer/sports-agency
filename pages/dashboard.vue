<template>
	<div class="w-full h-screen p-2 relative overflow-y-auto flex flex-col items-center">

		<h1
			class="pb-2 text-3xl font-semibold text-golden-three uppercase relative w-full text-center flex items-center justify-between">
			<div class="flex items-center justify-between gap-2">
				<input ref="file" type="file"
					class="file-input file-input-bordered file-input-warning w-full max-w-xs h-8 rounded-none bg-black border-golden-three" />
				<span @click="async () => await sendFile()"
					class="border border-golden-three text-lg cursor-pointer hover:text-black hover:bg-golden-three px-2">Send</span>
			</div>

			<div class="flex gap-4">
				<span class="">Dashboard</span>
				<svg v-if="loading" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
						<animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite"
							type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12" />
						<animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0" />
					</circle>
					<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
						<animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s"
							repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12" />
						<animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite"
							values="1;1;0" />
					</circle>
					<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
						<animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s"
							repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12" />
						<animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite"
							values="1;1;0" />
					</circle>
				</svg>

				<svg v-else @click="SaveData()" xmlns="http://www.w3.org/2000/svg"
					class="w-7 aspect-square cursor-pointer hover:text-white" viewBox="0 0 512 512">
					<path d="M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z"
						fill="currentColor" />
					<path
						d="M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z"
						fill="currentColor" />
				</svg>
				<svg @click="logOut()" xmlns=" http://www.w3.org/2000/svg"
					class="w-8 aspect-square cursor-pointer hover:text-white" viewBox="0 0 24 24">
					<path fill="currentColor"
						d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-6v-6h-2v6zm2-2h2v-6h6v6h2V9.325l-5-3.8l-5 3.8zm3-7.975h4q0-.8-.6-1.313T12 8.2q-.8 0-1.4.513t-.6 1.312M9 18v-6h6v6v-6H9z" />
				</svg>
			</div>
		</h1>


		<div class="w-full pb-16">

			<div class="join join-vertical w-full rounded-none">
				<!-- Info -->
				<DashSection>
					<template #title>
						<span class="">Contact Information</span>
					</template>

					<template #content>
						<div class="grid grid-cols-2 gap-10 uppercase py-2 border-t border-neutral-900">
							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap">Email</label>
								<input v-model="info!.email" type="text" name="" id=""
									class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>

							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap">Phone #1</label>
								<input v-model="info!.phone[0]" type="text" name="" id=""
									class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>
							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap">Phone #2</label>
								<input v-model="info!.phone[1]" type="text" name="" id=""
									class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>
							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap">Phone #3</label>
								<input v-model="info!.phone[2]" type="text" name="" id=""
									class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>
						</div>

						<h2 class="pt-10 text-golden-three">Socials</h2>
						<div class="flex flex-row gap-10 uppercase py-2 border-t border-neutral-900">
							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap">Facebook</label>
								<input v-model="info!.socials.facebook" type="text" name="" id=""
									class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>

							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap">Twitter</label>
								<input v-model="info!.socials.twitter" type="text" name="" id=""
									class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>

							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap">Instagram</label>
								<input v-model="info!.socials.instagram" type="text" name="" id=""
									class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>

							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap">Youtube</label>
								<input v-model="info!.socials.youtube" type="text" name="" id=""
									class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>
						</div>
					</template>
				</DashSection>

				<!-- Home -->
				<DashSection>
					<template #title>
						<span class="">Home</span>
					</template>

					<template #content>
						<div class="flex flex-col">
							<div class="flex gap-5 w-full">
								<div class="flex flex-col gap-10 uppercase py-2 border-t border-neutral-900 w-full">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Video Src</label>
										<input v-model="home.vid_src" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Title</label>
										<input v-model="home.title" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Slogan</label>
										<input v-model="home.slogan" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Image Src</label>
										<input v-model="home.opening.src" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
								</div>

								<div class="flex flex-col gap-10 uppercase py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center">Introduction</h2>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Opening text</label>
										<textarea v-model="home.opening.opener" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]"></textarea>
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="">mission statement</label>
										<textarea v-model="home.opening.mission_statement" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]"></textarea>
									</div>

								</div>
							</div>


							<div class="flex gap-5">

								<!-- Services -->
								<div class="flex flex-col gap-5 uppercase py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center mt-10">Services</h2>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">LEFT IMG</label>

										<input v-model="home.services.left.src" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<p class="">add Services</p>

									<div class="flex flex-col gap-2">
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Title</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Content</label>
											<textarea type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Src</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
									</div>

									<span class="bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">Save</span>
									<span class="bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">View All</span>


								</div>

								<!-- News -->
								<div class="flex flex-col gap-5 uppercase py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center mt-10">News</h2>
									<p class="">add News</p>

									<div class="flex flex-col gap-2">
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">headline</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Content</label>
											<textarea type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Date</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Src</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
									</div>

									<span class="bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">Save</span>
									<span class="bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">View All</span>
								</div>

							</div>

						</div>
					</template>
				</DashSection>

				<!-- About -->
				<DashSection>
					<template #title>
						<span class="">About</span>
					</template>

					<template #content>
						<div class="flex flex-col">
							<div class="flex gap-5 w-full">
								<div class="flex flex-col gap-10 uppercase py-2 border-t border-neutral-900 w-full">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Page Src</label>
										<input v-model="about._src" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Title</label>
										<input v-model="about.title" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">About Us</label>
										<input v-model="about.about_txt" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Image Src</label>
										<input v-model="about.img_src" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
								</div>

								<div class="flex flex-col gap-10 uppercase py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center">More Info</h2>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Mission</label>
										<textarea v-model="about.mission" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]"></textarea>
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="">Vision</label>
										<textarea v-model="about.vision" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]"></textarea>
									</div>

								</div>
							</div>

							<!-- Stats -->
							<div class="flex flex-col gap-5 uppercase py-2 border-t border-neutral-900 w-full">
								<h2 class="font-normal w-full text-center mt-10">Stats</h2>
								<!-- <p class="">add Services</p> -->

								<div class="flex flex-row gap-2">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Athletes</label>
										<input v-model="about.stats[0]" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Affiliates</label>
										<input v-model="about.stats[1]" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Members</label>
										<input v-model="about.stats[2]" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Since</label>
										<input v-model="about.stats[3]" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
								</div>
							</div>

							<!-- Team -->
							<div class="flex flex-col gap-5 uppercase py-2 border-t border-neutral-900 w-full lg:w-3/5 lg:mx-auto">
								<h2 class="font-normal w-full text-center mt-10">Team</h2>
								<p class="">add Team Members</p>

								<div class="flex flex-col gap-2">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Name</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Role</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Src</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
								</div>

								<span class="bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">Save</span>
								<span class="bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">View All</span>
							</div>


						</div>
					</template>
				</DashSection>

				<!-- Athletes -->
				<DashSection>
					<template #title>
						<span class="">Our Athletes</span>
					</template>

					<template #content>
						<div class="flex gap-10">
							<div class="flex flex-col gap-10 uppercase py-2 border-t border-neutral-900 w-full">
								<div class="flex gap-2 items-center w-full">
									<label class="whitespace-nowrap">Page Src</label>
									<input v-model="athletes._src" type="text" name="" id=""
										class="w-full bg-neutral-900 text-white p-2 tracking-wide">
								</div>

								<div class="flex gap-2 items-center w-full">
									<label class="whitespace-nowrap">Title</label>
									<input v-model="athletes.title" type="text" name="" id=""
										class="w-full bg-neutral-900 text-white p-2 tracking-wide">
								</div>

								<div class="flex gap-2 items-center w-full">
									<label class="whitespace-nowrap">text</label>
									<input v-model="athletes.athl_txt" type="text" name="" id=""
										class="w-full bg-neutral-900 text-white p-2 tracking-wide">
								</div>
							</div>

							<!-- Team -->
							<div class="flex flex-col gap-5 uppercase py-2 border-t border-neutral-900 w-full lg:w-3/5 lg:mx-auto">
								<p class="">add Athletes</p>

								<div class="flex flex-col gap-2">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Name</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Src</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
								</div>

								<span class="bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">Save</span>
								<span class="bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">View All</span>
							</div>

						</div>
					</template>
				</DashSection>

			</div>
		</div>

		<!-- messages -->
		<div class="w-full mb-10">
			<h1 class="w-full mb-4 text-white font-bold text-4xl flex items-center">Messages <span
					class="ml-6 text-golden-three">[{{
						messages.length
					}}]</span></h1>

			<div class="overflow-x-auto outline outline-1 outline-golden-three">
				<table class="table">
					<!-- head -->
					<thead class="text-white bg-golden-three bg-opacity-10 font-normal">
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Date</th>
							<th>Message</th>
						</tr>
					</thead>
					<tbody>

						<tr v-for="(msg, i) in messages" @click="curr_msg = msg" :key="i" :data-data="msg"
							onclick="my_modal_2.showModal()" class="hover hover:text-white cursor-pointer itemx relative">
							<th>{{ i + 1 }}</th>
							<td class="whitespace-nowrap">{{ msg.name }}</td>
							<td>{{ msg.email }}</td>
							<td>{{ formatDate(new Date(msg.created_at)) }}</td>
							<td class="truncate whitespace-nowrap max-w-[200px]">{{ msg.msg }}</td>
						</tr>
					</tbody>
				</table>

				<dialog id="my_modal_2" class="modal cursor-default">
					<div class="modal-box bg-black rounded-none border text-white border-golden-three">
						<h3 class="font-semibold text-lg flex justify-between items-center">
							<span class="">{{ curr_msg!.name ? curr_msg!.name : 'No Name' }}</span>
							<span class="">{{ curr_msg!.created_at ? formatDate(new Date(curr_msg!.created_at)) : 'No Date' }}</span>
						</h3>
						<h4 class="font-semibold w-full border-b border-neutral-900 pb-2">
							{{ curr_msg!.email ? curr_msg!.email : 'No Email' }}
						</h4>
						<p class="py-4">{{ curr_msg!.msg ? curr_msg!.msg : 'No Message' }}</p>
					</div>
					<form method="dialog" class="modal-backdrop">
						<button>close</button>
					</form>
				</dialog>

			</div>

		</div>

	</div>
</template>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import appStore from '~/stores/app';
import type { Data } from '~/interfaces/int'

const supabase = createClient('https://dblmoqabperngqprlrjw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibG1vcWFicGVybmdxcHJscmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMTA3NzAsImV4cCI6MjAyNDU4Njc3MH0.YdYbtgmpXMxTfzpJkN6353d781hQ-e6pId8OdWe8Kjo')

const { $gsap: gsap } = useNuxtApp()
const { data } = storeToRefs(appStore())
const info = ref<Data>()
const loading = ref(false)
const home = computed(() => info.value!.routes.home)
const about = computed(() => info.value!.routes.about)
const athletes = computed(() => info.value!.routes.athletes)
const file = ref<HTMLInputElement>()
const messages = ref<{
	name: string,
	email: string,
	msg: string,
	created_at: string,
}[]>([])
const curr_msg = ref<{
	name: string,
	email: string,
	msg: string,
	created_at: string,
}>({
	name: '',
	email: '',
	msg: '',
	created_at: '',
})

async function getFileFromInput(inputElement: HTMLInputElement): Promise<File | null> {
	if (inputElement.files && inputElement.files.length > 0) {
		return inputElement.files[0];
	}
	return null;
}



async function sendFile(file: File = document.querySelector<HTMLInputElement>('input[type="file"]')!.files![0]) {
	// let item = document.querySelector<HTMLInputElement>('input[type="file"]')!.files![0]
	const file_name = file.name
	try {
		const { data, error } = await supabase.storage.from('images').upload(file_name, file)
		if (error) throw error
		logger(data)
	} catch (error) {
		console.log(error)
	}
}


function formatDate(date: Date) {
	return date.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});
}

async function SaveData() {
	loading.value = true
	try {
		logger(info.value!.address)
		let { data, error } = await supabase.from('info').insert([{ data: info.value }]).select()
		if (error) throw error
		loading.value = false
		logger(data)
	} catch (error) {
		console.log(error)
		loading.value = false
	}
}

function logger(d: any) {
	console.log(d)
}

onBeforeMount(() => {
	info.value = data.value
})

onMounted(async () => {
	try {
		let currentSession = await supabase.auth.getSession();
		if (currentSession.data.session == null) {
			throw currentSession.error;
		}

		let { data: msg, error: error2 } = await supabase
			.from('msg')
			.select('*')
			.order('created_at', { ascending: false }) // Descending order
		console.log(msg)
		if (error2) throw error2
		messages.value = msg!
	} catch (error) {
		alert(`Bad Login: ${error}`);
		useNuxtApp().$router.push('/')
	}
})

async function logOut() {
	try {
		let { error } = await supabase.auth.signOut()
		if (error) throw error
		useNuxtApp().$router.push('/')
		setTimeout(() => {
			location.reload()
		}, 500)
	} catch (err) {
		alert(`Bad Logout: ${err}`);
	}
}

definePageMeta({
	layout: 'custom'
})
</script>

<style scoped>
input:focus,
textarea:focus {
	outline: none;
}
</style>