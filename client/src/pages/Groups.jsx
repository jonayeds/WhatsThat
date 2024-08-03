/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material"
import { Box, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography, Zoom } from "@mui/material"
import {useNavigate, useSearchParams} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import { memo, useEffect, useState } from "react";
import {Link} from "../components/styles/StyledComponent"
import AvatarCard from "../components/shared/AvatarCard";
import {chats} from "../constants/sampleData"
import CreateIcon from '@mui/icons-material/Create';
import DoneIcon from '@mui/icons-material/Done';

const Groups = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const chatId = useSearchParams()[0].get("group")
  const [groupName, setGroupName] = useState(``)
  // const [updatedGroupName, setUpdatedGroupName] = useState("")
  useEffect(()=>{
    setGroupName(`Group Name ${chatId}`)
    // setUpdatedGroupName(`Group Name ${chatId}`)
    return ()=>{
      setGroupName("")
      setIsEdit(false)
    }
  },[chatId])
  const navigate = useNavigate()
  const navigateBack = ()=>{
    navigate('/')
  }
  const handleMobile =()=>{
    setIsMobileMenuOpen(prev=> !prev)
  }
  

console.log(chatId)
  const groupNameElement = <Stack direction={"row"} justifyContent={"center"} paddingTop={"4rem"} spacing={"0.5rem"}  >
    
    {
      isEdit? <>
        <TextField
        defaultValue={groupName}
        onChange={(e)=>setGroupName(e.target.value)}
         variant="standard" />
        <IconButton onClick={()=>setIsEdit(false)}>
          <DoneIcon/>
        </IconButton>
      </>: <>
      <Typography variant="h4">{groupName}</Typography>
      <IconButton onClick={()=>setIsEdit(true)}><CreateIcon/></IconButton>
      </>
    }
  </Stack>

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
      left:"1rem",
      top:"1rem",
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
        <GroupsList myGroups={chats} chatId={chatId} />
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
        {
          groupNameElement
        }
      </Grid>
      <Drawer sx={{  
       display:{
         xs:"block",
         sm:"none"
       }
      }} open={isMobileMenuOpen} onClose={()=>setIsMobileMenuOpen(false)} >
        <GroupsList w="50vw" myGroups={chats} chatId={chatId}/>
      </Drawer>
    </Grid>
  )
}

const GroupsList =({w="100%" , myGroups =[], chatId})=>{
 return(
  <Stack width={w} bgcolor={""} height={"100%"}>
  {
    myGroups.length >0? myGroups.map(group=><GroupListItem  key={group._id} group={group} chatId={chatId} />) : <Typography textAlign={"center"} padding={"1rem"} color={"#778c74"}>No Groups</Typography>
  }
</Stack>
 )
}

const GroupListItem = memo(({group, chatId})=>{
  const {name, avatar, _id} = group
  return (
    <Link to={`?group=${_id}`} onClick={e=>{
      if(chatId === _id) e.preventDefault() 
    }} style={{
      padding:"0.8rem"
  }}>
      <Stack  bgcolor={""} direction={"row"} alignItems={"center"} spacing={""}>
        <AvatarCard avatar={avatar} />
        <Typography >{name}</Typography>
      </Stack>
    </Link>
  )

})


export default Groups