import * as MovieModule from './movie.js'

console.log('inside movie-service');

export function getMovies() {

}

export function getMovie(id) {
    var model = new MovieModule.Movie();
    model.setTitle('Dr. No');
    return model;
}