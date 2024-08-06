/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Add as AddIcon, Delete as DeleteIcon, KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material"
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography, Zoom } from "@mui/material"
import {useNavigate, useSearchParams} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import { memo, Suspense, useEffect, useState } from "react";
import {Link} from "../components/styles/StyledComponent"
import AvatarCard from "../components/shared/AvatarCard";
import {chats, sampleUsers} from "../constants/sampleData"
import CreateIcon from '@mui/icons-material/Create';
import DoneIcon from '@mui/icons-material/Done';
import { ConfirmDeleteDialog } from "../components/dialogs/ConfirmDeleteDialog";
import AddMemberDialog from "../components/dialogs/AddMemberDialog";
import UserItem from "../components/shared/UserItem";
// const ConfirmDeleteDialog = lazy(()=>import("../components/dialogs/ConfirmDeleteDialog"))

const isAddMember = false
const Groups = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const chatId = useSearchParams()[0].get("group")
  const [groupName, setGroupName] = useState(``)
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)
  // const [updatedGroupName, setUpdatedGroupName] = useState("")
  useEffect(()=>{
    if(chatId){
      setGroupName(`Group Name ${chatId}`)
    }
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
  const confirmDeleteHandler= ()=>{
    setConfirmDeleteDialog(true)
  }
  const closeConfirmDeleteHandler = ()=>{
    setConfirmDeleteDialog(false)
  }
  const openAddMember =()=>{

  }

  const deleteHandler = ()=>{

  }
  const removeMemberHandler =()=>{

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
  const BtnGroup  = <Stack 
    direction={{
      xs: "column-reverse",
      sm:"row"
    }}
    spacing={"1rem"}
    p={{
      xs:"0",
      sm:"1rem",
      md:"1rem 4rem"
    }}
  >
    <Button onClick={confirmDeleteHandler} size="large" variant="text" color="error" startIcon={<DeleteIcon/>}>Delete Group</Button>
    <Button size="large" variant="contained" sx={{
      bgcolor:"#9ab896",
      ":hover": {
        bgcolor:"#6b8668"
      }
    }} 
    onClick={openAddMember} startIcon={<AddIcon/>}>Add Member</Button>
  </Stack>
  
  return (
    <Grid container height={"100vh"}>
      <Grid item   sm={4} sx={{
        display:{
          xs:"none",
          sm:"block",
          
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
          groupName && (
            <>
              {groupNameElement}
              <Typography 
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant="body1"
              >
                Members
              </Typography>
              <Stack
                maxWidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm:"1rem",
                  xs:"0",
                  md:"1rem 4rem",
                }}
                spacing={"2rem"}
                bgcolor={"#EFF1E2"}
                height={"50vh"}
                overflow={"auto"}
              >
                {
                  sampleUsers.map((user)=>(
                    <UserItem key={user._id} user={user} isAdded styling={{
                      boxShadow: "0.8rem 0.8rem 1rem rgba(0,0,0,0.1)",
                      padding:"1rem 2rem",
                      borderRadius: "1rem",
                      bgcolor:"white",
                    }} 
                    handler={removeMemberHandler}
                    />
                  ))
                }
              </Stack>
              {
                BtnGroup
              }
            </>
          )
        }
      </Grid>
      {
        isAddMember && <Suspense fallback={<Backdrop open/>}>
          <AddMemberDialog/>
        </Suspense>
      }
      {
        confirmDeleteDialog && <Suspense fallback={<Backdrop open/>}>
          <ConfirmDeleteDialog open={true} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler} />
        </Suspense>
      }
      <Drawer sx={{  
       display:{
         xs:"block",
         sm:"none",
       }
      }} open={isMobileMenuOpen} onClose={()=>setIsMobileMenuOpen(false)} >
        <GroupsList w="50vw" myGroups={chats} chatId={chatId}/>
      </Drawer>
    </Grid>
  )
}

const GroupsList =({w="100%" , myGroups =[], chatId})=>{
 return(
  <Stack sx={{
    backgroundImage: "linear-gradient(#fef3e275, #bec6a0c9)",
  }} width={w} bgcolor={""} height={"100vh"} overflow={"auto"}>
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