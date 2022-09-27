import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../action/auth";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    fontFamily: "Nunito",
    fontWeight: "700",
    height: "70vh",
    width: 400,
    margin: "0px auto",
  };

  const userData = {
    fullName: "",
    username: "",
    password: "",
    serviceType: "hirer",
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(userData, history));
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid item align="center">
          <Typography
            variant="h5"
            color="primary"
            sx={{ fontFamily: "Nunito", fontWeight: "700" }}
          >
            Stulancer
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            placeholder="Enter full name"
            variant="standard"
            required
            fullWidth
            helperText="Enter first name first"
            sx={{ marginBottom: 2, fontFamily: "Nunito" }}
            onChange={(e) => {
              userData.fullName = e.target.value;
            }}
          />

          <TextField
            label="Username"
            placeholder="Enter username"
            variant="standard"
            required
            fullWidth
            sx={{ marginBottom: 2, fontFamily: "Nunito" }}
            onChange={(e) => (userData.username = e.target.value)}
          />

          <TextField
            label="Username"
            placeholder="Enter username"
            variant="standard"
            required
            fullWidth
            sx={{ marginBottom: 2}}
            onChange={(e) => {
              userData.username = e.target.value;
            }}
          />

          <TextField
            type="password"
            label="Password"
            placeholder="Enter password"
            variant="standard"
            fullWidth
            required
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              userData.password = e.target.value;
            }}
          />

          <FormControlLabel
            required
            control={<Checkbox name="checkedB" color="primary" checked />}
            label={
              <Typography
                gutterBottom
                variant="caption"
                sx={{ fontFamily: "Nunito" }}
              >
                I agree to the Terms of Service, General Terms and Conditions
                and Privacy Policy.
              </Typography>
            }
          />

          <Button
            sx={{ marginBottom: 1 }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Sign up
          </Button>
          <Typography sx={{ fontFamily: "Nunito" }} variant="caption">
            By joining I agree to receive emails from StuLancer.
          </Typography>
        </form>

        {/* <GoogleOAuthProvider clientId="472533385329-mkfm6epeclgukqlf266g29mqcdtk7m67.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              try {
                const cred = credentialResponse;
                dispatch({ type: "AUTH", data: cred });
              } catch (error) {
                console.log(error);
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider> */}
      </Paper>
    </Grid>
  );
};

export default SignUp;
