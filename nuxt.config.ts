// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [

  ],
  typescript: {
    typeCheck: true
  },
  modules: ["@nuxtjs/i18n", "@nuxt/test-utils/module"],
  css: [
    "bootstrap/scss/bootstrap.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  }
})