import mongoose, { Schema } from "mongoose";


const GallerySchema = new Schema({
image : {
    type : String,
    required : true
}
})

export const Gallery = mongoose.model("gallery",GallerySchema)