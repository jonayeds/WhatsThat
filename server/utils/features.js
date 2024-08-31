import mongoose from "mongoose"
import jwt from "jsonwebtoken"
const cookieOptions = {
    maxAge:1000* 60*60*24*15,
    sameSite:"none",
    httpOnly:true,
    secure:true
}

const connectDB = async(uri) =>{
    try {
        const connectionInstance = await mongoose.connect(uri, {dbName:"WhatsThat"})
        console.log(`MONGODB connected !! DB HOST ${connectionInstance.connection.host}`)
    } catch (error) {
     console.log("MONGODB connection error", error)   
    }
}

const sendToken = (res, user, code, message)=>{
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

    return res
    .status(code)
    .cookie("whatsThat-token",token, cookieOptions )
    .json(
    {
        success:true,
        message,
        user
    })
}


export { connectDB, sendToken, cookieOptions }