const inputGroup = document.querySelector('.input-group');
inputGroup.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        const searchKey = document.querySelector('.input-keyword').value;
        fetch('http://www.omdbapi.com/?apikey=2a307a7c&s=' + searchKey)
            .then(response => response.json())
            .then(response => {
                let cards = '';
                const movies = response.Search;
                movies.forEach(m => {
                    const moviesList = document.querySelector('.movie-container');
                    cards += `<div class="col-md-3 mt-3 my-3">
                                <div class="card">
                                    <img src="${m.Poster}" class="card-img-top" alt="">
                                    <div class="card-body">
                                    <h5 class="card-title">${m.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                    <button class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">
                                    Show Detail
                                    </button>
                                    </div>
                                </div>
                            </div>`;
                    moviesList.innerHTML = cards;

                    // ketika button detail di klik
                    const modalDetailButton = document.querySelectorAll('.modal-detail-button');
                    modalDetailButton.forEach(modalBtn => {
                        modalBtn.addEventListener('click', function () {
                            const imdbID = this.dataset.imdbid;
                            fetch('http://www.omdbapi.com/?apikey=2a307a7c&i=' + imdbID)
                                .then(response => response.json())
                                .then(m => {
                                    const modalBody = document.querySelector('.modal-body');
                                    const movieDetail = `<div class="container-fluid">
                                                            <div class="row">
                                                                <div class="col-md-3">
                                                                    <img src="${m.Poster}" class="img-fluid">
                                                                </div>
                                                                <div class="col-md">
                                                                    <ul class="list-group">
                                                                        <li class="list-group-item">
                                                                            <h4>${m.Title} (${m.Year})</h4>
                                                                        </li>
                                                                        <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                                                                        <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                                                                        <li class="list-group-item"><Strong>Writer: </Strong>${m.Writer}</li>
                                                                        <li class="list-group-item"><strong>Plot: </strong><br>${m.Plot}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>`;
                                    modalBody.innerHTML = movieDetail;
                                })
                        })
                    });

                });
            });
    }
});