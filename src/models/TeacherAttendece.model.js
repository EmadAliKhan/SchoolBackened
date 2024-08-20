import mongoose, { Schema } from "mongoose";


const TeacherATSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    id : {
        type: String,
        required : true,
        unique : true
    },
    attendence : {
        type: String,
        required : true
    }
},{timestamps: true})

export const TAttendence = mongoose.model("attendence",TeacherATSchema)