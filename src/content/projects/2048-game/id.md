---
title: "Game 2048: Miliastra Sandbox"
description: "Merancang dan mengembangkan game 2048 yang berfungsi penuh di dalam Miliastra, menerapkan deterministic state control dan mekanik pencapaian."
category: "Game Dev"
tags: ["Pengembangan Game", "Desain UI/UX", "Optimasi Logika", "Sandbox"]
metrics: "Peluncuran Publik dengan Pendapatan Program Kreator"
demoUrl: "https://hoyo.link/80GCFBAL?q=2UFsE62nwqh"
demoLabel: "Lihat Postingan Game"
featured: true
---

## Ringkasan

Merancang sebuah game 2048 yang berfungsi penuh dan sangat optimal dalam batasan lingkungan platform Miliastra. Selain mengimplementasikan algoritma penggabungan ubin matematis dasar, proyek ini melibatkan perancangan pengelola status game deterministik, loop peristiwa yang memperhatikan memori, dan pengalaman pemain yang menarik lengkap dengan umpan balik audio dinamis dan sistem pencapaian progresif.


## Tantangan & Motivasi

* Tujuan: Menjelajahi proses produksi game dari awal hingga akhir dalam kerangka kerja skrip sandbox khusus.
* Kendala: Bekerja dalam mesin sandbox memerlukan analisis mendalam terhadap dokumentasi untuk memahami batasan eksekusi, buffer memori yang terbatas, dan sumber daya yang ketat.
* Ruang Lingkup: Menjembatani logika algoritmik dengan desain pengalaman pemain yang holistik (responsif, estetika, dan umpan balik audio).

## Rekayasa & Arsitektur
* Mesin Deterministik: Membangun pengontrol keadaan terbatas yang tangguh untuk mengelola transisi antar layar menu, giliran input aktif, animasi ubin, validasi game over, dan layar berhasil.
* Logika Grid & Persistensi Status: Merancang representasi array 2D yang efisien untuk mengeksekusi pergeseran ubin, tabrakan, dan penggabungan dalam siklus eksekusi minimal.
* Event-Driven Input Handling: Pemicu input terisolasi untuk menghindari kondisi persaingan selama penggabungan ubin aktif, memastikan setiap penekanan tombol terselesaikan dengan bersih.

## Desain Game, UX & Player Engagement

* Minimalisme Visual: Merancang estetika yang bersih dan mudah dibaca yang memungkinkan pemain melacak hierarki numerik sekilas tanpa kelelahan visual.
* Audio & Umpan Balik Berulang: Trek latar belakang pilihan dan efek suara responsif (SFX) yang meningkat dalam nada dan intensitas seiring bertambahnya tingkatan ubin, memberikan umpan balik yang memuaskan.
* Sistem Kemajuan & Pencapaian: Menerapkan pencapaian progresif dalam game (misalnya, mencapai level 512, 1024, 2048, atau menyelesaikan dalam jumlah gerakan minimal) untuk memaksimalkan kemampuan bermain ulang dan mempertahankan pemain.

## Showcase & Screenshots
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div class="space-y-2">
    <img 
      src="/images/2048gametitle.webp" 
      alt="2048 Miliastra In-Game Grid and UI" 
      class="rounded-xl border border-zinc-800 shadow-md w-full"
    />
    <p class="text-xs font-mono text-zinc-400 text-center">Figure 1: Judul Game.</p>
  </div>
  <div class="space-y-2">
    <img 
      src="/images/2048gameplay.webp" 
      alt="Achievement and State Logic Interface" 
      class="rounded-xl border border-zinc-800 shadow-md w-full"
    />
    <p class="text-xs font-mono text-zinc-400 text-center">Figure 2: Tata letak grid aktif, penghitung skor, dan UI responsif.</p>
  </div>
</div>
