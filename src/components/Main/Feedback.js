import {
  Button,
  Grid,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { feedback } from '../../action/auth';
const Feedback = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const feedbackData = {
    fullName: '',
    email: '',
    feedback: '',
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(feedback(feedbackData));
    setOpen(false);
    console.log(feedbackData);
  };
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    height: '60vh',
    width: 400,
    margin: '100px auto',
  };
  return (
    <Box>
      <Box sx={{ display: 'flex', marginTop: 2 }}>
        <Button
          sx={{
            marginTop: 0.8,
            borderRadius: 2,
            fontFamily: 'Nunito',
            fontWeight: '700',
            padding: 1.5,
          }}
          size='small'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
          Feedback
        </Button>

        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Paper style={paperStyle} elevation={6}>
            <IconButton
              onClick={() => {
                setOpen(false);
              }}
              sx={{ marginLeft: 41, marginTop: -1.5 }}
            >
              <CloseIcon />
            </IconButton>
            <Grid item align='center'>
              <Typography
                variant='h5'
                color='primary'
                sx={{
                  fontFamily: 'Nunito',
                  fontWeight: '700',
                  marginBottom: 3,
                }}
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
                onChange={(e) => {
                  feedbackData.fullName = e.target.value;
                }}
              />
              <TextField
                label='Email'
                placeholder='Enter your Email'
                variant='standard'
                required
                fullWidth
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  feedbackData.email = e.target.value;
                }}
              />

              <TextField
                label='Feedback'
                placeholder='Enter your Feedback'
                variant='standard'
                required
                fullWidth
                multiline
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  feedbackData.feedback = e.target.value;
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
                Submit
              </Button>
            </form>
          </Paper>
        </Modal>
      </Box>
    </Box>
  );
};

export default Feedback;
