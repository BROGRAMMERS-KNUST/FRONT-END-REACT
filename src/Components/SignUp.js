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

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    fontFamily: "Nunito",
    fontWeight: "700",
    height: "70vh",
    width: 400,
    margin: "0px auto",
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid item align='center'>
          <Typography
            variant='h5'
            color='primary'
            sx={{ fontFamily: "Nunito", fontWeight: "700" }}
          >
            StuLancer
          </Typography>
        </Grid>

        <TextField
          label='Full Name'
          placeholder='Enter full name'
          variant='standard'
          required
          fullWidth
          helperText='Enter first name first'
          sx={{ marginBottom: 2, fontFamily: "Nunito" }}
        />

        <TextField
          label='Username'
          placeholder='Enter username'
          variant='standard'
          required
          fullWidth
          sx={{ marginBottom: 3 }}
        />

        <TextField
          label='Password'
          placeholder='Enter password'
          variant='standard'
          fullWidth
          required
          type='password'
          sx={{ marginBottom: 3 }}
        />

        <FormControlLabel
          control={<Checkbox name='checkedB' color='primary' />}
          label={
            <Typography
              gutterBottom
              variant='caption'
              sx={{ fontFamily: "Nunito" }}
            >
              I agree to the Terms of Service, General Terms and Conditions and
              Privacy Policy.
            </Typography>
          }
        />

        <Button sx={{ marginBottom: 1 }} variant='contained' fullWidth>
          Sign up
        </Button>
        <Typography sx={{ fontFamily: "Nunito" }} variant='caption'>
          By joining I agree to receive emails from StuLancer.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
