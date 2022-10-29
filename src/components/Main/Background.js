import { Box, Typography } from '@mui/material';
import React from 'react';
import LandingPic from '../../images/images_8.png';
import GetStarted from './GetStarted';

const Background = () => {
  const imgStyle = {
    maxHeight: '41.5rem',
    left: '55.5%',
    top: '100%',
  };
  return (
    <Box
      sx={{
        minHeight: '78vh',
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Typography variant='h1' fontFamily='Nunito' marginTop={20}>
        Hire the <span> </span>
        <span className='highlight'>best</span>
        <br /> <span className='highlight'>Freelancer</span> online
      </Typography>

      <Box>
        <img style={imgStyle} src={LandingPic} alt='3D model' />
      </Box>

      <Typography variant='h4' fontFamily='Nunito'>
        Turn your ideas into reality
      </Typography>

      <GetStarted />
    </Box>
  );
};

export default Background;
