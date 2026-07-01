<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()
</script>

<template>
  <div class="relative">
    <div class="grain-overlay" />

    <Navbar />

    <main class="overflow-hidden bg-white">
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>

    <Footer />
  </div>
</template>

<style>
.grain-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.15;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-size: 180px 180px;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
