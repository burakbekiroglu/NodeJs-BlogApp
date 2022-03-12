const Admin =require("../models/Admin")


exports.LoginPost=async (req, res) => {

try {
    
    const admin= await Admin.Login(req.body.email,req.body.password)
    const token= await admin.generateJWT()

    res.cookie("c_a",token,{maxAge:1000*60*60*4,httpOnly: true})
    res.send("basarılı giris")

} catch (error) {
    res.send("hata")
}
}



exports.LogoutPost=async (req, res) => {
    res.cookie("c_a","",1)
    res.send("cikis basarili")
}


exports.LoginPage=async (req, res) => {
    try{
       res.render("./main/Login/Login.ejs",{layout:"./layout/LoginLayout.ejs"})
    }catch (error) {
        res.redirect("/auth/login")
    }
}


