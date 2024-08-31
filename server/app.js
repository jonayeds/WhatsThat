import express from "express"
import {connectDB} from "./utils/features.js"
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})

const port = process.env.PORT || 3000

connectDB(process.env.MONGO_URI)


const app = express()

// middlewares
app.use(express.json())



// Routes imports
import userRouter from "./routes/user.routes.js"
import { apiError } from "./middlewares/apiError.js"


// Routs declaration
app.use("/user", userRouter)

app.get("/", (req, res)=>{
    res.send("WhatsThat is running")
})

app.use(apiError)

app.listen(port , ()=>{
    console.log("server is listening on port ", port)
})