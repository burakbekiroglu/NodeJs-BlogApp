
const BlogService = require("../services/BlogService")
const CategoryService = require("../services/CategoryService")
const fs = require('fs')
exports.CreateBlog= async (req, res) => {
    try {
    const blog =req.body
    if(req.file){
        blog.imageUrl = req.file.filename //
    } 
    
      const result =await BlogService.insert(blog)
      res.redirect("/blog/add")
    } catch (error) {
        res.send("error")
    }
}

exports.DeleteBlog= async (req, res) => {

    const id = req.params.id

try {
    
        const result = await BlogService.update(id,{isActive:false,isDeleted:true})
        res.redirect("/blog/list")
   
} catch (error) {
    res.send("hata")
}
}
exports.HardDeleteBlog= async (req, res) => {

    const id = req.params.id

try {
        
        const result = await BlogService.removeBy('_id',id)     
        res.redirect("/blog/deleted/list")
   
} catch (error) {
    res.send("hata")
}
}

exports.UpdateBlog= async (req, res) => {
    const id = req.params.id

    
    try{
        const blog = await BlogService.findOne(id)
        if(req.file){
            blog.imageUrl = req.file.filename 
        } 
        if(req.body.isActive){
            blog.isActive=true
        }else{
            blog.isActive=false
        }
        blog.title=req.body.title
        blog.description=req.body.description
        blog.text=req.body.text
        blog.categoryId=req.body.categoryId
        

        const result = await blog.save()


        res.redirect("/blog/list")
    }catch (error) {
        res.send(error)
    }
}

exports.DeactiveBlog= async (req, res) => {

    const id = req.params.id

    try {
            const result = await BlogService.update(id,{isActive:false,})
            res.send("silindi")
    } catch (error) {
        res.send("hata")
    }

}

exports.BlogAddPage=async (req, res)=> {

    
    try{
        const categories = await CategoryService.query({isActive:true,isDeleted:false})
        res.render("./Admin/Blog/BlogAdd.ejs",{layout:"./layout/AdminLayout.ejs",categories:categories})
     }catch (error) {
         res.redirect("/admin")
     }
}

exports.BlogListPage=async (req, res)=> {

    let blogs =await BlogService.queryWithPopAndSort({isDeleted:false},-1,1500)  
    try{
        res.render("./Admin/Blog/BlogList.ejs",{layout:"./layout/DataTableLayout.ejs",blogs:blogs})
     }catch (error) {
         res.redirect("/admin")
     }
}

exports.DeletedBlogListPage=async (req, res)=> {

    let blogs =await BlogService.query({isDeleted:true})

    try{
        res.render("./Admin/Blog/DeletedBlogList.ejs",{layout:"./layout/DataTableLayout.ejs",blogs:blogs})
     }catch (error) {
         res.redirect("/admin")
     }
}
exports.RestoreBlog= async (req, res) => {
    const id  =req.params.id
    try {
            const result=await BlogService.update(id,{isDeleted:false})
            res.redirect("/blog/list")
    } catch (error) {
       res.send("error")
    }


}

exports.BlogEditPage=async (req, res)=> {
    const id  =req.params.id
    
    try{
        const categories = await CategoryService.query({isActive:true,isDeleted:false})
        const blog =  await BlogService.find(id)
        res.render("./Admin/Blog/BlogEdit.ejs",{layout:"./layout/AdminLayout.ejs",categories:categories,blog:blog})
     }catch (error) {
         res.redirect("/admin")
     }
}


exports.BlogShowPage=async (req, res)=> {

    const SeoUrl  =req.params.seoUrl
    
    const blog =await BlogService.queryWithPopAndSort({isDeleted:false,isActive:true,seoUrl:SeoUrl},1)  
    const categories= await CategoryService.load({isDeleted:false,isActive:true})
    
    if(blog.length<1) res.redirect("/")
    try{
        res.render("./Home/Blog.ejs",{layout:"./layout/HomeLayout.ejs",blog:blog[0],categories})
     }catch (error) {
         res.redirect("/")
     }
}

exports.BlogsPage=async (req, res) => {
    try{
    let skipNumber=0
    let selectedPage=1

    if(req.query.page){
        skipNumber=(9*parseInt(req.query.page))-9
        selectedPage=req.query.page
    }

    const blogCount=await await BlogService.count()
    const blogs=await BlogService.pagination({isDeleted:false,isActive:true},-1,9,skipNumber)
    const categories= await CategoryService.load({isDeleted:false,isActive:true})
        

        res.render("./Home/Blogs.ejs",{layout:"./layout/HomeLayout.ejs",
        blogs,
        categories,
        pageCount:parseInt(blogCount/9),
        selectedPage: parseInt(selectedPage)   
    })
    }catch (error) {
        res.redirect("/")
    }
}