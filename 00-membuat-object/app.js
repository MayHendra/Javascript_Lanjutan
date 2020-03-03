/** @format */

// Cara membuat Object pada js
// kekurangannya kita harus membuat code yang sama berulang kali jika ingin membuat object yang tidak jauh berbeda

// 1.Menggunakan Object Literal

// const person = {
//   nama: 'May Hendra',
//   energi: 10,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallooo ${this.nama}, selamat makan`);
//   }
// };

// 2.Menggunakan Function Declaration
// jika menggunakan function declaration, ketika ingin membuat object baru tinggal di instansiasi

// function person(nama, energi) {
//   let person = {};
//   person.nama = nama;
//   person.energi = energi;

//   person.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Hallooo ${this.nama}, Selamat makan`);
//   };
//   person.mainGame = function(lamaWaktu) {
//     this.energi -= lamaWaktu;
//     console.log(`Halooo ${this.nama}, Selamat bermain`);
//   };

//   // jika menggunakan function declaration harus di return terlebih dahulu object nya
//   return person;
// }

// let John = person('John', 10);
// let Rudolf = person('Rudolf', 13);

// 3. Menggunakan Constructor Function
// metode yang ke 3 ini lebih sering dipakai, dan cara penulisannya tidak jauh berbeda dari function declaration, hanya saja cara ini tidak perlu memberikan variable objectnya dan di tidak perlu di return karna sudah dilakukan otomatis oleh javascriptnya
// cara memanggil constructor function dengan menggunakan keyword new ketika di instansiasi

function person(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function(porsi) {
    this.energi += porsi;
    console.log(`Hallooo ${this.nama}, Selamat makan`);
  };
  this.mainGame = function(lamaWaktu) {
    this.energi -= lamaWaktu;
    console.log(`Halooo ${this.nama}, Selamat bermain`);
  };
}

let John = new person('John', 10);
let Rudolf = new person('Rudolf', 13);
