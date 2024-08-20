import { Student } from "../models/AddStudent.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const AddStudent = asyncHandler(async(req,res)=>{

    const{StudentName,FatherName,SchoolName,StudentClass,AdmissionDate,StudentGender}= req.body

if (!StudentName ||!FatherName ||!SchoolName ||!StudentClass ||!AdmissionDate ||!StudentGender ) {
    throw new ApiError(400, "All fields are Required...!")
}

const student = Student.create({
    StudentName,
    FatherName,
    SchoolName,
    StudentClass,
    AdmissionDate,
    StudentGender
})

return res.status(201,json(
    new ApiResponse(200, student,"Student Add Successfully....")
))
})

const getStudent = asyncHandler(async(req,res)=>{
try {
    const GetStudent = Student.find({})
    return res.status(201,json(
        new ApiResponse(200, GetStudent,"Student Informatio get Successfully....")
    ))  
} catch (error) {
    throw new ApiError(404,"Student Found Successfully....")
}
})

export{
    AddStudent,
    getStudent
}