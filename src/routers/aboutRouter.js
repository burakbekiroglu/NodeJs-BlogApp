const router = require('express').Router()
const {AboutPage} = require('../controllers/aboutController')


router.get('/',AboutPage)





module.exports =router