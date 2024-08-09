import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import AdminLayout from "./AdminLayout";
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message as MessageIcon, Notifications as NotificationsIcon, Person as PersonIcon  } from "@mui/icons-material";
import moment from "moment";
import { CurveButton, SearchField } from "../../components/styles/StyledComponent";
import { DoughnutChart, LineChart } from "../../components/specific/Chart";

const Dashboard = () => {
  const Widgets  = <Stack direction={{
    xs:"column",
    sm:"row"
  }}
  spacing={"2rem"}
  justifyContent={"space-around"}
  alignItems={"center"}
  margin={"2rem 0"}

  >
    <Widget title={"users"} value={24} Icon={<PersonIcon/>}/>
    <Widget title={"Chats"} value={24} Icon={<GroupIcon/>}/>
    <Widget title={"Messages"} value={24} Icon={<MessageIcon/>}/>
  </Stack>
  const AppBar = (
    <>
      <Paper elevation={3} sx={{
        padding:"2rem",
        margin:"4rem 0",
        borderRadius:"1rem"
      }}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"}>
          <AdminPanelSettingsIcon sx={{
            fontSize:"3rem",
            color:"#a4ab7d"
          }} />
          <SearchField type="text" />
          <CurveButton>Search</CurveButton>
          <Box flexGrow={1} sx={{
            display:{
              xs:"none",
              sm:"block"
            }
          }}/>
          <Typography color={"#00000050"} fontWeight={"700"} sx={{
            display:{
              xs:"none",
              sm:"block"
            }
          }}>
            {
              moment().format("dddd, MMMM do, yyyy")
            }
          <NotificationsIcon/>
          </Typography>
        </Stack>
      </Paper>
    </>
  );
  return (
    <AdminLayout>
      <Container component={"main"}>{AppBar}</Container>
      <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
        <Paper 
        elevation={3}
        sx={{
          padding:"2rem 3.5rem",
          borderRadius:"1rem",
          width:"100%",
          maxWidth:"45rem",
        }}
        >
           <Typography margin={"2rem 0"} variant="h4">Last Messages</Typography>
           <LineChart/>
        </Paper>
        <Paper
        
        elevation={3}
        sx={{
          padding:"1rem",
          borderRadius:'1rem',
          display:"flex",
          justifyContent:"center",
          width:{
            xs:"100%",
            sm:"50%",
          },
          position:"relative",
          maxWidth:"25rem",
          height:"25rem"
        }}
        >
           <DoughnutChart/>
           <Stack position={"absolute"}
           direction={"row"}
           justifyContent={"center"}
           alignItems={"center"}
           spacing={"0.5rem"}
           width={"100%"}
           height={"100%"}

           >
            <GroupIcon/>
            <Typography>Vs</Typography>
            <PersonIcon/>
           </Stack>
        </Paper>
      </Stack>
      <Stack>
        {
          Widgets
        }
      </Stack>
    </AdminLayout>
  );
};

const Widget = ({title, value, Icon})=>{
  return <Paper
  elevation={3}
  sx={{
    padding:"2rem",
    margin:"2rem 0",
    borderRadius:"1rem",
    width:'20rem'
  }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
        <Typography
        sx={{
          color:"#90966c",
          borderRadius:"50%",
          border:"5px solid #90966c",
          width:"5rem",
          height:"5rem",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
        >{value}</Typography>
             <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
                {
                  Icon
                } 
                <Typography>
                  {title}
                </Typography>
             </Stack> 
    </Stack>
  </Paper>
}

export default Dashboard;
