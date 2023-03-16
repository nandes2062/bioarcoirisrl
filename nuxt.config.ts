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
      '/noticias/:[slug]'
    ]
  },
  content: {
    sources: {
      github: {
        prefix: '/noticia', // Prefix for routes used to query contents
        driver: 'github', // Driver used to fetch contents (view unstorage documentation)
        repo: "nandes2062/bioarcoirisrl",
        branch: "master",
        dir: "content", // Directory where contents are located. It could be a subdirectory of the repository.
        // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
      },
    }
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
