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
exports.ContactListPage=async (req, res)=> {

    let contacts =await ContactService.query({isDeleted:false})

    try{
        res.render("./Admin/Contact/ContactList.ejs",{layout:"./layout/DataTableLayout.ejs",contacts:contacts})
     }catch (error) {
         res.redirect("/admin")
     }
}
exports.DeletedContactListPage=async (req, res)=> {

    let contacts =await ContactService.query({isDeleted:true})

    try{
        res.render("./Admin/Contact/DeletedContactList.ejs",{layout:"./layout/DataTableLayout.ejs",contacts:contacts})
     }catch (error) {
         res.redirect("/contact/deleted/list")
     }
}
exports.DeleteContact = async (req, res) => {

    const id = req.params.id

    try {
       
          const Contact = await ContactService.update(id,{isActive:false,isDeleted:true})
          res.redirect("/contact/list")
       
    } catch (error) {
        res.redirect("/admin")
    }
}
exports.HardDeleteContact = async (req, res) => {

    const id = req.params.id

    try {
       
          const Contact = await ContactService.removeBy('_id',id)
          res.redirect("/contact/deleted/list")
       
    } catch (error) {
        res.redirect("/admin")
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


exports.RestoreContact= async (req, res) => {
    const id  =req.params.id
    try {
            const result=await ContactService.update(id,{isDeleted:false})
            res.redirect("/contact/list")
    } catch (error) {
        res.redirect("/contact/deleted/list")
    }


}




