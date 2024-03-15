import type { VueQueryPluginOptions } from '@tanstack/vue-query'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'

declare module '@tanstack/vue-query' {
  interface Register {
    defaultError: AxiosError
  }
}

export default defineNuxtPlugin((nuxt) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  })

  const options: VueQueryPluginOptions = { queryClient }

  nuxt.vueApp.use(VueQueryPlugin, options)

  return {
    provide: {
      queryClient,
    },
  }
})
