import { Router } from "express";
import { upload } from "../middlewares/Multer.middleware.js";
import { delImage, getImage, ImageUpload } from "../controllers/Gallery.controller.js";

const router = Router()

router.route('/gallery').post(upload.fields([
    {
        name : "pic",
        maxCount: 1
    }
]),ImageUpload)
router.route('/getImage').get(getImage)
router.route('/deleteImage').get(delImage)

export default router