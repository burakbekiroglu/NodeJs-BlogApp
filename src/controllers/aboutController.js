exports.AboutPage=async (req, res) => {
    try{
        
       

        res.render("./Home/About.ejs",{layout:"./layout/HomeLayout.ejs"
        
    })
    }catch (error) {
        res.redirect("/")
    }
}