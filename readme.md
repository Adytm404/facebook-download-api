# 📥 Facebook Video Downloader (Pengunduh Video Facebook)

Sebuah aplikasi web sederhana yang dibangun dengan **Python** dan **Flask** untuk mengunduh video publik dari Facebook. Aplikasi ini menyediakan antarmuka web modern dan responsif, serta sebuah **API JSON** untuk integrasi lebih lanjut.

![Screenshot Aplikasi](https://ik.imagekit.io/bly37h3bc/nyan_1750939759628_fEqys_WUn.jpg)

---

## 🚀 Fitur

- 🎨 **Antarmuka Web Modern**  
  Tampilan bersih dan responsif dengan animasi latar belakang.

- 🔌 **API JSON Fleksibel**  
  Endpoint `/download` yang mengembalikan informasi video dalam format JSON.

- 🧠 **Pengambilan Data Otomatis**  
  Mendapatkan judul, nama uploader, dan gambar thumbnail dari video.

- 🔧 **Backend Andal**  
  Menggunakan pustaka `yt-dlp` yang selalu diperbarui untuk mendukung perubahan dari Facebook.

- ⚡ **Ringan dan Mudah Dijalankan**  
  Dibangun dengan Flask, sebuah micro-framework Python.

---

## 🗂️ Struktur Proyek

```
proyek-downloader/
├── app.py              # Backend Flask (API & Web Server)
├── requirements.txt    # Daftar pustaka Python
├── templates/
│   └── index.html      # Halaman antarmuka
└── static/
    ├── style.css       # Styling tampilan
    └── script.js       # Logika frontend
```

---

## ⚙️ Instalasi

### 1. Clone Proyek

```bash
git clone https://url-repositori-anda.git
cd nama-direktori-proyek
```

### 2. Buat `requirements.txt`

Isi dengan:

```
Flask
yt-dlp
```

### 3. Buat dan Aktifkan Virtual Environment

```bash
# Buat virtual environment
python3 -m venv venv

# Aktifkan (Linux/macOS)
source venv/bin/activate

# Aktifkan (Windows)
venv\Scripts\activate
```

### 4. Install Dependensi

```bash
pip install -r requirements.txt
```

---

## ▶️ Cara Penggunaan

### 1. Jalankan Server

```bash
python app.py
```

Akses melalui: [http://127.0.0.1:5000](http://127.0.0.1:5000)

### 2. Gunakan Antarmuka Web

- Masukkan URL video Facebook ke kolom input.
- Klik tombol **"Dapatkan Video"**.
- Informasi dan tautan unduh akan muncul jika berhasil.

### 3. Gunakan API Secara Langsung (Opsional)

Endpoint:
```
GET /download?url=https://www.facebook.com/watch?v=...
```

Contoh Respons Sukses:

```json
{
  "success": true,
  "title": "Judul Video Keren",
  "uploader": "Nama Halaman Facebook",
  "thumbnail_url": "https://url.ke/thumbnail.jpg",
  "download_url": "https://url.video/unduhan.mp4",
  "extension": "mp4"
}
```

Contoh Respons Gagal:

```json
{
  "success": false,
  "error": "Gagal memproses video. Pastikan URL valid dan video bersifat publik."
}
```

---

## 🧰 Teknologi yang Digunakan

- **Backend**: Python, Flask  
- **Video Processing**: yt-dlp  
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi MIT. Bebas digunakan untuk proyek pribadi, edukasi, atau pengembangan lebih lanjut.

---

## 🙋 Kontributor

- **Developer**: [@Ogya (NyanDrive)](https://nyanhosting.id)