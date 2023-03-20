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
    dirs: ['~/common/icons', '~/components']
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
  generate: {
    routes: [
      '/noticias/p/:[...slug]'
    ]
  },
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark',
      }
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      }
    }
  },
  // nitro: {
  //   server
  //   routeRules: {
  //     '/noticia/**': { static: true }
  //   }
  // },
  // nitro: {
  //   routeRules: {
  //     '/noticia/**': { static: false }
  //   }
  // },
  runtimeConfig: {
    public: {
      VITE_WHATSAPP_BASE_URL: process.env.VITE_WHATSAPP_BASE_URL
    }
  }
})
