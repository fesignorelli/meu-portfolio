<template>
  <section id="skills" class="bg-charcoal text-white">
    <div class="mx-auto min-h-[826px] max-w-[1440px] px-6 py-20 md:px-[101px] md:pt-[78px]">
      <h2 class="scroll-reveal text-[60px] font-black leading-none">Skills.</h2>

      <div
        class="scroll-reveal mt-5 flex flex-wrap gap-[15px] text-[20px]"
        style="transition-delay: 0.1s"
      >
        <span
          v-for="role in roles"
          :key="role"
          class="rounded-[5px] border px-[9px] py-[10px] cursor-default transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
        >
          {{ role }}
        </span>
      </div>

      <h3
        class="scroll-reveal mt-20 text-[60px] font-black leading-none"
        style="transition-delay: 0.1s"
      >
        softwares.
      </h3>

      <div class="mt-3 grid max-w-[1162px] gap-9 md:grid-cols-[1fr_1.5fr]">
        <div class="scroll-reveal" style="transition-delay: 0.2s">
          <h4 class="text-[30px] font-semibold">design</h4>
          <div class="mt-3 flex flex-col gap-4">
            <div
              v-for="skill in designSkills"
              :key="skill.src"
              class="skill-card flex items-center gap-[10px]"
            >
              <span
                class="skill-icon grid h-[62px] w-[70px] shrink-0 place-items-center rounded-[5px]"
              >
                <img :src="skill.src" :alt="skill.alt" class="size-30 object-contain" />
              </span>
              <em class="text-[30px]">{{ skill.level }}</em>
            </div>
          </div>
        </div>

        <div class="scroll-reveal" style="transition-delay: 0.3s">
          <h4 class="text-[30px] font-semibold">programação</h4>
          <div class="mt-3 grid gap-4 xl:grid-cols-2">
            <div
              v-for="skill in programmingSkills"
              :key="skill.src"
              class="skill-card flex items-center gap-[10px]"
            >
              <span
                class="skill-icon grid h-[62px] w-[70px] shrink-0 place-items-center rounded-[5px]"
              >
                <img :src="skill.src" :alt="skill.alt" class="size-30 object-contain" />
              </span>
              <em class="text-[30px]">{{ skill.level }}</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type SkillLevel = 'iniciante' | 'intermediário' | 'avançado'

interface Skill {
  src: string
  alt: string
  level: SkillLevel
}

const roles = ['FRONT-END DEVELOPER', 'UI UX DESIGNER', 'DESIGNER GRAPHIC']

const designSkills: Skill[] = [
  { src: '/img/photoshop.png', alt: 'Photoshop', level: 'intermediário' },
  { src: '/img/figma.png', alt: 'Figma', level: 'avançado' },
]

const programmingSkills: Skill[] = [
  { src: '/img/vue.png', alt: 'Vue.js', level: 'avançado' },
  { src: '/img/react.png', alt: 'React', level: 'intermediário' },
  { src: '/img/bootstrap.png', alt: 'Bootstrap', level: 'avançado' },
  { src: '/img/tailwind.png', alt: 'Tailwind CSS', level: 'avançado' },
]
</script>

<style scoped>
.skill-card {
  cursor: default;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.skill-card:hover {
  transform: translateX(10px);
}

.skill-icon {
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.3s ease;
  background-color: transparent;
}

.skill-card:hover .skill-icon {
  transform: rotate(-8deg) scale(1.15);
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
