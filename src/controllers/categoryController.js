const CategoryService=require('../services/CategoryService')

exports.CreateCategory = async(req, res)=>{

   
    let category=req.body
    
    try { 
        const Category = await CategoryService.insert(category)
        
        res.redirect("/category/add")
    } catch (error) {

        res.send("hata")
    }
}

exports.DeleteCategory = async(req, res)=>{
    const id  =req.params.id
    try {
        
            const result=await CategoryService.update(id,{isActive:false,isDeleted:true})
            res.redirect("/category/list")
        
        
    } catch (error) {
       res.send("error")
    }
}
exports.HardDeleteCategory = async(req, res)=>{
    const id  =req.params.id
    try {
        
            const result=await CategoryService.removeBy('_id',id)
            res.redirect("/category/deleted/list")
        
        
    } catch (error) {
       res.send("error")
    }
}

exports.UpdateCategory = async(req, res)=>{
    const id  =req.params.id
    try {     
        const category = await CategoryService.find(id)
        category.name=req.body.name   
        if(req.body.isActive) {
            category.isActive = true
        }else{
            category.isActive = false
        }  
        const result=await CategoryService.update(id,category)
        res.redirect("/category/list")   
    } catch (error) {
       res.send("error")
    }

}

exports.CategoryAddPage=async (req, res)=> {

    try{
        res.render("./Admin/Category/CategoryAdd.ejs",{layout:"./layout/AdminLayout.ejs"})
     }catch (error) {
         res.redirect("/admin")
     }
}

exports.CategoryListPage=async (req, res)=> {

    let categories =await CategoryService.query({isDeleted:false})

    try{
        res.render("./Admin/Category/CategoryList.ejs",{layout:"./layout/DataTableLayout.ejs",categories:categories})
     }catch (error) {
         res.redirect("/admin")
     }
}

exports.DeletedCategoryListPage=async (req, res)=> {

    let categories =await CategoryService.query({isDeleted:true})

    try{
        res.render("./Admin/Category/DeletedCategoryList.ejs",{layout:"./layout/DataTableLayout.ejs",categories:categories})
     }catch (error) {
         res.redirect("/admin")
     }
}


exports.RestoreCategory= async (req, res) => {
    const id  =req.params.id
    try {
            const result=await CategoryService.update(id,{isDeleted:false})
            res.redirect("/category/list")
    } catch (error) {
       res.send("error")
    }


}

exports.CategoryEditPage=async (req, res)=> {
    const id  =req.params.id
    
    try{
        const category =  await CategoryService.find(id)
        res.render("./Admin/Category/CategoryEdit.ejs",{layout:"./layout/AdminLayout.ejs",category:category})
     }catch (error) {
         res.redirect("/admin")
     }
}
