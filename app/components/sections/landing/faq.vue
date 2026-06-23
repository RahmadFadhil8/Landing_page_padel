<template>
    <section class="px-36 my-40" id="faq">
        <div class="flex flex-col items-center justify-center gap-8">
            <h4 class="font-bold text-center text-3xl">Pertanyaan Populer</h4>
            <div class="w-full max-w-4xl flex flex-col gap-4">
                
                <div v-for="(faq, index) in DataFaq" :key="index" class="border rounded-xl bg-white shadow-sm overflow-hidden transition-colors duration-300 border-gray-200">
                    <button @click="TombolFAQ(index)" class="flex justify-between w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
                        <h3>{{ faq.pertanyaan }}</h3>
                        <img src="~/assets/icon/faq.svg" class="transition-transform duration-300 h-6 w-6":class="indexActive === index ? 'rotate-180' : ''" alt="icon">
                    </button>

                    <div v-show="indexActive === index" class="px-6 py-4">
                        <p>{{ faq.jawaban }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<script setup lang="ts">
import type { Faq } from '~/types';

const indexActive = ref<number | null>(null);

const DataFaq = ref<Faq[]>([
    {
        pertanyaan:"Bagaimana cara melakukan booking?",
        jawaban:"Cukup pilih lapangan yang Anda inginkan, tentukan tanggal dan jam tayang, pilih metode pembayaran, dan lakukan pembayaran. Setelah berhasil, Anda akan menerima kode booking email dan aplikasi."
    },
    {
        pertanyaan:"Metode pembayaran apa saja yang tersedia?",
        jawaban:"Kami mendukung berbagai metode pembayaran mulai dari Virtual Account (BCA, Mandiri, BNI), E-Wallet (GoPay, OVO, Dana), hingga kartu kredit."
    },
    {
        pertanyaan:"Apakah saya bisa membatalkan booking?",
        jawaban:"Ya, pembatalan dapat dilakukan minimal 24 jam sebelum jadwal pertandingan. Dana akan dikembalikan ke saldo Padel atau rekening asal (tergantung kebijakan masing-masing lapangan)"
    },
    {
        pertanyaan:"Apakah tersedia penyewaan alat (Raket & Bola)?",
        jawaban:"Hampir semua lapangan yang terdaftar di padel menyediakan fasilitas penyewaan raket dan penjualan bola. Anda bisa mencentang opsi `Sewa Raket` saat proses booking."
    },
    {
        pertanyaan:"Berapa jam operasional padelhub",
        jawaban:"Aplikasi dan platform booking kami tersedia 24/7. Untuk jam operasional lapangan bervariasi, namun umumnya buka mulai pukul 06:00 hingga 23:00 WIB"
    },
])

const TombolFAQ = (index:number) => {
    indexActive.value = indexActive.value === index ? null : index;
}
</script>