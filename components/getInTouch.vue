<template>
	<div class="absolute right-6 top-4 flex items-center gap-6">
		<BoxContainer @click="goToContact" v-motion-fade class="droping tracking-wide text-white text-sm">
			<span class="drop-shadow-md">{{ _.contact_head }}
			</span>
		</BoxContainer>

		<Lang />
	</div>
</template>

<script setup lang="ts">
import appStore from '~/stores/app'
import info from '~/assets/data/home.json'
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

function goToContact() {
	appStore().toggleContact(true)
	setTimeout(() => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
	}, 600)
}

function setLang(language: string) {
	lang.value = language
	window.location.reload()
}
</script>

<style scoped></style>