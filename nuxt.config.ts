// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'BIO ARCOIRIS R.L. - COOPERATIVA MULTIACTIVA',
      meta: [
        { name: 'description', content: 'Empresa social y de servicio agroecológico, sostenible y amigable con el medio ambiente' }
      ]
    }
  },
  css: ['~/common/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    global: true,
    dirs: ['~/common/icons']
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }
    ],
    '@nuxt/content'
  ],
  runtimeConfig: {
    public: {
      VITE_WHATSAPP_BASE_URL: process.env.VITE_WHATSAPP_BASE_URL
    }
  }
})
