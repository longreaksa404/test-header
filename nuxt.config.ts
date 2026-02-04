export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  routeRules: {
    '/api/header': { isr: 3600 } // Cache for 1 hour, revalidate in background
  }
})