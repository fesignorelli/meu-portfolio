<template>
  <section class="bg-white text-charcoal">
    <div
      class="mx-auto grid min-h-[760px] max-w-[1440px] gap-16 px-6 py-[70px] md:px-[102px] lg:grid-cols-2 lg:gap-[122px]"
    >
      <article>
        <h2 class="text-[clamp(44px,4.17vw,60px)] font-black leading-none">experiências.</h2>
        <p class="mt-3 text-[25px] italic">Janeiro 2025 - Atual</p>
        <h3 class="mt-1 text-[30px] font-bold leading-tight">
          Websupply - Desenvolvimento<br />Front-end e UI/UX Design
        </h3>

        <div class="mt-4 space-y-3 text-[15px] leading-normal text-black">
          <p v-for="item in experience" :key="item.title">
            <strong>{{ item.title }}</strong> {{ item.description }}
          </p>
        </div>
      </article>

      <!-- Formação -->
      <article>
        <h2 class="text-[clamp(44px,4.17vw,60px)] font-black leading-none">formação.</h2>
        <p class="mt-3 text-[25px] italic">Agosto 2025 à Agosto 2027</p>
        <h3 class="mt-1 text-[30px] font-bold">Web Design - Fiap</h3>

        <div class="mt-2 space-y-3 text-[15px] leading-normal text-black">
          <p class="font-bold">
            Vencedora da Global Solution — 1º semestre, com o projeto Melware.
          </p>
          <p v-for="item in education" :key="item.title">
            <strong>{{ item.title }}</strong> {{ item.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface InfoItem {
  title: string
  description: string
}

const experience: InfoItem[] = [
  {
    title: 'Desenvolvimento Front-End Avançado:',
    description: 'Vue.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS e Bootstrap.',
  },
  {
    title: 'Otimização e Performance:',
    description: 'Lazy Loading, minificação e boas práticas para alto desempenho.',
  },
  {
    title: 'UI/UX e Acessibilidade:',
    description: 'Design responsivo, heurísticas de usabilidade e diretrizes WCAG.',
  },
  {
    title: 'Prototipação e Design:',
    description: 'Protótipos funcionais no Figma, fluxos e componentes.',
  },
  {
    title: 'Metodologias Ágeis e Ferramentas:',
    description: 'Jira, GitHub, sprints, backlog e code review.',
  },
  {
    title: 'Colaboração:',
    description: 'Trabalho em equipe alinhando negócio, design e tecnologia.',
  },
]

const education: InfoItem[] = [
  {
    title: 'Desenvolvimento Front-End & Frameworks:',
    description: 'HTML5, CSS, JavaScript, Bootstrap e React.',
  },
  {
    title: 'Design & Experiência Total (TX):',
    description: 'Projetos responsivos com foco em UI/UX e acessibilidade.',
  },
  {
    title: 'E-Business & E-Commerce:',
    description: 'Design digital para e-commerces e marketplaces.',
  },
  { title: 'Infraestrutura Cloud & Hosting:', description: 'Azure, AWS e Vercel.' },
  { title: 'Estratégia Digital:', description: 'Marketing Digital, SEO e Social Media.' },
  { title: 'Inovação e Tecnologia:', description: 'IA, chatbots e aplicativos mobile híbridos.' },
  { title: 'Gestão & Metodologia:', description: 'Scrum, Gestão de Projetos e Empreendedorismo.' },
  { title: 'Dados:', description: 'Modelagem, integração e análise de dados para web.' },
]
</script>
