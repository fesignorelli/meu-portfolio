<template>
  <header class="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
    <nav
      class="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-14 lg:px-[105px]"
    >
      <a
        href="#"
        class="nav-logo inline-flex items-center gap-1 text-[24px] leading-none tracking-[-.04em] text-[#272521]"
      >
        <strong class="font-black text-pink-dark">PORT</strong>FOLIO
        <svg viewBox="0 0 24 24" aria-hidden="true" class="nav-logo__star size-3 text-pink-deep">
          <path fill="currentColor" :d="sparklePath" />
        </svg>
      </a>

      <ul class="hidden items-center gap-8 text-[16px] text-[#272521] md:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link">
            <span class="nav-link__text">{{ link.label }}</span>
          </a>
        </li>
      </ul>

      <button
        class="md:hidden"
        :aria-expanded="isOpen"
        :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="isOpen = !isOpen"
      >
        <span
          class="block h-[2px] w-7 rounded-full bg-pink-deep transition-transform"
          :class="isOpen && 'translate-y-[7px] rotate-45'"
        />
        <span
          class="mt-[5px] block h-[2px] w-7 rounded-full bg-pink-deep transition-opacity"
          :class="isOpen && 'opacity-0'"
        />
        <span
          class="mt-[5px] block h-[2px] w-7 rounded-full bg-pink-deep transition-transform"
          :class="isOpen && '-translate-y-[7px] -rotate-45'"
        />
      </button>
    </nav>

    <ul
      v-show="isOpen"
      class="flex flex-col gap-1 border-t border-pink-light px-6 py-4 text-[18px] text-[#272521] md:hidden"
    >
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          class="flex items-center gap-2 py-2 transition-colors hover:text-pink-deep"
          @click="isOpen = false"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" class="size-3 text-pink-dark">
            <path fill="currentColor" :d="sparklePath" />
          </svg>
          {{ link.label }}
        </a>
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

const sparklePath =
  'M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z'

const links: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Social Media', href: '#social' },
]
</script>

<style scoped>
.nav-logo__star {
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-logo:hover .nav-logo__star {
  transform: rotate(180deg) scale(1.3);
}

.nav-link__text {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  padding-bottom: 2px;
  transition:
    background-size 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.3s ease;
}

.nav-link:hover .nav-link__text,
.nav-link:focus-visible .nav-link__text {
  color: theme('colors.pink.deep');
  background-size: 100% 2px;
}

@media (prefers-reduced-motion: reduce) {
  .nav-logo__star,
  .nav-link__text {
    transition: none;
  }
}
</style>
