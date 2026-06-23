<template>
  <section class=" bg-primary px-36 py-12 my-28">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div v-for="item in stats">
          <div class="text-center">

            <h3 class="text-4xl font-bold text-secondary">
              {{ item.value }}
            </h3>

            <p class="text-gray-400 mt-2">
              {{ item.label }}
            </p>
          </div>
        </div>
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