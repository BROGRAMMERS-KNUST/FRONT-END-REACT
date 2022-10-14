import { Box, Typography } from '@mui/material';
import React from 'react';
import LandingPic from '../../images/images_8.png';
import GetStarted from './GetStarted';

const Background1 = () => {
  return (
    <Box
      sx={{
        minHeight: '78vh',
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Typography
        variant='h2'
        fontFamily='Nunito'
        marginTop={20}
        letterSpacing={1.8}
        sx={{ fontSize: 80, marginBottom: -1 }}
      >
        A <span className='highlight'>platform</span>
        <span> </span>
        <br />
        that<span className='highlight'> bridges</span>
        <br /> the <span className='highlight'>gap</span> between
        <br /> student <span className='highlight'>freelancers</span>
        <br /> and the <span className='highlight'>job</span> market
      </Typography>
      <img className='LandingPic' src={LandingPic} alt='3D model' />

      <GetStarted />
    </Box>
  );
};

export default Background1;