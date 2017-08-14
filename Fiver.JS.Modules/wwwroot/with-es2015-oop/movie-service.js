import { BondMovie } from './bond-movie.js'

export class MovieService {
    constructor() {
        this.movies = [];
    }

    loadData(data) {
        for (let item of data) {
            //this.movies.push(item);
            var movie = new BondMovie(item.id, item.title, item.year, item.leadActor);
            this.movies.push(movie);
        }
    }
}