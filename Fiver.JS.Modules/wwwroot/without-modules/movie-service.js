// singleton
var movieService = function () {

    console.log('inside movie-service');

    function getMovies() {
        
    }

    function getMovie(id) {
        var model = new Movie();
        model.setTitle('Dr. No');
        return model;
    }
    
    return {
        getMovies: getMovies,
        getMovie: getMovie
    }
}(); // singleton because its IIFE