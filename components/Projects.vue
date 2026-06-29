<template>
  <section class="bg-charcoal text-white">
    <div
      class="mx-auto flex min-h-[380px] max-w-[1440px] items-center justify-center gap-4 px-6 md:gap-8"
    >
      <strong class="text-[clamp(64px,6.94vw,100px)] leading-none">01.</strong>
      <h2 class="text-[clamp(50px,6.94vw,100px)] font-medium italic leading-none">
        Meus projetos.
      </h2>
    </div>
  </section>

  <section class="min-h-[760px] bg-white px-6 py-[74px] text-center text-charcoal">
    <h2 class="text-[30px] font-black">{{ project.title }}</h2>
    <p class="mt-3 text-[20px]">{{ project.role }}</p>

    <a
      :href="project.url"
      class="mx-auto mt-14 block max-w-[749px] overflow-hidden rounded-[5px] border border-black shadow-[0_4px_4px_rgba(0,0,0,.25)] transition-transform hover:-translate-y-1"
      :aria-label="`Abrir projeto ${project.title}`"
    >
      <img
        :src="project.image"
        :alt="`Tela do projeto ${project.title}`"
        class="w-full object-cover"
      />
    </a>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string
  role: string
  image: string
  url: string
}

const project: Project = {
  title: 'Concessionária Primarca',
  role: 'UI UX & Desenvolvedora Front-end',
  image: '/img/project.png',
  url: '#',
}
</script>
