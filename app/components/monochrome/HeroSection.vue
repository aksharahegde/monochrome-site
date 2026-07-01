<template>
  <section class="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-6 pt-3 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:gap-16 lg:px-10 lg:pt-4">
    <div class="flex flex-col gap-8 lg:gap-9">
      <div class="flex flex-col gap-4 lg:gap-5">
        <h1 class="font-serif text-[2.5rem] leading-[1.05] tracking-[-0.01em] text-white sm:text-[3rem] lg:text-[4.25rem]">
          Monochrome
          <em class="mt-1 block font-serif italic text-white/88">by intelligence.</em>
        </h1>
        <p class="max-w-[22rem] text-balance font-sans text-[0.8125rem] leading-[1.65] text-white/48 lg:max-w-md lg:text-[0.9375rem]">
          AI analyzes your photo and reveals its
          <em class="italic text-white/72">truest</em>
          monochrome expression.
        </p>
      </div>

      <a
        href="https://www.glaze.app/app/monochrome-pVnMBs"
        target="_blank"
        rel="noopener"
        class="group flex w-fit items-center gap-4"
      >
        <span class="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/[0.04] transition group-hover:border-white/32 group-hover:bg-white/[0.08]">
          <svg viewBox="0 0 24 24" fill="none" class="size-[18px] text-white/82" aria-hidden="true">
            <path d="M12 4v10M8 10l4 4 4-4M5 18h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <span class="flex flex-col gap-1">
          <span class="font-sans text-[0.8125rem] text-white/88 transition group-hover:text-white lg:text-sm">
            Get from Glaze store
          </span>
          <span class="font-sans text-[11px] tracking-wide text-white/38">
            JPG · PNG
          </span>
        </span>
      </a>
    </div>

    <div class="flex w-full items-start justify-center lg:justify-end">
      <div class="aspect-[4/5] w-full lg:aspect-auto lg:h-[min(42vh,400px)] lg:w-full">
        <MonochromeBeforeAfterSlider fill />
      </div>
    </div>
  </section>
</template>
