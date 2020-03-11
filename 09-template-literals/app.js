// Templates Literals
const nama = 'John'
const umur = 20

// console.log(`Nama saya ${nama}, Umur saya ${umur}`);

// Embedded Expressions
const x = 10
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

//HTML Fragments
// const siswa = {
//     nama: 'John',
//     umur: 20,
//     kelas: 'XI'
// }

// let element = `<div><p>${siswa.nama}</p><p>${siswa.umur}</p><p>${siswa.kelas}</p>
// </div>`;

// Looping
// const siswa = [
//     {
//         nama: 'Ridwan',
//         umur: 35
//     },
//     {
//         nama: 'Sulis',
//         umur: 25
//     }
// ];

// const element = `<div class="siswa">
//     ${siswa.map((a) =>
//     `<ul>
//         <li>${a.nama}</li>
//         <li>${a.umur}</li>
//     </ul>`
// ).join('')}
// </div>`;

// conditionals
// ternary

// const lagu = {
//     penyanyi: 'INTERSECTION',
//     judul: 'Hot Water'
//     // feat: 'Ariel '
// };

// const element = `<div>
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${(lagu.feat) ? `(feat.${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


// Nested
// HTML Fragments bersarang

const mahasiswa = {
    nama: 'John',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMataKuliah(mataKuliah) {
    return `${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}`
}

const element = `<div>
<ol>
    <h4>Nama : ${mahasiswa.nama}</h4>
    <h4>Semester : ${mahasiswa.semester}</h4>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mahasiswa.mataKuliah)}
</ol>
</div>`

document.body.innerHTML = element;