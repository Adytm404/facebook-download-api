PENGUNDUH VIDEO FACEBOOK (FACEBOOK VIDEO DOWNLOADER)
====================================================

Sebuah aplikasi web sederhana yang dibangun dengan Python dan Flask untuk mengunduh video publik dari Facebook. Aplikasi ini menyediakan antarmuka web yang modern dan responsif serta sebuah API JSON untuk integrasi lebih lanjut.

[Screenshot Aplikasi]: https://ik.imagekit.io/bly37h3bc/nyan_1750939759628_fEqys_WUn.jpg


FITUR
-----
- Antarmuka Web Modern: Tampilan yang bersih, responsif, dan dilengkapi dengan animasi latar belakang untuk pengalaman pengguna yang lebih baik.
- API JSON Fleksibel: Selain antarmuka web, tersedia juga endpoint API (/download) yang mengembalikan informasi video dalam format JSON, termasuk tautan unduhan langsung.
- Pengambilan Data Otomatis: Secara otomatis mengambil judul, nama uploader, dan gambar thumbnail dari video.
- Backend Andal: Menggunakan pustaka yt-dlp yang terus diperbarui untuk memastikan kompatibilitas dengan perubahan dari sisi Facebook.
- Ringan dan Mudah Dijalankan: Dibangun dengan Flask, sebuah micro-framework Python yang ringan.


STRUKTUR PROYEK
---------------
Struktur file diorganisir agar mudah dipahami dan dikembangkan lebih lanjut.

/proyek-downloader
├── app.py              # Backend Flask (API & Web Server)
├── requirements.txt    # Daftar pustaka Python yang dibutuhkan
├── templates/
│   └── index.html      # Halaman Antarmuka (Frontend)
└── static/
    ├── style.css       # Styling untuk tampilan
    └── script.js       # Logika interaktivitas Frontend


CARA INSTALASI
--------------
Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda.

1. Dapatkan File Proyek
   Kloning repositori ini atau unduh file zip dan ekstrak ke direktori yang Anda inginkan.
   Contoh jika menggunakan git:
   git clone https://url-repositori-anda.git
   cd nama-direktori-proyek

2. Buat File requirements.txt
   Buat sebuah file baru bernama requirements.txt di direktori utama proyek dan isikan dengan baris berikut. File ini berisi daftar pustaka Python yang diperlukan.

   Flask
   yt-dlp

3. Buat dan Aktifkan Virtual Environment
   Sangat disarankan untuk menggunakan lingkungan virtual (virtual environment) agar tidak mengganggu instalasi Python sistem Anda.

   # Buat virtual environment
   python3 -m venv venv

   # Aktifkan virtual environment
   # Untuk Linux / macOS:
   source venv/bin/activate

   # Untuk Windows (Command Prompt):
   venv\Scripts\activate

   Setelah diaktifkan, nama (venv) akan muncul di awal baris terminal Anda.

4. Instal Pustaka yang Dibutuhkan
   Dengan lingkungan virtual yang sudah aktif, instal semua pustaka yang terdaftar di requirements.txt dengan satu perintah.
   
   pip install -r requirements.txt


CARA PEMAKAIAN
--------------
Setelah instalasi berhasil, Anda bisa langsung menjalankan aplikasi.

1. Jalankan Server Flask
   Pastikan Anda berada di direktori utama proyek dan lingkungan virtual Anda aktif. Jalankan perintah berikut di terminal:
   
   python app.py
   
   Server akan berjalan dan Anda akan melihat output seperti ini:
   * Running on http://127.0.0.1:5000

2. Gunakan Antarmuka Web
   - Buka browser favorit Anda (Chrome, Firefox, dll).
   - Akses alamat http://127.0.0.1:5000/.
   - Tempelkan (paste) URL video Facebook yang ingin Anda unduh ke dalam kolom input.
   - Klik tombol "Dapatkan Video".
   - Jika berhasil, informasi video beserta tombol unduh akan muncul di bawahnya.

3. (Opsional) Menggunakan API Secara Langsung
   Anda juga bisa memanggil endpoint API secara langsung untuk mendapatkan data JSON. Ini berguna untuk integrasi dengan aplikasi lain.

   - Endpoint: GET /download
   - Parameter: url (URL video Facebook)
   - Contoh Panggilan: http://127.0.0.1:5000/download?url=https://www.facebook.com/watch?v=...

   - Contoh Respons Sukses:
     {
       "success": true,
       "title": "Judul Video Keren",
       "uploader": "Nama Halaman Facebook",
       "thumbnail_url": "https://url.ke/thumbnail.jpg",
       "download_url": "https://url.video/unduhan.mp4",
       "extension": "mp4"
     }

   - Contoh Respons Gagal:
     {
       "success": false,
       "error": "Gagal memproses video. Pastikan URL valid dan video bersifat publik."
     }


TEKNOLOGI YANG DIGUNAKAN
-----------------------
- Backend: Python, Flask
- Video Processing: yt-dlp
- Frontend: HTML5, CSS3, JavaScript (Vanilla)