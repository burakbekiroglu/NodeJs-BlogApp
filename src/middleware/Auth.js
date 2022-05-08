const jwt = require('jsonwebtoken');

const Admin = require('../models/Admin');

 const authentication = async (req,res,next)=>{
    const token=req.cookies.c_a
    try {
        if(token){
            const secretKey=process.env.C_A
           const result=await jwt.verify(token,secretKey)

         const admin=await Admin.findById({_id:result._id})
         if(admin){
            req.Admin=admin
            next()
         }else{     
            res.redirect("/auth/login") 
         }

        }else{
            res.redirect("/auth/login") 
        }
    } catch (error) {
        res.redirect("/auth/login") 
    }
}

module.exports =authentication