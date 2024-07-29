import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { green } from "../../constants/Color";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import { useNavigate } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { lazy, Suspense, useState } from "react";


const SearchDialogue = lazy(()=>import("../specific/Search"))
const NotificationsDialogue = lazy(()=>import("../specific/Notifications"))
const NewGroupDialogue = lazy(()=>import("../specific/NewGroup"))
function Header() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  const openSearch = () => {
    setIsSearch(!isSearch);
  };
  const openNewGroup = () => {
      setIsNewGroup(!isNewGroup);
  };
  const navigateToGroup = () => {
    navigate("/group");
  };
  const handleLogout = () => {};
  const openNotification = () => {
    setIsNotification(!isNotification);
  };
  return (
    <>
      <Box sx={{ flexFlow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: green,
            height: "100%",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
                color: "#566e57",
              }}
            >
              WhatsThat
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                color: "#566e57",
              }}
            >
              <IconButton size="large" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            ></Box>
            <Box
              sx={{
                color: "#566e57",
                paddingX: "1rem",
              }}
            >
              <IconButton onClick={openSearch}>
                <SearchIcon />
              </IconButton>
              <Tooltip title="New Group" TransitionComponent={Zoom}>
                <IconButton onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Manage Group" TransitionComponent={Zoom}>
                <IconButton onClick={navigateToGroup}>
                  <GroupIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications" TransitionComponent={Zoom}>
                <IconButton onClick={openNotification}>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout" TransitionComponent={Zoom}>
                <IconButton onClick={handleLogout}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && <Suspense fallback={<div>Loading...</div>}>
        <SearchDialogue />
        </Suspense>}
      {isNotification && <Suspense fallback={<div>Loading...</div>}>
        <NotificationsDialogue />
        </Suspense>}
      {isNewGroup && <Suspense fallback={<div>Loading...</div>}>
        <NewGroupDialogue />
        </Suspense>}
    </>
  );
}

export default Header;
