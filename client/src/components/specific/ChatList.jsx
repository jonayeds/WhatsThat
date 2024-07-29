/* eslint-disable react/prop-types */
import { Stack } from "@mui/material"

const ChatList = ({w="100%", chats=[], chatId, onlineUsers=[], newMassages =[{
    chatId:"",
    count: 0
}], handleDeleteChat}) => {
  return (
    <Stack width={w} direction={"column"}>
        {
            chats.map((data)=> {
                return <div key={data}>{data}</div>
            })
        }
    </Stack>
  )
}

export default ChatList