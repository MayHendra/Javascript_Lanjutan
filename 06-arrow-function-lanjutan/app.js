const box = document.querySelector('.box');

// jika ingin menggunakan keyword this pada function yang ada di dalam function, maka gunakan arrow funciton karna function declaration yang ada di dalam function langsung mencari keyword this ke window, bukan ke lexical scope

box.addEventListener('click', function () {
    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600)
})

