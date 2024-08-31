import { User } from "../models/user.model.js";
import { ErrorHandler } from "../utils/utility.js";
import { asyncHandler } from "./apiError.js";
import jwt from "jsonwebtoken"
const verifyJWT= asyncHandler(async(req,  res, next)=>{
    const token = req.cookies["whatsThat-token"]
    if(!token){
        return next(new ErrorHandler("Unauthorized request"))
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decodedData._id)
    req.user = user
    next()
})

export {verifyJWT}