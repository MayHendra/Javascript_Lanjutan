// (let tampilNama = (nama) => {
//   return nama;
// }

// implisit return (return nya gausah ditulis)
// let tampilUmur = umur => umur;

let siswa = ['shroud', 'ninja', 'sisma', 'suhadi'];

// let jumlahHuruf = siswa.map(function (nama) {
//   return nama.length;
// })

// console.log(jumlahHuruf);

// versi implisit return

let jumlahHuruf = siswa.map(nama => nama.length);
console.log(jumlahHuruf);

// mengembalikan berupa object

let obj = siswa.map((nama) => ({ nama: nama, jumlahHuruf: nama.length }))

console.table(obj);
