const router = require('express').Router()
const {CreateAdmin,HardDeleteAdmin,UpdateAdmin,DeleteAdmin,AdminHomePage} = require('../controllers/adminController')


router.get('/',AdminHomePage)
router.post("/",CreateAdmin)
router.delete("/hard-delete/:id",HardDeleteAdmin)
router.put("/update/:id",UpdateAdmin)
router.put("/delete/id",DeleteAdmin)




module.exports =router