const router = require('express').Router()
const Auth= require("../middleware/Auth")
const {CreateAdmin,HardDeleteAdmin,UpdateAdmin,DeleteAdmin,AdminHomePage} = require('../controllers/adminController')


router.get('/',[Auth],AdminHomePage)
router.post("/",[Auth],CreateAdmin)
router.delete("/hard-delete/:id",[Auth],HardDeleteAdmin)
router.put("/update/:id",[Auth],UpdateAdmin)
router.put("/delete/id",[Auth],DeleteAdmin)




module.exports =router