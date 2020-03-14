// Destructuring

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// Destructuring dengan Object agar urutan tidak berpengaruh
// (Destructuring Function return Value)

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// };

// const { bagi, kali, kurang, tambah } = kalkulasi(2, 5);
// console.log(kurang);

// Destructuring Function Arguments
const mhs1 = {
    nama: 'Dodi',
    umur: 32,
    email: 'dodi@gmail.com',
    nilai: {
        uts: 80,
        uas: 85
    }
}

function cetakMhs({ nama, umur, nilai: { uts, uas } }) {
    return `Halo Nama saya ${nama}, umur saya ${umur} tahun, dan nilai uas saya ${uas}`;
}

console.log(cetakMhs(mhs1));