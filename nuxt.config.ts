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
  css: [
    '~/common/styles/main.css',
    '~/common/styles/github-markdown.css'
  ],
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
    '@nuxt/image-edge',
    '@nuxt/content'
  ],
  generate: {
    routes: [
      '/noticias/p/:slug',
      '/noticias/:slug'
    ]
    // async routes () {
    //   const { $content } = require('@nuxt/content')
    //   const catalogTotal = await $content('noticias').fetch()
    //   const totalItems = catalogTotal.length
    //   const totalPages = Math.ceil(totalItems / 4)
    //   const arrayPages = []
    //   for (let i = 0; i < totalPages; i++) {
    //     arrayPages[i] = '/noticias/p/'+ (i + 1)
    //   }
    //   console.log('sdds: ', arrayPages)
    //   return arrayPages
    // }
  },
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 700,
          height: 700
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      VITE_WHATSAPP_BASE_URL: process.env.VITE_WHATSAPP_BASE_URL
    }
  }
})
