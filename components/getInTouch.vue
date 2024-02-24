<template>
	<div class="absolute right-0 top-0">
		<BoxContainer @click="goToContact" v-motion-fade
			class="droping absolute top-6 right-6 tracking-wide text-white text-xl">
			<span class="drop-shadow-md">Contact Us
			</span>
		</BoxContainer>
	</div>
</template>

<script setup lang="ts">
import appStore from '~/stores/app'

function goToContact() {
	appStore().toggleContact(true)
	setTimeout(() => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
	}, 600)
}
</script>

<style scoped></style>