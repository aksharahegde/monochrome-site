// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo', '@nuxt/fonts'],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://monochrome.akshara.dev',
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
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '180x180', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
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
        global: true,
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600],
        global: true,
      },
    ],
  },

  ogImage: {
    enabled: true,
    defaults: {
      component: 'Monochrome',
      width: 1200,
      height: 630,
    },
  },

  nitro: {
    preset: 'cloudflare_pages',
    compressPublicAssets: true,
  },
})
