import { Movie } from './movie.js'
import { BondMovie } from './bond-movie.js'
import { movies_data } from './data.js'
import { MovieService } from './movie-service.js'

// static method
Movie.getMovieStore();

// base class
let movie = new Movie(1, 'Dr. No', 1963);
movie.printMovie();

// derived class
let bond = new BondMovie(1, 'Goldenfinger', 1965, 'Sean Connery');
bond.printMovie();
bond.printBond();

// service
let service = new MovieService();
service.loadData(movies_data);
for (let item of service.movies) {
    item.printMovie();
}