import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SocialFollow from './SocialFollow';
import { Modal } from '@mui/material';
import LoginInBoth from '../LogInBoth';
import { useState } from 'react';
import SignInOut from '../Header/SignInOut';
export default function Footer() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
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
                  href='/webby'
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
                  }}
                  underline='none'
                  href='/Help'
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
                  href='/Sales'
                  color='inherit'
                >
                  {' '}
                  How to Sell on Stulancer
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
      </Box>
    </footer>
  );
}
