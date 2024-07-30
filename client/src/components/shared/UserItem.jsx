/* eslint-disable react/prop-types */
import {Add as AddIcon} from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading }) => {
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
            bgcolor:"green",
            color:"white",
            "&:hover":{
                bgcolor: "gray"
            }
        }}
        onClick={()=>handler(_id)} disabled={handlerIsLoading}>
            <AddIcon/>
        </IconButton>
    </Stack>
  </ListItem>;
};

export default memo(UserItem);
