const router = require('express').Router()
const upload=require("../utils/imageUpload.js")

const {
    CreateBlog,
    DeleteBlog,
    UpdateBlog,
    DeactiveBlog,
    HardDeleteBlog,
    BlogAddPage
}=require('../controllers/blogController')


router.post('/',[upload.single("blogImage")],CreateBlog)
router.put('/delete/:id',DeleteBlog)
router.put('/update/:id',UpdateBlog)
router.put('/deactive/:id',DeactiveBlog)
router.delete('/hard-delete',HardDeleteBlog)
router.get('/add',BlogAddPage)

module.exports =router