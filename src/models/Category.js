const mongoose = require('mongoose')



const categorySchema =  new mongoose.Schema({

  name:{
    type: String,
    required: true,
    minLength:3,
  },
  isActive:{
    type:Boolean,
    required:true,
    default:true
},
isDeleted: {
    type:Boolean,
    required:true,
    default:false
}

},{collection:"categories",timestamps:true})



module.exports= new mongoose.model("Category",categorySchema)
