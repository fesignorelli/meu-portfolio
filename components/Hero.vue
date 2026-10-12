<template>
  <section class="paper-texture bg-cream relative flex min-h-[826px] overflow-hidden">
    <div
      class="pointer-events-none absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 translate-x-1/4 rounded-full bg-gradient-to-br from-[#c0b4da] to-[#f2b1d3] opacity-40 blur-[110px]"
      aria-hidden="true"
    />

    <div
      class="relative z-10 mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-10 px-6 py-16 md:px-14 lg:grid-cols-[minmax(0,686px)_minmax(0,580px)] lg:gap-0 lg:justify-between lg:px-[105px] lg:py-0"
    >
      <div class="relative z-10">
        <p
          class="font-inter fade-up text-[40px] leading-none text-[#272521]"
          style="animation-delay: 0.1s"
        >
          <span>20</span><strong class="font-black text-pink-dark">26</strong>
        </p>

        <h1
          class="fade-up mt-[5px] whitespace-nowrap text-[clamp(72px,10.96vw,157.778px)] leading-[.94] tracking-[-.055em] text-[#272521]"
          style="animation-delay: 0.2s"
        >
          <strong class="text-pink-dark">port</strong><span>folio</span>
        </h1>

        <div
          class="fade-up mt-[23px] flex flex-wrap items-center gap-3 text-[20px] text-[#555349]"
          style="animation-delay: 0.35s"
        >
          <span>Fernanda Signorelli</span>
          <span class="h-6 w-px bg-[#c0b4da]" />
          <strong class="text-pink-dark">Web Designer</strong>
        </div>
      </div>

      <img
        src="/img/mold.png"
        class="fade-up relative z-10 mx-auto w-full object-cover h-auto"
        style="animation-delay: 0.15s"
      />
    </div>
  </section>
</template>

<style scoped>
.fade-up {
  animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.paper-texture ::selection {
  background-color: #f2b1d3;
  color: #4e0d30;
}
</style>