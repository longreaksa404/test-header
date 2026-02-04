export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@vueuse/nuxt'
  ],

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      meta: [
        { charset: 'utf-8' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['./assets/css/main.css'],

  typescript: {
    strict: true,
    shim: false
  },

  experimental: {
    typedPages: true
  }
})