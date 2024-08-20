import { Router } from "express";
import { ContactMessage, delContactMessage, getContactMessage } from "../controllers/Contact.controller.js";

const router = Router()

router.route('/contact').post(ContactMessage)
router.route('/getContact').get(getContactMessage)
router.route('/deleteContact').post(delContactMessage)

export default router