// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@tresjs/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/cloudinary',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
  ],
  cloudinary: {
    cloudName: 'dzscjmbnp',
  },
  devtools: { enabled: false },
  css: ['~/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
