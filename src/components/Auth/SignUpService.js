import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import React from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../action/auth';
import { useHistory } from 'react-router-dom';

const SignUpService = () => {
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    height: '70vh',
    width: 400,
    margin: '0 auto',
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const userData = {
    fullName: '',
    email: '',
    password: '',
    serviceType: 'servicer',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(userData, history));
    console.log(userData);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid item align='center'>
          <Typography
            variant='h5'
            color='primary'
            sx={{ fontFamily: 'Nunito', fontWeight: '700' }}
          >
            Stulancer
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Full Name'
            placeholder='Enter full name'
            variant='standard'
            required
            fullWidth
            helperText='Enter first name first'
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              userData.fullName = e.target.value;
            }}
          />

          <TextField
            label='Username'
            placeholder='Enter username'
            variant='standard'
            required
            fullWidth
            sx={{ marginBottom: 3 }}
            onChange={(e) => {
              userData.email = e.target.value;
            }}
          />
          <TextField
            label='Password'
            placeholder='Enter password'
            variant='standard'
            fullWidth
            required
            type='password'
            sx={{ marginBottom: 3 }}
            onChange={(e) => {
              userData.password = e.target.value;
            }}
          />
          <FormControlLabel
            control={
              <Checkbox name='checkedB' color='primary' checked required />
            }
            label={
              <Typography
                gutterBottom
                variant='caption'
                sx={{ fontFamily: 'Nunito' }}
              >
                I agree to the Terms of Service, General Terms and Conditions
                and Privacy Policy.
              </Typography>
            }
          />
          <Button
            type='submit'
            sx={{ marginBottom: 1, fontFamily: 'Nunito', fontWeight: '700' }}
            variant='contained'
            fullWidth
          >
            Sign up
          </Button>
        </form>

        <Typography sx={{ fontFamily: 'Nunito' }} variant='caption'>
          By joining I agree to receive emails from StuLancer.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUpService;
