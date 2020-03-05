const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka yang >= 3

// dengan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


// dengan filter()
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// })

// versi arrow function
// const newAngka = angka.filter(a => a >= 3)
// console.log(newAngka);

// menggunakan map()
// kalikan semua angka dengan 2

// const newAngka = angka.map(a => a * 2)
// console.log(newAngka);

// reduce
// nilai awal pada reduce adalah 0
// dibagian return accumulator + currentValue, 0; nilai awal ada di belakangnya
// akan menjadi 0 (default, jika tidak diatur)
// menjumlahkan seluruh elemen pada array dengan reduce()

// const newAngka = angka.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// })

// console.log(newAngka);

// versi arrow function
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(newAngka);


// Method Chaining
// cari angka lebih besar dari 5 ( > 5 ) setelah itu akan dikalikan dengan 3, lalu jumlahkan

const hasil = angka.filter(a => a > 5) // 8, 9, 9
    .map(a => a * 3) // 24, 27, 27
    .reduce((acc, cur) => acc + cur, 0); // 78

console.log(hasil);