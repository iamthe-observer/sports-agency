<template>
	<div class="w-full h-screen p-2 relative overflow-y-auto flex flex-col items-center">
		<!-- alerts -->
		<Teleport to="body">
			<div role="alert" id="success"
				class="alert alert-success rounded-none border-2 border-success fixed bottom-0 mb-4 w-[96%] translate-y-20 right-1/2 translate-x-1/2 z-[1000]">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					class="stroke-current shrink-0 w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<span>{{ msg }}</span>
			</div>
			<div role="alert" id="error"
				class="alert alert-error rounded-none border-2 border-error fixed bottom-0 mb-4 w-[96%] translate-y-20 right-1/2 translate-x-1/2 z-[1000]">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					class="stroke-current shrink-0 w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<span>{{ msg }}</span>
			</div>
		</Teleport>

		<h1
			class="pb-2 text-3xl font-semibold text-golden-three uppercase relative w-full text-center flex items-center justify-between">
			<div class="flex items-center justify-between gap-2">
				<div class="tooltip tooltip-right tooltip-error" :data-tip="`GALLERY [Media: ${file_names?.length}]`">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<path fill="currentColor"
							d="M1 19V5h14v14zm16-8V5h6v6zm2-2h2V7h-2zM3 17h10V7H3zm1-2h8l-2.625-3.5L7.5 14l-1.375-1.825zm13 4v-6h6v6zm2-2h2v-2h-2zM3 17V7zm16-8V7zm0 8v-2z" />
					</svg>
				</div>
				<input ref="file" type="file"
					class="file-input file-input-bordered file-input-warning w-full max-w-xs h-8 rounded-none bg-black border-golden-three" />
				<span @click="async () => await sendFile()"
					class="border border-golden-three text-lg cursor-pointer hover:text-black hover:bg-golden-three px-2 grid place-items-center">
					<span v-if="!img_sending">Send</span>
					<svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
							<animateTransform attributeName="transform" calcMode="discrete" dur="2.4s"
								repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12" />
							<animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite"
								values="1;1;0" />
						</circle>
						<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
							<animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s"
								repeatCount="indefinite" type="rotate"
								values="30 12 12;120 12 12;210 12 12;300 12 12" />
							<animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1"
								repeatCount="indefinite" values="1;1;0" />
						</circle>
						<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
							<animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s"
								repeatCount="indefinite" type="rotate"
								values="60 12 12;150 12 12;240 12 12;330 12 12" />
							<animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1"
								repeatCount="indefinite" values="1;1;0" />
						</circle>
					</svg>
				</span>
			</div>

			<div class="flex gap-4 items-center">
				<Lang />
				<span class="">Dashboard</span>
				<svg v-if="loading" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
						<animateTransform attributeName="transform" calcMode="discrete" dur="2.4s"
							repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12" />
						<animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite"
							values="1;1;0" />
					</circle>
					<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
						<animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s"
							repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12" />
						<animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1"
							repeatCount="indefinite" values="1;1;0" />
					</circle>
					<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0">
						<animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s"
							repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12" />
						<animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1"
							repeatCount="indefinite" values="1;1;0" />
					</circle>
				</svg>

				<svg v-else @click="SaveData()" xmlns="http://www.w3.org/2000/svg"
					class="w-7 aspect-square cursor-pointer hover:text-white hover:animate-pulse" viewBox="0 0 512 512">
					<path d="M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z"
						fill="currentColor" />
					<path
						d="M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z"
						fill="currentColor" />
				</svg>
				<svg @click="logOut()" xmlns=" http://www.w3.org/2000/svg"
					class="w-8 aspect-square cursor-pointer hover:text-white hover:animate-bounce" viewBox="0 0 24 24">
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
						<div class="grid grid-cols-2 gap-10  py-2 border-t border-neutral-900">
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
						<div class="flex flex-row gap-10  py-2 border-t border-neutral-900">
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
								<div class="flex flex-col gap-10 py-2 border-t border-neutral-900 w-full">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Video Src</label>
										<DropDown v-model="info!.routes.home.vid_src" class="w-full"
											:names="file_names!" />
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
										<DropDown v-model="info!.routes.home.opening.src" class="w-full"
											:names="file_names!" />
									</div>
								</div>

								<div class="flex flex-col gap-10  py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center">Introduction</h2>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Opening text</label>
										<textarea v-model="home.opening.opener" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]"></textarea>
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="">Mission Statement</label>
										<textarea v-model="home.opening.mission_statement" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]"></textarea>
									</div>

								</div>
							</div>


							<div class="flex gap-5">

								<!-- Services -->
								<div class="flex flex-col gap-5 py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center mt-10">Services [{{
										home.services.right.serv.length }}]</h2>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Left Image</label>
										<DropDown v-model="info!.routes.home.services.left.src" class="w-full"
											:names="file_names!" />
									</div>

									<p class="text-neutral-600">Add Services</p>

									<div class="flex flex-col gap-2">
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Src</label>
											<DropDown v-model="new_service.src" class="w-full" :names="file_names!" />
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Title</label>
											<input v-model="new_service.title" type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Content</label>
											<textarea v-model="new_service.content" type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
										</div>
									</div>

									<span @click="addServices()"
										class="font-semibold hover:bg-opacity-70 cursor-pointer bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">Add</span>
									<span onclick="servq.showModal()"
										class="font-semibold hover:bg-opacity-70 cursor-pointer bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">View
										All</span>

									<Teleport to="body">
										<dialog id="servq" class="modal">
											<div
												class="modal-box w-3/5 max-w-5xl border border-golden-three bg-black rounded-none">

												<div v-if="editMode" class="flex flex-col gap-3 relative">
													<div class="fixed animate-pulse top-2 right-2 w-8 aspect-square z-[1000] grid place-items-center text-white"
														@click="editMode = false">
														<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
															viewBox="0 0 24 24">
															<path fill="currentColor"
																d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
														</svg>
													</div>

													<DropDown
														v-model="info!.routes.home.services.right.serv[serv_idx!].src"
														class="w-full" :names="file_names!" :title="'Src'" />
													<label
														class="input text-neutral-600 rounded-none border border-neutral-800 bg-neutral-900 flex items-center gap-2">
														Headline
														<input
															v-model="info!.routes.home.services.right.serv[serv_idx!].title"
															type="text" class="grow text-white" />
													</label>
													<textarea
														v-model="info!.routes.home.services.right.serv[serv_idx!].content"
														class="textarea rounded-none border border-neutral-800 bg-neutral-900 text-white"
														placeholder="Content"></textarea>
												</div>

												<MyOrderList v-else :item="new_service"
													:items="info?.routes.home.services.right.serv"
													:head="'Total Services'">
													<template #item="{ item, idx, moveUp, moveDown }">


														<li @click="selected_service = item"
															class='flex w-full mb-1 bg-neutral-900 items-center justify-between'>
															<!-- remove -->
															<!-- content -->
															<div class="pl-2 flex items-center gap-2">
																<div @dblclick="removeService(idx)"
																	class="group cursor-pointer">
																	<svg xmlns="http://www.w3.org/2000/svg"
																		class="w-7 h-7 group-hover:text-red-500"
																		viewBox="0 0 24 24">
																		<path fill="currentColor"
																			d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z" />
																	</svg>
																</div>
																<div class="w-[100px] h-[70px]">
																	<img :src="`${$link}${item.src}`"
																		alt="Service image"
																		class="w-full h-full object-cover" />
																</div>
																<h3 class="cursor-pointer truncate w-[10rem] h-full lg:w-[30rem]"
																	@click="serv_idx = idx, editMode = true">
																	{{ item.title }}</h3>
															</div>
															<!-- actions -->
															<div class="w-14 flex items-center justify-center">
																<button class="group" v-if="idx > 0"
																	@click="moveUp(idx)">
																	<svg xmlns="http://www.w3.org/2000/svg"
																		class="w-6 h-6 group-hover:text-golden-three rotate-90"
																		viewBox="0 0 24 24">
																		<path fill="currentColor"
																			d="M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12" />
																	</svg>
																</button>
																<button class="group"
																	v-if="idx < info!.routes.home.services.right.serv!.length - 1"
																	@click="moveDown(idx)">
																	<svg xmlns="http://www.w3.org/2000/svg"
																		class="w-6 h-6 group-hover:text-golden-three -rotate-90"
																		viewBox="0 0 24 24">
																		<path fill="currentColor"
																			d="M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12" />
																	</svg>
																</button>
															</div>
														</li>
													</template>
												</MyOrderList>
											</div>
											<form method="dialog"
												class="modal-backdrop backdrop-blur-md transition-all duration-500 ease-in-out"
												@click="editMode = false">
												<button>close</button>
											</form>
										</dialog>
									</Teleport>



								</div>

								<!-- News -->
								<div class="flex flex-col gap-5  py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center mt-10">News [{{ home.news.length }}]</h2>
									<p class="text-neutral-600">Add News</p>

									<div class="flex flex-col gap-2">
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Src</label>
											<DropDown v-model="new_news.src" class="w-full" :names="file_names!" />
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Headline</label>
											<input v-model="new_news.headline" type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap">Content</label>
											<textarea v-model="new_news.content" type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
										</div>
										<div class="flex gap-2 items-center w-full px-10">
											<label class="whitespace-nowrap">Date</label>
											<!-- <input v-model="new_news.date" type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide"> -->
											<VDatePicker expanded borderless isDark :color="'yellow'" transparent
												v-model="new_news.date" mode="date" class="my-calendar" />
										</div>
									</div>

									<span @click="addNews()"
										class="font-semibold hover:bg-opacity-70 cursor-pointer bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">Add</span>
									<span onclick="newsq.showModal()"
										class="font-semibold hover:bg-opacity-70 cursor-pointer bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">View
										All</span>

									<Teleport to="body">
										<dialog id="newsq" class="modal">
											<div
												class="modal-box w-3/5 max-w-5xl border border-golden-three bg-black rounded-none">

												<div v-if="editMode" class="relative flex flex-col gap-3">
													<div class="fixed animate-pulse top-2 right-2 w-8 aspect-square z-[1000] grid place-items-center text-white"
														@click="setSelected">
														<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
															viewBox="0 0 24 24">
															<path fill="currentColor"
																d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
														</svg>
													</div>

													<DropDown v-model="selected_news.src" class="w-full"
														:names="file_names!" :title="'Src'" />
													<label
														class="input text-neutral-600 rounded-none border border-neutral-800 bg-neutral-900 flex items-center gap-2">
														Headline
														<input v-model="selected_news.headline" type="text"
															class="grow text-white" />
													</label>
													<textarea v-model="selected_news.content"
														class="textarea rounded-none border border-neutral-800 bg-neutral-900 text-white"
														placeholder="Content"></textarea>
													<label
														class="input text-neutral-600 rounded-none border border-neutral-800 bg-neutral-900 flex items-center gap-2">
														Date
														<input v-model="selected_news.date" type="text"
															class="grow text-white" />
													</label>
												</div>

												<MyOrderList v-else :item="new_news"
													:items="sortByDateDesc(info!.routes.home.news)"
													:head="'Total News'">

													<template #item="{ item, idx }">
														<li @click="selected_news = item"
															class='flex w-full mb-1 bg-neutral-900 items-center justify-between'>
															<!-- content -->
															<div class="pl-2 flex items-center gap-2">
																<!-- remove -->
																<div @dblclick="removeNews(idx, item.headline)"
																	class="group cursor-pointer">
																	<svg xmlns="http://www.w3.org/2000/svg"
																		class="w-7 h-7 group-hover:text-red-500"
																		viewBox="0 0 24 24">
																		<path fill="currentColor"
																			d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z" />
																	</svg>
																</div>
																<div class="w-[100px] h-[70px]">
																	<img :src="`${$link}${item.src}`"
																		alt="Service image"
																		class="w-full h-full object-cover" />
																</div>
																<h3 @click="news_idx = idx, editMode = true"
																	class="cursor-pointer truncate w-[10rem] h-full lg:w-[30rem]">
																	{{
																		item.headline }}
																</h3>
															</div>
															<span class="pr-8 text-neutral-700 text-sm">{{ item.date
															}}</span>
														</li>
													</template>
												</MyOrderList>
											</div>
											<form method="dialog"
												class="modal-backdrop backdrop-blur-md transition-all duration-500 ease-in-out"
												@click="setSelected">
												<button>close</button>
											</form>
										</dialog>
									</Teleport>
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
						<div class="flex flex-col pb-10">
							<div class="flex gap-5 w-full">
								<div class="flex flex-col gap-10  py-2 border-t border-neutral-900 w-full">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Page Src</label>
										<DropDown v-model="info!.routes.about._src" class="w-full"
											:names="file_names!" />
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
										<DropDown v-model="info!.routes.about.img_src" class="w-full"
											:names="file_names!" />
									</div>
								</div>

								<div class="flex flex-col gap-10  py-2 border-t border-neutral-900 w-full">
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
							<div class="flex flex-col gap-5  py-2 border-t border-neutral-900 w-full">
								<h2 class="font-normal w-full text-center mt-10">Stats</h2>

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
							<div class="flex flex-col gap-5 py-2 border-t border-neutral-900 w-full">
								<h2 class="font-normal w-full text-center mt-10">Team [{{ about.team_src!.length }}]
								</h2>
								<p class="text-neutral-600">Add Team Members</p>

								<div class="flex flex-col gap-2">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Src</label>
										<DropDown v-model="new_team.src" class="w-full" :names="file_names!" />
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Title</label>
										<input v-model="new_team.name" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Content</label>
										<textarea v-model="new_team.pos" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
									</div>
								</div>

								<span @click="addTeamMember()"
									class="font-semibold hover:bg-opacity-70 cursor-pointer bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">Add</span>
								<span onclick="teamq.showModal()"
									class="font-semibold hover:bg-opacity-70 cursor-pointer bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">View
									All</span>

								<Teleport to="body">
									<dialog id="teamq" class="modal">
										<div
											class="modal-box w-3/5 max-w-5xl border border-golden-three bg-black rounded-none relative">

											<div v-if="editMode" class="flex flex-col gap-3">
												<div class="fixed animate-pulse top-2 right-2 w-8 aspect-square z-[1000] grid place-items-center text-white"
													@click="editMode = false">
													<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
														viewBox="0 0 24 24">
														<path fill="currentColor"
															d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
													</svg>
												</div>

												<DropDown v-model="info!.routes.about.team_src![team_idx!].src"
													class="w-full" :names="file_names!" :title="'Src'" />
												<label
													class="input text-neutral-600 rounded-none border border-neutral-800 bg-neutral-900 flex items-center gap-2">
													Headline
													<input v-model="info!.routes.about.team_src![team_idx!].name"
														type="text" class="grow text-white" />
												</label>
												<textarea v-model="info!.routes.about.team_src![team_idx!].pos"
													class="textarea rounded-none border border-neutral-800 bg-neutral-900 text-white"
													placeholder="Content"></textarea>
											</div>

											<MyOrderList v-else :item="new_team" :items="info?.routes.about.team_src!"
												:head="'Total Team Members'">
												<template #item="{ item, idx, moveUp, moveDown }">
													<li @click="selected_team = item"
														class='flex w-full mb-1 bg-neutral-900 items-center justify-between'>
														<!-- remove -->
														<!-- content -->
														<div class="pl-2 flex items-center gap-2">
															<div @dblclick="removeTeam(idx)"
																class="group cursor-pointer">
																<svg xmlns="http://www.w3.org/2000/svg"
																	class="w-7 h-7 group-hover:text-red-500"
																	viewBox="0 0 24 24">
																	<path fill="currentColor"
																		d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z" />
																</svg>
															</div>
															<div class="w-[100px] h-[70px]">
																<img :src="`${$link}${item.src}`" alt="Service image"
																	class="w-full h-full object-cover" />
															</div>
															<h3 class="cursor-pointer truncate w-[10rem] h-full lg:w-[30rem]"
																@click="team_idx = idx, editMode = true">{{
																	item.name }}</h3>
														</div>
														<!-- actions -->
														<div class="w-14 flex items-center justify-center">
															<button class="group" v-if="idx > 0" @click="moveUp(idx)">
																<svg xmlns="http://www.w3.org/2000/svg"
																	class="w-6 h-6 group-hover:text-golden-three rotate-90"
																	viewBox="0 0 24 24">
																	<path fill="currentColor"
																		d="M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12" />
																</svg>
															</button>
															<button class="group"
																v-if="idx < info!.routes.about.team_src!.length - 1"
																@click="moveDown(idx)">
																<svg xmlns="http://www.w3.org/2000/svg"
																	class="w-6 h-6 group-hover:text-golden-three -rotate-90"
																	viewBox="0 0 24 24">
																	<path fill="currentColor"
																		d="M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12" />
																</svg>
															</button>
														</div>
													</li>
												</template>
											</MyOrderList>
										</div>
										<form method="dialog"
											class="modal-backdrop backdrop-blur-md transition-all duration-500 ease-in-out"
											@click="editMode = false">
											<button>close</button>
										</form>
									</dialog>
								</Teleport>

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
						<div class="flex gap-10 pb-10">
							<div class="flex flex-col gap-10  py-2 border-t border-neutral-900 w-full">
								<div class="flex gap-2 items-center w-full">
									<label class="whitespace-nowrap">Page Src</label>
									<DropDown v-model="info!.routes.athletes._src" class="w-full"
										:names="file_names!" />
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

							<!-- Players -->
							<div class="flex flex-col gap-5 py-2 border-t border-neutral-900 w-full">
								<h2 class="font-normal w-full text-center mt-10">Players [{{ athletes.athl_src!.length
								}}]</h2>
								<p class="text-neutral-600">Add Players</p>

								<div class="flex flex-col gap-2">
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Src</label>
										<DropDown v-model="new_player.src" class="w-full" :names="file_names!" />
									</div>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap">Name</label>
										<input v-model="new_player.name" type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
								</div>

								<span @click="addPlayer()"
									class="font-semibold hover:bg-opacity-70 cursor-pointer bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">Add</span>
								<span onclick="plyrq.showModal()"
									class="font-semibold hover:bg-opacity-70 cursor-pointer bg-golden-three text-black text-center w-[10rem] px-2 mx-auto">View
									All</span>

								<Teleport to="body">
									<dialog id="plyrq" class="modal">
										<div
											class="modal-box w-3/5 max-w-5xl border border-golden-three bg-black rounded-none">
											<div v-if="editMode" class="relative flex flex-col gap-3">
												<div class="fixed animate-pulse top-2 right-2 w-8 aspect-square z-[1000] grid place-items-center text-white"
													@click="editMode = false">
													<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
														viewBox="0 0 24 24">
														<path fill="currentColor"
															d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
													</svg>
												</div>

												<DropDown v-model="info!.routes.athletes.athl_src![player_idx!].src"
													class="w-full" :names="file_names!" :title="'Src'" />
												<label
													class="input text-neutral-600 rounded-none border border-neutral-800 bg-neutral-900 flex items-center gap-2">
													Name
													<input v-model="info!.routes.athletes.athl_src![player_idx!].name"
														type="text" class="grow text-white" />
												</label>
											</div>

											<MyOrderList v-else :item="new_player"
												:items="info?.routes.athletes.athl_src!" :head="'Total Players'">
												<template #item="{ item, idx, moveUp, moveDown }">

													<li @click="selected_player = item"
														class='flex w-full mb-1 bg-neutral-900 items-center justify-between'>
														<!-- remove -->
														<!-- content -->
														<div class="pl-2 flex items-center gap-2">
															<div @dblclick="removePlayer(idx)"
																class="group cursor-pointer">
																<svg xmlns="http://www.w3.org/2000/svg"
																	class="w-7 h-7 group-hover:text-red-500"
																	viewBox="0 0 24 24">
																	<path fill="currentColor"
																		d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z" />
																</svg>
															</div>
															<div class="w-[100px] h-[70px]">
																<img :src="`${$link}${item.src}`" alt="Service image"
																	class="w-full h-full object-cover" />
															</div>
															<h3 class="cursor-pointer truncate w-[10rem] h-full lg:w-[30rem]"
																@click="player_idx = idx, editMode = true">{{
																	item.name }}</h3>
														</div>
														<!-- actions -->
														<div class="w-14 flex items-center justify-center">
															<button class="group" v-if="idx > 0" @click="moveUp(idx)">
																<svg xmlns="http://www.w3.org/2000/svg"
																	class="w-6 h-6 group-hover:text-golden-three rotate-90"
																	viewBox="0 0 24 24">
																	<path fill="currentColor"
																		d="M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12" />
																</svg>
															</button>
															<button class="group"
																v-if="idx < info!.routes.athletes.athl_src!.length - 1"
																@click="moveDown(idx)">
																<svg xmlns="http://www.w3.org/2000/svg"
																	class="w-6 h-6 group-hover:text-golden-three -rotate-90"
																	viewBox="0 0 24 24">
																	<path fill="currentColor"
																		d="M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12" />
																</svg>
															</button>
														</div>
													</li>
												</template>
											</MyOrderList>
										</div>
										<form method="dialog"
											class="modal-backdrop backdrop-blur-md transition-all duration-500 ease-in-out"
											@click="editMode = false">
											<button>close</button>
										</form>
									</dialog>
								</Teleport>

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
							onclick="my_modal_2.showModal()"
							class="hover hover:text-white cursor-pointer itemx relative">
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
							<span class="">
								{{ curr_msg!.created_at ? formatDate(new Date(curr_msg!.created_at)) : "No Date" }}
							</span>
						</h3>
						<h4 class="font-semibold w-full border-b border-neutral-900 pb-2">
							{{ curr_msg!.email ? curr_msg!.email : 'No Email' }}
						</h4>
						<p class="py-4">{{ curr_msg!.msg ? curr_msg!.msg : 'No Message' }}</p>
					</div>
					<form method="dialog"
						class="modal-backdrop backdrop-blur-md transition-all duration-500 ease-in-out">
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
import type { Data, Src } from '~/interfaces/int'

type Serv = {
	title: string,
	content: string,
	src?: string,
}

type News = {
	headline: string,
	content: string,
	date: string,
	src?: string,
}

type Team = {
	name: string,
	pos: string,
	src: string,
}

type Player = {
	name: string,
	src: string,
}

const supabase = createClient(
	'https://roytgrkmdhudfbxqxigm.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJveXRncmttZGh1ZGZieHF4aWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NDQyNzAsImV4cCI6MjA3ODEyMDI3MH0.BirWS7ciJogIdXHeEtLpSsiDts6TzjsZGXnpbPCHOjo'
)

const { data, src } = storeToRefs(appStore())
const info = ref<Data>()
const infoSrc = ref<Src>()
const { $gsap: gsap } = useNuxtApp()
provide('data', info)
const file_names = ref<string[]>()
const lang = useCookie('lang')
const db_table = computed(() => {
	if (lang.value === 'en') return 'english'
	if (lang.value === 'fr') return 'french'
	if (lang.value === 'es') return 'spanish'
	if (lang.value === 'de') return 'german'
})

const loading = ref(false)
const img_sending = ref(false)
const home = computed(() => info.value!.routes.home)
const about = computed(() => info.value!.routes.about)
const athletes = computed(() => info.value!.routes.athletes)
const file = ref<HTMLInputElement>()
const editMode = ref(false)
const msg = ref('welcome message')
const new_service = ref<Serv>({
	title: '',
	content: '',
	src: '',
})
const new_news = ref<News>({
	headline: '',
	content: '',
	date: new Date(),
	src: '',
})
const new_team = ref<Team>({
	name: '',
	pos: '',
	src: '',
})
const new_player = ref<Player>({
	name: '',
	src: '',
})
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
const selected_news = ref<News & { idx?: number }>({
	headline: '',
	content: '',
	date: '',
	src: '',
	idx: undefined
})
const selected_service = ref<Serv & { idx?: number }>({
	title: '',
	content: '',
	src: '',
	idx: undefined
})
const selected_team = ref<Team & { idx?: number }>({
	name: '',
	pos: '',
	src: '',
	idx: undefined
})
const selected_player = ref<Player & { idx?: number }>({
	name: '',
	src: '',
	idx: undefined
})
const serv_idx = ref<number>(0)
const news_idx = ref<number>(0)
const team_idx = ref<number>(0)
const player_idx = ref<number>(0)

function setSelected() {
	if (!selected_news.value.src || !selected_news.value.headline || !selected_news.value.content) return

	const filtered = info.value!.routes.home.news.filter(x => x.src !== selected_news.value.src)

	info.value!.routes.home.news = filtered

	info.value!.routes.home.news.push(selected_news.value)

	editMode.value = false
}

function addNews() {
	if (new_news.value.headline.length <= 0 || new_news.value.content.length <= 0 || new_news.value.date.length <= 0) return
	let date = new_news.value.date
	new_news.value.date = formatDate(date)
	info.value!.routes.home.news.push(new_news.value)
	successMsg(`Added News: ${new_news.value.headline}`, .8)
	new_news.value = { headline: '', src: '', content: '', date: '' }
}
function addServices() {
	if (new_service.value.title.length <= 0 || new_service.value.content.length <= 0 || new_service.value.src!.length <= 0) return
	info.value!.routes.home.services.right.serv.push(new_service.value)
	successMsg(`Added Service: ${new_service.value.title}`, .8)
	new_service.value = { title: '', src: '', content: '' }
}
function addTeamMember() {
	if (new_team.value.name.length <= 0 || new_team.value.pos.length <= 0 || new_team.value.src.length <= 0) return
	info.value!.routes.about.team_src!.push(new_team.value)
	successMsg(`Added Team Member: ${new_team.value.name}`, .8)
	new_team.value = { name: '', src: '', pos: '' }
}
function addPlayer() {
	if (new_player.value.name.length <= 0 || new_player.value.src.length <= 0) return
	info.value!.routes.athletes.athl_src!.push(new_player.value)
	successMsg(`Added Player: ${new_player.value.name}`, .8)
	new_player.value = { name: '', src: '' }
}
function removeNews(idx: number, headline?: string) {
	let arr = info.value!.routes.home.news
	let filtered_arr = arr.filter(x => x.headline !== headline)
	info.value!.routes.home.news = filtered_arr
	successMsg(`Removed News`, .8)
}
function removeService(idx: number) {
	info.value!.routes.home.services.right.serv.splice(idx, 1);
	successMsg(`Removed Service: ${info.value!.routes.home.services.right.serv[idx].title}`, .8)
}
function removeTeam(idx: number) {
	info.value!.routes.about.team_src!.splice(idx, 1);
	successMsg(`Removed Team Member: ${info.value!.routes.about.team_src![idx].name}`, .8)
}
function removePlayer(idx: number) {
	info.value!.routes.athletes.athl_src!.splice(idx, 1);
	successMsg(`Removed Player: ${info.value!.routes.athletes.athl_src![idx].name}`, .8)
}


function sortByDateDesc(array: any) {
	return array.sort((a: any, b: any) => {
		const dateA: any = new Date(a.date.split("/").reverse().join("-"));
		const dateB: any = new Date(b.date.split("/").reverse().join("-"));
		return dateB - dateA; // Descending order
	});
}

async function sendFile(file: File = document.querySelector<HTMLInputElement>('input[type="file"]')!.files![0]) {
	let item = document.querySelector<HTMLInputElement>('input[type="file"]')!.files![0]
	if (!item) return errorMsg('No file selected!', 1)

	img_sending.value = true
	const file_name = file.name
	try {
		const { data, error } = await supabase.storage.from('images').upload(file_name, file, {
			cacheControl: '3600',
			upsert: true
		})
		if (error) throw error

		img_sending.value = false
		successMsg('Your image has been uploaded!')
	} catch (error: any) {
		errorMsg('Your image has not been uploaded!: ' + error.message)
		img_sending.value = false
	}
}

const getFileNames = async () => {
	try {
		const { data, error } = await supabase
			.storage
			.from('images')
			.list('', {
				// limit: 100,
				// offset: 0,
				sortBy: { column: 'name', order: 'asc' },
			})
		if (error) throw error

		console.log(data)
		return data.map(item => item.name)
	}
	catch (error) {
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

		let { data, error } = await supabase.from(db_table.value!).insert([{ data: info.value }]).select()
		if (error) throw error
		loading.value = false
		successMsg('Your data has been saved!')
	} catch (error: any) {
		errorMsg(`Error Status: ${error.message}`, 6)
		loading.value = false
	}
}

onBeforeMount(() => {
	info.value = data.value
	infoSrc.value = src.value
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
		if (error2) throw error2
		messages.value = msg!

		file_names.value = await getFileNames()

		successMsg('Loaded Data', 1)
	} catch (error) {
		errorMsg(`Bad Request: ${error}`)
		setTimeout(() => {
			useNuxtApp().$router.push('/')
		}, 3000)
	}
})

async function logOut() {
	try {
		let { error } = await supabase.auth.signOut()
		if (error) throw error
		// setTimeout
		useNuxtApp().$router.push('/')
		setTimeout(() => {
			location.reload()
		}, 500)
	} catch (err: any) {
		errorMsg(`Bad Logout: ${err.message}`, 6)
	}
}

function successMsg(message: string, delay: number = 3) {
	let success = document.getElementById('success')
	msg.value = message
	let tl = gsap.timeline()

	tl.to(success, {
		y: 0,
		duration: .7,
		ease: 'power4.inOut',
	}).to(success, {
		delay,
		y: '80px',
		duration: .7,
		ease: 'power4.inOut',
	})
}

function errorMsg(message: string, delay: number = 3) {
	let error = document.getElementById('error')
	msg.value = message
	let tl = gsap.timeline()

	tl.to(error, {
		y: 0,
		duration: .7,
		ease: 'power4.inOut',
	}).to(error, {
		delay,
		y: '80px',
		duration: .7,
		ease: 'power4.inOut',
	})
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