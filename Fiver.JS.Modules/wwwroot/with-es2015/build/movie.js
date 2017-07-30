'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Movie = function Movie() {
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
    };
};

exports.Movie = Movie;