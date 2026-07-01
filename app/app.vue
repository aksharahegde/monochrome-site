<template>
  <div class="min-h-screen bg-ink-deep text-white">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s · Monochrome',
})
</script>
