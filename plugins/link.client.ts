export default defineNuxtPlugin(nuxtApp => {
  const link =
    'https://roytgrkmdhudfbxqxigm.supabase.co/storage/v1/object/public/images/'
  return {
    provide: {
      link,
    },
  }
})
