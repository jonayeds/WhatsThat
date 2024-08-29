import mongoose from "mongoose"

const connectDB = async(uri) =>{
    try {
        const connectionInstance = await mongoose.connect(uri, {dbName:"WhatsThat"})
        console.log(`MONGODB connected !! DB HOST ${connectionInstance.connection.host}`)
    } catch (error) {
     console.log("MONGODB connection error", error)   
    }
}

export { connectDB }