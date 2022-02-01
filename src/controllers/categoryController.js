const CategoryService=require('../services/CategoryService')

exports.CreateCategory = async(req, res)=>{

    let category=req.body
    try { 
        const Category = await CategoryService.insert(category)
        res.send(result)
    } catch (error) {
        res.send("error")
    }
}

exports.DeleteCategory = async(req, res)=>{
    const id  =req.params.id
    try {
        
            const result=await CategoryService.update(id,{isActive:false,isDeleted:true})
            res.send("silme basarılı")
        
        
    } catch (error) {
       res.send("error")
    }
}
exports.HardDeleteCategory = async(req, res)=>{
    const id  =req.params.id
    try {
        
            const result=await CategoryService.removeBy('_id',id)
            res.send("silme basarılı")
        
        
    } catch (error) {
       res.send("error")
    }
}

exports.UpdateCategory = async(req, res)=>{
    const id  =req.params.id
    try {
        let Category=req.body
            const result=await CategoryService.update(id,Category)
            res.send("guncelleme  basarılı")
        
        
    } catch (error) {
       res.send("error")
    }


}

exports.CategoryPage=async(req, res)=>{


}


