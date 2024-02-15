const appStore = defineStore('app', () => {
  const showNav = ref(false)
  const ifShowNav = ref(false)
  const open_nav = ref(false)
  const opened = ref(true)
  const footer_open = ref(false)

  return {
    showNav,
    ifShowNav,
    open_nav,
    opened,
    footer_open,
  }
})

export default appStore
