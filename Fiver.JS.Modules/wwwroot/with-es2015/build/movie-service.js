'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMovies = getMovies;
exports.getMovie = getMovie;

var _movie = require('./movie.js');

var MovieModule = _interopRequireWildcard(_movie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log('inside movie-service');

function getMovies() {}

function getMovie(id) {
    var model = new MovieModule.Movie();
    model.setTitle('Dr. No');
    return model;
}