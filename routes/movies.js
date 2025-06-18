const express = require('express');
const router = express.Router();
const MovieService = require('../services/moviesService');
const MovieController = require('../controllers/moviesController');

const movieService = new MovieService();
const movieController = new MovieController(movieService);

router.get('/', movieController.getAll);
router.get('/:id', movieController.getById);
router.post('/', movieController.create);
router.delete('/:id', movieController.delete);

module.exports = router;