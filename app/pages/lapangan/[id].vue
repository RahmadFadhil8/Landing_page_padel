<template>
    <section class="px-36 pt-20 mb-20">
        <div class="my-4">
            <h1 class="text-5xl font-bold">{{ Data?.judul }}</h1>
            <div class="flex gap-4 items-center">
                <div class="flex gap-2 items-center">
                    <img src="~/assets/icon/star.svg" alt="" class="h-4 w-4">
                    <p class="text-lg font-semibold">{{ Data?.rating }}</p>
                </div>
                <div class="flex gap-2 items-center">
                    <img src="~/assets/icon/location.svg" alt="" class="h-4 w-4">
                    <p class="text-lg font-semibold">{{ Data?.alamat }}</p>
                </div>
            </div>
        </div>

        <img :src="Data?.gambar" :alt="Data?.judul" class="rounded-2xl mb-4">
        <div>
            <h2 class="text-2xl font-bold">Deskripsi Lapangan</h2>
            <p class="text-lg mt-2 mb-4">{{ Data?.deskripsi }}</p>
        </div>

        <div class="grid grid-cols-4 gap-2">
            <UiCard
            v-for="item in Data?.fasilitas" :key="item" class="text-center p-10">
                {{ item }}
            </UiCard>
        </div>


    </section>
</template>
<script setup lang="ts">
import { MatcherPatternPathDynamic } from 'vue-router/experimental';
import {DataLapangan} from '~/data/lapangan';


const LapanganId = Number(useRoute().params.id);

const Data = DataLapangan.find(
    item => item.id === LapanganId
)

</script>