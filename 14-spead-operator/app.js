// Spear Operator
// memecah iterable menjadi single element

// menggabungkan lebih dari satu array
// const mhs = ['dodi', 'alif', 'rahmat'];
// const dosen = ['margo', 'ahmad', 'irawan'];
// const people = [...mhs, ...dosen];
// console.log(people);

// bisa digunakan untuk meng copy array
// const mhs = ['rudi', 'alif', 'rahmat'];
// const mhs2 = [...mhs];
// dengan menggunakan spread operator element array yang diubah tidak akan mempengaruhi array aslinya, dan yang berubah hanya copynya, begitu juga dengan array aslinya.. jika array aslinya diubah tidak akan mempengaruhi element copynya yang sudah diubah
// mhs2[0] = 'adit';
// console.log(mhs);
// console.log(mhs2);

// contoh praktik menggunakan 
// (My Code)
// const h1 = document.querySelector('h1');
// const h1Spread = [...h1.textContent];
// const h1Span = [];
// for (iterator of h1Spread) {
//     h1Span.push(`<span>${iterator}</span>`);
//     h1.innerHTML = h1Span.join('');
// }

// h1.addEventListener('mouseover', function (e) {
//     const span = document.querySelectorAll('span');
//     for (const itr of span) {
//         if (e.target == itr) {
//             itr.style.fontSize = '50px';
//             itr.style.color = 'yellow';
//         }
//     }
// });
// h1.addEventListener('mouseout', function (e) {
//     const span = document.querySelectorAll('span');
//     for (const itr of span) {
//         if (e.target == itr) {
//             itr.style.fontSize = '30px';
//             itr.style.color = 'black';
//         }
//     }
// });

// WPU Code
// css on html code
const h1 = document.querySelector('h1');
const h1Spread = [...h1.textContent].map(h => `<span>${h}</span>`).join('');
h1.innerHTML = h1Spread;