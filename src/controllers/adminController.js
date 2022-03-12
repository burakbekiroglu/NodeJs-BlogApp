const AdminService=require('../services/AdminService')

exports.CreateAdmin= async (req, res) => {

    let admin =req.body
    try {
        const Admin=await AdminService.insert(admin)
        res.send(Admin)
    } catch (error) {
        res.send(error)
    }
}

exports.HardDeleteAdmin= async (req, res) => {

    const id=req.params.id
    try {   
          
      const Admin =  await AdminService.removeBy('_id',id)
      res.send("admin silindi")  
    } catch (error) {
        res.send(error)
    }
}
exports.DeleteAdmin= async (req, res) => {

    const id=req.params.id
    try {           
      const Admin =  await AdminService.update(id,{isActive:false,isDeleted:true})
      res.send("admin silindi")  
    } catch (error) {
        res.send(error)
    }
}

exports.UpdateAdmin= async (req, res) => {

    const id=req.params.id
    try {
        const admin = {
            email:req.body.email,
            password:req.body.password,
            name:req.body.name,
            surName:req.body.surName
        }

    await AdminService.update(id,admin)

        res.send("basarılı")
    } catch (error) {
        res.send("hata")
    }
}


exports.AdminHomePage=async (req, res)=> {

    try{
        res.render("./Admin/Index.ejs",{layout:"./layout/AdminLayout.ejs"})
     }catch (error) {
         res.send("hata olustukee")
     }
}

