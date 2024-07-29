import { Grid, Skeleton, Stack } from "@mui/material"

export const LayoutLoader =()=>{
    return(
        <Grid container height={"calc(100vh - 4rem)"} spacing={'1rem'} >
        <Grid 
        item 
        sm={4} 
        md={3}
        sx={{
          display: {xs: "none", sm:"block"}
        }} 
        height={"100%"} 
        >
          <Skeleton variant="rounded" animation="wave" height={"100vh"} />
        </Grid>
        <Grid
          item xs={12}
          sm={8}
          md={5}
          lg={6}
          height={"100vh"}
          sx={{
            overflow: "hidden"
          }}
           >
          <Stack spacing={'10px'}>
          {
            Array.from({length:12}).map((_,index)=> <Skeleton variant="rounded" key={index} height={'5rem'} animation="wave" />)
          }
          </Stack>
        </Grid>
        <Grid 
        item 
        md={4}
        lg={3}
        sx={{
          display: {xs: "none", md:"block"},
          
        }} 
        height={"100%"} 
        >
          <Skeleton animation="wave" variant="rounded" height={'100vh'}  />
        </Grid>
      </Grid>
    )
}