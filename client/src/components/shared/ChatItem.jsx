/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material"
import { Link } from "../styles/StyledComponent"
import { memo } from "react"
import AvatarCard from "./AvatarCard"


const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat =false,
    sameSender,
    isOnline,
    newMassage,
    index=0,
    handleDeleteChatOpen,

}) => {
  return (
    <Link to={`/chat/${_id}`}
    
    onContextMenu={e=>handleDeleteChatOpen(e, _id, groupChat)}>
    <div style={{
        display:"flex",
        gap:"1rem",
        width:"100%",
        alignItems:"center",
        padding: "1rem",
        backgroundColor: sameSender? "rgba(217, 219, 207, 0.8)": "unset",
        color: sameSender? "#515641": "unset",
        position: "relative"
    }}>
        <AvatarCard avatar={avatar} />
        <Stack>  
            <Typography>{name} </Typography>
                {newMassage  && (<Typography>{newMassage.count}  New Message</Typography>) }
           
        </Stack>  
        {
            isOnline && <Box sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
                position:  "absolute",
                top: "50%",
                right: "1rem",
                transform: "translateY(-50%)"
            }} />
        }
    </div>
    </Link>
  )
}

export default memo(ChatItem)