import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Resizer from 'react-image-file-resizer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../action/auth';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 400,
    margin: '0px auto',
  };

  const userData = {
    fullName: '',
    email: '',
    password: '',
    profilePic: '',
    serviceType: 'hirer',
  };
  const dispatch = useDispatch();
  const history = useHistory();
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
            sx={{ marginBottom: 2, fontFamily: 'Nunito' }}
            onChange={(e) => {
              userData.fullName = e.target.value;
            }}
          />

          <TextField
            type='email'
            label='Email'
            placeholder='Enter email'
            variant='standard'
            required
            fullWidth
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              userData.email = e.target.value;
            }}
          />

          <TextField
            type='password'
            label='Password'
            placeholder='Enter password'
            variant='standard'
            fullWidth
            required
            sx={{ marginBottom: 3 }}
            onChange={(e) => {
              userData.password = e.target.value;
            }}
          />
          <Typography sx={{}} color='#646765' fontFamily='Nunito'>
            Upload profile picture
          </Typography>
          <input
            type='file'
            onChange={(e) => {
              try {
                Resizer.imageFileResizer(
                  e.target.files[0],
                  300,
                  300,
                  'JPEG',
                  50,
                  0,
                  (uri) => {
                    userData.profilePic = uri;
                  },
                  'base64',
                  200,
                  200
                );
              } catch (error) {
                console.log(error);
              }
            }}
          />

          <Button
            sx={{
              marginTop: 2.5,
              marginBottom: 1,
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
            variant='contained'
            fullWidth
            type='submit'
          >
            Sign up
          </Button>
          <Typography sx={{ fontFamily: 'Nunito' }} variant='caption'>
            By joining I agree to receive emails from StuLancer.
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
