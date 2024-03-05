import type { Data } from '~/interfaces/int'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { createClient } from '@supabase/supabase-js'

const appStore = defineStore('app', () => {
  const supabase = createClient(
    'https://dblmoqabperngqprlrjw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibG1vcWFicGVybmdxcHJscmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMTA3NzAsImV4cCI6MjAyNDU4Njc3MH0.YdYbtgmpXMxTfzpJkN6353d781hQ-e6pId8OdWe8Kjo'
  )
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
  const { $gsap: gsap } = useNuxtApp()
  const serv_toggle = ref(false)
  const news_toggle = ref(false)

  async function getAppData() {
    try {
      const { data: dataz, error } = await supabase
        .from('eagleeyespc')
        .select('data')
        .single()
      if (error) throw error
      return dataz.data
    } catch (error) {
      console.log(error)
    }
  }

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
    getAppData,
    if_pass,
    serv_toggle,
    news_toggle,
  }
})

export default appStore
