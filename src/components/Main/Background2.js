import { Box, Typography } from '@mui/material';
import React from 'react';
import LandingPic1 from '../../images/5.png';
import Feedback from './Feedback';
import GetStarted from './GetStarted';

const Background2 = () => {
  return (
    <Box
      sx={{
        minHeight: '78vh',
        marginLeft: 5,
        marginRight: 5,
        marginTop: -35,
        marginBottom: 30,
        backgroundColor: '#f8f2ef',
      }}
    >
      <Typography
        variant='h1'
        fontFamily='Nunito'
        marginTop={20}
        letterSpacing={1.8}
        sx={{ marginBottom: -1 }}
      >
        <span className='highlight4'>Send</span> us <span> </span>
        <br />a <span className='highlight4'> feedback</span>
        <br /> We'll <span className='highlight4'>love </span>to
        <br /> <span className='highlight4'>hear</span> from you
      </Typography>
      <img className='LandingPic2' src={LandingPic1} alt='3D model' />

      <Feedback />
    </Box>
  );
};

export default Background2;
