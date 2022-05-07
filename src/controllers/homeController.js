


exports.HomePage=async (req, res) => {
    try{
        res.render("./Home/Home.ejs",{layout:"./layout/HomeLayout.ejs"})
    }catch (error) {
        res.redirect("/")
    }
}