import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  alias: {
    'element-plus/dist/index.css': resolve(__dirname, './node_modules/element-plus/dist/index.css'),
    'element-plus': resolve(__dirname, './node_modules/element-plus/dist/index.full.js'),
  },
  plugins: ['~/plugins/globals'],
  vite: {
      optimizeDeps: {
          include: ['element-plus'],
      },
  },
  css: [
    '~/theme/index.scss'
  ],
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true }
})
