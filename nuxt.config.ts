// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@tresjs/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/cloudinary',
    '@nuxt/image',
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
