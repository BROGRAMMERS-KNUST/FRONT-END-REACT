import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

import React from 'react';
import { updatefreelancerinfo } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const FeedbackForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label='Email'
            placeholder='Enter your Email'
            variant='standard'
            required
            fullWidth
            multiline
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label='Feedback'
            placeholder='Enter Telephone Feedback'
            variant='standard'
            required
            fullWidth
            multiline
            sx={{ marginBottom: 2 }}
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
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default FeedbackForm;
