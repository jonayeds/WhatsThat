import { User } from "../models/user.model.js"



const register =  async(req, res)=>{
    const {name, username, password} = req.body
    const avatar = {
        public_id: "546346sda",
        url:"564564sda"
    }
    // await User.create({
    //     name:"buta",
    //     username:"butagorila",
    //     password:"123456",
    //     avatar
    // })
    return res.status(201).json({ message: "User created successfully"})
}



const login =  (req, res)=>{
    res.send("hello")
}



export {login, register}