const router = require('express').Router()
const Auth= require("../middleware/Auth")
const {CreateContact,DeleteContact,HardDeleteContact,ContactPage,ContactListPage,DeletedContactListPage,RestoreContact}=require('../controllers/contactController')

router.get('/',ContactPage)
router.post('/',CreateContact)
router.get('/list',[Auth],ContactListPage)
router.get('/deleted/list',[Auth],DeletedContactListPage)
router.put('/delete/:id',[Auth],DeleteContact)
router.delete('/hard-delete/:id',[Auth],HardDeleteContact)
router.put('/restore/:id',[Auth],RestoreContact)

module.exports=router