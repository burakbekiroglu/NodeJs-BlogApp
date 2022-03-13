const multer=require("multer")
const path=require("path")





const storage=multer.diskStorage({
    
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../../public/upload/images/blog-images"))
    },
    filename:function(req,file,cb){
    
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const resimFileFilter=(req,file,cb)=>{
    if(file.mimetype=='image/jpeg' || file.mimetype=='image/png' || file.mimetype=='image/jpg'){
        cb(null,true)
    }else{
        cb(null,false)
    }
} 

const upload=multer({storage:storage,fileFilter:resimFileFilter})

module.exports=upload