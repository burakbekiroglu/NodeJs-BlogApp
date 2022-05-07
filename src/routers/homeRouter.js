const router = require('express').Router()
const {HomePage} = require('../controllers/homeController')


router.get('/',HomePage)





module.exports =router