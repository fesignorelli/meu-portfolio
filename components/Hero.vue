<template>
  <section class="paper-texture min-h-[826px]">
    <div
      class="mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-10 px-6 py-16 md:px-14 lg:grid-cols-[686px_464px] lg:justify-between lg:px-[105px] lg:py-0"
    >
      <div class="relative z-10">
        <p class="font-inter fade-up text-[40px] leading-none" style="animation-delay: 0.1s">
          <span>20</span><strong class="font-black">26</strong>
        </p>

        <h1
          class="fade-up mt-[5px] whitespace-nowrap text-[clamp(72px,10.96vw,157.778px)] leading-[.94] tracking-[-.055em]"
          style="animation-delay: 0.2s"
        >
          <strong>port</strong><span>folio</span>
        </h1>

        <div
          class="fade-up mt-[23px] flex flex-wrap items-center gap-3 text-[20px]"
          style="animation-delay: 0.35s"
        >
          <span>Fernanda Signorelli</span>
          <span class="h-6 w-px bg-black" />
          <strong>Web Designer</strong>
        </div>
      </div>

      <img
        src="/img/hero.gif"
        alt="Ilustração em preto e branco"
        class="fade-up mx-auto w-full max-w-[464px] object-cover lg:h-[680px]"
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
</style>
