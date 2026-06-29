<!-- components/TheFooter.vue -->
<template>
  <footer class="bg-charcoal text-white">
    <div class="mx-auto max-w-[1440px] px-6 py-20 md:px-14 lg:px-[105px]">
      <!-- CTA -->
      <p class="text-[clamp(40px,6.94vw,100px)] font-black leading-[.95] tracking-[-.04em]">
        vamos<br />trabalhar<span class="italic font-medium"> juntos?</span>
      </p>

      <a
        href="mailto:signorelli980@gmail.com"
        class="mt-8 inline-block text-[clamp(20px,2.5vw,30px)] hover:underline"
      >
        signorelli980@gmail.com
      </a>

      <!-- Divisor -->
      <div class="mt-16 h-px w-full bg-white/20" />

      <!-- Base -->
      <div class="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p class="text-[16px]">
          <strong class="font-black">Fernanda Signorelli</strong> — Web Designer
        </p>

        <ul class="flex flex-wrap gap-6 text-[16px]">
          <li v-for="social in socials" :key="social.href">
            <a
              :href="social.href"
              target="_blank"
              rel="noreferrer"
              class="transition-opacity hover:opacity-50"
            >
              {{ social.label }}
            </a>
          </li>
        </ul>

        <p class="text-[14px] text-white/50">© {{ year }} — Todos os direitos reservados.</p>
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

const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fernanda-signorelli' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Behance', href: 'https://www.behance.net/' },
]
</script>
