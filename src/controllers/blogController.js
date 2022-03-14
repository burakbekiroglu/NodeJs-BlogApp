
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
        const blog= req.body
        if(req.file){
            blog.imageUrl = req.file.filename 
        } 
        if(req.body.isActive){
            blog.isActive=true
        }else{
            blog.isActive=false
        }

        

        const result = await BlogService.update(id,blog)


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

    let blogs =await BlogService.queryWithPop({isDeleted:false})  
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

