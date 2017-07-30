import * as MovieService from './movie-service.js'

(function () {

    console.log('inside app');
    
    var model = MovieService.getMovie(1);
    model.printMovie();

})(); // IIFE