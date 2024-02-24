<template>
	<div class="w-full h-screen p-2 absolute inset-0 overflow-y-auto flex flex-col items-center">

		<h1 class="pb-2 text-3xl font-semibold text-golden-three uppercase">Dashboard</h1>

		<div class="w-full h-full">

			<div class="join join-vertical w-full rounded-none">
				<!-- Info -->
				<DashSection>
					<template #title>
						<span class="">Contact Information</span>
					</template>

					<template #content>
						<div class="flex flex-row gap-10 uppercase py-2 border-t border-neutral-900">
							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap" for="">Email</label>
								<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>

							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap" for="">Phone</label>
								<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>
						</div>

						<h2 class="pt-10 text-golden-three">Socials</h2>
						<div class="flex flex-row gap-10 uppercase py-2 border-t border-neutral-900">
							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap" for="">Facebook</label>
								<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>

							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap" for="">Twitter</label>
								<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>

							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap" for="">Instagram</label>
								<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
							</div>

							<div class="flex gap-2 items-center w-full">
								<label class="whitespace-nowrap" for="">Youtube</label>
								<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
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
										<label class="whitespace-nowrap" for="">Video Src</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap" for="">Title</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap" for="">Slogan</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap" for="">Image Src</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
								</div>

								<div class="flex flex-col gap-10 uppercase py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center">Introduction</h2>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap" for="">Opening text</label>
										<textarea type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]"></textarea>
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="" for="">mission statement</label>
										<textarea type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide"></textarea>
									</div>

								</div>
							</div>


							<div class="flex gap-5">

								<!-- Services -->
								<div class="flex flex-col gap-5 uppercase py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center mt-10">Services</h2>
									<p class="">add Services</p>

									<div class="flex flex-col gap-2">
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Title</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Content</label>
											<textarea type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Src</label>
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
											<label class="whitespace-nowrap" for="">headline</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Content</label>
											<textarea type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Date</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Src</label>
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
										<label class="whitespace-nowrap" for="">Page Src</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap" for="">Title</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap" for="">About Us</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap" for="">Image Src</label>
										<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
									</div>
								</div>

								<div class="flex flex-col gap-10 uppercase py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center">More Info</h2>
									<div class="flex gap-2 items-center w-full">
										<label class="whitespace-nowrap" for="">Mission</label>
										<textarea type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]"></textarea>
									</div>

									<div class="flex gap-2 items-center w-full">
										<label class="" for="">Vision</label>
										<textarea type="text" name="" id=""
											class="w-full bg-neutral-900 text-white p-2 tracking-wide"></textarea>
									</div>

								</div>
							</div>


							<div class="flex gap-5">

								<!-- Services -->
								<div class="flex flex-col gap-5 uppercase py-2 border-t border-neutral-900 w-full">
									<h2 class="font-normal w-full text-center mt-10">Services</h2>
									<p class="">add Services</p>

									<div class="flex flex-col gap-2">
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Title</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Content</label>
											<textarea type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Src</label>
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
											<label class="whitespace-nowrap" for="">headline</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Content</label>
											<textarea type="text" name="" id=""
												class="w-full bg-neutral-900 text-white p-2 tracking-wide max-h-[200px]" />
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Date</label>
											<input type="text" name="" id="" class="w-full bg-neutral-900 text-white p-2 tracking-wide">
										</div>
										<div class="flex gap-2 items-center w-full">
											<label class="whitespace-nowrap" for="">Src</label>
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

				<!-- Athletes -->
				<DashSection>
					<template #title>
						<span class="">Our Athletes</span>
					</template>

					<template #content>
						<span class="">Home</span>
					</template>
				</DashSection>


			</div>

		</div>

	</div>
</template>

<script setup lang="ts">
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