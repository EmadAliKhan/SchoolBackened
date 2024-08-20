import CookieParser from "cookieparser"
import cors from "cors"
import express, { urlencoded } from "express"
const app = express()

app.use(express.json({ limit: "16kb" }))
app.use(urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

app.use(express.json());

app.use(cors());


// app.use(CookieParser())
//Routes..
import ContactRoute from './routes/Contact.route.js'
import GalleryRoute from './routes/Gallery.route.js'
import UpdateRoute from './routes/Update.route.js'
import UserRoute from './routes/CreateAccount.route.js'
import TeacherAttendenceRoute from './routes/TeacherAttendence.route.js'
import StudentRoute from './routes/AddStudent.route.js'

app.use("/api/v1", ContactRoute)
app.use("/api/v1", GalleryRoute)
app.use("/api/v1", UpdateRoute)
app.use("/api/v1", UserRoute)
app.use("/api/v1", TeacherAttendenceRoute)
app.use("/api/v1", StudentRoute)



// http://localhost:8001/api/v1/Products

export { app }