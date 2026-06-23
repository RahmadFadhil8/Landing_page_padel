<template>
    <section class="px-36">
        <div class="pt-28 mb-4">
            <h1 class="font-bold text-4xl mb-2">Cari Lapangan</h1>
            <p class="text-lg">Temukan lapangan padel terbaik disekitarmu dengan harga kompetitif.</p>
        </div>
        <div class="mb-10">
            <CardsCourtTablefilter/>
            <div class="grid grid-cols-4 gap-4 mt-6">
                <CardsCourtProduct
                v-for="nilai in Data"
                :key="nilai.judul"
                :lapangan="nilai"
                />
            </div>
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
    },
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
    },
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
    },
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
    },
]
</script>