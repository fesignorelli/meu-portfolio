<template>
  <div class="h-[100px] overflow-hidden bg-black text-white" aria-label="Boas-vindas">
    <div
      class="marquee-track flex h-full w-max items-center whitespace-nowrap font-inter text-[25px]"
    >
      <p v-for="i in REPEAT_COUNT" :key="i" class="px-5">
        bem vindo ao meu <strong class="italic">portfólio</strong>, vamos trabalhar juntos!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const REPEAT_COUNT = 6
</script>
