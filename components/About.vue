<template>
  <section id="sobre" class="paper-texture min-h-[956px]">
    <div class="mx-auto grid max-w-[1440px] lg:grid-cols-[59.4%_40.6%]">
      <div class="px-6 py-20 md:px-[59px] lg:pt-[98px]">
        <h2 class="scroll-reveal text-[60px] font-black leading-none">Sobre.</h2>

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
              class="inline-flex items-center gap-3 text-[20px] hover:underline"
            >
              <img src="/img/linkedin.png" alt="LinkedIn" class="size-[50px]" />
              Fernanda Signorelli
            </a>

            <a
              href="https://github.com/fesignorelli"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-3 text-[20px] hover:underline"
            >
              <IconGithub :size="40" />
              fesignorelli
            </a>
          </div>

          <a
            href="mailto:signorelli980@gmail.com"
            class="inline-flex items-center gap-3 text-[20px] hover:underline"
          >
            <span class="flex size-[40px] items-center justify-center rounded-full bg-[#0f0f0f]">
              <Mail :size="24" color="white" />
            </span>
            signorelli980@gmail.com
          </a>
        </div>
      </div>

      <img
        src="/img/fernanda.png"
        alt="Retrato de Fernanda Signorelli"
        class="scroll-reveal w-full object-cover object-top lg:h-[690px]"
        style="transition-delay: 0.15s"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
import IconGithub from './icons/IconGithub.vue'

const aboutParagraphs = [
  'Sou Web Designer e desenvolvedora front-end, apaixonada por transformar ideias em experiências digitais claras, funcionais e marcantes.',
  'Minha formação combina design visual, tecnologia e estratégia. Trabalho com interfaces responsivas, prototipação e desenvolvimento, sempre cuidando da usabilidade e da acessibilidade.',
  'Gosto de explorar novas linguagens, colaborar com pessoas e construir soluções em que estética e propósito caminham juntos.',
  'Atualmente, desenvolvo produtos digitais com Vue.js, React, TypeScript e Tailwind CSS, do conceito no Figma à interface publicada.',
]
</script>
