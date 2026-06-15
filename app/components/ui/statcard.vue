<template>
  <div class="text-center">

    <h3 class="text-4xl font-bold text-secondary">
      {{ value }}
    </h3>

    <p class="text-gray-400 mt-2">
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>