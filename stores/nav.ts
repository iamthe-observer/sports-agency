const navStore = defineStore('nav', () => {
  const curr_nav = ref()
  watchEffect(() => {
    if (useNuxtApp()._route.path === '/about') {
      curr_nav.value = '/about'
    } else if (useNuxtApp()._route.path === '/gallery') {
      curr_nav.value = '/gallery'
    } else if (useNuxtApp()._route.path === '/athletes') {
      curr_nav.value = '/athletes'
    } else if (useNuxtApp()._route.path === '/dashboard') {
      curr_nav.value = '/dashboard'
    } else {
      curr_nav.value = '/'
    }
  })

  return {
    curr_nav,
  }
})

export default navStore
