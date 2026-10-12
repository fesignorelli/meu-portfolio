<template>
  <section class="relative overflow-hidden bg-pink-deep text-white">
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

    <div
      class="scroll-reveal relative mx-auto flex min-h-[380px] max-w-[1440px] items-center justify-center gap-4 px-6 md:gap-8"
    >
      <h2 class="text-[clamp(50px,6.94vw,100px)] font-black italic leading-none">Meus projetos.</h2>
    </div>
  </section>

  <section id="projetos" class="paper-texture bg-cream text-[#272521]">
    <div class="mx-auto max-w-[1440px] px-6 py-20 md:px-[102px] lg:py-24">
      <div v-for="(group, g) in projectGroups" :key="group.title" :class="g > 0 ? 'mt-24' : ''">
        <h3 class="scroll-reveal text-[60px] font-black leading-none text-pink-dark">
          {{ group.title }}
        </h3>

        <div
          v-for="(project, index) in group.projects"
          :key="project.title"
          class="project-row scroll-reveal group grid items-center gap-8 border-b border-pink-light py-14 last:border-b-0 lg:grid-cols-2 lg:gap-20 lg:py-20"
        >
          <!-- Imagem: alterna lado em projetos pares/ímpares -->
          <a
            :href="project.url"
            target="_blank"
            rel="noreferrer"
            :aria-label="`Abrir projeto ${project.title}`"
            class="project-frame block rounded-2xl border-[1.5px] border-pink-light bg-peach p-3 md:p-4"
            :class="index % 2 !== 0 ? 'lg:order-last' : ''"
          >
            <!-- Moldura: barra de janela do navegador -->
            <span class="mb-3 flex items-center gap-1.5" aria-hidden="true">
              <span class="size-2.5 rounded-full bg-pink-deep" />
              <span class="size-2.5 rounded-full bg-pink-dark" />
              <span class="size-2.5 rounded-full bg-pink-light" />
            </span>

            <span class="block overflow-hidden rounded-xl">
              <img
                :src="project.image"
                :alt="`Tela do projeto ${project.title}`"
                class="aspect-[16/10] w-full object-cover"
              />
            </span>
          </a>

          <!-- Texto -->
          <div>
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 text-pink-deep">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="project-row__star size-4">
                  <path fill="currentColor" :d="sparklePath" />
                </svg>
                <span class="text-[13px] font-bold tracking-[0.15em]">
                  {{ String(project.number).padStart(2, '0') }}
                </span>
              </span>

              <span
                v-if="project.award"
                class="rounded-full bg-pink-light px-3 py-1 text-[12px] font-bold uppercase tracking-wide"
              >
                {{ project.award }}
              </span>
            </div>

            <h2 class="mt-2 text-[clamp(28px,3vw,44px)] font-black leading-tight">
              {{ project.title }}
            </h2>

            <p class="mt-1 text-[16px] italic text-[#272521]/70">{{ project.role }}</p>

            <p class="mt-5 text-[15px] leading-relaxed text-[#272521]/80">
              {{ project.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.techs"
                :key="tech"
                class="rounded-full border-[1.5px] border-pink-deep px-3 py-1 text-[12px] font-semibold tracking-wide text-pink-deep"
              >
                {{ tech }}
              </span>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                v-if="project.url !== '#'"
                :href="project.url"
                target="_blank"
                rel="noreferrer"
                class="project-row__cta inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.1em] text-pink-deep"
              >
                <span class="project-row__cta-text">Ver projeto</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="project-row__arrow"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>

              <a
                v-if="project.certificate"
                :href="project.certificate"
                target="_blank"
                type="application/pdf"
                rel="noreferrer"
                class="project-row__cta inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.1em] text-pink-deep"
              >
                <span class="project-row__cta-text">Ver certificado</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="project-row__arrow"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sparklePath =
  'M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z'

const stars = [
  { class: 'left-[8%] top-[60px] size-10', delay: '0s' },
  { class: 'left-[18%] bottom-[70px] size-6', delay: '1.4s' },
  { class: 'left-[30%] top-[40px] size-4', delay: '0.7s' },
  { class: 'right-[10%] top-[80px] size-12', delay: '0.4s' },
  { class: 'right-[22%] bottom-[50px] size-7', delay: '2s' },
  { class: 'right-[34%] top-[50px] size-5', delay: '1s' },
  { class: 'left-[42%] bottom-[40px] size-5', delay: '1.8s' },
]

interface Project {
  title: string
  role: string
  description: string
  techs: string[]
  image: string
  url: string
  type: 'profissional' | 'academico'
  award?: string
  certificate?: string
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
    type: 'profissional',
  },
  {
    title: 'Portal Remaza Web',
    role: 'Desenvolvedora Front-end',
    description:
      'Projeto profissional desenvolvido para a Remaza, empresa de consórcio. Atuei como desenvolvedora front-end na criação do portal do cliente, onde os consorciados podem acessar e gerenciar seus bens de consórcio de forma simples e intuitiva.',
    techs: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    image: '/img/remaza.png',
    url: 'https://portal.remaza.com.br/login',
    type: 'profissional',
  },
  {
    title: 'Melware',
    role: 'UI UX & Direção Visual — 1º lugar Global Solution FIAP',
    description:
      'Projeto acadêmico premiado na Global Solution da FIAP. O Melware é uma plataforma gamificada de conscientização sobre cibersegurança, que transforma o aprendizado sobre ameaças digitais em uma experiência interativa e envolvente — conquistando o 1º lugar na competição.',
    techs: ['UI/UX Design', 'HTML', 'CSS', 'JavaScript', 'Figma'],
    image: '/img/melware.png',
    award: '1º lugar Global Solution FIAP',
    url: 'https://melware.vercel.app',
    certificate: '/gs-2025-melware.pdf',
    type: 'academico',
  },
  {
    title: 'Astralis',
    role: 'UI UX & Direção Visual — 1º lugar Global Solution FIAP',
    description:
      'Projeto acadêmico premiado na Global Solution da FIAP. O Astralis é uma rede social em tempo real que conecta o espaço à Terra, permitindo que entusiastas e cientistas compartilhem descobertas astronômicas ao vivo. Ficou em 1º lugar e está publicado em astrali.vercel.app.',
    techs: ['UI/UX Design', 'React.js', 'Tailwind', 'Vercel'],
    image: '/img/astralis.png',
    award: '1º lugar Global Solution FIAP',
    url: 'https://astrali.vercel.app',
    certificate: '/gs-2026-astralis.pdf',
    type: 'academico',
  },
  {
    title: 'Health Sync Solutions',
    role: 'UI UX & Direção Visual — Destaque Enterprise Challenge FIAP',
    description:
      'Projeto acadêmico premiado no Enterprise Challenge da FIAP. O Health Sync Solutions é uma plataforma de credenciamento médico com automação e segurança, que reduz semanas de burocracia a horas, elimina riscos legais por documentação irregular e mantém equipes focadas no essencial — com validação automática direto nos conselhos de saúde.',
    techs: ['UI/UX Design', 'Figma', 'HTML', 'CSS', 'JavaScript'],
    image: '/img/hss.png',
    award: 'Destaque',
    url: 'https://health-sync-solutions-weld.vercel.app/#calculadora-roi',
    type: 'academico',
  },
]

const numberedProjects = projects.map((project, i) => ({ ...project, number: i + 1 }))

const projectGroups = [
  {
    title: 'profissionais.',
    projects: numberedProjects.filter((p) => p.type === 'profissional'),
  },
  {
    title: 'acadêmicos.',
    projects: numberedProjects.filter((p) => p.type === 'academico'),
  },
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

.project-row__star {
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-row:hover .project-row__star {
  transform: rotate(180deg) scale(1.2);
}

.project-row__cta-text {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  padding-bottom: 2px;
  transition: background-size 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-row__cta:hover .project-row__cta-text,
.project-row__cta:focus-visible .project-row__cta-text {
  background-size: 100% 2px;
}

.project-row__arrow {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-row__cta:hover .project-row__arrow {
  transform: translate(3px, -3px);
}

@media (prefers-reduced-motion: reduce) {
  .sparkle,
  .project-row__star,
  .project-row__cta-text,
  .project-row__arrow {
    animation: none;
    transition: none;
  }
}
</style>
