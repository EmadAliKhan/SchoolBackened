import { Update } from "../models/Update.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";


const UploadUpdate = asyncHandler(async(req,res)=>{

const {text,name,Update_Date} = req.body
if (!text || !name ||!Update_Date) {
    throw new ApiError(404,"All fields are required...!")
}

const imageLocalPath = req.files?.image[0]?.path
if (!imageLocalPath) {
    throw new ApiError(400, "image is required...")
}
const image = await uploadOnCloudinary(imageLocalPath)
if (!image) {
    throw new ApiError(400, "image field is required...")
}

const updateUpload = Update.create({
    text,
    name,
    Update_Date,
    image : image
})

return res.status(201).json(
    new ApiResponse(200, updateUpload, "Update upload successfully...")
)


})
const getUpdate = asyncHandler(async(req,res)=>{
try {
    const updateGet = await Update.find({})
    return res.status(201).json(
        new ApiResponse(200, updateGet, "Update get successfully...")
    ) 
} catch (error) {
    throw new ApiError(400,"Something went wrong while getting the update")
}
})
const delUpdate = asyncHandler(async(req,res)=>{
try {
    const {id} = req.params
    const updateDel = await Update.findByIdAndDelete({_id:id})
    return res.status(201).json(
        new ApiResponse(200, updateDel, "Update delete successfully...")
    )
} catch (error) {
    throw new ApiError(400,"Something went wrong while deleting the update")
}
})

export {
    UploadUpdate,
    getUpdate,
    delUpdate
}