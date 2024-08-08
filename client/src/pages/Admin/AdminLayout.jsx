/* eslint-disable react/prop-types */
import {
  Close as CloseIcon,
  Groups as GroupsIcon,
  Logout as LogoutIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as LinkComponent, Navigate, useLocation } from "react-router-dom";
// import { Link } from "../../components/styles/StyledComponent"

import { Dashboard as DashboardIcon } from "@mui/icons-material";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: #7c8456;
    transition-duration: 500ms;
  }
`;

const adminTabs = [
  {
    name: "dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/user-management",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/group-management",
    icon: <GroupsIcon />,
  },
  {
    name: "Massages",
    path: "/admin/massages",
    icon: <MessageIcon />,
  },
];
const SideBar = ({ w = "100%" }) => {
  const logoutHandler = () => {};
  const location = useLocation();

  return (
    <Stack
      bgcolor={"#F0F1EA"}
      height={"100%"}
      direction={"column"}
      padding={"3rem"}
      spacing={"3rem"}
      width={w}
    >
      <Typography textTransform={"uppercase"} variant="h4" textAlign={"center"}>
        admin
      </Typography>
      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: "#b6bc98",
                color: "white",
                ":hover": {
                  color: "white",
                },
              }
            }
          >
            <Stack spacing={"1rem"} alignItems={"center"} direction={"row"}>
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}

        <Link onClick={logoutHandler}
        >
          <Stack spacing={"1rem"} alignItems={"center"} direction={"row"}>
            <LogoutIcon/>
            <Typography>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};



const isAdmin = true
const AdminLayout = ({ children }) => {

  const [isMobile, setIsMobile] = useState(false);
  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  const handleClose = () => {
    setIsMobile(false);
  };
  if(!isAdmin){
    return <Navigate to={"/admin"}/>
  }

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          bgcolor: "#F0F1EA",
        }}
      >
        <SideBar />
      </Grid>
      <Grid item xs={12} md={8} lg={9} sx={{}}>
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <SideBar w={"50vw"} />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
