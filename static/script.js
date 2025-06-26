document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('url-form');
    const urlInput = document.getElementById('fb-url');
    const submitBtn = document.getElementById('submit-btn');
    const loader = document.getElementById('loader');
    const resultDiv = document.getElementById('result');

    // --- Background Animation Logic ---
    const background = document.querySelector('.background-animation');
    const createSquares = () => {
        const squareCount = 20; // Jumlah kotak
        for (let i = 0; i < squareCount; i++) {
            const square = document.createElement('li');
            square.classList.add('square');

            const size = Math.random() * 150 + 50; // Ukuran kotak
            square.style.width = `${size}px`;
            square.style.height = `${size}px`;
            
            // Posisi dan durasi animasi acak
            square.style.left = `${Math.random() * 100}%`;
            square.style.animationDuration = `${Math.random() * 15 + 10}s`;
            square.style.animationDelay = `${Math.random() * 5}s`;

            background.appendChild(square);
        }
    };
    createSquares();
    // --- End of Animation Logic ---

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Mencegah form reload halaman

        const url = urlInput.value.trim();
        if (!url) {
            alert('Harap masukkan URL video!');
            return;
        }

        // Tampilkan loader dan sembunyikan hasil sebelumnya
        loader.style.display = 'block';
        resultDiv.style.display = 'none';
        resultDiv.innerHTML = '';
        submitBtn.disabled = true; // Nonaktifkan tombol selama proses

        try {
            // Panggil API backend kita
            const response = await fetch(`/download?url=${encodeURIComponent(url)}`);
            const data = await response.json();

            if (data.success) {
                displayResult(data);
            } else {
                displayError(data.error);
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            displayError('Tidak dapat terhubung ke server. Silakan coba lagi nanti.');
        } finally {
            // Sembunyikan loader dan aktifkan kembali tombol
            loader.style.display = 'none';
            submitBtn.disabled = false;
            urlInput.value = '';
        }
    });

    function displayResult(data) {
        const { title, uploader, thumbnail_url, download_url, extension } = data;
        
        const resultHTML = `
            <img src="${thumbnail_url}" alt="Video Thumbnail">
            <div class="info">
                <h3>${title || 'Judul Tidak Tersedia'}</h3>
                <p>Oleh: ${uploader || 'Uploader Tidak Diketahui'}</p>
                <a href="${download_url}" class="download-btn" download>Unduh Video (.${extension || 'mp4'})</a>
            </div>
        `;

        resultDiv.innerHTML = resultHTML;
        resultDiv.style.display = 'flex';
    }

    function displayError(message) {
        const errorHTML = `<p style="color: #ff8a80;"><strong>Error:</strong> ${message}</p>`;
        resultDiv.innerHTML = errorHTML;
        resultDiv.style.display = 'block';
    }
});