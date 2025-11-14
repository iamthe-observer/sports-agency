// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
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
  app: {
    head: {
      script: [],
      title: 'EagleEye Sports Consults',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-primevue',
  ],
  primevue: {
    /* Options */
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
