import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SocialFollow from './SocialFollow';
import {
  Alert,
  Button,
  IconButton,
  Modal,
  Paper,
  Snackbar,
  Typography,
  TextField,
} from '@mui/material';
import LoginInBoth from '../LogInBoth';
import { useState } from 'react';
import SignInOut from '../Header/SignInOut';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
export default function Footer() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [message, setMessage] = useState('');
  const [opensnack, setSnackOpen] = useState(false);
  const [openerror, setOpenError] = useState(false);
  const feedbackData = {
    fullName: '',
    email: '',
    feedback: '',
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5000/user/feedback';
      const { data } = await axios.post(url, feedbackData);

      setMessage(data.message);
      setOpenError(false);
      setSnackOpen(true);
      setTimeout(() => {
        setOpenModal(false);
        setSnackOpen(false);
      }, 1500);
      console.log(feedbackData);
      console.log(data);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError(true);
    }
  };
  const paperStyle = {
    padding: 20,
    fontFamily: 'Nunito',
    fontWeight: '700',
    width: 400,
    margin: '100px auto',
  };
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 1, sm: 3 }}
        bgcolor='text.secondary'
        color='white'
      >
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  fontFamily: 'Nunito',
                  fontWeight: '700',
                }}
                borderBottom={1}
              >
                Categories
              </Box>
              <Box>
                <Link
                  sx={{
                    fontFamily: 'Nunito',
                  }}
                  underline='none'
                  href='/'
                  color='inherit'
                >
                  Home
                </Link>
              </Box>
              <Box>
                <Link
                  sx={{
                    fontFamily: 'Nunito',
                  }}
                  underline='none'
                  href='/webdevelopment'
                  color='inherit'
                >
                  Web development
                </Link>
              </Box>
              <Box>
                <Link
                  sx={{
                    fontFamily: 'Nunito',
                  }}
                  underline='none'
                  href='/photography'
                  color='inherit'
                >
                  {' '}
                  Photogragphy
                </Link>
              </Box>
              <Box>
                <Link
                  sx={{
                    fontFamily: 'Nunito',
                  }}
                  underline='none'
                  href='/food-services'
                  color='inherit'
                >
                  Food Services
                </Link>
              </Box>
              <Box>
                <Link
                  sx={{
                    fontFamily: 'Nunito',
                  }}
                  underline='none'
                  href='/writing&translation'
                  color='inherit'
                >
                  {' '}
                  Writing
                </Link>
              </Box>
              <Box>
                <Link
                  sx={{
                    fontFamily: 'Nunito',
                  }}
                  underline='none'
                  href='/graphic-design'
                  color='inherit'
                >
                  Graphic Design
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  fontFamily: 'Nunito',
                  fontWeight: '700',
                }}
                borderBottom={1}
              >
                Account
              </Box>
              <Box>
                <Link
                  onClick={() => {
                    setOpenLogin(true);
                  }}
                  underline='none'
                  color='inherit'
                  sx={{ ':hover': { cursor: 'pointer' }, fontFamily: 'Nunito' }}
                >
                  Login
                </Link>
              </Box>
              <Box>
                <Link
                  onClick={() => {
                    setOpen(true);
                  }}
                  sx={{ ':hover': { cursor: 'pointer' }, fontFamily: 'Nunito' }}
                  underline='none'
                  color='inherit'
                >
                  {' '}
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  fontFamily: 'Nunito',
                  fontWeight: '700',
                }}
                borderBottom={1}
              >
                Support
              </Box>
              <Box>
                <Link
                  sx={{
                    fontFamily: 'Nunito',
                    ':hover': { cursor: 'pointer' },
                  }}
                  underline='none'
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  color='inherit'
                >
                  Contact Support
                </Link>
              </Box>

              <Box>
                <Link
                  sx={{
                    fontFamily: 'Nunito',
                  }}
                  underline='none'
                  href='/about-us'
                  color='inherit'
                >
                  {' '}
                  About Us
                </Link>
              </Box>
            </Grid>
          </Grid>
          <hr />
          <Box
            className='row'
            sx={{
              fontFamily: 'Nunito',
            }}
          >
            <p className='col-sm'>
              <SocialFollow />
              &copy;{new Date().getFullYear()} Brogrammers | All right reserved
              | Terms of Service | Privacy
            </p>
          </Box>
        </Container>

        <Modal
          open={openLogin}
          onClose={() => {
            setOpenLogin(false);
          }}
        >
          <LoginInBoth />
        </Modal>

        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <SignInOut />
        </Modal>
        <Modal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        >
          <Paper style={paperStyle} elevation={6}>
            <IconButton
              onClick={() => {
                setOpenModal(false);
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
                type='email'
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
            <Snackbar open={opensnack} autoHideDuration={10000}>
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
        </Modal>
      </Box>
    </footer>
  );
}
