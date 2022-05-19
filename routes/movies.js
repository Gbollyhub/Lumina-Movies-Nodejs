const express = require('express');
const { getMostPopularMovies, getInTheaters } = require('../controllers/movies');
// const { Validate } = require('../middleware/validate')

const router = new express.Router()

router.get('/most-popular-movies', getMostPopularMovies)
router.get('/in-theaters', getInTheaters)
router.get('/coming-soon', getInTheaters)

module.exports = router;