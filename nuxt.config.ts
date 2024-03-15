// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  imports: {
    dirs: ['repository', 'types'],
  },

  nitro: {
    experimental: {
      database: true,
    },
  },

  modules: ['@vee-validate/nuxt', '@nuxt/fonts'],

  fonts: {
    experimental: {
      addPreloadLinks: true,
    },
  },
})
