import { useInputValidation } from "6pp"
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { sampleUsers } from "../../constants/sampleData"
import UserItem from "../shared/UserItem"

const NewGroup = () => {

  const [members, setMembers] = useState(sampleUsers)
  const [selectedMembers, setSelectedMembers] = useState([])
  const groupName = useInputValidation("")
  const selectMemberHandler =(_id)=>{
    if(selectedMembers.includes(_id)){
      setSelectedMembers(selectedMembers.filter(member=> member !== _id))
    }else{
      setSelectedMembers([...selectedMembers, _id])
    }
  }
  console.log(selectedMembers)
  const submitHandler =()=>{

  }
  const closeHandler =()=>{
    
  }
  return (
    <Dialog open>
      <Stack padding={{xs:"1rem", sm:"2rem"}} width={{
        xs:"100%",
        sm:"30rem"
      }}>
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
        <TextField value={groupName.value} onChange={groupName.changeHandler} label="group name" color="success" />
        <Typography variant="body1" padding={"1rem"}>Members</Typography>
       <Stack>
        {
           members.map(user=>(
            <UserItem user={user} key={user._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)}  />
           ))
        }
       </Stack>
       <Stack direction={"row"} justifyContent={"center"} marginTop={"2rem"}>
        <Button variant="text" color="error">Cancel</Button>
        <Button variant="contained" sx={{
          bgcolor: "#8b9169",
          "&:hover":{
            bgcolor:"#676a51"
          }
        }} onClick={submitHandler}>Create</Button>   
       </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup