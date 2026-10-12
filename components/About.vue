<template>
  <section id="sobre" class="paper-texture min-h-[956px] overflow-x-clip bg-cream">
    <div class="mx-auto grid max-w-[1440px] lg:grid-cols-[59.4%_40.6%]">
      <div class="px-6 py-20 md:px-[59px] lg:pt-[98px]">
        <h2 class="scroll-reveal text-[60px] font-black text-pink-dark">Sobre.</h2>

        <div
          class="scroll-reveal mt-[18px] max-w-[684px] space-y-4 text-[16px] leading-normal"
          style="transition-delay: 0.1s"
        >
          <p v-for="(paragraph, i) in aboutParagraphs" :key="i">
            {{ paragraph }}
          </p>
        </div>

        <div class="scroll-reveal mt-10 flex flex-col gap-4" style="transition-delay: 0.25s">
          <div class="flex flex-row gap-8">
            <a
              href="https://www.linkedin.com/in/nandasignorelli/"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-3 text-[20px] social-link"
            >
              <IconLinkedin :size="40" class="text-pink-dark" />
              <span class="social-link__text">Fernanda Signorelli</span>
            </a>

            <a
              href="https://github.com/fesignorelli"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-3 text-[20px] social-link"
            >
              <IconGithub :size="40" class="text-pink-dark" />
              <span class="social-link__text">fesignorelli</span>
            </a>
          </div>

          <a
            href="mailto:signorelli980@gmail.com"
            class="inline-flex items-center gap-3 text-[20px] social-link"
          >
            <IconMail :size="40" class="text-pink-dark" />
            <span class="social-link__text">signorelli980@gmail.com</span>
          </a>
        </div>
      </div>

      <div
        class="scroll-reveal relative grid grid-cols-2 gap-3 px-6 pb-20 md:px-[59px] lg:px-6 lg:pt-[98px]"
        style="transition-delay: 0.15s"
      >
        <img
          v-for="(photo, i) in photos"
          :key="photo.src"
          :src="photo.src"
          :alt="photo.alt"
          :class="i === 0 ? 'photo-in--first' : 'photo-in--second'"
          class="photo-in aspect-[3/4] w-full rounded-2xl object-cover object-top lg:aspect-auto lg:h-[592px]"
        />

        <svg
          v-for="(star, i) in stars"
          :key="i"
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="pointer-events-none absolute drop-shadow-sm"
          :class="star.class"
        >
          <path
            fill="currentColor"
            d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconMail from './icons/IconMail.vue'

const photos = [
  { src: '/img/n-1.webp', alt: 'Retrato de Fernanda Signorelli' },
  { src: '/img/n-2.webp', alt: 'Retrato de Fernanda Signorelli' },
]

const stars = [
  { class: 'left-[18%] top-[2%] size-8 text-pink-dark lg:top-[88px]' },
  { class: 'left-[30%] top-[22%] size-7 text-cream' },
  { class: 'left-[20%] bottom-[22%] size-6 text-cream' },
  { class: 'right-[22%] top-[0%] size-9 text-pink-dark lg:top-[84px]' },
  { class: 'right-[14%] top-[26%] size-7 text-cream' },
  { class: 'right-[4%] top-[45%] size-6 text-pink-dark' },
  { class: 'right-[26%] bottom-[18%] size-6 text-cream' },
]

const aboutParagraphs = [
  'Sou Web Designer e desenvolvedora front-end, apaixonada por transformar ideias em experiências digitais claras, funcionais e marcantes.',
  'Minha formação combina design visual, tecnologia e estratégia. Trabalho com interfaces responsivas, prototipação e desenvolvimento, sempre cuidando da usabilidade e da acessibilidade.',
  'Gosto de explorar novas linguagens, colaborar com pessoas e construir soluções em que estética e propósito caminham juntos.',
  'Atualmente, desenvolvo produtos digitais com Vue.js, React, TypeScript e Tailwind CSS, do conceito no Figma à interface publicada.',
]
</script>

<style scoped>
/* Entrada das fotos: a primeira chega antes da segunda */
.photo-in {
  opacity: 0;
  transition:
    opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.photo-in--first {
  transform: translateX(-120px) rotate(-4deg);
  transition-delay: 0.2s;
}

.photo-in--second {
  transform: translateX(120px) rotate(4deg);
  transition-delay: 0.6s;
}

.visible .photo-in {
  opacity: 1;
  transform: translateX(0) rotate(0);
}

.social-link__text {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  padding-bottom: 2px;
  transition:
    background-size 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.3s ease;
}

.social-link:hover .social-link__text,
.social-link:focus-visible .social-link__text {
  color: theme('colors.pink.dark');
  background-size: 100% 2px;
}

@media (prefers-reduced-motion: reduce) {
  .photo-in {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .social-link__text {
    transition: none;
  }
}
</style>
