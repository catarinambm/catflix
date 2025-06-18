let movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 9 },
    { id: 2, title: 'Amélie', genre: 'Romance', rating: 8.5 }
];

class MovieService {
    getAllMovies() {
        return movies;
    }

    getMovieById(id) {
        return movies.find(m => m.id === id);
    }

    createMovie(data) {
        const newMovie = { id: Date.now(), ...data };
        movies.push(newMovie);
        return newMovie;
    }

    deleteMovie(id) {
        movies = movies.filter(m => m.id !== id);
    }
}

module.exports = MovieService;
