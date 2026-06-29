<!-- components/TheNavbar.vue -->
<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
    <nav
      class="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-14 lg:px-[105px]"
    >
      <!-- Logo -->
      <a href="#hero" class="text-[24px] leading-none tracking-[-.04em]">
        <strong class="font-black">FS</strong><span>.</span>
      </a>

      <!-- Links desktop -->
      <ul class="hidden items-center gap-8 text-[16px] md:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="transition-opacity hover:opacity-50">{{ link.label }}</a>
        </li>
      </ul>

      <!-- Botão mobile -->
      <button
        class="md:hidden"
        :aria-expanded="isOpen"
        aria-label="Abrir menu"
        @click="isOpen = !isOpen"
      >
        <span
          class="block h-px w-7 bg-black transition-transform"
          :class="isOpen && 'translate-y-[6px] rotate-45'"
        />
        <span
          class="mt-[5px] block h-px w-7 bg-black transition-opacity"
          :class="isOpen && 'opacity-0'"
        />
        <span
          class="mt-[5px] block h-px w-7 bg-black transition-transform"
          :class="isOpen && '-translate-y-[6px] -rotate-45'"
        />
      </button>
    </nav>

    <!-- Menu mobile -->
    <ul
      v-show="isOpen"
      class="flex flex-col gap-1 border-t border-black/10 px-6 py-4 text-[18px] md:hidden"
    >
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" class="block py-2" @click="isOpen = false">{{ link.label }}</a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NavLink {
  label: string
  href: string
}

const isOpen = ref(false)

const links: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
]
</script>
