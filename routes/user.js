const express = require('express')
const { Register, Login, getFavoritesById, updateFavourites} = require('../controllers/users')
const { Auth } = require('../middleware/auth')

const router = new express.Router()

router.post('/create-account', Register)

router.post('/login', Login)

router.get('/favourites', getFavoritesById)

router.patch('/update-favourites', updateFavourites)

module.exports = router