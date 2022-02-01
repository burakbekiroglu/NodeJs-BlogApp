const router = require('express').Router()
const {CreateContact,DeleteContact,HardDeleteContact}=require('../controllers/contactController')


router.post('/',CreateContact)
router.delete('/delete/:id',DeleteContact)
router.delete('/hard-delete/:id',HardDeleteContact)


module.exports=router