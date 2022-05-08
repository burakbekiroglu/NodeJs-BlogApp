const router = require('express').Router()
const {CreateContact,DeleteContact,HardDeleteContact,ContactPage,ContactListPage,DeletedContactListPage,RestoreContact}=require('../controllers/contactController')

router.get('/',ContactPage)
router.post('/',CreateContact)
router.get('/list',ContactListPage)
router.get('/deleted/list',DeletedContactListPage)
router.put('/delete/:id',DeleteContact)
router.delete('/hard-delete/:id',HardDeleteContact)
router.put('/restore/:id',RestoreContact)

module.exports=router