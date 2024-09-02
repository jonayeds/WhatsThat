import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import { apiError, asyncHandler } from "../middlewares/apiError.js";

import {Chat} from  "../models/chat.model.js"
import { emitEvent } from "../utils/features.js";


const newGroupChat= asyncHandler(async(req, res)=>{
    const {name, members}=req.body
    if(members<2){
        new  apiError("Group chat must have at  least 3 members")
    }
    const allMembers  =  [...members, req.user]

    await Chat.create({
        name,
        groupChat:true,
        creator:  req.user,
        members:allMembers
    })
    emitEvent(req, ALERT, allMembers, `Welcome to ${name} group` )
    emitEvent(req, REFETCH_CHATS ,members )
    return  res.status(201).json({message:"Group chat created"})
})

export {newGroupChat}