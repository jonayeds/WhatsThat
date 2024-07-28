import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { passwordValidator, usernameValidator } from "../utils/validators";
import toast from 'react-hot-toast'
import { useFileHandler } from '6pp'




const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);
  const avatar = useFileHandler("single", 10)

  // SignUp
  const handleSignUp =e=>{
    e.preventDefault()
    const  name = e.target.name.value  
    const  bio = e.target.bio.value
    const  username = e.target.username.value 
    const  password = e.target.password.value
    const isValidPassword = passwordValidator(password)
    const isValidUsername = usernameValidator(username)
    if(!isValidPassword.errorMessage && !isValidUsername.errorMessage){
      toast.success('all ok')
    }else{
      isValidPassword.errorMessage && toast.error(isValidPassword.errorMessage)
      isValidUsername.errorMessage && toast.error(isValidUsername.errorMessage)
      avatar.error && toast.error(avatar.error)
    }
  }


  // Login
  const handleLogin = e=>{
    e.preventDefault()
    const  username = e.target.username.value 
    const  password = e.target.password.value
    console.log( username, password)
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
        {!isLogin ? (
          <>
            <Typography variant="h5">Sign up</Typography>
            <form 
              onSubmit={handleSignUp}
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "cover",
                    color:"#b9c19d",
                    backgroundColor: "#eef1e2"
                  }}
                  src={avatar.preview}
                />
                <IconButton
                sx={{
                    position: 'absolute',
                    bottom:'0',
                    right:'0',
                    color:'white',
                    backgroundColor: 'rgba(0,0,0, 0.5)',
                    ":hover": {
                      bgcolor:"rgba(0,0,0, 0.7)"
                    }
                }}
                component="label"
                >
                  <>
                  <CameraAltIcon/>
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="your name"
                margin="normal"
                variant="outlined"
                name="name"
                color="success"
                
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                name="bio"
                color="success"
              />
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                name="username"
                color="success"
              />
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                type="password"
                name="password"
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
                Sign up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button fullWidths variant="text" onClick={toggleLogin}>
                Login instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              onSubmit={handleLogin}
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                name="username"
                color="success"
              />
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                type="password"
                name="password"
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
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button fullWidths variant="text" onClick={toggleLogin}>
                Sign up instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>   
   </div>
  );
};

export default Login;
