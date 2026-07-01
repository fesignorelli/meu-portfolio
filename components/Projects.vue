<template>
  <section class="bg-charcoal text-white">
    <div
      class="scroll-reveal mx-auto flex min-h-[380px] max-w-[1440px] items-center justify-center gap-4 px-6 md:gap-8"
    >
      <h2 class="text-[clamp(50px,6.94vw,100px)] font-medium italic leading-none">
        Meus projetos.
      </h2>
    </div>
  </section>

  <section id="projetos" class="bg-white text-charcoal">
    <div
      v-for="(project, index) in projects"
      :key="project.title"
      class="scroll-reveal mx-auto grid max-w-[1440px] items-center gap-0 border-b border-charcoal/10 px-6 py-16 md:px-[102px] lg:grid-cols-2 lg:gap-20 lg:py-24"
      :style="`transition-delay: ${index * 0.1}s`"
    >
      <!-- Imagem: alterna lado em projetos pares/ímpares -->
      <div class="overflow-hidden rounded-[5px]" :class="index % 2 !== 0 ? 'lg:order-last' : ''">
        <a
          :href="project.url"
          :aria-label="`Abrir projeto ${project.title}`"
          class="group block overflow-hidden"
        >
          <img
            :src="project.image"
            :alt="`Tela do projeto ${project.title}`"
            class="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </a>
      </div>

      <!-- Texto -->
      <div :class="index % 2 !== 0 ? 'lg:order-first' : ''">
        <span class="text-[13px] font-medium tracking-[0.15em] uppercase text-charcoal/40">
          {{ String(index + 1).padStart(2, '0') }}
        </span>

        <h2 class="mt-2 text-[clamp(28px,3vw,44px)] font-black leading-tight">
          {{ project.title }}
        </h2>

        <p class="mt-1 text-[16px] italic text-charcoal/60">{{ project.role }}</p>

        <p class="mt-5 text-[15px] leading-relaxed text-charcoal/70">
          {{ project.description }}
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tech in project.techs"
            :key="tech"
            class="rounded-[4px] bg-charcoal/5 px-3 py-1 text-[12px] font-medium tracking-wide"
          >
            {{ tech }}
          </span>
        </div>

        <a
          v-if="project.url !== '#'"
          :href="project.url"
          target="_blank"
          rel="noreferrer"
          class="mt-8 inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.1em] hover:underline"
        >
          Ver projeto
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string
  role: string
  description: string
  techs: string[]
  image: string
  url: string
}

const projects: Project[] = [
  {
    title: 'Concessionária Primarca Chevrolet',
    role: 'UI UX & Desenvolvedora Front-end',
    description:
      'Projeto profissional desenvolvido para a Primarca Chevrolet, concessionária de veículos. Fui responsável pelo design de interface e pelo desenvolvimento front-end completo, criando uma experiência moderna e responsiva para os clientes da marca.',
    techs: ['HTML', 'JavaScript', 'Tailwind CSS', 'Figma'],
    image: '/img/primarca.png',
    url: 'https://www.primarca.com.br/',
  },
  {
    title: 'Portal Remaza Web',
    role: 'Desenvolvedora Front-end',
    description:
      'Projeto profissional desenvolvido para a Remaza, empresa de consórcio. Atuei como desenvolvedora front-end na criação do portal do cliente, onde os consorciados podem acessar e gerenciar seus bens de consórcio de forma simples e intuitiva.',
    techs: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    image: '/img/remaza.png',
    url: 'https://portal.remaza.com.br/login',
  },
  {
    title: 'Melware',
    role: 'UI UX & Direção Visual — 1º lugar Global Solution FIAP',
    description:
      'Projeto acadêmico premiado na Global Solution da FIAP. O Melware é uma plataforma gamificada de conscientização sobre cibersegurança, que transforma o aprendizado sobre ameaças digitais em uma experiência interativa e envolvente — conquistando o 1º lugar na competição.',
    techs: ['UI/UX Design', 'HTML', 'CSS', 'JavaScript', 'Figma'],
    image: '/img/melware.png',
    url: 'https://melware.vercel.app',
  },
  {
    title: 'Astralis',
    role: 'UI UX & Direção Visual — 1º lugar Global Solution FIAP',
    description:
      'Projeto acadêmico premiado na Global Solution da FIAP. O Astralis é uma rede social em tempo real que conecta o espaço à Terra, permitindo que entusiastas e cientistas compartilhem descobertas astronômicas ao vivo. Ficou em 1º lugar e está publicado em astrali.vercel.app.',
    techs: ['UI/UX Design', 'React.js', 'Tailwind', 'Vercel'],
    image: '/img/astralis.png',
    url: 'https://astrali.vercel.app',
  },
  {
    title: 'Health Sync Solutions',
    role: 'UI UX & Direção Visual — Destaque Enterprise Challenge FIAP',
    description:
      'Projeto acadêmico premiado no Enterprise Challenge da FIAP. O Health Sync Solutions é uma plataforma de credenciamento médico com automação e segurança, que reduz semanas de burocracia a horas, elimina riscos legais por documentação irregular e mantém equipes focadas no essencial — com validação automática direto nos conselhos de saúde.',
    techs: ['UI/UX Design', 'Figma', 'HTML', 'CSS', 'JavaScript'],
    image: '/img/hss.png',
    url: 'https://health-sync-solutions-weld.vercel.app/#calculadora-roi',
  },
]
</script>
