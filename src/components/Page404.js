import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import LandingPic4 from '../images/11.png';

const Page404 = () => {
  return (
    <Box
      sx={{
        minHeight: '20vh',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        marginBottom: 50,
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
        Return<span className='highlight5'></span>
        <br />
        back to<span className='highlight5'></span>
        <br />
        <span className='highlight5'> HomePage </span>
      </Typography>
      <img className='LandingPic3' src={LandingPic4} alt='3D model' />
      <Link>
        <Typography
          variant='h5'
          fontFamily='Nunito'
          fontWeight='bold'
          letterSpacing={1.8}
          sx={{ marginBottom: -1 }}
        >
          Home page
        </Typography>
      </Link>
    </Box>
  );
};

export default Page404;
