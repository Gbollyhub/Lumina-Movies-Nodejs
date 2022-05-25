//packages import
const express = require('express');

//controllers import
const {getSearchedMovies, getMovieById } = require('../controllers/movies');

//initializing express router
const router = new express.Router()

//movie routes
router.get('/searched-movies', getSearchedMovies)
router.get('/movie', getMovieById)

//router export
module.exports = router;