import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
    fullName : {
        type : String,
        required : true,
    }, 
    email: {
        type : String,
        required : true,
    },
    phoneNumber :{
        type : Number,
        required : true,
        length: 11
    }, 
    message :{
        type : String,
        required : true,
    }
})
export const Contact = mongoose.model("contacts",ContactSchema)