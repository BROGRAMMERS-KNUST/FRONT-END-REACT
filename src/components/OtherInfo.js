import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Alert,
  Snackbar,
} from '@mui/material';
import Resizer from 'react-image-file-resizer';
import React from 'react';
import { useState } from 'react';
import { otherfreelancerinfo } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/system';
const OtherInfo = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [openerror, setOpenError] = useState(false);
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
    width: 400,
    margin: '100px auto',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    freelancerId = user.result._id;

    try {
      const url = `http://localhost:5000/user/signupservice/${freelancerId}`;
      const { data } = await axios.patch(url, freelancerData);
      setMessage(data.message);
      setOpen(true);
      setTimeout(() => {
        history.push('/portfoliopage');
      }, 1530);
      localStorage.setItem('profile', JSON.stringify(data));
      console.log(freelancerId);
      console.log(freelancerData);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
      setOpenError(true);
    }
  };

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
            <input
              type='file'
              onChange={(e) => {
                try {
                  Resizer.imageFileResizer(
                    e.target.files[0],
                    320,
                    150,
                    'JPEG',
                    52,
                    0,
                    (uri) => {
                      freelancerData.brandPic1 = uri;
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
          </Box>
          <Box sx={{ marginBottom: 2 }}>
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
                      freelancerData.brandPic2 = uri;
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
          </Box>
          <Box sx={{ marginBottom: 2 }}>
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
                      freelancerData.brandPic3 = uri;
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
        <Snackbar open={open} autoHideDuration={1000}>
          <Alert severity='success' sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        <Snackbar open={openerror} autoHideDuration={1000}>
          <Alert severity='error' sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Paper>
    </Grid>
  );
};

export default OtherInfo;
