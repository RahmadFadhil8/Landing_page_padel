<script setup>
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100 pt-24 pb-24">
    <div class="flex shadow-xl rounded-2xl overflow-hidden w-215 max-w-full bg-white">
        <div class="relative w-95 shrink-0 hidden md:block">
          <img src="~/assets/images/imgRegister.jpg" alt="Padel Player" class="w-full h-full object-cover rounded-l-lg">

          <div class="absolute bottom-7/12 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent">
            <UiBadge>JOIN THE ELITE</UiBadge>
            <h2 class="text-white text-4xl font-bold mb-4">
              Mulai Perjalanan Padel Anda.
            </h2>
            <p class="text-white/80 text-sm mt-1">
              Dapatkan Akses Eksklusif ke lapangan premium, komunitas atletik yang berkembang, dan sistem booking temudah di Indonesia.
            </p>
          </div>
        </div>

        <!-- kanan:form -->
        <div class="flex flex-col justify-center px-10 py-12 flex-1">
            <div class="mb-4">
              <h1 class="text-2xl font-bold">Buat Akun Baru</h1>
              <p class="text">Lengkapi data diri Anda untuk bergabung bersama kami.</p>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <UiFormNama/>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
              <UiFormEmail/>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
              <UiFormTel/>
            </div>

            <!-- password -->
            <div class="mb-6">
              <label class="text-sm font-medium text-gray-700">Kata Sandi</label>
              <UiFormPass/>
            </div>

            <div class="flex gap-2 mb-6">
              <input type="checkbox" name="Syarat" id="">
              <p class="text-sm">Saya menyetujui <span class="text-secondary font-semibold">Syarat dan Ketentuan </span>serta <span class="text-secondary font-semibold">Kebijakan Privasi</span> Padel.</p>
            </div>

            <!-- tombol masuk -->
            <UiButton class="w-full mb-4">Daftar Sekarang</UiButton>

            <!-- devider -->
            <div class="flex items-center gap-3 mb-4">
              <div class="flex-1 h-px bg-gray-200"></div>
              <span class="text-sm text-gray-400">atau daftar dengan</span>
              <div class="flex-1 h-px bg-gray-200"></div>
            </div>

            <!-- tombol google -->
            <UiButtonOutline class="mb-6">
              <img src="~/assets/icon/google.svg" alt="" srcset="" class="h-5 w-5">Daftar dengan Google
            </UiButtonOutline>

            <!-- daftar -->
            <p class="text-sm text-center text-gray-600">
              Sudah Punya Akun? 
              <NuxtLink to="/auth/login" class="text-secondary font-semibold hover:underline">Login Disini</NuxtLink>
            </p>
        </div>
    </div>
  </section>
</template>