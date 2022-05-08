const ContactService=require('../services/ContactService')
exports.CreateContact = async (req, res) => {
    
    let contact= req.body
    try {
        const Contact = await ContactService.insert(contact)

        return res.redirect("/contact")

    } catch (error) {
        return res.redirect("/contact")
    }
}

exports.DeleteContact = async (req, res) => {

    const id = req.params.id

    try {
       
          const Contact = await ContactService.update(id,{isActive:false,isDeleted:true})
            res.send("silindi")
       
    } catch (error) {
        res.send("error")
    }
}
exports.HardDeleteContact = async (req, res) => {

    const id = req.params.id

    try {
       
          const Contact = await ContactService.removeBy('_id',id)
            res.send("silindi")
       
    } catch (error) {
        res.send("error")
    }
}

exports.ContactPage = async (req, res) => {

    try{
        
       

        res.render("./Home/Contact.ejs",{layout:"./layout/HomeLayout.ejs"
        
    })
    }catch (error) {
        res.redirect("/")
    }

}





