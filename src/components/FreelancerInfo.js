import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import { useState } from 'react';
import { freelancerinfo } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const FreelancerInfo = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const freelancerData = {
    bio: '',
    portfolioLink: '',
    telephoneNumber: '',
    whatsappLink: '',
    service: '',
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
    dispatch(freelancerinfo(freelancerData, history, freelancerId));
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
            label='Bio'
            placeholder='Enter your Bio'
            variant='standard'
            required
            fullWidth
            multiline
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

          <Button
            sx={{ marginBottom: 1, fontFamily: 'Nunito', fontWeight: '700' }}
            variant='contained'
            fullWidth
            type='submit'
          >
            Sumbit
          </Button>
          <Typography sx={{ fontFamily: 'Nunito' }} variant='caption'>
            More services will be added soon !
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default FreelancerInfo;
