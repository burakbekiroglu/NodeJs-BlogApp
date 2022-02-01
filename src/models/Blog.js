const mongoose = require('mongoose')

const marked = require('marked')
const slugify = require('slugify')
const createDomPurify= require('dompurify')
const {JSDOM}=require('jsdom')
const dompurify=createDomPurify(new JSDOM().window)




const blogSchema =  new mongoose.Schema({


    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type:String,
        required: true,
        trim: true,
    },
    text: {
        type:String,
        required: true,
    }, 
    seoUrl: {
        type:String,
        required: true,
        unique: true,
    },
    sanitizedHTML:{
        type:String,
        required: true,
    },
    imageUrl: {
        type:String,
        default:"default.jpg"
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

},{ collection:"blogs",timestamps:true})


blogSchema.pre("validate",  async function(next){

    //
    if(this.title){
        this.seoUrl=  await slugify(this.title,{lower:true,strict:true})
    }
    if(this.text){

        this.sanitizedHTML= await dompurify.sanitize(marked(this.text))
    }
    next()
})





module.exports = new mongoose.Model("Blog",blogSchema)