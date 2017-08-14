'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movie = exports.Movie = function () {
    function Movie(id, title, year) {
        _classCallCheck(this, Movie);

        this.id = id;
        this.title = title;
        this.year = year;
    }

    _createClass(Movie, [{
        key: 'printMovie',
        value: function printMovie() {
            console.log('Title: ' + this.title);
        }
    }], [{
        key: 'getMovieStore',
        value: function getMovieStore() {
            console.log('Fiver Store');
        }
    }]);

    return Movie;
}();