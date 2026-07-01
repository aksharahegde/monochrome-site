<template>
  <header class="shrink-0 border-b border-white/5">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10 lg:py-4">
      <NuxtLink
        to="/"
        class="group flex items-center gap-3"
        aria-label="Monochrome home"
      >
        <div class="size-8 overflow-hidden rounded-lg border border-white/10 lg:size-9">
          <img
            src="/favicon.svg"
            alt=""
            class="size-full object-cover"
          >
        </div>
        <span class="font-sans text-[11px] font-medium tracking-ultra text-white/90 transition group-hover:text-white">
          MONOCHROME
        </span>
      </NuxtLink>

      <div class="flex items-center gap-6">
        <NuxtLink
          to="/privacy"
          class="font-sans text-[11px] tracking-wide text-white/35 transition hover:text-white/65"
        >
          Privacy
        </NuxtLink>
        <div class="hidden items-center gap-2 whitespace-nowrap font-sans text-[11px] font-medium tracking-ultra text-white/45 sm:flex">
          <IconSparkle class="size-3 text-white/65" />
          AI POWERED
        </div>
      </div>
    </div>
  </header>
</template>
