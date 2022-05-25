//packages import
const axios = require('axios')
require('dotenv').config()


// method to searched movie from IMDB_API using axios
exports.getSearchedMovies = async (req, res) => {
    try {
    const result = await axios.get(`${process.env.IMDB_API_URL}/?s=${req.query.search}&page=1&apikey=${process.env.IMDB_API_KEY}`);
     res.status(200).send(result.data);

    } catch (error) {
        res.status(500).send(error)
    }

}


// method to get movies by id from IMDB_API using axios

exports.getMovieById = async (req, res) => {
    try {
    const result = await axios.get(`${process.env.IMDB_API_URL}//?i=${req.query.id}&apikey=${process.env.IMDB_API_KEY}`);
    
     res.status(200).send(result.data);
    } catch (error) {
        res.status(500).send(error)
    }
}