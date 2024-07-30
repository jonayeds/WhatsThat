/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */

import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { chats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {

  return (props) => {
    const params = useParams()
    const chatId= params.chatId
    const handleDeleteChat  =(e, _id, groupChat)=>{
      e.preventDefault()
      console.log("delete chat ", _id, groupChat)
    }
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"} >
          <Grid 
          item 
          sm={4} 
          md={3}
          sx={{
            display: {xs: "none", sm:"block"}
          }} 
          height={"100%"} 
          >
            <ChatList chats={chats} chatId={chatId} 
            onlineUsers={["1", "2"]} handleDeleteChat={handleDeleteChat} />
          </Grid>
          <Grid
            item xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
             >
            <WrappedComponent {...props} />
          </Grid>
          <Grid 
          item 
          md={4}
          lg={3}
          sx={{
            display: {xs: "none", md:"block"},
            padding: "2rem",
            bgcolor: "#3c423b",
            color:"white"
          }} 
          height={"100%"} 
          >
            Profile
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
