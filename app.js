const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors');
const connectDB=require('./src/db/db');
const path = require('path')
const expressLayouts=require('express-ejs-layouts')
const cookieParser=require("cookie-parser")
const methodOverride = require('method-override')



//Routers

const AdminRouter = require("./src/routers/adminRouter")
const AuthRouter = require("./src/routers/authRouter")



dotenv.config({ path: './src/config/config.env' });
connectDB()
const app = express()
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


app.use(expressLayouts)
app.set('view engine','ejs')
app.set("views",path.resolve(__dirname,"./src/views"))







app.get("/",(req, res) => {
    res.send("hiiii")

})
app.use("/admin",AdminRouter)
app.use("/auth",AuthRouter)








app.use((req,res)=>{

    res.redirect("/")
})


const PORT=process.env.PORT || 5000
app.listen(PORT, _=>{
    console.log(colors.bold.yellow(`server runing on ${PORT}`))
})