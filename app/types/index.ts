type Lapangan = {
    gambar:string;
    judul:string;
    alamat:string;
    rating:string;
    harga:number;
}

type Testimoni = {
    rating: string;
    testimo: string;
    namaUser: string;
    profil: string;
}

type Faq = {
    pertanyaan:string;
    jawaban:string;
}
export type {Lapangan, Testimoni, Faq}