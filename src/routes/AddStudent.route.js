import { Router } from "express";
import { AddStudent, getStudent } from "../controllers/AddStudent.controller.js";

const router = Router()

router.route('/addStudent').post(AddStudent)
router.route('/getStudent').post(getStudent)

export default router