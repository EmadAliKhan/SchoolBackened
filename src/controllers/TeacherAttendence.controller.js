import { TAttendence } from "../models/TeacherAttendece.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";


const UploadAttendence = asyncHandler(async(req,res)=>{

const {name,id,attendence} = req.body
if (!name || !id || !attendence ) {
    throw new ApiError(400, "All fields are Required...!")
}

const attendece = await TAttendence.create({
    name,
    id,
  attendence  
})

return res.status(201,json(
    new ApiResponse(200, attendece, "Attendence Submit Successfully....")
))

})
const GetAttendence = asyncHandler(async(req,res)=>{
try {
    const {id} = req.params
    const getAttendence = await TAttendence.find({_id:id})
    return res.status(201,json(
        new ApiResponse(200, getAttendence, "Attendece get Successfully....")
    ))
} catch (error) {
    throw new ApiError(404,"Something went wrong while geting the attendence....")
}
})

export {
    UploadAttendence, 
    GetAttendence
}