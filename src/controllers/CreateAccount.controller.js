
import { User } from "../models/CreateAccount.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";

const registerUser = asyncHandler(async(req,res)=>{

const {TeacherName,email,password,Qualification,JoiningDate} = req.body

if (!TeacherName || !email || !password || !Qualification ||!JoiningDate) {
    throw new ApiError(400, "All fields are Required...!")
}

const ExistedUser = await User.findOne({
    $or:[
        {email},
        {password}
    ]
})

if (ExistedUser) {
    throw new ApiError(400, "user with this email and password already exists...!")
}


const avatarLocalPath = req.files?.avatar[0]?.path
if (!avatarLocalPath) {
    throw new ApiError(400, "avatar is required...")
}

const avatar = await uploadOnCloudinary(avatarLocalPath)
if (!avatar) {
    throw new ApiError(400, "avatar field is required...")
}

const user = User.create({
    TeacherName,
    email,
    password,
    Qualification,
    JoiningDate,
    avatar
})

return res.status(201).json(
    new ApiResponse(200, user, "User Created successfully...")
)
})

const loginUser = asyncHandler(async(req,res)=>{

    const {email,password} = req.body
    if (!email || !password ) {
        throw new ApiError(400, "All fields are Required...!")
    }

const userLogin = User.findOne({
    $or:[{email},{password}]
})
if (!userLogin) {
    throw new ApiError(400, "User doesnot Exist...!")
}

const isPasswordCorrect = await userLogin.isPasswordCorrect(password)
if (!isPasswordCorrect ) {
    throw new ApiError(400, "Invalid email password...!")
}

return res.status(201).json(
    new ApiResponse(200, "User Logged In successfully successfully...")
)

})

const ForgetPassword = asyncHandler(async(req,res)=>{

    const { newPassword} = req.body

    const {id} = req.params()

    const UserFP = await User.findById({_id:id})
    
    UserFP.password = newPassword
    await UserFP.save({validateBeforeSave : false})

    return res.status(201).json(
        new ApiResponse(200, user, "Password changed successfully...")
    )

})

const TotalNumberOfRegiteration = asyncHandler(async(req,res)=>{
try {
    const TotalUsers = User.find({}).select("-password")
    return res.status(201).json(
        new ApiResponse(200, TotalUsers, "Users get successfully...")
    )
} catch (error) {
    throw new ApiError(400, "Failed to get the total Users...")
}
})
export{
    registerUser,
    loginUser,
    ForgetPassword,
    TotalNumberOfRegiteration
}