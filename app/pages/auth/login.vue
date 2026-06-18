<script setup>
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100 pt-24 pb-24">
    <div class="flex shadow-xl rounded-2xl overflow-hidden w-215 max-w-full bg-white">
        <div class="relative w-95 shrink-0 hidden md:block">
          <img src="~/assets/images/imgLogin.jpg" alt="Padel Player" class="w-full h-full object-cover rounded-l-lg">

          <div class="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent">
            <h2 class="text-white text-xl font-bold">
              Dominasi Lapangan.
            </h2>
            <p class="text-white/80 text-sm mt-1">
              Masuk untuk mengatur jadwal tanding dan booking lapangan favoritmu
            </p>
          </div>
        </div>

        <!-- kanan:form -->
        <div class="flex flex-col justify-center px-10 py-12 flex-1">
            <div class="mb-4">
              <h1 class="text-2xl font-bold">Selamat Datang Kembali</h1>
              <p class="text">Silakan Masuk Ke akun Anda.</p>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
              <UiFormEmail/>
            </div>

            <!-- password -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-1">
                <label class="text-sm font-medium text-gray-700">Kata Sandi</label>
                <NuxtLink to="/" class="text-sm text-secondary hover:underline font-medium">
                  Lupa Password?
                </NuxtLink>
              </div>
              <UiFormPass/>
            </div>

            <!-- tombol masuk -->
            <UiButton class="w-full mb-4">Masuk</UiButton>

            <!-- devider -->
            <div class="flex items-center gap-3 mb-4">
              <div class="flex-1 h-px bg-gray-200"></div>
              <span class="text-sm text-gray-400">atau masuk dengan</span>
              <div class="flex-1 h-px bg-gray-200"></div>
            </div>

            <!-- tombol google -->
            <UiButtonOutline class="mb-6">
              <img src="~/assets/icon/google.svg" alt="" srcset="" class="h-5 w-5"> Google
            </UiButtonOutline>

            <!-- daftar -->
            <p class="text-sm text-center text-gray-600">
              Belum Punya Akun? 
              <NuxtLink to="/auth/register" class="text-secondary font-semibold hover:underline">Daftar Sekarang</NuxtLink>
            </p>
        </div>
    </div>
  </section>
</template>