/* eslint-disable react-refresh/only-export-components */
import { IconButton,  Stack } from "@mui/material"
import AppLayout from "../components/layout/AppLayout"
import { useRef } from "react"
import { AttachFile as AttachFileIcon, Send as SendIcon  } from "@mui/icons-material"
import { InputBox } from "../components/styles/StyledComponent"

const Chat = () => {
  const containerRef = useRef(null)
  return (
    <>
      <Stack ref={containerRef} boxSizing={"border-box"} padding={"1rem"} spacing={"1rem"} bgcolor={"#dddfd173"} height={"90%"} >
      
      </Stack>
      <form style={{
        height:"10%",
      }} >
        <Stack direction={"row"} height={"100%"} alignItems={"center"} position={"relative"}> 
          <IconButton sx={{
            position: "absolute",
            left:"0.5rem",
            rotate: "30deg"
          }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type message here..." />
          <IconButton  type="submit" sx={{
            color:"#878b73",
          }} >
            <SendIcon/>
          </IconButton>
        </Stack>

      </form>


    </>
  )
}

export default AppLayout()(Chat)