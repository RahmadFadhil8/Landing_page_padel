import type { Lapangan } from '~/types'

import gambar1 from "~/assets/images/1.png"
import gambar2 from "~/assets/images/2.png"
import gambar3 from "~/assets/images/3.png"
import gambar4 from "~/assets/images/4.png"

export const DataLapangan: Lapangan[] = [
    {
        gambar:gambar1,
        judul:"Bali Padel Club",
        alamat:"Canggu, Bali",
        rating:"5.0",
        harga:300000,
        id:1,
        deskripsi:
            "Bali Padel Club menawarkan pengalaman bermain padel premium di kawasan Canggu. Dengan lapangan berkualitas internasional dan suasana tropis yang nyaman, tempat ini menjadi pilihan favorit bagi pemain lokal maupun wisatawan.",
        fasilitas: [
            "Parkir Luas",
            "Ruang Ganti",
            "Shower Air Panas",
            "Kafe & Lounge"
        ]
    },
    {
        gambar:gambar2,
        judul:"Padel Arena Jakarta",
        alamat:"Jakarta Selatan",
        rating:"4.9",
        harga:250000,
        id:4,
        deskripsi:
            "Surabaya Sport Hub merupakan pusat olahraga modern yang menyediakan lapangan padel dengan standar tinggi. Lokasinya strategis dan mudah dijangkau dari berbagai wilayah kota.",
        fasilitas: [
            "Parkir Luas",
            "Locker Penyimpanan",
            "Musala",
            "Area Food Court"
        ]
    },
    {
        gambar:gambar3,
        judul:"Court Side Padel",
        alamat:"Bandung",
        rating:"4.8",
        harga:220000,
        id:3,
        deskripsi:
            "Court Side Padel menghadirkan lapangan nyaman dengan udara sejuk khas Bandung. Tempat ini cocok bagi pemain pemula maupun profesional yang ingin menikmati permainan berkualitas.",
        fasilitas: [
            "Kantin",
            "Ruang Istirahat",
            "Toilet Bersih",
            "Penyewaan Bola"
        ]
    },
    {
        gambar:gambar4,
        judul:"Surabaya Sport Hub",
        alamat:"Surabaya",
        rating:"4.7",
        harga:200000,
        id:2,
        deskripsi:
            "Padel Arena Jakarta hadir dengan fasilitas modern di pusat kota. Cocok untuk latihan rutin, pertandingan komunitas, maupun kegiatan olahraga bersama keluarga dan teman.",
        fasilitas: [
            "Area Parkir",
            "WiFi Gratis",
            "Tribun Penonton",
            "Rental Raket"
        ]
    }
]