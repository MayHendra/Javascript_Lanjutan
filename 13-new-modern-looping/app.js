// For.. of & For.. in

const listSiswa = ['andi', 'dodi', 'didit']

// dengan for 
for (let i = 0; i < listSiswa.length; i++) {
    console.log(listSiswa[i]);
}
console.log('\n');

// dengan forEach
listSiswa.forEach(siswa => console.log(siswa));
console.log('\n');

// dengan while
let i = 0;
while (i < listSiswa.length) {
    console.log(listSiswa[i]);
    i++;
}
console.log('\n');

// dengan for.. of
// dengan array
for (const iterator of listSiswa) {
    console.log(iterator);
}
console.log('\n');

// dengan string
const str = 'sudo';
for (const iterator of str) {
    console.log(iterator);
}
console.log('\n');

// dengan arguments
function coba() {
    for (const iterator of arguments) {
        console.log(iterator);
    }
}

coba(1, 2);
console.log('\n');

// dengan NodeList
let paragraphs = document.querySelectorAll('p')

for (const iterator of paragraphs) {
    iterator.style.color = 'yellow';
}
console.log('\n');

// for.. in
const mahasiswa = {
    nama: 'adhi',
    umur: 35,
    jurusan: 'TI'
}

// versi 1
for (const key in mahasiswa) {
    if (mahasiswa.hasOwnProperty(key)) {
        const element = mahasiswa[key];
        console.log(element);
    }
}
console.log('\n');

// versi lain
for (const key in mahasiswa) {
    console.log(mahasiswa[key]);
}