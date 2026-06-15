<template>
  <section class=" bg-primary px-36 py-12 my-28">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <UiStatcard
          v-for="item in stats"
          :key="item.label"
          :value="item.value"
          :label="item.label"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    value: '50+',
    label: 'LAPANGAN TERDAFTAR'
  },
  {
    value: '10+',
    label: 'KOTA TERSEDIA'
  },
  {
    value: '10.000+',
    label: 'BOOKING BERHASIL'
  },
  {
    value: '5.000+',
    label: 'PENGGUNA AKTIF'
  }
]
</script>