import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

import React from 'react';
import { useState } from 'react';
import { otherfreelancerinfo } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { Box } from '@mui/system';
const OtherInfo = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const freelancerData = {
    startingPrice: '',
    brandPic1: '',
    brandPic2: '',
    brandPic3: '',
  };

  let freelancerId = null;
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    height: '47vh',
    width: 400,
    margin: '100px auto',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    freelancerId = user.result._id;
    dispatch(otherfreelancerinfo(freelancerData, history, freelancerId));
    console.log(freelancerId);
    console.log(freelancerData);
  };

  const service = useState('');
  //window.location.reload();
  return (
    <Grid>
      <Paper style={paperStyle} elevation={6}>
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
            label='Starting Price (GHC)'
            placeholder='Enter your Starting Price'
            variant='standard'
            required
            fullWidth
            multiline
            sx={{ marginBottom: 2.5 }}
            onChange={(e) => {
              freelancerData.startingPrice = e.target.value;
            }}
          />

          <Typography
            sx={{ fontFamily: 'Nunito', color: '#666666', marginBottom: 1 }}
          >
            Upload 3 Branding Pics
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => {
                freelancerData.brandPic1 = base64;
              }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => {
                freelancerData.brandPic2 = base64;
              }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => {
                freelancerData.brandPic3 = base64;
              }}
            />
          </Box>
          <Button
            sx={{ marginBottom: 1, fontFamily: 'Nunito', fontWeight: '700' }}
            variant='contained'
            fullWidth
            type='submit'
          >
            Sumbit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default OtherInfo;
