/* eslint-disable react/prop-types */
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material"
import { sampleUsers } from "../../constants/sampleData"
import UserItem from "../shared/UserItem" 
import { useState } from "react"
const AddMemberDialog = ({AddMember, isLoadingAddMember, chatId}) => {
    const addFriendHandler = ()=>{
        
    }
    const addMemberSubmitHandler = ()=>{
        
    }
    const closeHandler = ()=>{
        setMembers([])
        setSelectedMembers([])

    }
    const [members, setMembers] = useState(sampleUsers)
    const [selectedMembers, setSelectedMembers] = useState([])
    const selectMemberHandler =(_id)=>{
      if(selectedMembers.includes(_id)){
        setSelectedMembers(selectedMembers.filter(member=> member !== _id))
      }else{
        setSelectedMembers([...selectedMembers, _id])
      }
    }
  return (
    <Dialog open onClose={closeHandler}>
        <Stack padding={"1rem"} minWidth={"20rem"}>
            <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
            <Stack>
                {
                   members.length>0? members.map((user)=>(
                        <UserItem key={user._id} user={user} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)} />
                    )): <Typography>No Friends</Typography>
                }
            </Stack>
            <Stack direction={"row"} spacing={"1rem"} justifyContent={"center"} marginTop={"1rem"}>
            <Button color="error" variant="text" onClick={closeHandler}>Cancel</Button>
            <Button color="success" disabled={isLoadingAddMember} variant="contained" onClick={addMemberSubmitHandler}>Submit Changes</Button>
            </Stack>
        </Stack>
    </Dialog>
  )
}

export default AddMemberDialog