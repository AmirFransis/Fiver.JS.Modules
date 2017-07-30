(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MovieService = require('./movie-service.js');

(function () {

    console.log('inside app');
    
    var model = MovieService.getMovie(1);
    model.printMovie();

})(); // IIFE
},{"./movie-service.js":2}],2:[function(require,module,exports){
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
},{"./movie.js":3}],3:[function(require,module,exports){
var Movie = function () {
    console.log('inside movie');

    var title = '';

    function setTitle(value) {
        title = value;
    }

    function getTitle() {
        return title;
    }

    function printMovie() {
        console.log('Title: ' + title);
    }

    return {
        setTitle: setTitle,
        getTitle: getTitle,
        printMovie: printMovie
    }
}

module.exports = {
    Movie: Movie
}





},{}]},{},[1]);
