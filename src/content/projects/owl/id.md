---
title: "OWL: Tanda Tangan Digital Pasca-Kuantum GMW-FS"
description: "Merumuskan aksi grup dari masalah isomorfisme modul lattice (HAWK) dalam paradigma GMW-FS, mengimplementasikan varian tanda tangan PQC yang dioptimalkan dalam Python."
category: "Systems"
tags: ["Kriptografi", "Aksi Grup", "Kriptografi Lattice", "C", "Python", "Fiat-Shamir"]
metrics: "Mengonstruksi Varian OWL-LITE & OWL-ONE"
github: "https://github.com/fritzadelbertus/owl-gmw-fs"
featured: true
---

## Ringkasan

Menjembatani ilmu kriptografi berbasis aksi grup dan berbasis lattice dengan merumuskan permasalahan isomorfisme modul lattice (mLIP) dari HAWK ke dalam kerangka tanda tangan Goldreich-Micali-Wigderson Fiat-Shamir (GMW-FS). Merancang, mengimplementasikan, dan mengoptimalkan protokol tanda tangan yang dihasilkan ke dalam varian praktis (OWL-LITE dan OWL-ONE), yang menunjukkan pengurangan signifikan dalam penggunaan memori dan komputasi.


## Masalah dan Motivasi

Dengan komputasi kuantum yang mengancam kriptografi kunci publik klasik (RSA/ECC), kriptografi pascakuantum memanfaatkan permasalahan sulit lain seperti lattice dan aksi grup. Sementara skema seperti ALTEQ memanfaatkan aksi grup atas masalah isomorfisme tensor (ATFE), masalah sulit lainnya seperti isomorfisme modul lattice yang mendasari HAWK tidak memiliki formulasi eksplisit dalam paradigma GMW-FS yang fleksibel. Tujuan penelitian ini adalah untuk menyatukan domain-domain ini dengan menurunkan aksi grup dari struktur lattice HAWK, membangun protokol identifikasi tanpa pengetahuan (zero-knowledge), menerapkan transformasi Fiat-Shamir, dan mengoptimalkan hasil implementasi.


## Pendekatan Matematika & Pemrograman

### Konstruksi Aksi Grup
Menganalisis struktur kunci rahasia yang dihasilkan di HAWK untuk mendefinisikan aksi grup alami atas objek modul lattice, menciptakan aksi grup analog langsung dengan pendekatan isomorfisme tensor ALTEQ.

### Dari Skema Identifikasi ke Skema Tanda Tangan
Mengintegrasikan aksi grup ini ke dalam kerangka identifikasi GMW dan mengubahnya menjadi skema tanda tangan digital non-interaktif menggunakan Transformasi Fiat-Shamir.

### Optimasi Hasil
* OWL-LITE: Konfigurasi parameter yang disesuaikan untuk mencapai memori minimal dan ukuran tanda tangan yang singkat pada tingkat keamanan yang ditargetkan.
* OWL-ONE: Memanfaatkan orbit aksi grup khusus untuk menghilangkan transformasi aljabar yang berlebihan, sehingga meningkatkan efisiensi verifikasi secara drastis.

## Hasil Performa
Performa antara ALTEQ, HAWK and OWL
| | ALTEQ | HAWK | OWL |
| :--- | :--- | :--- | :--- |
| Memori (bytes) | | | |
| Kunci Publik | 12095 | 1024 | 65536 |
| Kunci Rahasia | 32 | 184 | 57344 |
| Tanda Tangan | 25631 | 555 | 688160 |
| Waktu (detik) | | | |
| Generasi Kunci | 0.0252 | 2.6096 | 13.2670 |
| Penandatanganan | 0.3262 | 0.0350 | 135.2957 |
| Verifikasi | 0.2660 | 1.7677 | 5.0198 |

Variasi OWL yang dioptimasi (dibandingkan terhadap HAWK)

| | HAWK | OWL-LITE | | OWL-ONE | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Memori (bytes) | | | | |
| Kunci Publik | 1024 | 16384 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1500%</span> | 8192 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+700%</span> |
| Kunci Rahasia | 184 | 8192 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+4352%</span> | 24 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−86.95%</span> |
| Tanda Tangan | 555 | 8224 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1381%</span> | 8224 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+1381%</span> |
| Waktu (detik) | | | | |
| Generasi Kunci | 2.6096 | 3.7918 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+45.30%</span> | 2.2483 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−13.85%</span> |
| Tanda Tangan | 0.0350 | 1.6462 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+4603%</span> | 3.2722 | <span style="color: #fb7185; font-family: monospace; font-weight: 600;">+9249%</span> |
| Verifikasi | 1.7677 | 0.0603 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−96.58%</span> | 0.0610 | <span style="color: #34d399; font-family: monospace; font-weight: 600;">−96.55%</span> |
