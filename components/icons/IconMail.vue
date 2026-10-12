<template>
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    fill="currentColor"
    display="inline-block"
    overflow="visible"
  >
    <circle cx="12" cy="12" r="12" />
    <path
      fill="#fff"
      d="M7.5 7.5h9a1.25 1.25 0 0 1 1.25 1.25v.2L12 12.4 6.25 8.95v-.2A1.25 1.25 0 0 1 7.5 7.5Zm-1.25 3v4.75A1.25 1.25 0 0 0 7.5 16.5h9a1.25 1.25 0 0 0 1.25-1.25V10.5l-5.36 3.22a.75.75 0 0 1-.78 0L6.25 10.5Z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps<{ size?: number }>()
</script>
