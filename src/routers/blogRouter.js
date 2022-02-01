const router = require('express').Router()
const {
    CreateBlog,
    DeleteBlog,
    UpdateBlog,
    DeactiveBlog,
    HardDeleteBlog}=require('../controllers/blogController')


router.post('/',CreateBlog)
router.put('/delete/:id',DeleteBlog)
router.put('/update/:id',UpdateBlog)
router.put('/deactive/:id',DeactiveBlog)
router.delete('/hard-delete',HardDeleteBlog)


module.exports =router