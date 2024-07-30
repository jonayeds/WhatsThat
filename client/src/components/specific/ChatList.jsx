/* eslint-disable react/prop-types */
import { Stack } from "@mui/material"
import ChatItem from "../shared/ChatItem"

const ChatList = ({w="100%", chats=[], chatId, onlineUsers=[], newMassages =[{
    chatId:"",
    count: 0
}], handleDeleteChat}) => {
  return (
    <Stack width={w} direction={"column"}>
        {
            chats.map((data, index)=> {
              const {avatar, _id, name, members, groupChat} = data
              const newMassage = newMassages.find(alert => alert.chatId === _id)
              const isOnline = members.some(member=>onlineUsers.includes(_id))
                return <ChatItem key={data} newMassage={newMassage} isOnline={isOnline} avatar={avatar} name={name} _id={_id} groupChat={groupChat} sameSender={chatId === _id} handleDeleteChatOpen={handleDeleteChat}  index={index}   />
            })
        }
    </Stack>
  )
}

export default ChatList