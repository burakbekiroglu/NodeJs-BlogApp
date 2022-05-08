const router = require('express').Router()
const Auth= require("../middleware/Auth")
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


router.post('/',[Auth,upload.single("blogImage")],CreateBlog)
router.put('/delete/:id',[Auth],DeleteBlog)
router.put('/update/:id',[Auth,upload.single("blogImage")],UpdateBlog)
router.put('/deactive/:id',[Auth],DeactiveBlog)
router.delete('/hard-delete/:id',[Auth],HardDeleteBlog)


router.get('/blogs',BlogsPage)
router.get('/add',[Auth],BlogAddPage)
router.get('/list',[Auth],BlogListPage)
router.get('/deleted/list',[Auth],DeletedBlogListPage)
router.put('/restore/:id',[Auth],RestoreBlog)
router.get('/edit/:id',[Auth],BlogEditPage)
router.get('/:seoUrl',BlogShowPage)
module.exports =router