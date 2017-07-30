(function () {

    console.log('inside app');
    
    var model = movieService.getMovie(1);
    model.printMovie();

})(); // IIFE