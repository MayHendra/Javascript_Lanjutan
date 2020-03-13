// Destructuring variable / assignment


// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'dodi'];
// // const [a, b, c, d] = perkenalan;

// // Skipping Items
// const [a, , , d] = perkenalan;

// console.log(a);
// // console.log(b);
// // console.log(c);
// console.log(d);

// const siswa = ['dodi', 'ridwan', 'ahmad'];
// const [a, b, c] = siswa;

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// Destructuring function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);
// console.log(values);


// Destructuring Object

// const mahasiswa = {
//     nama: 'Pandi',
//     umur: '25',
//     jurusan: 'TI'
// }

// const { nama, umur, jurusan } = mahasiswa;
// console.log(nama);


// Cara lebih singkatnya
// ({ nama, umur, jurusan } = { nama: 'Pandi', umur: '25', jurusan: 'TI' });
// console.log(umur);

// untuk assign ke variable baru
// const mahasiswa = {
//     nama: 'Pandi',
//     umur: '25',
//     jurusan: 'TI'
// }
// const { nama: n, umur: u, jurusan: j } = mahasiswa;
// console.log(n);


// memberikan nilai default pada destruction
// const mahasiswa = {
//     nama: 'Pandi',
//     umur: '25',
//     jurusan: 'TI',
//     email: 'pandi@gmail.com'
// }
// const { nama, umur, jurusan, email } = mahasiswa;
// console.log(email || '');

// Rest Parameter
// const mahasiswa = {
//     nama: 'Pandi',
//     umur: '25',
//     jurusan: 'TI',
//     email: 'pandi@gmail.com'
// }
// const { nama, ...values } = mahasiswa;
// console.log(values || '');


// Mengambil Filed pada object, setelah dikirim sebagai parameter function
const mahasiswa = {
    id: 1,
    nama: 'Pandi',
    umur: '25',
    jurusan: 'TI',
    email: 'pandi@gmail.com'
}

function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mahasiswa));