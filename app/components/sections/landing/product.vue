<template>
    <section class="flex flex-col gap-8 px-36 my-40">
        <div class="flex justify-between">
            <div>
                <h6 class="text-2xl font-bold mb-1">Lapangan Terpopuler</h6>
                <p class="text-gray-400">Pilih Lapangan terbaik dengan fasilitas premium</p>
            </div>
            <div class="flex items-end text-gray-400">
                <NuxtLink to="/" class="flex gap-2">
                    lihat semua
                    <img src="~/assets/icon/link.svg" alt="" class="h-5 w-5 mt-0.5 opacity-40">
                </NuxtLink>
            </div>
        </div>
        <div class="flex gap-4">
            <UiCard
            v-for="nilai in Data"
            :key="nilai.judul"
            :lapangan="nilai"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Lapangan } from '~/types';
import gambar1 from "~/assets/images/1.png"
import gambar2 from "~/assets/images/2.png"
import gambar3 from "~/assets/images/3.png"
import gambar4 from "~/assets/images/4.png"

const Data: Lapangan[] = [
    {
        gambar:gambar1,
        judul:"Bali Padel Club",
        alamat:"Canggu, Bali",
        rating:"5.0",
        harga:300000
    },
    {
        gambar:gambar2,
        judul:"Padel Arena Jakarta",
        alamat:"Jakarta Selatan",
        rating:"4.9",
        harga:250000
    },
    {
        gambar:gambar3,
        judul:"Court Side Padel",
        alamat:"Bandung",
        rating:"4.8",
        harga:220000
    },
    {
        gambar:gambar4,
        judul:"Surabaya Sport Hub",
        alamat:"Surabaya",
        rating:"4.7",
        harga:200000
    }
]
</script>