// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hutao-Web',
      bodyAttrs: {
        style: 'height: 100%; margin: 0; padding: 0;'
      }
    }
  },
  devtools: { enabled: true },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://homa.snapgenshin.com/Statistics',
        changeOrigin: true,
        prependPath: true
      }
    }
  },
  vite: {
    plugins: [vuetify()]
  }
})
