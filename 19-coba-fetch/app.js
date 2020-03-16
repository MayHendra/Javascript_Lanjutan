const data = fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(response => response.forEach((r) => {
        let cardsData = '';
        const cards = document.querySelector('.cards')
        cardsData = `<div class="col-md-4 my-3">
                        <div class="card">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${r.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${r.id}</h6>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`;
        cards.innerHTML += cardsData;
    }));