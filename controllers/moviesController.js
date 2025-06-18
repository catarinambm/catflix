class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }

    getAll = (req, res, next) => {
        try {
            const movies = this.movieService.getAllMovies();
            return res.json(movies);
        } catch (err) {
            return next(err);
        }
    }

    getById = (req, res, next) => {
        try {
            const movie = this.movieService.getMovieById(parseInt(req.params.id));
            if (!movie) return res.status(404).send('Filme não encontrado');
            return res.json(movie);
        } catch (err) {
            return next(err);
        }
    }

    create = (req, res, next) => {
        try {
            const createdMovie = this.movieService.createMovie(req.body);
            return res.status(201).json(createdMovie);
        } catch (err) {
            return next(err);
        }
    }

    delete = (req, res, next) => {
        try {
            this.movieService.deleteMovie(parseInt(req.params.id));
            return res.status(204).send();
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = MovieController;
