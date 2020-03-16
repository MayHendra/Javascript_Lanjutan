// Promise
// Object yang merepresentasikan keberhasilan/kegagalan sebuah enent yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar Janji');
//     }
// })

// janji1
//     .then(response => console.log(`OK ! ${response}`))
//     .catch(response => console.log(`Not OK! ${response}`))

// // contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve(`Ditepati setelah beberapa waktu`);
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject(`Tidak ditepati setelah beberapa waktu`);
//         }, 2000);
//     }
// })

// console.log('mulai');
// janji2
//     .finally(() => console.log('Selesai Menunggu'))
//     .then(() => console.log(janji2))
//     .catch(() => console.log(janji2));
// console.log('selesai');

// Promise.all

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            sutradara: 'Abdullah',
            pemeran: 'actris'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'jakarta',
            temp: 27,
            kondisi: 'cerah'
        }]);
    }, 500);
})

Promise.all([film, cuaca])
    //.then(response => console.log(response));

    //untuk memisahkan arraynya
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })