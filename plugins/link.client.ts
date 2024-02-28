export default defineNuxtPlugin(nuxtApp => {
  const link =
    'https://dblmoqabperngqprlrjw.supabase.co/storage/v1/object/public/images/'
  return {
    provide: {
      link,
    },
  }
})
