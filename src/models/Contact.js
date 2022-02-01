const mongoose = require('mongoose')

const contactSchema=new  mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject: {
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    isDeleted: {
        type:Boolen,
        required:true,
        default:false
    }
},{collection:"contacts",timestamps:true})

module.exports = new mongoose.Model("Contact",contactSchema)