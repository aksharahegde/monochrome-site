// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo', '@nuxt/fonts'],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://monochrome.app',
    name: 'Monochrome',
    description:
      'AI analyzes your photo and reveals its truest monochrome expression.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      {
        name: 'Playfair Display',
        provider: 'google',
        weights: [400, 500, 600],
        styles: ['normal', 'italic'],
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600],
      },
    ],
  },

  ogImage: {
    enabled: false,
  },

  nitro: {
    compressPublicAssets: true,
  },
})
