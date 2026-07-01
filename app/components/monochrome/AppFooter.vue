<template>
  <footer class="border-t border-white/10 py-8">
    <div class="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-white/35 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <p class="font-sans text-xs tracking-wide">
        © {{ new Date().getFullYear() }} Monochrome
      </p>
      <nav class="flex gap-6 font-sans text-xs tracking-wide">
        <NuxtLink
          to="/privacy"
          class="transition hover:text-white/70"
        >
          Privacy Policy
        </NuxtLink>
        <span>
          Developed by
          <a
            href="https://akshara.dev"
            target="_blank"
            rel="noopener"
            class="transition hover:text-white/70"
          >Akshara Hegde</a>
        </span>
      </nav>
    </div>
  </footer>
</template>
