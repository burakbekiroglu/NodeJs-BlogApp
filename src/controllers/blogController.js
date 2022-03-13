
const BlogService = require("../services/BlogService")
const CategoryService = require("../services/CategoryService")
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
        res.send("silindi")
   
} catch (error) {
    res.send("hata")
}
}
exports.HardDeleteBlog= async (req, res) => {

    const id = req.params.id

try {
    
        const result = await BlogService.removeBy('_id',id)
        res.send("silindi")
   
} catch (error) {
    res.send("hata")
}
}

exports.UpdateBlog= async (req, res) => {
    const id = req.params.id
    const blog=req.body

    try{
        const Blog= await BlogService.update(id,blog)
        res.send("guncelleme basarılı")
    }catch (error) {
        res.send("error ")
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


