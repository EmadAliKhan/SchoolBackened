import { Router } from "express";
import { upload } from "../middlewares/Multer.middleware.js";
import { ForgetPassword, loginUser, TotalNumberOfRegiteration } from "../controllers/CreateAccount.controller.js";

const router = Router()

router.route('/register').post(upload.fields([
    {
        name : "avatar",
        maxCount:1
    }
]))

router.route('/login').post(loginUser)
router.route('/forgetPassword').post(ForgetPassword)
router.route('/getRegistration').post(TotalNumberOfRegiteration)

export default router;