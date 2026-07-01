<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    emphasis?: string
    description?: string
  }>(),
  {
    title: 'Monochrome',
    emphasis: 'by intelligence.',
    description:
      'AI analyzes your photo and reveals its truest monochrome expression.',
  },
)
</script>

<template>
  <div
    class="relative h-full w-full flex flex-col justify-between"
    style="background-color: #050505; padding: 64px; font-family: Inter;"
  >
    <div
      class="absolute inset-0"
      style="background-image: url(/images/hero.jpg); background-size: cover; background-position: center; opacity: 0.14;"
    />
    <div
      class="absolute inset-0"
      style="background-color: #050505; opacity: 0.55;"
    />

    <div class="relative flex items-center" style="gap: 16px;">
      <div
        class="flex items-center justify-center"
        style="width: 44px; height: 44px; border-radius: 12px; background-color: #0a0a0a; border: 1px solid rgba(255,255,255,0.14);"
      >
        <div
          style="width: 26px; height: 26px; border-radius: 6px; background-image: linear-gradient(135deg, #999999, #222222);"
        />
      </div>
      <div
        style="font-family: Inter; font-size: 20px; font-weight: 500; letter-spacing: 0.28em; color: rgba(255,255,255,0.9);"
      >
        MONOCHROME
      </div>
    </div>

    <div class="relative flex flex-col" style="max-width: 920px;">
      <h1
        style="font-family: 'Playfair Display'; font-weight: 500; font-size: 92px; line-height: 1.05; letter-spacing: -0.01em; color: #ffffff; margin: 0;"
      >
        {{ title }}
      </h1>
      <div
        style="font-family: 'Playfair Display'; font-style: italic; font-weight: 500; font-size: 92px; line-height: 1.05; color: rgba(255,255,255,0.88); margin-top: 4px;"
      >
        {{ emphasis }}
      </div>
      <div
        style="font-family: Inter; font-weight: 300; font-size: 26px; line-height: 1.5; color: rgba(255,255,255,0.5); margin-top: 28px; max-width: 720px;"
      >
        {{ description }}
      </div>
    </div>

    <div class="relative flex items-center justify-between">
      <div
        style="font-family: Inter; font-weight: 500; font-size: 15px; letter-spacing: 0.22em; color: rgba(255,255,255,0.45);"
      >
        AI POWERED
      </div>
      <div
        style="font-family: Inter; font-weight: 400; font-size: 15px; letter-spacing: 0.05em; color: rgba(255,255,255,0.35);"
      >
        monochrome.app
      </div>
    </div>
  </div>
</template>
