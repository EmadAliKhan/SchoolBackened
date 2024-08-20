import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Contact } from "../models/Contact.model.js";
import { json } from "express";
import { ApiResponse } from "../utils/ApiResponse.js";
const ContactMessage = asyncHandler(async(req,res)=>{

    const {fullName,email,phoneNumber,message} = req.body

if (!fullName || !email || !phoneNumber || !message) {
    throw new ApiError(400, "All fields are Required...!")
}

const contact = Contact.create({
    fullName,
    email,
    phoneNumber,
    message
})

return res.status(201,json(
    new ApiResponse(200, contact, "Message sent Successfully....")
))
})

const getContactMessage = asyncHandler(async(req,res)=>{
try {
    const getContact = await Contact.find({})
    return res.status(201,json(
        new ApiResponse(200, getContact, "Messages fetch Successfully....")
    ))
} catch (error) {
    throw new ApiError(404,"notification not found....")
}
})

const delContactMessage = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params
        const contactDel = await Contact.findByIdAndDelete({_id:id})
        return res.status(201,json(
            new ApiResponse(200, contactDel, "Messages delete Successfully....")
        ))
    } catch (error) {
        throw new ApiError(404,"Something went wrong while deleting the notification....")
    }
})

export{
    ContactMessage,
    getContactMessage,
    delContactMessage
}
