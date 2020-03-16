const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword').value;
    const movies = await getMovies(inputKeyword);
    updateUI(movies);
});

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => {
        const moviesList = document.querySelector('.movie-container');
        cards += showMovie(m);
        moviesList.innerHTML = cards;
    })
}

// event binding
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=2a307a7c&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m)
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=2a307a7c&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function showMovie(m) {
    return `<div class="col-md-3 mt-3 my-3">
               <div class="card">
                <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <button class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">
                        Show Details
                        </button>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
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
}