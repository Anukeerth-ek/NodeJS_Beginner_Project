const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");


const getContacts = asyncHandler (async(req, res)=> {
    const contact = await Contact.find()
    res.status(200).json(contact)
})

const createContact = asyncHandler( async(req, res)=> {
    console.log("The resonse is ", req.body)
    const{name, profession, company} = req.body
    if(!name || !profession || !company) {
        res.status(400)
        throw new Error("All fields should be filled")
    }
    const contact = await Contact.create({
        name,
        profession,
        company
    })
    res.status(201).json(contact)
})

const getContact = asyncHandler( async(req, res)=> {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(201).json(contact)
})



const updateContact = asyncHandler(async(req, res)=> {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(201).json(updatedContact)
})

const deleteContact = asyncHandler(async(req, res)=> {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    await Contact.deleteOne()
    res.status(200).json(contact)
})

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}