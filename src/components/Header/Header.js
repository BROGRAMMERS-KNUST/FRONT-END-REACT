import {
  Alert,
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Modal,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginInBoth from '../LogInBoth';
import SignInOut from './SignInOut';
import WorkIcon from '@mui/icons-material/Work';

function Header() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const dispatch = useDispatch();
  const [opensnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState('');

  //FUNCTION FOR LOGGING OUT
  const handleLogout = () => {
    setMessage('Logged Out ');
    setOpenSnack(true);
    dispatch({ type: 'LOGOUT' });
    try {
      setTimeout(() => {
        history.push('/');
        //window.location.reload();
        setUser(null);
        setOpenSnack(false);
      }, 1530);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <AppBar
        sx={{ backdropFilter: 'blur(30px)', backgroundColor: 'white' }}
        elevation={1}
      >
        <Toolbar>
          <Typography
            marginLeft={2}
            color='primary'
            variant='h2'
            fontSize={30}
            sx={{ flexGrow: 1, ':hover': { cursor: 'pointer' } }}
            fontFamily='Nunito'
            fontWeight='700'
            letterSpacing={2}
          >
            <Button
              href='/'
              sx={{ fontSize: '30px', fontFamily: 'Nunito', fontWeight: 700 }}
            >
              STULANCER
            </Button>
          </Typography>

          {/*CHECKS IF USER IS LOGGED IN AND DECIDES TYPE OF HEADER*/}
          {user ? (
            <div>
              <Stack direction='row' spacing={2}>
                <Avatar
                  alt={user.result.fullName.charAt(0)}
                  src={user.result.profilePic}
                  sx={{ marginTop: 0.5, bgcolor: 'orange' }}
                />

                {user.result.serviceType === 'servicer' ? (
                  <div>
                    <Stack direction='row' spacing={2}>
                      <Tabs textColor='secondary'>
                        <Tooltip title='Click to update profile'>
                          <Tab
                            href='/updateprofile'
                            sx={{
                              fontFamily: 'Nunito',
                              fontWeight: '700',
                            }}
                            label={user.result.fullName}
                          />
                        </Tooltip>
                      </Tabs>

                      <Tabs textColor='secondary'>
                        <Tooltip title='Visit your dashboard'>
                          <Tab
                            href='/portfoliopage'
                            sx={{}}
                            label={
                              <WorkIcon fontSize='medium' color='primary' />
                            }
                          />
                        </Tooltip>
                      </Tabs>

                      <Button
                        disableElevation
                        onClick={() => {
                          handleLogout();
                        }}
                        color='primary'
                        sx={{
                          borderRadius: 5,
                          marginRight: 2,
                          fontFamily: 'Nunito',
                          fontWeight: '700',
                        }}
                        size='large'
                        variant='outlined'
                      >
                        Log out
                      </Button>
                    </Stack>
                  </div>
                ) : (
                  <div>
                    <Stack direction='row' spacing={2}>
                      <Tabs textColor='secondary'>
                        <Tooltip title='Click to update profile'>
                          <Tab
                            href='/updateprofilehirer'
                            sx={{
                              fontFamily: 'Nunito',
                              fontWeight: '700',
                            }}
                            label={user.result.fullName}
                          />
                        </Tooltip>
                      </Tabs>

                      <Button
                        disableElevation
                        onClick={() => {
                          handleLogout();
                        }}
                        color='primary'
                        sx={{
                          borderRadius: 5,
                          marginRight: 2,
                          fontFamily: 'Nunito',
                          fontWeight: '700',
                        }}
                        size='large'
                        variant='outlined'
                      >
                        Log out
                      </Button>
                    </Stack>
                  </div>
                )}
              </Stack>
            </div>
          ) : (
            <div>
              {/**Join Button */}
              <Button
                onClick={() => {
                  setOpen(true);
                }}
                disableElevation
                sx={{
                  borderRadius: 5,
                  backgroundColor: '#ffc400',
                  ':hover': { backgroundColor: '#DFAE0C' },
                  marginRight: 2,
                  fontFamily: 'Nunito',
                  fontWeight: '700',
                }}
                size='large'
                variant='contained'
              >
                Join
              </Button>

              <Button
                disableElevation
                onClick={() => {
                  setOpenLogin(true);
                }}
                color='secondary'
                sx={{
                  borderRadius: 5,
                  marginRight: 2,
                  fontFamily: 'Nunito',
                  fontWeight: '700',
                }}
                size='large'
                variant='outlined'
              >
                Login
              </Button>
            </div>
          )}
          <Tabs textColor='secondary'>
            <Tab
              href='/about-us'
              sx={{
                fontFamily: 'Nunito',
                fontWeight: '700',
              }}
              label='About us'
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Divider />
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <SignInOut />
      </Modal>

      <Modal
        open={openLogin}
        onClose={() => {
          setOpenLogin(false);
        }}
      >
        <LoginInBoth />
      </Modal>
      <Snackbar open={opensnack} autoHideDuration={1000}>
        <Alert variant='filled' severity='info' sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Header;
