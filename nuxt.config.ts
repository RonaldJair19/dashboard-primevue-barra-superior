// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ],
  primevue: {
    components: {
      include: ['Sidebar', 'Button', 'Avatar', 'Menu']
    }
  },
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primeicons/primeicons.css'
  ]
})