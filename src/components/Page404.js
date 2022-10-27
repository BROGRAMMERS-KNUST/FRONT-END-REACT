import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import LandingPic4 from '../images/11.png';

const Page404 = () => {
  document.title = 'StuLancer-404 ❗ ';
  return (
    <Box
      sx={{
        minHeight: '10vh',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        marginBottom: 35,
      }}
    >
      <Typography
        variant='h1'
        fontFamily='Nunito'
        fontWeight='bold'
        marginTop={20}
        letterSpacing={1.8}
        sx={{ marginBottom: -1 }}
      >
        <span className='highlight5'>404 Error</span>
        <br />
        Page not<span className='highlight5'></span>
        <br />
        <span className='highlight5'> found </span>
      </Typography>
      <img className='LandingPic3' src={LandingPic4} alt='3D model' />
      <Link href='/'>
        <Typography
          variant='h5'
          fontFamily='Nunito'
          fontWeight='bold'
          letterSpacing={1.8}
          sx={{ marginBottom: -1 }}
        >
          Return back to Home page
        </Typography>
      </Link>
    </Box>
  );
};

export default Page404;
