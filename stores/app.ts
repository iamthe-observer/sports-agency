import type { Data, Src } from '~/interfaces/int'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const appStore = defineStore('app', () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const if_sm = breakpoints.smaller('lg')
  const showNav = ref(false)
  const ifShowNav = ref(false)
  const open_nav = ref(false)
  const opened = ref(true)
  const footer_open = ref(false)
  const if_contact = ref(false)
  const if_loading = ref(true)
  const if_pass = ref(false)
  const appData = ref<Data>()
  const appSrc = ref<Src>()
  const { $gsap: gsap } = useNuxtApp()
  const serv_toggle = ref(false)
  const news_toggle = ref(false)

  const toggleContact = (bool?: boolean) => {
    if (bool) {
      if (if_sm.value) {
        return gsap.to('#contact', {
          height: '750px',
          duration: 0.5,
          ease: 'power4.out',
        })
      } else {
        return gsap.to('#contact', {
          height: '450px',
          duration: 0.5,
          ease: 'power4.out',
        })
      }
    } else {
      if_contact.value = !if_contact.value
      if (if_contact.value) {
        if (if_sm) {
          gsap.to('#contact', {
            height: '750px',
            duration: 0.5,
            ease: 'power4.out',
          })
        } else {
          gsap.to('#contact', {
            height: '450px',
            duration: 0.5,
            ease: 'power4.out',
          })
        }
      } else {
        gsap.to('#contact', {
          height: '100px',
          duration: 0.5,
          ease: 'power4.out',
        })
      }
    }
  }

  return {
    showNav,
    ifShowNav,
    open_nav,
    opened,
    footer_open,
    if_contact,
    toggleContact,
    if_loading,
    data: appData,
    src: appSrc,
    if_pass,
    serv_toggle,
    news_toggle,
  }
})

export default appStore
