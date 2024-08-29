import mongoose,{Schema} from "mongoose"

const messageSchema = new Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    chat:{
        type: Schema.Types.ObjectId,
        ref:"Chat",
        required:true
    },
    content:{
        type:String,
    },
    attachments:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type: String,
                required:true
            }
        }
    ]

},{timestamps:true})

export const Message = mongoose.model("Message", messageSchema)

