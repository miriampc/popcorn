'use strict';

const MovieDetails = (update) => {
  const movieDetail = $('<div class="movieDetail"></div>');
  const title = $('<h1>'+state.selectedMovie.title+'</h1>');
  const button = $('<button>Regresar</button>');
  movieDetail.append(title);
  movieDetail.append(button);

  button.on('click', (e) =>{
    e.preventDefault();
    state.selectedMovie = null;
    update();
  })

  return movieDetail;
}
