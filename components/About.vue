<template>
  <section class="paper-texture min-h-[956px]">
    <div class="mx-auto grid max-w-[1440px] lg:grid-cols-[59.4%_40.6%]">
      <div class="px-6 py-20 md:px-[59px] lg:pt-[98px]">
        <h2 class="text-[60px] font-black leading-none">Sobre.</h2>

        <p class="mt-10 text-[clamp(20px,2.08vw,30px)] font-extrabold italic">
          24 de maio 2005 / signorelli980@gmail.com
        </p>

        <div class="mt-[18px] max-w-[684px] space-y-4 text-[16px] leading-normal">
          <p v-for="(paragraph, i) in aboutParagraphs" :key="i">
            {{ paragraph }}
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/fernanda-signorelli"
          target="_blank"
          rel="noreferrer"
          class="mt-10 inline-flex items-center gap-5 text-[20px] hover:underline"
        >
          <img src="/img/linkedin.png" alt="LinkedIn" class="size-[50px]" />
          Fernanda Signorelli
        </a>
      </div>

      <img
        src="/img/about.png"
        alt="Retrato de Fernanda Signorelli"
        class="h-full min-h-[560px] w-full object-cover object-bottom lg:h-[956px]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const aboutParagraphs = [
  'Sou Web Designer e desenvolvedora front-end, apaixonada por transformar ideias em experiências digitais claras, funcionais e marcantes.',
  'Minha formação combina design visual, tecnologia e estratégia. Trabalho com interfaces responsivas, prototipação e desenvolvimento, sempre cuidando da usabilidade e da acessibilidade.',
  'Gosto de explorar novas linguagens, colaborar com pessoas e construir soluções em que estética e propósito caminham juntos.',
  'Atualmente, desenvolvo produtos digitais com Vue.js, React, TypeScript e Tailwind CSS, do conceito no Figma à interface publicada.',
]
</script>
