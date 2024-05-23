const asyncHandler = require("express-async-handler")
const getContacts = async(req, res)=> {
    res.status(200).json({message: "Get all contact"})
}

const createContact = asyncHandler( async(req, res)=> {
    console.log("The resonse is ", req.body)
    const{name, profession, Company} = req.body
    if(!name || !profession || !Company) {
        res.status(400)
        throw new Error("All fields should be filled")
    }
    res.status(201).json({message: "Create contact"})
})

const getContact = asyncHandler( async(req, res)=> {
    res.status(201).json({message: `Get contact for ${req.params.id}`})
})
const updateContact = asyncHandler(async(req, res)=> {
    console.log("The body is", req.body)
    res.status(201).json({message: `Update all contact ${req.params.id}`})
})
const deleteContact = asyncHandler(async(req, res)=> {
    res.status(201).json({message: `Delete all contact ${req.params.id}`})
})
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}