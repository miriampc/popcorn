'use strict';
// como state es global se puede usar las variables aki

const movieItem = (movie, update) => {
  const item = $('<a href="#" class="movie"></a>');
  const image = $(`<img class="movie-size" src="${movie.thumb}" alt="${movie.title}"/>`);
  const p = $('<p>'+movie.title+'</p>')

  item.append(image);
  item.append(p);
  item.on('click', (e) => {
    e.preventDefault();
    state.selectedMovie = movie;
    // traer funcion de render
    update(); // function callback
  })
  return item;
}

const MovieGrid = (update) => {
  const movieContainer = $ ('<div class="movieContainer"></div>');
  state.movies.forEach((movie) => {
    movieContainer.append(movieItem(movie,update));
  })

  return movieContainer;
}
