/* eslint-disable react/prop-types */
import { Avatar, Stack, Typography } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from "moment"
const Profile = () => {
  return (
    <Stack
        spacing={"2rem"}
        direction={"column"}
        alignItems={"center"}
    >
        <Avatar
         sx={{
            width:200,
            height: 200,
            objectFit:  "contain",
            marginBottom:"1rem",
            border:"5px solid white"   
         }}
         />
        <ProfileCard 
         heading={"bio"} text={"afasf uafsuh a uih"} />
        <ProfileCard 
         heading={"username"} text={"jola"} Icon={<AlternateEmailIcon/>} />
        <ProfileCard 
         heading={"Name"} text={"nu"} Icon={<FaceIcon/>} />
        <ProfileCard 
         heading={"Joined"} text={moment("2024-07-29T19:00:00.000Z").fromNow()} Icon={<CalendarMonthIcon/>} />
    </Stack>
  )
}

const ProfileCard = ({text, heading,  Icon})=>{
    return <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
    >
        {
            Icon && Icon 
        }
        <Stack>
            <Typography variant="body1">{text}</Typography>
            <Typography color={"gray"} variant="caption">{heading}</Typography>
        </Stack>
    </Stack>
}

export default Profile