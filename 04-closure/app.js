// // Closure

// function init() {
//   let nama = 'Rulf'
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }

// init();

// function sayHello(waktu) {
//   return function (nama) {
//     console.log(`Hello ${nama}, Selamat ${waktu}`);
//   }
// }

// let pagi = sayHello('pagi')
// pagi('Rulf');

// menggunakan immediately invoke function
let add = (function () {
  let counter = 0
  return function () {
    return ++counter;
  }
})();

console.log(add());