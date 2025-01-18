<template>
  <div
    class="fixed w-[100px] hover:w-[200px] transition-all duration-500 ease-in-out bg-black h-screen right-0 border-l border-golden-three hover:drop-shadow-xl cursor-pointer z-[10000]">

    <div class="w-full h-full grid place-items-center relative group" @click="toggleNav">

      <div class="droping w-5 h-fit flex flex-col gap-[2px]">
        <span class="w-full h-[2px] bg-golden-three"></span>
        <span class="w-full h-[2px] bg-golden-three"></span>
        <span class="w-full h-[2px] bg-golden-three"></span>
      </div>

      <video playsinline autoplay loop muted key="video" id="avatarVideo" src="~/assets/vid2.mp4"
        class="object-cover w-full h-full bg-black absolute opacity-0 group-hover:opacity-40 transition-all duration-150 ease-in-out">
      </video>

    </div>

  </div>

  <!-- navigation content -->
  <div id="nav-content" class="fixed w-screen h-screen bg-black border border-golden-three translate-x-full z-[10000]">

    <div class="w-full h-full flex relative">

      <!-- content -->
      <div class="w-full h-full pr-[100px] flex">

        <!-- graphics -->
        <section class="w-full">
          <video src="/eagle.mp4" class="w-full h-full object-cover bg-black" playsinline autoplay loop muted></video>
        </section>

        <!-- contact us -->
        <section class="w-[1000px] border-l border-golden-three flex flex-col justify-center items-center group">

          <div class="px-10 h-full text-white flex flex-col gap-2 justify-center items-center">
            <h1 class="text-white w-full text-[2rem] font-semibold">{{ _.contact_head }}</h1>
            <p class="w-full text-xl">{{ _.contact_text }}</p>

            <div class="w-full h-10 bg-neutral-900 border border-golden-three flex gap-[2px] p-[2px]">
              <label for="Name" class="w-20 h-full flex justify-center items-center px-2 py-2 bg-golden-three"><span
                  class="drop-shadow-xl font-bold tracking-wider">Name</span></label>
              <input v-model="message.name" id="Name" type="text" class="w-full bg-transparent pl-5 focus:outline-none">
            </div>

            <div class="w-full h-10 bg-neutral-900 border border-golden-three flex gap-[2px] p-[2px]">
              <label for="Email" class="w-20 h-full flex justify-center items-center px-2 py-2 bg-golden-three"><span
                  class="drop-shadow-xl font-bold tracking-wider">Email</span></label>
              <input v-model="message.email" id="Email" type="text"
                class="w-full bg-transparent pl-5 focus:outline-none">
            </div>

            <div
              class="mt-4 w-full min-h-[40px] bg-neutral-900 border border-golden-three gap-[2px] p-[2px] flex flex-col ">
              <label for="Message" class="text-golden-three text-right w-full px-2">Message</label>
              <textarea v-model="message.msg" id="Message" class="w-full bg-transparent pl-5 focus:outline-none" />
            </div>

            <BoxContainer @click="sendMsg" class="mt-2 text-xl tracking-wide">{{ _.send }}</BoxContainer>

            <div class="text-xl pt-3 text-white hover:text-golden-three font-semibold">
              {{ data?.email }}
            </div>

            <!-- <NuxtLink href="https://maps.app.goo.gl/6H1wYmEfxw5DFBQV7"
              class="text-xs pt-3 text-golden-one hover:text-golden-three font-semibold cursor-pointer">
              {{ _.location }}</NuxtLink> -->
          </div>


          <div
            class="w-full border-t group-hover:bg-golden-three group-hover:bg-opacity-15 transition-all duration-150 ease-in-out border-golden-three text-white px-5 py-10 flex flex-col">
            <!-- <span class="">telephone</span>
						<span class="">company email</span> -->
          </div>

        </section>

        <!-- links -->
        <section class="text-white w-full border-l border-golden-three flex flex-col group">
          <div
            class="w-full h-24 border-b border-golden-three group-hover:bg-golden-three group-hover:bg-opacity-15 transition-all duration-150 ease-in-out">
          </div>
          <div class="flex flex-col h-full w-full pl-10 justify-center font-semibold text-[1.8rem] gap-5 group">
            <NuxtLink @click="onNavClick()" to="/"
              class="hover:text-golden-three linkz home border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2 uppercase">
              {{ links[0] }}</NuxtLink>
            <NuxtLink @click="onNavClick('services')" to="/"
              class="hover:text-golden-three linkz home border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2 uppercase">
              {{ links[1] }}</NuxtLink>
            <NuxtLink @click="onNavClick()" to="/about"
              class="hover:text-golden-three linkz about border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2 uppercase">
              {{ links[2] }}</NuxtLink>
            <NuxtLink @click="onNavClick()" to="/athletes"
              class="hover:text-golden-three linkz athletes border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2 uppercase">
              {{ links[3] }}</NuxtLink>
            <NuxtLink @click="onNavClick()" to="/gallery"
              class="hover:text-golden-three linkz gallery border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2 uppercase">
              {{ links[4] }}</NuxtLink>
            <NuxtLink @click="onNavClick('news')" to="/"
              class="hover:text-golden-three linkz gallery border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2 uppercase">
              {{ links[5] }}</NuxtLink>
            <!-- <NuxtLink @click="()=>{setTimeout(toggleNav(),1000)}" to="/"
							class=" hover:text-golden-three border border-transparent hover:border-golden-three transition-all duration-200 ease-in-out w-fit px-2">Projects</NuxtLink> -->
          </div>
        </section>
      </div>

      <!-- close nav -->
      <div
        class="w-[100px] h-full grid place-items-center border-l border-golden-three absolute right-0 top-0 hover:bg-golden-three hover:bg-opacity-10 transition-all duration-500 ease-in-out "
        @click="toggleNav">
        <div class="w-5 aspect-square flex flex-col justify-between relative -translate-x-2">
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-full h-[2px] bg-golden-three">
          </div>
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-[2px] bg-golden-three">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import appStore from '~/stores/app';
import navStore from '~/stores/nav';
import info from '~/assets/data/nav.json'
import linkData from '~/assets/data/home.json'

const { $gsap: gsap } = useNuxtApp();
const { opened, data } = storeToRefs(appStore())
const { curr_nav } = storeToRefs(navStore())
const { $$b: supabase } = useNuxtApp()
const lang = useCookie('lang')

// lang data
const _ = ref()
const links = ref()

watchEffect(() => {
  if (lang.value === 'fr') {
    _.value = info.fr
    links.value = linkData.fr.links
  } else if (lang.value === 'es') {
    _.value = info.es
    links.value = linkData.es.links
  } else if (lang.value === 'de') {
    _.value = info.de
    links.value = linkData.de.links
  } else {
    _.value = info.en
    links.value = linkData.en.links
  }
})

const message = reactive({
  name: '',
  email: '',
  msg: '',
})

const loading = ref(false)
async function sendMsg() {
  loading.value = true
  if (!message.name || !message.email || !message.msg) {
    loading.value = false
    alert('Please fill in all fields')
    return
  }
  try {
    let { error } = await supabase.from('msg').insert([
      { name: message.name, email: message.email, msg: message.msg }
    ])
    if (error) throw error
    loading.value = false
    alert('Message sent!')
    message.name = ''
    message.email = ''
    message.msg = ''
  } catch (error) {
    alert(`An Error Occurred: ${error}`)
    loading.value = false
  }
}

onMounted(() => {
  function removeClass() {
    document.querySelectorAll('.linkz').forEach((link) => {
      link.classList.remove('selectedLink')
    })
  }
  function setClass(target: string) {
    document.querySelector(`.${target}`)!.classList.add('selectedLink')
  }
  watchEffect(() => {
    if (curr_nav.value == '/') {
      removeClass()
      setClass('home')
    } else if (curr_nav.value == '/about') {
      removeClass()
      setClass('about')
    } else if (curr_nav.value == '/athletes') {
      removeClass()
      setClass('athletes')
    } else if (curr_nav.value == '/gallery') {
      removeClass()
      setClass('gallery')
    }
  })

})

function onNavClick(text?: string) {
  setTimeout(() => {
    toggleNav()
  }, 300)

  if (useNuxtApp()._route.path == '/') {
    if (text == 'services') {
      setTimeout(goToServices, 100)
    } else if (text == 'news') {
      setTimeout(goToNews, 100)
    } else return
  } else {
    if (text == 'services') {
      appStore().$patch({ serv_toggle: true })
    } else if (text == 'news') {
      appStore().$patch({ news_toggle: true })
    } else return
  }
}

function goToServices() {
  gsap.to(window, { duration: 1, scrollTo: '#serv', ease: 'power2.inOut' })
}

function goToNews() {
  gsap.to(window, { duration: 1, scrollTo: '#newz', ease: 'power2.inOut' })
}


const toggleNav = () => {
  const nav_content = document.getElementById('nav-content')!;
  if (!opened.value) {
    gsap.to(nav_content, {
      x: '100%',
      duration: 1,
      ease: 'power4.inOut'
    })
  } else {
    gsap.to(nav_content, {
      x: 0,
      duration: 1,
      ease: 'power4.inOut'
    })
  }
  appStore().$patch(() => opened.value = !opened.value)
}

</script>


<style>
.selectedLink {
  @apply text-golden-three bg-golden-three bg-opacity-10 border border-golden-three;
}

.selectedLinkM {
  @apply text-white bg-white bg-opacity-10 border border-white;
}
</style>