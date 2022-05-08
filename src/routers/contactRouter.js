const router = require('express').Router()
const {CreateContact,DeleteContact,HardDeleteContact,ContactPage}=require('../controllers/contactController')

router.get('/',ContactPage)
router.post('/',CreateContact)
router.delete('/delete/:id',DeleteContact)
router.delete('/hard-delete/:id',HardDeleteContact)


module.exports=router