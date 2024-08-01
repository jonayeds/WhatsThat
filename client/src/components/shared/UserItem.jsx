/* eslint-disable react/prop-types */
import {Add as AddIcon, Remove as RemoveIcon} from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading, isAdded=false }) => {
  const { name, _id, avatar } = user;
  return <ListItem >
    <Stack 
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    width={"100%"} 
    >
        <Avatar />
        <Typography
        variant="body1"
        sx={{
            flexGrow:1,
            display:"-webkit-box",
            WebkitLineClamp: 1,
            webKitBoxOrient: "vertical",
            overflow:"hidden",
            textOverflow:"ellipsis",
        }}
        >{name}</Typography>
        <IconButton
        size="small"
        sx={{
            bgcolor:isAdded? "error.main" : "success.main",
            color:"white",
            "&:hover":{
                bgcolor:isAdded? "#e80202" : "#3C423B"
            }
        }}
        onClick={()=>handler(_id)} disabled={handlerIsLoading}>
            {
                isAdded?  <RemoveIcon/>:<AddIcon/>
            }
            
        </IconButton>
    </Stack>
  </ListItem>;
};

export default memo(UserItem);
