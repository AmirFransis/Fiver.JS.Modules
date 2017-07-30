var MovieModule = require('./movie.js');

console.log('inside movie-service');

function getMovies() {

}

function getMovie(id) {
    var model = new MovieModule.Movie();
    model.setTitle('Dr. No');
    return model;
}

module.exports = {
    getMovies: getMovies,
    getMovie: getMovie
}