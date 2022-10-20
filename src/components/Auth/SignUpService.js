import {
  Alert,
  Button,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import Resizer from 'react-image-file-resizer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupserviceprovider } from '../../action/auth';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const SignUpService = () => {
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 400,
    margin: '0 auto',
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [openerror, setOpenError] = useState(false);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5000/user/signupservice';
      const { data } = await axios.post(url, userData);
      console.log(data);
      setMessage(data.message);
      setOpenError(false);
      setOpen(true);
      setTimeout(() => {
        dispatch({ type: 'AUTHSERVICE', data });
        history.push('/freelancerinfo');
        window.location.reload();
      }, 1480);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError(true);
    }
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
            type='email'
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

        <Snackbar open={open} autoHideDuration={10000}>
          <Alert variant='filled' severity='success' sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>

        <Snackbar open={openerror} autoHideDuration={10000}>
          <Alert variant='filled' severity='error' sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Paper>
    </Grid>
  );
};

export default SignUpService;
