import React from 'react';
import { useState } from 'react';
import {
  Button,
  Typography,
  Grid,
  Paper,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';

import axios from 'axios';

const ResetPassword = () => {
  const history = useHistory();
  let { id, token } = useParams();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [openerror, setOpenError] = useState(false);
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 400,
    margin: '100px auto',
  };

  const [password, setPassword] = useState('');
  const resetpasswordData = { password: password };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(resetpasswordData);
    try {
      const url = `https://brogrammers-knust.herokuapp.com/passwordrecovery/reset-password/${id}/${token}`;
      const { data } = await axios.post(url, resetpasswordData);
      console.log(data);
      setMessage(data.message);
      setOpenError(false);
      setOpen(true);
      setTimeout(() => {
        history.push('/');
      }, 1500);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError(true);
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle} elevation={6}>
        <Grid item align='center'>
          <Typography
            variant='h6'
            color='primary'
            sx={{ fontFamily: 'Nunito', fontWeight: '700' }}
          >
            StuLancer Password Reset
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            type='password'
            label='Password'
            placeholder='Enter your new password'
            variant='standard'
            required
            fullWidth
            sx={{ marginTop: 4, marginBottom: 2, fontFamily: 'Nunito' }}
            onChange={handlePasswordChange}
          />

          <Button
            sx={{
              marginBottom: 1,
              fontFamily: 'Nunito',
              fontWeight: '700',
              marginTop: 2,
            }}
            variant='contained'
            fullWidth
            type='submit'
          >
            Sumbit
          </Button>
          <Typography sx={{ fontFamily: 'Nunito' }} variant='body2'>
            Reset your password
          </Typography>
        </form>
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

export default ResetPassword;
