import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Resizer from 'react-image-file-resizer';
import React from 'react';
import { updatefreelancerinfo } from '../action/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
const UpdateProfile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);

  const freelancerData = {
    fullName: user.result.fullname,
    bio: user.result.bio,
    portfolioLink: user.result.portfolioLink,
    telephoneNumber: user.result.telephoneNumber,
    whatsappLink: user.result.whatsappLink,
    profilePic: user.result.profilePic,
    specificService: user.result.specificService,
  };

  let freelancerId = null;
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 400,
    margin: '100px auto',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    freelancerId = user.result._id;
    setDisabled(true);
    dispatch(updatefreelancerinfo(freelancerData, history, freelancerId));
    console.log(freelancerData);
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

          <FormControl sx={{ marginRight: 2, minWidth: 360, marginBottom: 2 }}>
            <InputLabel sx={{ marginLeft: -1.9, marginTop: 1.3 }} id='service'>
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
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label='Specific service'
            placeholder='Enter specific service'
            variant='standard'
            required
            defaultValue={user.result.specificService}
            fullWidth
            multiline
            onChange={(e) => {
              freelancerData.specificService = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
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
                    freelancerData.profilePic = uri;
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

export default UpdateProfile;
