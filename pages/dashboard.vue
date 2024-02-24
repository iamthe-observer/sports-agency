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
						<div class="flex flex-row gap-2 pt-2 border-t border-neutral-900">
							<div class="flex gap-2 items-center">
								<label for="">Email</label>
								<input type="text" name="" id="" class="w-full">
							</div>

							<div class="flex gap-2 items-center">
								<label for="">Email</label>
								<input type="text" name="" id="" class="w-full">
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
						<span class="">Home</span>
					</template>
				</DashSection>

				<!-- About -->
				<DashSection>
					<template #title>
						<span class="">About</span>
					</template>

					<template #content>
						<span class="">Home</span>
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

<style scoped></style>