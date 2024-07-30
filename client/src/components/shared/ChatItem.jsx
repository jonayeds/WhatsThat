/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material"
import { Link } from "../styles/StyledComponent"
import { memo } from "react"


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
    sx={{
        padding: "0"
    }}
    onContextMenu={e=>handleDeleteChatOpen(e, _id, groupChat)}>
    <div style={{
        display:"flex",
        gap:"1rem",
        alignItems:"center",
        padding: "1rem",
        backgroundColor: sameSender? "black": "unset",
        color: sameSender? "white": "unset",
        position: "relative"
    }}>
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