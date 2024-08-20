import { Router } from "express";
import { upload } from "../middlewares/Multer.middleware.js";
import { delUpdate, getUpdate, UploadUpdate } from "../controllers/Update.controller.js";

const router = Router()

router.route('/update').post(upload.fields([
    {
        name : "image",
        maxCount: 1
    }
]),UploadUpdate)
router.route('/getUpdate').get(getUpdate)
router.route('/deleteUpdate').get(delUpdate)

export default router