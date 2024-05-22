// 1. Descrption get all contacts
// 2. Route get/api/contacts
// 3. access public
const getContacts = (req, res)=> {
    res.status(200).json({message: "Get all contacts"})
}

// 1. Descrption get all contacts
// 2. Route get/api/contacts
// 3. access public
const createContact = async(req, res)=> {
    const {name, email, phone} = res.body
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message: "Create a new contact"})
}

// 1. Descrption get all contacts
// 2. Route get/api/contacts
// 3. access public
const updateContact = async(req, res)=> {
    res.status(201).json({message: "Replace a resource with similar resource"})
}

const getContact =async (req, res)=> {
    res.status(200).json({message: "Update Contact"})
}
// 1. Descrption Delete all contacts
// 2. Route Delete/api/contacts
// 3. access public
const deleteContact = async(req, res)=> {
    res.status(202).json({message: "Delete a contact"})
}
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}
