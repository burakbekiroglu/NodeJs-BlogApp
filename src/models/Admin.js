const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt=require("jsonwebtoken")


const adminSchema= new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
          ] 
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minLength:6
    },
    name:{
        type:String,
        required:true,
        minLength:2
    },
    surName:{
        type:String,
        required:true,
        minLength:2
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    isDeleted: {
        type: Boolean,
        required:true,
        default:false
    }

},{collection:"admins",timestamps:true})

adminSchema.pre("save",async function(next){

    this.password= await bcrypt.hash(this.password,10)
    next()
})

adminSchema.statics.Login =async(email,password)=>{

    const admin = await Admin.findOne({email:email,isActive:true,isDeleted:false})

    if(admin){
        const validatePassword= await bcrypt.compare(password,admin.password)
        if(validatePassword) return admin
        else  throw Error("wrong password")
    }else{
        throw Error("admin not found")
    }
}

adminSchema.methods.generateJWT=async function(){
    const time = process.env.TOKEN_TIME || "4h"
    const secretKey=process.env.C_A
    const token = await jwt.sign({_id:this._id},secretKey,{expiresIn:time})
    return token
}








const Admin = new mongoose.model("Admin",adminSchema)

module.exports = Admin