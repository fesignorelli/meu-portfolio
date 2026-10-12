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
      d="M8.34 17.5H5.9V9.66h2.44v7.84ZM7.12 8.6a1.41 1.41 0 1 1 0-2.83 1.41 1.41 0 0 1 0 2.83ZM18.5 17.5h-2.43v-3.81c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.01v3.88H10.9V9.66h2.33v1.07h.03c.33-.62 1.12-1.27 2.31-1.27 2.47 0 2.92 1.62 2.92 3.74v4.3Z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps<{ size?: number }>()
</script>
