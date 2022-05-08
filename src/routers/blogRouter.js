const router = require('express').Router()
const upload=require("../utils/imageUpload.js")

const {
    CreateBlog,
    DeleteBlog,
    UpdateBlog,
    DeactiveBlog,
    HardDeleteBlog,
    BlogAddPage,
    BlogListPage,
    DeletedBlogListPage,
    RestoreBlog,
    BlogEditPage,
    BlogShowPage,
    BlogsPage
}=require('../controllers/blogController')


router.post('/',[upload.single("blogImage")],CreateBlog)
router.put('/delete/:id',DeleteBlog)
router.put('/update/:id',[upload.single("blogImage")],UpdateBlog)
router.put('/deactive/:id',DeactiveBlog)
router.delete('/hard-delete/:id',HardDeleteBlog)


router.get('/blogs',BlogsPage)
router.get('/add',BlogAddPage)
router.get('/list',BlogListPage)
router.get('/deleted/list',DeletedBlogListPage)
router.put('/restore/:id',RestoreBlog)
router.get('/edit/:id',BlogEditPage)
router.get('/:seoUrl',BlogShowPage)
module.exports =router