const router = require('express').Router()
const {CreateAdmin,HardDeleteAdmin,UpdateAdmin,DeleteAdmin} = require('../controllers/adminController')



router.post("/",CreateAdmin)
router.delete("/hard-delete/:id",HardDeleteAdmin)
router.put("/update/:id",UpdateAdmin)
router.put("/delete/id",DeleteAdmin)

module.exports =router