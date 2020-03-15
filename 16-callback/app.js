// Callback
// synchronous callback
// function halo(nama) {
//     alert(`Haloo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama)
// }
// tampilkanPesan(halo);

// Asynchronous Callback
// // vanilla js
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', result => {
//     const mhs = JSON.parse(result).forEach(m => console.log(m.nama));
// }, () => { });
// console.log('selesai');

// Asynchronous Callback
// JQuery
console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => {
            console.log(m.nama);
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');