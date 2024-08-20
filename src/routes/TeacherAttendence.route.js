import { Router } from "express";
import { GetAttendence, UploadAttendence } from "../controllers/TeacherAttendence.controller.js";

const router = Router()

router.route('/techerAttendence').post(UploadAttendence)
router.route('/getTeacherAttendence').get(GetAttendence)


export default router