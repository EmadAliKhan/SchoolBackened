import { Gallery } from "../models/Gallery.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";

const ImageUpload = asyncHandler(async(req,res)=>{

const imageLocalPath = req.files?.pic[0]?.path
if (!imageLocalPath) {
    throw new ApiError(400, "image is required...")
}

const image = await uploadOnCloudinary(imageLocalPath)
if (!image) {
    throw new ApiError(400, "image field is required...")
}

const Image = Gallery.create({
    image : image
})

    return res.status(201).json(
        new ApiResponse(200, Image, "Image upload successfully...")
    )

})

const getImage = asyncHandler(async(req,res)=>{
    try {
        const imageGet = await Gallery.find({})
        return res.status(201,json(
            new ApiResponse(200, imageGet, "Image get Successfully....")
        ))
    } catch (error) {
        throw new ApiError(404,"notification not found....")
    }
})

const delImage = asyncHandler(async(req,res)=>{
try {
    const {id} = req.params
    const imageDel = await Gallery.findByIdAndUpdate({_id:id})
    return res.status(201,json(
        new ApiResponse(200, imageDel, "Image delete Successfully....")
    ))
} catch (error) {
    throw new ApiError(404,"notification not found....")
}
})

export{
    ImageUpload,
    getImage,
    delImage
}