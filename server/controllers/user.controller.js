import { User } from "../models/user.model.js"
import { sendToken } from "../utils/features.js"



const register =  async(req, res)=>{
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
}



const login =  async(req, res)=>{
    const {username, password} = req.body
    const user = await User.findOne({username}).select("+password")

    const isPasswordCorrect =await compare

}



export {login, register}