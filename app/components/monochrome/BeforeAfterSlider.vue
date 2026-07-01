<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    colorSrc?: string
    bwSrc?: string
    initialPosition?: number
    fill?: boolean
  }>(),
  {
    colorSrc: '/images/hero.jpg',
    bwSrc: '/images/hero.jpg',
    initialPosition: 52,
    fill: false,
  },
)

const position = ref(props.initialPosition)
const containerRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)

function updatePosition(clientX: number) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const x = clientX - rect.left
  position.value = Math.min(100, Math.max(0, (x / rect.width) * 100))
}

function onPointerDown(event: PointerEvent) {
  isDragging.value = true
  updatePosition(event.clientX)
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
}

function onPointerMove(event: PointerEvent) {
  if (!isDragging.value) return
  updatePosition(event.clientX)
}

function onPointerUp(event: PointerEvent) {
  isDragging.value = false
  ;(event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId)
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') position.value = Math.max(0, position.value - 2)
  if (event.key === 'ArrowRight') position.value = Math.min(100, position.value + 2)
}
</script>

<template>
  <div
    ref="containerRef"
    class="relative overflow-hidden rounded-[1.25rem] border-glow animate-glow select-none touch-none"
    :class="fill ? 'size-full' : 'aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5]'"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
  >
    <img
      :src="colorSrc"
      alt="Color photograph of snow-capped mountain peaks rising above a sea of clouds at sunset"
      class="absolute inset-0 size-full object-cover"
      draggable="false"
      fetchpriority="high"
      decoding="async"
    >

    <div
      class="absolute inset-0 overflow-hidden"
      :style="{ clipPath: `inset(0 0 0 ${position}%)` }"
    >
      <img
        :src="bwSrc"
        alt="Monochrome version of the same mountain landscape"
        class="absolute inset-0 size-full object-cover grayscale contrast-[1.08] brightness-[0.95]"
        draggable="false"
        decoding="async"
      >
    </div>

    <div
      class="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
      :style="{ left: `${position}%` }"
    />

    <button
      type="button"
      class="absolute top-1/2 z-20 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/28 bg-black/55 text-[11px] tracking-[0.18em] text-white/92 backdrop-blur-sm transition hover:border-white/55 hover:bg-black/70"
      :style="{ left: `${position}%` }"
      aria-label="Drag to compare color and monochrome"
      tabindex="0"
      @keydown="onKeyDown"
      @pointerdown.stop="onPointerDown"
    >
      <span class="font-sans">&lt; | &gt;</span>
    </button>
  </div>
</template>
