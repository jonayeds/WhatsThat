/* eslint-disable react-refresh/only-export-components */
import { IconButton,  Stack } from "@mui/material"
import AppLayout from "../components/layout/AppLayout"
import { useRef } from "react"
import { AttachFile as AttachFileIcon, Send as SendIcon  } from "@mui/icons-material"
import { InputBox } from "../components/styles/StyledComponent"
import FileMenu from "../components/dialogs/FileMenu"
import { sampleMassage } from "../constants/sampleData"
import MassageComponent from "../components/shared/MassageComponent"

const user = {
  _id:"1",
  name: "abdul"
}
const Chat = () => {
  const containerRef = useRef(null)
  return (
    <>
      <Stack ref={containerRef} boxSizing={"border-box"} padding={"1rem"} spacing={"1rem"} bgcolor={"#dddfd173"} height={"90%"}>
      {
        sampleMassage.map(massage=> <MassageComponent massage={massage} user={user} key={massage._id}/>)
      }
      </Stack>

      <form style={{
        height:"10%",
      }}>
        <Stack direction={"row"} height={"100%"} alignItems={"center"} position={"relative"}> 
          <IconButton sx={{
            position: "absolute",
            left:"0.5rem",
            rotate: "30deg"
          }}>
            <AttachFileIcon />
          </IconButton>
          <div style={{
            display:"flex",
            width:"100%" ,
            height:"100%",
            alignItems:"center",
          }}>
          <InputBox placeholder="Type message here..." />
          </div>
          <IconButton  type="submit" sx={{
            color:"#878b73",
          }}>
            <SendIcon/>
          </IconButton>
        </Stack>

      </form>
      <FileMenu  />

    </>
  )
}

export default AppLayout()(Chat)