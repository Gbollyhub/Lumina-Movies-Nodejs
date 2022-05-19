const axios = require('axios')
require('dotenv').config()


// method to get most popular movies from IMDB_API using axios
exports.getMostPopularMovies = async (req, res) => {
    try {

    const result = await axios.get(`${process.env.IMDB_API_URL}/MostPopularMovies/${process.env.IMDB_API_KEY}`);
     res.status(200).send(result.data);

    } catch (error) {
        res.status(500).send(error)
    }

}

// method to get in theaters movies from IMDB_API using axios

exports.getInTheaters = async (req, res) => {
    try {
    const result = await axios.get(`${process.env.IMDB_API_URL}/InTheaters/${process.env.IMDB_API_KEY}`);
    
     res.status(200).send(result.data);
    } catch (error) {
        res.status(500).send(error)
    }
}

// method to get coming soon movies from IMDB_API using axios

exports.getComingSoon = async (req, res) => {
    try {
    const result = await axios.get(`${process.env.IMDB_API_URL}/ComingSoon/${process.env.IMDB_API_KEY}`);
    
     res.status(200).send(result.data);
    } catch (error) {
        res.status(500).send(error)
    }
}