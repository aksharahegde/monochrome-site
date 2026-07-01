<script setup lang="ts">
useSeoMeta({
  title: 'AI Powered Photo Conversion',
  description:
    'AI analyzes your photo and reveals its truest monochrome expression. Transform color photographs into timeless black and white masterpieces.',
  ogTitle: 'Monochrome — AI Powered Photo Conversion',
  ogDescription:
    'AI analyzes your photo and reveals its truest monochrome expression.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Monochrome — AI Powered Photo Conversion',
  twitterDescription:
    'AI analyzes your photo and reveals its truest monochrome expression.',
})

defineOgImage('Monochrome', {
  title: 'Monochrome',
  emphasis: 'by intelligence.',
  description:
    'AI analyzes your photo and reveals its truest monochrome expression.',
})

useSchemaOrg([
  defineWebSite({
    name: 'Monochrome',
    description:
      'AI-powered color to black and white photo conversion.',
  }),
  defineWebPage({
    name: 'Monochrome — AI Powered Photo Conversion',
    description:
      'AI analyzes your photo and reveals its truest monochrome expression.',
  }),
  defineOrganization({
    name: 'Monochrome',
    logo: '/favicon.svg',
    sameAs: ['https://www.glaze.app/app/monochrome-pVnMBs'],
  }),
  defineSoftwareApp({
    name: 'Monochrome',
    applicationCategory: 'PhotographyApplication',
    operatingSystem: 'Web',
    description:
      'AI analyzes your photo and reveals its truest monochrome expression.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }),
])
</script>

<template>
  <div class="flex min-h-screen flex-col bg-ink-deep">
    <MonochromeAppHeader />

    <main class="flex flex-1 flex-col justify-center gap-16 py-10 lg:gap-20 lg:py-14">
      <MonochromeHeroSection />

      <div class="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <MonochromeFeaturesSection />
      </div>
    </main>
  </div>
</template>
