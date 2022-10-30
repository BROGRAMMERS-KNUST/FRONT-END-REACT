import { Box, Typography } from '@mui/material';
import React from 'react';
import LandingPic from '../../images/images_8.png';
import GetStarted from './GetStarted';
import pattern from '../../images/TribalPattern11.jpg';
const Background1 = () => {
  return (
    <Box
      sx={{
        minHeight: '78vh',
        marginLeft: '2rem',
        marginRight: '2rem',
        backgroundImage: `url(${pattern})`,
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
