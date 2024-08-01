import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from "@mui/material"
import { sampleUsers } from "../../constants/sampleData"
import UserItem from "../shared/UserItem"

const NewGroup = () => {
  const selectMemberHandler =()=>{

  }
  return (
    <Dialog open>
      <Stack padding={{xs:"1rem", sm:"2rem"}} width={{
        xs:"100%",
        sm:"30rem"
      }}>
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
        <TextField />
        <Typography>Members</Typography>
       <Stack>
        {
           sampleUsers.map(user=>(
            <UserItem user={user} key={user._id} handler={selectMemberHandler}  />
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
        }}>Create</Button>
       </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup