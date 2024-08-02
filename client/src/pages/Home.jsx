/* eslint-disable react-refresh/only-export-components */
import { Box, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
    return (
        <Box sx={{
            bgcolor: "#dddfd173",
            display:"flex",
            alignItems: "center",
            justifyContent:"center",
            width:"100%",
            height:"100%",
        }}>
            <Typography  variant="h5" color={"#778c74"}> 
            Find a friend to chat
        </Typography>
        </Box>
    );
};

export default AppLayout()(Home);