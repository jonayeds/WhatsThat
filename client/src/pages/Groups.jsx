/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material"
import { Box, Drawer, Grid, IconButton, Stack, Tooltip, Typography, Zoom } from "@mui/material"
import {useNavigate} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import { memo, useState } from "react";
import {Link} from "../components/styles/StyledComponent"
import AvatarCard from "../components/shared/AvatarCard";
import {chats} from "../constants/sampleData"
const Groups = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const navigateBack = ()=>{
    navigate('/')
  }
  const handleMobile =()=>{
    setIsMobileMenuOpen(prev=> !prev)
  }



  const IconBtn = <>
  <Box sx={{
    display:{
      xs:"block",
      sm:"none",
    },
    position:"absolute",
    right:"1rem",
    top:"1rem",
  }}>
  <IconButton onClick={handleMobile} >
    <MenuIcon/>
  </IconButton>
  </Box>
  <Tooltip title={"Back"} TransitionComponent={Zoom}>
    <IconButton onClick={navigateBack} sx={{
      position:"absolute",
      left:"2rem",
      top:"2rem",
      color: "white",
      bgcolor:"#778c74",
      ":hover":{
        bgcolor:"#3C423B"
      }
    }}>
      <KeyboardBackspaceIcon fontSize="medium" />
    </IconButton>
  </Tooltip>
  </>
  return (
    <Grid container height={"100vh"}>
      <Grid item  sm={4} sx={{
        display:{
          xs:"none",
          sm:"block"
        }
      }}>
        <GroupsList myGroups={chats} />
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "1rem 3rem"
      }}>
        {
          IconBtn
        }
      </Grid>
      <Drawer sx={{
       display:{
         xs:"block",
         sm:"none"
       }
      }} open={isMobileMenuOpen} onClose={()=>setIsMobileMenuOpen(false)} >
        <GroupsList myGroups={chats}/>
      </Drawer>
    </Grid>
  )
}

const GroupsList =({w="100%" , myGroups =[], chatId})=>{
  console.log(myGroups)
 return(
  <Stack bgcolor={""} height={"100%"}>
  {
    myGroups.length >0? myGroups.map(group=><GroupListItem key={group._id} group={group} chatId={chatId} />) : <Typography textAlign={"center"} padding={"1rem"} color={"#778c74"}>No Groups</Typography>
  }
</Stack>
 )
}

const GroupListItem = memo(({group, chatId})=>{
  const {name, avatar, _id} = group
  console.log("hit")
  return (
    <Link to={`?group=${_id}`}>
      <Stack bgcolor={""} direction={"row"} alignItems={"center"} spacing={""}>
        <AvatarCard avatar={avatar} />
        <Typography >{name}</Typography>
      </Stack>
    </Link>
  )

})


export default Groups