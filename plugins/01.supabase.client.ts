import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const supabase = createClient(
    'https://roytgrkmdhudfbxqxigm.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJveXRncmttZGh1ZGZieHF4aWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1NDQyNzAsImV4cCI6MjA3ODEyMDI3MH0.BirWS7ciJogIdXHeEtLpSsiDts6TzjsZGXnpbPCHOjo'
  )

  return {
    provide: {
      $b: supabase,
    },
  }
})
