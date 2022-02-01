const router = require('express').Router()
const{LoginPage,LoginPost,LogoutPost}=require("../controllers/authController")




router.get('/login',LoginPage)
router.post('/login',LoginPost)
router.post('/logout',LogoutPost)






module.exports =router