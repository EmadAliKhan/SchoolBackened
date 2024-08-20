import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
const UserSchema = new Schema({
    TeacherName : {
        type : String,
        required:true,
    },
    Qualification : {
        type : String,
        required:true,
    },
    JoiningDate : {
        type: Date, 
        required:true,
    },
    email : {
        type : String,
        required:true,
    },
    password:{
        type: String,
        required : true,
        maxLength: 10
    },
    avatar : {
        type : String, // from cloudinary
        required : true
    }
},{timestamps: true})

UserSchema.pre("save",async function(next){
if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password,10)
    next()

})

//checking the password
UserSchema.methods.isPasswordCorrect = async function(password){
    return bcrypt.compare(password,this.password)
}


export const User = mongoose.model("User",UserSchema)