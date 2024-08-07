import { useInputValidation } from "6pp";
import {
    Button,
    Container,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import {Navigate} from "react-router-dom"

  const isAdmin = false
const AdminLogin = () => {
    const secretKey = useInputValidation("")
    const submitHandler =(e)=>{
      e.preventDefault()
    }
    if(isAdmin) {
      return <Navigate to={"/admin/dashboard"} />
    }
  return (
    <div
   style={{
    backgroundImage: "linear-gradient(#FEF3E2, #BEC6A0)"
   }}
   >
       <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#d1d7bb",
          color:"white"
        }}
      >
         
          <>
            <Typography variant="h5">Admin Login</Typography>
            <form
              onSubmit={submitHandler}
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="secretKey"
                margin="normal"
                variant="outlined"
                type="password"
                name="secretKey"
                value={secretKey.value}
                onChange={secretKey.changeHandler}
                color="success"
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </form>
          </>
      </Paper>
    </Container>   
   </div>
  )
}

export default AdminLogin