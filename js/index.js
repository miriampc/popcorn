'use strict';

const render = (container) => {
  container.empty(); //limpiar toodo el container
  const wrapper = $('<div class="wrapper"></div>'); //solo devuelve un elemnto
  wrapper.append(Header());
  if (state.selectedMovie == null) {
    wrapper.append(MovieGrid( _ => {
      render(container);
    }));
  }else {
    wrapper.append(MovieDetails( _ => {
      render(container);
    }));
  }

  container.append(wrapper);
}

// inmutabilidad de estado,
const state= {
  movies: movies, //trae de movies.js
  selectedMovie: null
}

$( _ => { //ready
//$(document).ready(function(){
  const container = $('.container');
  render(container);
});
