# Tambahkan render_template ke dalam import
from flask import Flask, request, jsonify, render_template
import yt_dlp

app = Flask(__name__)

# Route baru untuk menampilkan halaman frontend (index.html)
@app.route('/')
def home():
    # Flask akan otomatis mencari file ini di dalam folder 'templates'
    return render_template('index.html')

# Route API kita, tidak ada yang berubah di sini
@app.route('/download', methods=['GET'])
def get_video_info():
    video_url = request.args.get('url')

    if not video_url:
        return jsonify({
            "success": False,
            "error": "Parameter 'url' tidak ditemukan. Mohon sertakan URL video."
        }), 400

    try:
        ydl_opts = {
            'format': 'best[ext=mp4]/best',
            'quiet': True,
        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info_dict = ydl.extract_info(video_url, download=False)
            
            response_data = {
                "success": True,
                "title": info_dict.get('title'),
                "uploader": info_dict.get('uploader'),
                "thumbnail_url": info_dict.get('thumbnail'),
                "download_url": info_dict.get('url'),
                "extension": info_dict.get('ext'),
            }
            return jsonify(response_data)

    except yt_dlp.utils.DownloadError as e:
        app.logger.error(f"yt-dlp error: {e}")
        return jsonify({
            "success": False,
            "error": "Gagal memproses video. Pastikan URL valid dan video bersifat publik."
        }), 404
    except Exception as e:
        app.logger.error(f"An unexpected error occurred: {e}")
        return jsonify({
            "success": False,
            "error": f"Terjadi kesalahan tak terduga: {str(e)}"
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)