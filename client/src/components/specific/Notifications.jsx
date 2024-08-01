/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from "@mui/material"
import { memo } from "react"
import { sampleNotifications } from "../../constants/sampleData"

const Notifications = () => {
  const friendRequestHandler = (_id, accept)=>{

  }
  return (
    <Dialog open>
      <Stack padding={{xs:"1rem", sm:"2rem"}} maxWidth={"35rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {
          sampleNotifications.length > 0 ?  sampleNotifications.map(n=><NotificationItem notification={n} handler={friendRequestHandler} key={n._id} />):  <Typography textAlign={"center"}>No Notifications</Typography>
        }
      </Stack>
    </Dialog>
  )
}


const  NotificationItem = memo(({notification, handler })=>{
  console.log(notification)
  const {sender, _id} = notification
  return<ListItem >
  <Stack 
  direction={"row"}
  alignItems={"center"}
  spacing={"1rem"}
  width={"100%"} 
  >
      <Avatar  />
      <Typography
      variant="body1"
      sx={{
          flexGrow:1,
          display:"-webkit-flex",
          WebkitLineClamp: 1,
          webKitBoxOrient: "vertical",
          overflow:"hidden",
          textOverflow:"ellipsis",
          width:"100%",
      }}
      >{`${sender.name} sent You a friend request` }</Typography>
      <Stack direction={{
        xs:"column",
        sm:"row"
      }}>
        <Button onClick={()=>handler({_id, accept:true})}>Accept</Button>
        <Button color="error" onClick={()=>handler({_id, accept:false})}>Reject</Button>
      </Stack>
  </Stack>
</ListItem>;

})

export default Notifications