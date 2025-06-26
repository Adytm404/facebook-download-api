FACEBOOK VIDEO DOWNLOADER (PENGUNDUH VIDEO FACEBOOK)
====================================================

Sebuah aplikasi web sederhana yang dibangun dengan Python dan Flask untuk mengunduh video publik dari Facebook. Aplikasi ini menyediakan antarmuka web yang modern dan responsif serta sebuah API JSON untuk integrasi lebih lanjut.

Screenshot Aplikasi:
https://ik.imagekit.io/bly37h3bc/nyan_1750939759628_fEqys_WUn.jpg

FITUR
-----
- Antarmuka Web Modern: Tampilan bersih dan responsif dengan animasi latar belakang.
- API JSON Fleksibel: Endpoint /download yang mengembalikan informasi video dalam format JSON.
- Pengambilan Data Otomatis: Mendapatkan judul, nama uploader, dan thumbnail dari video.
- Backend Andal: Menggunakan pustaka yt-dlp yang terus diperbarui.
- Ringan dan Mudah Dijalankan: Dibangun dengan Flask, micro-framework Python.

STRUKTUR PROYEK
---------------
/proyek-downloader
├── app.py              # Backend Flask (API & Web Server)
├── requirements.txt    # Daftar pustaka Python
├── templates/
│   └── index.html      # Halaman antarmuka
└── static/
    ├── style.css       # Styling tampilan
    └── script.js       # Logika frontend

CARA INSTALASI
--------------
1. Dapatkan File Proyek
   git clone https://url-repositori-anda.git
   cd nama-direktori-proyek

2. Buat File requirements.txt
   Isi dengan:
   Flask
   yt-dlp

3. Buat dan Aktifkan Virtual Environment
   python3 -m venv venv
   source venv/bin/activate   # Linux/macOS
   venv\Scripts\activate    # Windows

4. Instal Pustaka
   pip install -r requirements.txt

CARA PEMAKAIAN
--------------
1. Jalankan Server Flask
   python app.py

   Output:
   * Running on http://127.0.0.1:5000

2. Gunakan Antarmuka Web
   Buka browser dan akses:
   http://127.0.0.1:5000/
   Masukkan URL video Facebook dan klik "Dapatkan Video".

3. (Opsional) Gunakan API Langsung
   - Endpoint: GET /download
   - Parameter: url (URL video Facebook)
   - Contoh: http://127.0.0.1:5000/download?url=https://facebook.com/watch?v=...

   Contoh Respons Sukses:
   {
     "success": true,
     "title": "Judul Video Keren",
     "uploader": "Nama Halaman Facebook",
     "thumbnail_url": "https://url.ke/thumbnail.jpg",
     "download_url": "https://url.video/unduhan.mp4",
     "extension": "mp4"
   }

   Contoh Respons Gagal:
   {
     "success": false,
     "error": "Gagal memproses video. Pastikan URL valid dan video bersifat publik."
   }

TEKNOLOGI YANG DIGUNAKAN
------------------------
- Backend: Python, Flask
- Video Processing: yt-dlp
- Frontend: HTML5, CSS3, JavaScript (Vanilla)