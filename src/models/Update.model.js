import mongoose, { Schema } from "mongoose";

const UpdateSchema = new Schema({
    image : {
        type : String,
         required : true
    },
    text : {
        type : String,
        required : true
    },
    Update_Date : {
        type: Date, 
        required : true
    },
    Name : {
        type : String,
        required : true
    }
}) 

export const Update = mongoose.model("update",UpdateSchema)