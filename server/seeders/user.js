import {faker} from "@faker-js/faker"
import { User } from "../models/user.model.js"
const createUser = async(numUsers)=>{
    try {
        const userPromise = []
        for(let  i=0; i<numUsers; i++){
            await User.create({
                name:faker.person.fullName ,
                username:faker.internet.userName,
                password:"123456",
                bio:faker.lorem.sentence(10),
                avatar:{
                    url:faker.image.avatar(),
                    public_id:faker.system.fileName()
                }
            })
            // userPromise.push(tempUser)
        }
        // await Promise.all(userPromise)
        console.log("users  created", numUsers)
        process.exit(1)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


export {createUser}