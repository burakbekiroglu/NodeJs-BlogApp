const router = require('express').Router()
const Auth= require("../middleware/Auth")
const {
    CreateCategory,
    DeleteCategory,
    HardDeleteCategory,
    UpdateCategory,
    CategoryAddPage,
    CategoryListPage,
    DeletedCategoryListPage,
    RestoreCategory,
    CategoryEditPage

}=require('../controllers/categoryController')


    router.post('/',[Auth],CreateCategory)
    router.put('/delete/:id',[Auth],DeleteCategory)
    router.put('/update/:id',[Auth],UpdateCategory)
    router.delete('/hard-delete/:id',[Auth],HardDeleteCategory)
    router.get('/add',[Auth],CategoryAddPage)
    router.get('/list',[Auth],CategoryListPage)
    router.get('/deleted/list',[Auth],DeletedCategoryListPage)
    router.put('/restore/:id',[Auth],RestoreCategory)

    router.get('/edit/:id',[Auth],CategoryEditPage)












module.exports=router