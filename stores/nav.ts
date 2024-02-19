const navStore = defineStore('nav', () => {
  const curr_nav = ref()
  watchEffect(() => {
    if (useNuxtApp()._route.path === '/') {
      curr_nav.value = '/'
    } else if (useNuxtApp()._route.path === '/about') {
      curr_nav.value = '/about'
    } else if (useNuxtApp()._route.path === '/gallery') {
      curr_nav.value = '/gallery'
    } else if (useNuxtApp()._route.path === '/athletes') {
      curr_nav.value = '/athletes'
    } else {
      curr_nav.value = '/'
    }

    console.log(curr_nav.value)
  })

  return {
    curr_nav,
  }
})

export default navStore
