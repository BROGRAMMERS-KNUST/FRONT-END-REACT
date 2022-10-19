import { Box, Typography } from '@mui/material';
import React from 'react';
import LandingPic3 from '../../images/16.png';
import Feedback from './Feedback';
import GetStarted from './GetStarted';
import Requirements from './Requirements';

const Background3 = () => {
  return (
    <Box
      sx={{
        minHeight: '78vh',
        marginLeft: 5,
        marginRight: 5,
        marginTop: -40,
        marginBottom: 50,
      }}
    >
      <Typography
        variant='h1'
        fontFamily='Nunito'
        marginTop={20}
        letterSpacing={1.8}
        sx={{ marginBottom: -1 }}
      >
        <span className='highlight5'>Interested</span> in <span> </span>
        <br />
        becoming a <span className='highlight5'></span>
        <br /> <span className='highlight5'> StuLancer ? </span>
      </Typography>
      <img className='LandingPic1' src={LandingPic3} alt='3D model' />

      <Requirements />
    </Box>
  );
};

export default Background3;
