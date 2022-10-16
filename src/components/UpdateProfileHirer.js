import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Resizer from 'react-image-file-resizer';
import React from 'react';
import { updatehirerinfo } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useState } from 'react';
const UpdateProfileHirer = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);

  const hirerData = {
    fullName: user.result.fullname,
    email: user.result.email,
    profilePic: user.result.profilePic,
  };

  let hirerId = null;
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    height: '50vh',
    width: 400,
    margin: '100px auto',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hirerId = user.result._id;
    setDisabled(true);
    dispatch(updatehirerinfo(hirerData, history, hirerId));
    console.log(hirerData);
  };

  return (
    <Grid>
      <Paper style={paperStyle} elevation={6}>
        <Grid item align='center'>
          <Typography
            variant='h5'
            color='primary'
            sx={{ fontFamily: 'Nunito', fontWeight: '700', marginBottom: 3 }}
          >
            Stulancer
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Full Name'
            placeholder='Enter your fullname'
            variant='standard'
            required
            fullWidth
            multiline
            defaultValue={user.result.fullName}
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              hirerData.fullName = e.target.value;
            }}
          />
          <TextField
            label='Email'
            placeholder='Enter your email'
            variant='standard'
            required
            fullWidth
            multiline
            defaultValue={user.result.email}
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              hirerData.email = e.target.value;
            }}
          />

          <input
            type='file'
            onChange={(e) => {
              try {
                Resizer.imageFileResizer(
                  e.target.files[0],
                  320,
                  250,
                  'JPEG',
                  50,
                  0,
                  (uri) => {
                    hirerData.profilePic = uri;
                  },
                  'base64',
                  200,
                  100
                );
              } catch (error) {
                console.log(error);
              }
            }}
          />
          <Button
            sx={{
              marginTop: 1.7,
              marginBottom: 1,
              fontFamily: 'Nunito',
              fontWeight: '700',
            }}
            variant='contained'
            disabled={disabled}
            fullWidth
            type='submit'
          >
            Update profile
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default UpdateProfileHirer;
