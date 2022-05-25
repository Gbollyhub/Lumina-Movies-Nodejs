//packages import
const express = require('express')

//controler import
const { Register, Login, getFavoritesById, updateFavourites} = require('../controllers/users')

//middleware import
const { Auth } = require('../middleware/auth')

//initializing express router
const router = new express.Router()

//user routes
router.post('/create-account', Register)
router.post('/login', Login)
router.get('/favourites',Auth, getFavoritesById)
router.patch('/update-favourites',Auth, updateFavourites)

//router export
module.exports = router