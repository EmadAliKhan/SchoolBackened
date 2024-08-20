import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
    StudentName : {
        type : String,
        required : true,
    }, 
    FatherName: {
        type : String,
        required : true,
    },
    SchoolName :{
        type : String,
        required : true
    }, 
    StudentClass :{
        type : String,
        required : true,
    },
    AdmissionDate :{
        type : Date,
        required : true,
    },
    StudentGender :{
        type : String,
        required : true,
    }
})
export const Student = mongoose.model("student",StudentSchema)