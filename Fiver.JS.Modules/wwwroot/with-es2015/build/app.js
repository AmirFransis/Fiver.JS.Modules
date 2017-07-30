'use strict';

var _movieService = require('./movie-service.js');

var MovieService = _interopRequireWildcard(_movieService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function () {

    console.log('inside app');

    var model = MovieService.getMovie(1);
    model.printMovie();
})(); // IIFE