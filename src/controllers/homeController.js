const BlogService = require("../services/BlogService")
const CategoryService = require("../services/CategoryService")


exports.HomePage=async (req, res) => {
    try{
        
        const categories= await CategoryService.load({isDeleted:false,isActive:true})
        const blogs= await BlogService.queryWithPopAndSort({isDeleted:false,isActive:true},-1)

        res.render("./Home/Home.ejs",{layout:"./layout/HomeLayout.ejs",
        blogs,
        categories   
    })
    }catch (error) {
        res.redirect("/")
    }
}