import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Resizer from 'react-image-file-resizer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signupserviceprovider } from '../../action/auth';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useState } from 'react';

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
  const [compressedImage, setCompressedImage] = useState('');

  const userData = {
    fullName: '',
    email: '',
    password: '',
    serviceType: 'servicer',
    bio: '',
    portfolioLink: '',
    profilePic: '',
    telephoneNumber: 0,
    whatsappLink: '',
    service: '',
    specificService: '',
    startingPrice: '',
    brandPic1: '',
    brandPic2: '',
    brandPic3: '',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signupserviceprovider(userData, history));
    console.log(compressedImage);
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
            label='Email'
            placeholder='Enter Email'
            variant='standard'
            required
            fullWidth
            sx={{ marginBottom: 2 }}
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
          <Typography sx={{}} color='#646765' fontFamily='Nunito'>
            Upload profile picture
          </Typography>
          <input
            type='file'
            onChange={(e) => {
              try {
                Resizer.imageFileResizer(
                  e.target.files[0],
                  200,
                  200,
                  'JPEG',
                  65,
                  0,
                  (uri) => {
                    userData.profilePic = uri;
                  },
                  'base64',
                  100,
                  100
                );
              } catch (error) {
                console.log(error);
              }
            }}
          />
          <Button
            type='submit'
            sx={{
              marginTop: 2.5,
              marginBottom: 1,
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
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
