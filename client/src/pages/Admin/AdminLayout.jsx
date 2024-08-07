/* eslint-disable react/prop-types */
import { Menu as MenuIcon } from "@mui/icons-material"
import { Box, Grid } from "@mui/material"

const SideBar = ()=>{
    return(
        <div>
            side
        </div>
    )
}


const AdminLayout = ({children}) => {

  return (<Grid container minHeight={"100vh"} >
    <Box sx={{
        display:{
            xs:"block",
            md:"none"
        },
        position:"fixed",
        right:"1rem",
        top:"1rem"
    }}>
        <MenuIcon/>
    </Box>
    <Grid item md={4} lg={3} sx={{
        display:{
            xs:"none",
            md:"block" 
        },
        bgcolor:"#F0F1EA"
    }}>
        <SideBar/>
    </Grid>
    <Grid item xs={12} md={8} lg={9} sx={{
        
    }}
    >
        {
            children
        }
    </Grid>

  </Grid>
  )
}

export default AdminLayout