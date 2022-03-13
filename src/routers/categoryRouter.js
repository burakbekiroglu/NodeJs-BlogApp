const router = require('express').Router()
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


    router.post('/',CreateCategory)
    router.put('/delete/:id',DeleteCategory)
    router.put('/update/:id',UpdateCategory)
    router.delete('/hard-delete/:id',HardDeleteCategory)
    router.get('/add',CategoryAddPage)
    router.get('/list',CategoryListPage)
    router.get('/deleted/list',DeletedCategoryListPage)
    router.put('/restore/:id',RestoreCategory)

    router.get('/edit/:id',CategoryEditPage)












module.exports=router