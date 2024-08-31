import { compare } from "bcrypt"
import { User } from "../models/user.model.js"
import { sendToken } from "../utils/features.js"
import { asyncHandler } from "../middlewares/apiError.js"
import { ErrorHandler } from "../utils/utility.js"



const register =  asyncHandler(async(req, res)=>{
    const {name, username, password,  bio} = req.body
    console.log(name,  username, password, bio)
    const avatar ={
        url:"sfh",
        public_id:"fdsasfa"
    }
    const user = await User.create({
        name,
        bio,
        username,
        password,
        avatar
    })
   sendToken(res,user, 201, "User created")
})

const login = asyncHandler(async(req, res, next)=>{
    const {username, password} = req.body
    const user = await User.findOne({username}).select("+password")
    if(!user){
        return next(new ErrorHandler("Invalid username",404))  

    }
    const isPasswordCorrect  = await compare(password, user.password)
    if(!isPasswordCorrect){
        return next(new ErrorHandler("wrong password",400))
    }
    sendToken(res,  user, 200 , "welcome")

}) 

const getProfile = asyncHandler(async(req, res)=>{
    return res.status(200).json({
        success:true,
        data:req.user
    })
})

export {login, register,getProfile}