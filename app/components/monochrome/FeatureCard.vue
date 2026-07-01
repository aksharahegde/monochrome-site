<script setup lang="ts">
defineProps<{
  icon: 'light' | 'tones' | 'emotion' | 'timeless'
  title: string
  description: string
}>()
</script>

<template>
  <article class="flex flex-col gap-3">
    <div class="text-white/62">
      <IconFeatureLight v-if="icon === 'light'" />
      <IconFeatureTones v-else-if="icon === 'tones'" />
      <IconFeatureEmotion v-else-if="icon === 'emotion'" />
      <IconFeatureTimeless v-else />
    </div>
    <div class="flex flex-col gap-1.5">
      <h3 class="font-sans text-[11px] font-medium uppercase tracking-label text-white/88">
        {{ title }}
      </h3>
      <p class="max-w-[16rem] font-sans text-[0.8125rem] leading-[1.55] text-white/42 lg:text-[13px]">
        {{ description }}
      </p>
    </div>
  </article>
</template>
