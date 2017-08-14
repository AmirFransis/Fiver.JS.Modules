'use strict';

var _movie = require('./movie.js');

var _bondMovie = require('./bond-movie.js');

var _data = require('./data.js');

var _movieService = require('./movie-service.js');

// static method
_movie.Movie.getMovieStore();

// base class
var movie = new _movie.Movie(1, 'Dr. No', 1963);
movie.printMovie();

// derived class
var bond = new _bondMovie.BondMovie(1, 'Goldenfinger', 1965, 'Sean Connery');
bond.printMovie();
bond.printBond();

// service
var service = new _movieService.MovieService();
service.loadData(_data.movies_data);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = service.movies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        item.printMovie();
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}