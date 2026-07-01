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

      <div class="flex flex-col gap-3">
        <a
          href="https://www.glaze.app/app/monochrome-pVnMBs"
          target="_blank"
          rel="noopener"
          class="group inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-sans text-[0.8125rem] font-medium text-ink-deep shadow-[0_8px_24px_rgba(255,255,255,0.08)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/92 hover:shadow-[0_12px_32px_rgba(255,255,255,0.14)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 lg:px-7 lg:py-4 lg:text-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" class="size-[18px]" aria-hidden="true">
            <path d="M12 4v10M8 10l4 4 4-4M5 18h14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Get from Glaze store
        </a>
        <span class="font-sans text-[11px] tracking-wide text-white/38">
          Free · JPG · PNG
        </span>
      </div>
    </div>

    <div class="flex w-full items-start justify-center lg:justify-end">
      <div class="aspect-[4/5] w-full lg:aspect-auto lg:h-[min(42vh,400px)] lg:w-full">
        <MonochromeBeforeAfterSlider fill />
      </div>
    </div>
  </section>
</template>
