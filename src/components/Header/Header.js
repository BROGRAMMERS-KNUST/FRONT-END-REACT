import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
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
import Login from '../Auth/LoginHirer';
import LoginInBoth from '../LogInBoth';
import SignInOut from './SignInOut';

function Header() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const dispatch = useDispatch();

  //FUNCTION FOR LOGGING OUT
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
    window.location.reload();
  };

  return (
    <Box>
      <AppBar
        color='transparent'
        sx={{ backdropFilter: 'blur(30px)' }}
        elevation={1}
      >
        <Toolbar>
          <Typography
            marginLeft={2}
            color='primary'
            variant='h2'
            fontSize={30}
            sx={{ flexGrow: 1 }}
            fontFamily='Nunito'
            fontWeight='700'
            letterSpacing={2}
            onClick={() => {
              history.push('/');
            }}
          >
            STULANCER
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

                <Tabs textColor='secondary'>
                  <Tooltip title='Click to visit your account page'>
                    <Tab
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
                  Log out
                </Button>
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
    </Box>
  );
}

export default Header;
