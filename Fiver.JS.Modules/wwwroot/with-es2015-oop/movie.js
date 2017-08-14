export class Movie {
    constructor(id, title, year) {
        this.id = id;
        this.title = title;
        this.year = year;
    }

    printMovie() {
        console.log('Title: ' + this.title);
    }

    static getMovieStore() {
        console.log('Fiver Store');
    }
}




