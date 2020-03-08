// ambil element dari setiap video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang js lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    // ambil durasi masing masing video
    .map(item => item.dataset.duration)
    // ubah durasi nya menjadi float, lalu ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] -> split()
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    // jumlahkan semua detiknya
    .reduce((total, detik) => total + detik, 0);

// ubah formatnya menjadi jam:menit:detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = Math.floor(jsLanjut - menit * 60);

// simpan di DOM

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJumlahVideo = document.querySelector('.jumlah-video');
pJumlahVideo.textContent = `${jumlahVideo} Video`;