//packages import
const express = require('express');
const cors = require('cors')

//using express framework
const app = express();


//importing movies route
const moviesRoute = require('./routes/movies.js')

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(moviesRoute);


//port configuration
const port = process.env.PORT || 4000;

//running the app on port
app.listen(port, () => {
    console.log('Server running on Port '+ port)
})

module.exports = app;