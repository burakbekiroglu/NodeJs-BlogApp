const router = require('express').Router()
const {
    CreateCategory,
    DeleteCategory,
    HardDeleteCategory,
    UpdateCategory}=require('../controllers/categoryController')


    router.post('/',CreateCategory)
    router.put('/delete/:id',DeleteCategory)
    router.put('/update/:id',UpdateCategory)
    router.delete('/hard-delete/:id',HardDeleteCategory)














module.exports=router