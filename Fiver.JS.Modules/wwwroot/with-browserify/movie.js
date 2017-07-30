var Movie = function () {
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
    }
}

module.exports = {
    Movie: Movie
}




