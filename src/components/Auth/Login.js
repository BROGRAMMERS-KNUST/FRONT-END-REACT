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
import { login } from '../../action/auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    height: '70vh',
    width: 400,
    margin: '60px auto',
  };
  const dispatch = useDispatch();
  let history = useHistory();
  const loginData = { email: '', password: '' };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData, history));
  };

  return (
    <Grid>
      <Paper style={paperStyle} elevation={10}>
        <Grid item align='center'>
          <Typography
            variant='h5'
            color='primary'
            sx={{ fontFamily: 'Nunito', fontWeight: '700' }}
          >
            StuLancer
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Email'
            placeholder='Enter email'
            variant='standard'
            required
            fullWidth
            helperText='Enter your email'
            sx={{ marginTop: 4, marginBottom: 2, fontFamily: 'Nunito' }}
            onChange={(e) => (loginData.email = e.target.value)}
          />

          <TextField
            label='Password'
            placeholder='Enter password'
            variant='standard'
            fullWidth
            required
            type='password'
            sx={{ marginBottom: 3 }}
            onChange={(e) => (loginData.password = e.target.value)}
          />

          <Button
            sx={{ marginBottom: 1 }}
            variant='contained'
            fullWidth
            type='submit'
          >
            Sign in
          </Button>
        </form>
        <Typography sx={{ fontFamily: 'Nunito' }} variant='caption'>
          By joining I agree to receive emails from StuLancer.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
