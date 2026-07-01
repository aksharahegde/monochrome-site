<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy',
  description:
    'Learn how Monochrome handles your photographs, API keys, and privacy.',
  ogTitle: 'Privacy Policy · Monochrome',
  ogDescription:
    'Learn how Monochrome handles your photographs, API keys, and privacy.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Privacy Policy · Monochrome',
  twitterDescription:
    'Learn how Monochrome handles your photographs, API keys, and privacy.',
})

defineOgImage('Monochrome', {
  title: 'Privacy',
  emphasis: 'Policy.',
  description:
    'How Monochrome handles your photographs, API keys, and privacy.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Privacy Policy',
    description:
      'Monochrome privacy policy for photo processing and optional integrations.',
  }),
])
</script>

<template>
  <div>
    <MonochromeAppHeader />

    <main class="mx-auto max-w-3xl px-6 pb-20 pt-12 sm:pt-16 lg:px-10 lg:pt-24">
      <article class="prose prose-invert max-w-none">
        <h1 class="font-serif text-4xl text-white">
          Privacy Policy
        </h1>
        <p class="font-sans text-sm text-white/45">
          Last updated: July 1, 2026
        </p>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Overview
          </h2>
          <p>
            Monochrome respects your privacy. We designed the application to process your photographs with the minimum amount of data collection necessary.
          </p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Photos
          </h2>
          <p>When you upload a photograph, it is used solely to generate the monochrome version you requested.</p>
          <p>We do not claim ownership of your images.</p>
          <p>We do not use your photographs to train AI models.</p>
          <p>We do not sell, share, or license your images.</p>
          <p>If processing occurs locally, your images never leave your device.</p>
          <p>If you enable Anthropic Vision processing, your image is sent only to Anthropic using the API credentials you provide.</p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Anthropic Vision (Optional)
          </h2>
          <p>Monochrome includes an optional integration with Anthropic's Vision API.</p>
          <p>This feature is disabled by default and is only used if you choose to enable it.</p>
          <p>When enabled:</p>
          <ul class="list-disc space-y-2 pl-5">
            <li>Images are transmitted directly to Anthropic for analysis and processing.</li>
            <li>Processing is performed using your own Anthropic API key.</li>
            <li>Monochrome does not use its own API credentials on your behalf.</li>
            <li>Your use of Anthropic's services is governed by Anthropic's Terms of Service and Privacy Policy.</li>
          </ul>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            API Keys
          </h2>
          <p>Some optional features require you to provide your own Anthropic API key.</p>
          <p>Your API key is used solely to authenticate requests to Anthropic on your behalf.</p>
          <p>Monochrome does not collect, sell, or share your API key.</p>
          <p>Where possible, your API key is stored only on your device and is never used for any purpose other than completing the operation you requested.</p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Cloud Storage (Optional)
          </h2>
          <p>Monochrome allows you to optionally upload processed images to your own S3-compatible storage.</p>
          <p>When enabled:</p>
          <ul class="list-disc space-y-2 pl-5">
            <li>Uploads occur only when you explicitly request them.</li>
            <li>You provide and control the storage credentials.</li>
            <li>Monochrome uploads images only to the bucket you configure.</li>
            <li>Monochrome does not browse, modify, or delete files in your storage.</li>
            <li>You retain full ownership of all uploaded images.</li>
          </ul>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Usage Data
          </h2>
          <p>We may collect limited anonymous information to help improve the application, including:</p>
          <ul class="list-disc space-y-2 pl-5">
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Country or region</li>
            <li>Error reports</li>
            <li>Basic usage analytics</li>
          </ul>
          <p>This information does not include your photographs or API credentials.</p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Cookies
          </h2>
          <p>Monochrome may use essential cookies required for the application to function correctly.</p>
          <p>If analytics are enabled, additional cookies may be used to understand general usage patterns. These cookies never contain your uploaded images or API credentials.</p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Third-Party Services
          </h2>
          <p>If you choose to enable Anthropic Vision or upload images to your own cloud storage, your data may be processed by those services according to their respective privacy policies.</p>
          <p>Monochrome does not control or assume responsibility for how third-party services process or retain your data once it has been transmitted at your request.</p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Data Security
          </h2>
          <p>We use industry-standard security measures to protect your data during transmission and processing.</p>
          <p>While no online service can guarantee absolute security, we continuously work to safeguard your information.</p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Children's Privacy
          </h2>
          <p>Monochrome is not intended for children under the age required by applicable law. We do not knowingly collect personal information from children.</p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Changes to This Policy
          </h2>
          <p>We may update this Privacy Policy from time to time.</p>
          <p>Any changes will be published on this page along with the updated revision date.</p>
        </section>

        <section class="mt-10 flex flex-col gap-4 font-sans text-sm leading-relaxed text-white/60">
          <h2 class="font-sans text-xs font-medium tracking-ultra text-white/85">
            Contact
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact:
            <a href="mailto:akshara.dev" class="text-white/80 underline underline-offset-4 transition hover:text-white">akshara.dev</a>
          </p>
        </section>
      </article>
    </main>

    <MonochromeAppFooter />
  </div>
</template>
