import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import AdminLayout from "./AdminLayout";
import { AdminPanelSettings as AdminPanelSettingsIcon, Notifications as NotificationsIcon  } from "@mui/icons-material";
import moment from "moment";
import { CurveButton, SearchField } from "../../components/styles/StyledComponent";

const Dashboard = () => {
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
    </AdminLayout>
  );
};

export default Dashboard;
