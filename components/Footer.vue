<template>
  <footer class="relative overflow-hidden bg-pink-deep text-white">
    <svg
      v-for="(star, i) in stars"
      :key="i"
      viewBox="0 0 24 24"
      aria-hidden="true"
      class="sparkle pointer-events-none absolute text-white"
      :class="star.class"
      :style="{ animationDelay: star.delay }"
    >
      <path fill="currentColor" :d="sparklePath" />
    </svg>

    <div class="relative mx-auto max-w-[1440px] px-6 py-20 md:px-14 lg:px-[105px]">
      <p
        class="scroll-reveal text-[clamp(40px,6.94vw,100px)] font-black leading-[.95] tracking-[-.04em]"
      >
        vamos<br />trabalhar<span class="italic font-medium"> juntos?</span>
      </p>

      <a
        href="mailto:signorelli980@gmail.com"
        class="footer-link scroll-reveal mt-8 inline-block text-[clamp(20px,2.5vw,30px)]"
        style="transition-delay: 0.15s"
      >
        <span class="footer-link__text">signorelli980@gmail.com</span>
      </a>

      <div class="scroll-reveal mt-16 h-px w-full bg-white/40" style="transition-delay: 0.25s" />

      <div
        class="scroll-reveal mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        style="transition-delay: 0.35s"
      >
        <p class="text-[16px]">
          <strong class="font-black">Fernanda Signorelli</strong> — Web Designer
        </p>

        <ul class="flex flex-wrap gap-6 text-[16px]">
          <li v-for="social in socials" :key="social.href">
            <a :href="social.href" target="_blank" rel="noreferrer" class="footer-link">
              <span class="footer-link__text">{{ social.label }}</span>
            </a>
          </li>
        </ul>

        <p class="text-[14px] text-white/80">© {{ year }} — Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface SocialLink {
  label: string
  href: string
}

const year = new Date().getFullYear()

const sparklePath =
  'M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z'

const stars = [
  { class: 'right-[8%] top-[60px] size-12', delay: '0s' },
  { class: 'right-[20%] top-[150px] size-6', delay: '1.4s' },
  { class: 'right-[32%] top-[50px] size-4', delay: '0.7s' },
  { class: 'right-[6%] top-[240px] size-5', delay: '2s' },
  { class: 'left-[55%] top-[200px] size-8', delay: '0.4s' },
  { class: 'right-[14%] bottom-[120px] size-6', delay: '1s' },
]

const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nandasignorelli/' },
  { label: 'GitHub', href: 'https://github.com/fesignorelli' },
]
</script>

<style scoped>
.sparkle {
  animation: twinkle 4s ease-in-out infinite;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.75) rotate(20deg);
  }
}

.footer-link__text {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  padding-bottom: 2px;
  transition: background-size 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.footer-link:hover .footer-link__text,
.footer-link:focus-visible .footer-link__text {
  background-size: 100% 2px;
}

@media (prefers-reduced-motion: reduce) {
  .sparkle {
    animation: none;
  }

  .footer-link__text {
    transition: none;
  }
}
</style>
