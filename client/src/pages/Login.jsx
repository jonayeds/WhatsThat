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
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);
  return (
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
        }}
      >
        {!isLogin ? (
          <>
            <Typography variant="h5">Sign up</Typography>
            <form
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
                  }}
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
                  <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="your name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                type="password"
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
              />
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                type="password"
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
  );
};

export default Login;
