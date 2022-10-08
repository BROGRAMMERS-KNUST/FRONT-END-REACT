import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

import React from 'react';
import { useState } from 'react';
import { freelancerinfo, updatefreelancerinfo } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';
const UpdateProfile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const freelancerData = {
    fullName: '',
    bio: '',
    portfolioLink: '',
    telephoneNumber: '',
    whatsappLink: '',
    profilePic: '',
  };

  let freelancerId = null;
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    height: '72vh',
    width: 400,
    margin: '100px auto',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    freelancerId = user.result._id;
    dispatch(updatefreelancerinfo(freelancerData, history, freelancerId));
    console.log(freelancerData);
  };
  const handleChange = (e) => {
    setService(freelancerData.service);
  };

  const [service, setService] = useState('');

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
              freelancerData.fullName = e.target.value;
            }}
          />
          <TextField
            label='Bio'
            placeholder='Enter your Bio'
            variant='standard'
            required
            fullWidth
            multiline
            defaultValue={user.result.bio}
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              freelancerData.bio = e.target.value;
            }}
          />

          <TextField
            label='Portfolio Link'
            placeholder='Enter Portfolio link'
            variant='standard'
            required
            fullWidth
            multiline
            defaultValue={user.result.portfolioLink}
            onChange={(e) => {
              freelancerData.portfolioLink = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label='Telephone Number'
            type='number'
            placeholder='Enter Telephone number'
            variant='standard'
            required
            fullWidth
            defaultValue={user.result.telephoneNumber}
            multiline
            onChange={(e) => {
              freelancerData.telephoneNumber = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label='WhatsApp Link'
            placeholder='Enter WhatsApp Link'
            variant='standard'
            fullWidth
            multiline
            defaultValue={user.result.whatsappLink}
            onChange={(e) => {
              freelancerData.whatsappLink = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />

          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => {
              freelancerData.profilePic = base64;
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

export default UpdateProfile;
