import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import { useState } from 'react';
import { freelancerinfo } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const FreelancerInfo = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openerror, setOpenError] = useState(false);
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const freelancerData = {
    bio: '',
    portfolioLink: '',
    telephoneNumber: '',
    whatsappLink: '',
    service: '',
    specificService: '',
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
    setDisabled(true);
    freelancerId = user.result._id;
    try {
      const url = `http://localhost:5000/user/signupservice/${freelancerId}`;
      const { data } = await axios.patch(url, freelancerData);
      setMessage(data.message);
      setOpen(true);
      setTimeout(() => {
        history.push('/otherinfo');
      }, 1600);

      localStorage.setItem('profile', JSON.stringify(data));
      console.log(freelancerId);
      console.log(freelancerData);
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
            variant='h5'
            color='primary'
            sx={{ fontFamily: 'Nunito', fontWeight: '700' }}
          >
            Stulancer
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Bio'
            placeholder='Enter your Bio, 100 characters maximum'
            variant='standard'
            required
            fullWidth
            multiline
            inputProps={{ maxLength: 100 }}
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
            onChange={(e) => {
              freelancerData.whatsappLink = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />

          <FormControl sx={{ marginRight: 2, minWidth: 360, marginBottom: 2 }}>
            <InputLabel sx={{ marginLeft: -1.5 }} id='service'>
              Service
            </InputLabel>
            <Select
              labelId='service'
              variant='standard'
              id='demo-simple-select-autowidth'
              fullWidth
              onChange={(e) => {
                freelancerData.service = e.target.value;
              }}
              label='service'
            >
              <MenuItem value='Photographer'>Photographer</MenuItem>
              <MenuItem value='Web Developer'>Web Developer</MenuItem>
              <MenuItem value='Caterer'>Caterer</MenuItem>
              <MenuItem value='Graphic Designer'>Graphic Designer</MenuItem>
              <MenuItem value='Author'>CV Writer</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label='Specific service'
            placeholder='Enter specific service'
            variant='standard'
            required
            fullWidth
            multiline
            onChange={(e) => {
              freelancerData.specificService = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />

          <Button
            sx={{ marginBottom: 1, fontFamily: 'Nunito', fontWeight: '700' }}
            variant='contained'
            disabled={disabled}
            fullWidth
            type='submit'
          >
            Sumbit
          </Button>
          <Typography sx={{ fontFamily: 'Nunito' }} variant='caption'>
            More services will be added soon !
          </Typography>
        </form>
        <Snackbar open={open} autoHideDuration={1000}>
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

export default FreelancerInfo;
