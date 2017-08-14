import { Movie } from './movie.js'

export class BondMovie extends Movie {
    constructor(id, title, year, leadActor) {
        super(id, title, year); // always first thing
        this.leadActor = leadActor;
    }

    printMovie() { // overriden
        //super.printMovie();
        console.log('Bond Title: ' + this.title);
    }

    printBond() {
        console.log('Bond: ' + this.leadActor);
    }
}
