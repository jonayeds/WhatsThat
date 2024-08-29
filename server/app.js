import express from "express"
const app = express()


// Routes imports
import userRouter from "./routes/user.routes.js"


// Routs declaration
app.use("/user", userRouter)

app.get("/", (req, res)=>{
    res.send("WhatsThat is running")
})

app.listen(3000, ()=>{
    console.log("server is listening on port  3000")
})