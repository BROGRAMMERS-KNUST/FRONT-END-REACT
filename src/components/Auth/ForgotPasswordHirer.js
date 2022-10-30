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
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';
const ForgotPasswordHirer = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [openerror, setOpenError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 400,
    margin: '100px auto',
  };

  const [email, setEmail] = useState('');
  const forgotpasswordData = { email: email };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setDisabled(false);
  };
  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    try {
      const url =
        'https://brogrammers-knust.herokuapp.com/passwordrecovery/forgot-password-hirer';
      const { data } = await axios.post(url, forgotpasswordData);
      console.log(`Message from Front End : ${data.message}`);
      console.log(data.link);
      let templateParams = {
        name: data.result.fullName,
        email: data.result.email,
        message: data.link,
      };
      emailjs
        .send(
          'service_2uo0b8g',
          'template_jbek2bm',
          templateParams,
          'NsLZvQfSLLBDu2zdp'
        )
        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
            setMessage(data.message);
            setOpenError(false);
            setOpen(true);
            setTimeout(() => {
              history.push('/');
            }, 1500);
          },
          function (error) {
            console.log('FAILED...', error);
          }
        );
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
            Hirer Password Recovery
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            type='email'
            label='Email'
            placeholder='Enter email'
            variant='standard'
            required
            fullWidth
            sx={{ marginTop: 4, marginBottom: 2, fontFamily: 'Nunito' }}
            onChange={handleEmailChange}
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
            disabled={disabled}
            type='submit'
          >
            Sumbit
          </Button>
          <Typography sx={{ fontFamily: 'Nunito' }} variant='body2'>
            A recovery link will be sent to the email you have provided
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

export default ForgotPasswordHirer;
