import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'
import { Flip } from 'gsap/Flip'

export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, Flip)
  }

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
      Flip,
    },
  }
})
